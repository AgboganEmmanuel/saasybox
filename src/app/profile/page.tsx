import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { redirect } from 'next/navigation'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ProfileHeader } from './_components/ProfileHeader'
import { ProfileSettings } from './_components/ProfileSettings'

export default async function ProfilePage() {
  const session = await getServerSession(authOptions)
  
  if (!session) {
    redirect('/login')
  }

  return (
    <div className="min-h-screen bg-base-200 flex flex-col">
      <Navbar />
      <main className="flex-grow mt-4 pt-24 flex flex-row items-start space-x-6 px-4 sm:px-6 lg:px-60"> 
        <ProfileHeader session={session} />
        <ProfileSettings session={session} />   
      </main>
      <Footer />  
    </div>
  )
}