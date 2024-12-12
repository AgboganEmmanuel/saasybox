import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import NextAuth from "next-auth"
import { Session } from "next-auth"
import { AdapterUser } from "next-auth/adapters"
import GoogleProvider from "next-auth/providers/google"
import GithubProvider from "next-auth/providers/github"

// Extend the default Session type to include user id
declare module "next-auth" {
  interface Session {
    user: {
      id: string
      name?: string | null
      email?: string | null
      image?: string | null
    }
  }
}

const prisma = new PrismaClient()

// Validate environment variables
const requiredEnvVars = [
  'GOOGLE_CLIENT_ID', 
  'GOOGLE_CLIENT_SECRET', 
  'AUTH_GITHUB_ID', 
  'AUTH_GITHUB_SECRET', 
  'AUTH_SECRET'
]

requiredEnvVars.forEach(varName => {
  if (!process.env[varName]) {
    console.error(`Missing required environment variable: ${varName}`)
    throw new Error(`Missing required environment variable: ${varName}`)
  }
})

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    }),
    GithubProvider({
      clientId: process.env.AUTH_GITHUB_ID!,
      clientSecret: process.env.AUTH_GITHUB_SECRET!,
      authorization: {
        params: {
          scope: "read:user user:email"
        }
      },
      // Add profile callback for more detailed logging
      profile(profile) {
        console.log('GitHub Profile:', {
          id: profile.id,
          name: profile.name,
          email: profile.email,
          login: profile.login
        });
        return {
          id: profile.id.toString(),
          name: profile.name || profile.login,
          email: profile.email,
          image: profile.avatar_url
        };
      }
    }),
  ],
  callbacks: {
    async redirect({ url, baseUrl }: { url: string; baseUrl: string }) {
      console.log('Redirect Callback:', { url, baseUrl });
      try {
        // Always redirect to home page or same origin
        if (url.startsWith("/")) return `${baseUrl}${url}`
        
        const urlObj = new URL(url);
        const baseUrlObj = new URL(baseUrl);
        
        if (urlObj.origin === baseUrlObj.origin) return url;
        
        console.warn('Redirect to different origin attempted:', { 
          attemptedUrl: url, 
          baseUrl 
        });
        
        return baseUrl;
      } catch (error) {
        console.error('Redirect callback error:', error);
        return baseUrl;
      }
    },
    async session({ session, user }: { session: Session; user: AdapterUser }) {
        console.log('Session Callback:', {
          sessionUser: session.user,
          user: {
            id: user.id,
            email: user.email,
            name: user.name
          }
        });
        try {
          if (session.user) {
            session.user.id = user.id
          }
          return session
        } catch (error) {
          console.error('Session callback detailed error:', {
            errorName: error instanceof Error ? error.name : 'Unknown Error',
            errorMessage: error instanceof Error ? error.message : 'No error message',
            errorStack: error instanceof Error ? error.stack : 'No stack trace'
          });
          throw error
        }
      }
  },
  pages: {
    signIn: '/login',
    error: '/login'
  },
  secret: process.env.AUTH_SECRET,
  debug: true  // Enable more verbose logging
}

export const { handlers, auth, signIn, signOut } = NextAuth(authOptions)