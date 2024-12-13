import { Session } from 'next-auth'

interface ProfileSettingsProps {
  session: Session | null
}

export function ProfileSettings({ session }: ProfileSettingsProps) {
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-base-content">Account Settings</h2>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Full Name</span>
          </label>
          <input 
            type="text" 
            placeholder={session?.user?.name || 'Enter your name'} 
            className="input input-bordered w-full" 
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input 
            type="email" 
            placeholder={session?.user?.email || 'Enter your email'} 
            className="input input-bordered w-full" 
            disabled 
          />
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Notifications</span>
            <input type="checkbox" className="toggle toggle-primary" />
          </label>
        </div>
        <div className="card-actions justify-end mt-4">
          <button className="btn btn-primary">Save Changes</button>
        </div>
      </div>
    </div>
  )
}