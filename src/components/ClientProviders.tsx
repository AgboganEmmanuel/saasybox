'use client'

import { ThemeProvider } from '@/context/ThemeContext'
import { SessionProvider } from 'next-auth/react'
import { Session } from 'next-auth'

export default function ClientProviders({ 
  children, 
  session 
}: { 
  children: React.ReactNode, 
  session: Session | null 
}) {
  return (
    <ThemeProvider>
      <SessionProvider session={session}>
        {children}
      </SessionProvider>
    </ThemeProvider>
  )
}