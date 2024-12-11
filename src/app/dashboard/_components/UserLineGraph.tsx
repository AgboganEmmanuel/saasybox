import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { ChartBarIcon } from '@heroicons/react/24/solid'

const userData = [
  { month: 'Jan', users: 120 },
  { month: 'Feb', users: 180 },
  { month: 'Mar', users: 220 },
  { month: 'Apr', users: 280 },
  { month: 'May', users: 350 },
  { month: 'Jun', users: 420 }
]

export function UserLineGraph() {
  return (
    <div className="card bg-base-100 w-full shadow-xl">
      <div className="card-body">
        <div className="flex justify-between items-center mb-4">
          <h2 className="card-title text-base-content">User Growth</h2>
          <ChartBarIcon className="h-8 w-8 text-blue-500 bg-blue-100 p-2 rounded-full" />
        </div>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={userData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="users" 
              stroke="#3B82F6" 
              strokeWidth={2} 
              activeDot={{ r: 8 }} 
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
