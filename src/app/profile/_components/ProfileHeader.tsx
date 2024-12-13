import { Session } from 'next-auth'
import { ProfileAvatar } from './ProfileAvatar'

interface ProfileHeaderProps {
  session: Session | null
}

export function ProfileHeader({ session }: ProfileHeaderProps) {
  const profileImage = session?.user?.image || '/default-avatar.png'

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <ProfileAvatar 
          src={profileImage}
          alt="Profile Picture"
          width={150}
          height={150}
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-base-content">{session?.user?.name || 'User'}</h2>
        <p className="text-base-content/70">{session?.user?.email}</p>
        <div className="card-actions">
          <button className="btn btn-primary btn-sm">Edit Profile</button>
        </div>
      </div>
    </div>
  )
}