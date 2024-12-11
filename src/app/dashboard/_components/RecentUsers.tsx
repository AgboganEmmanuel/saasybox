import React from 'react'
import { UserIcon } from '@heroicons/react/24/solid'

const recentUsers = [
  { name: 'John Doe', email: 'john@example.com', joinDate: '2 days ago' },
  { name: 'Jane Smith', email: 'jane@example.com', joinDate: '3 days ago' },
  { name: 'Mike Johnson', email: 'mike@example.com', joinDate: '4 days ago' },
  { name: 'Sarah Williams', email: 'sarah@example.com', joinDate: '5 days ago' },
  { name: 'Alex Brown', email: 'alex@example.com', joinDate: '6 days ago' },
  { name: 'Emma Davis', email: 'emma@example.com', joinDate: '7 days ago' },
  { name: 'Chris Wilson', email: 'chris@example.com', joinDate: '8 days ago' },
]

export function RecentUsers() {
  return (
    <div className="card bg-base-100 w-full shadow-xl">
      <div className="card-body">
        <div className="flex justify-between items-center mb-4">
          <h2 className="card-title text-base-content">Recent Users</h2>
          <UserIcon className="h-8 w-8 text-purple-500 bg-purple-100 p-2 rounded-full" />
        </div>
        <div className="space-y-4">
          {recentUsers.map((user, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="avatar placeholder">
                  <div className="bg-base-200 text-base-content rounded-full w-12 h-12">
                    <span className="text-xl">{user.name.charAt(0)}</span>
                  </div>
                </div>
                <div>
                  <div className="font-bold text-base-content">{user.name}</div>
                  <div className="text-sm text-base-content/70">{user.email}</div>
                </div>
              </div>
              <div className="text-sm text-base-content/50">{user.joinDate}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
