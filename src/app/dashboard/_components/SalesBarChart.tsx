import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { CreditCardIcon } from '@heroicons/react/24/solid'

const salesData = [
  { month: 'Jan', sales: 4000 },
  { month: 'Feb', sales: 5500 },
  { month: 'Mar', sales: 6200 },
  { month: 'Apr', sales: 7800 },
  { month: 'May', sales: 9000 },
  { month: 'Jun', sales: 10500 }
]

export function SalesBarChart() {
  return (
    <div className="card bg-base-100 w-full shadow-xl">
      <div className="card-body">
        <div className="flex justify-between items-center mb-4">
          <h2 className="card-title text-base-content">Monthly Sales</h2>
          <CreditCardIcon className="h-8 w-8 text-green-500 bg-green-100 p-2 rounded-full" />
        </div>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={salesData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="sales" fill="#10B981" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
