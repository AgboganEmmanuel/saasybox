import React from 'react'
import { CreditCardIcon } from '@heroicons/react/24/solid'

const recentSales = [
  { customer: 'John Doe', amount: '$99.99', date: '2 days ago' },
  { customer: 'Jane Smith', amount: '$149.99', date: '3 days ago' },
  { customer: 'Mike Johnson', amount: '$79.99', date: '4 days ago' },
  { customer: 'Sarah Williams', amount: '$199.99', date: '5 days ago' }
]

export function RecentSales() {
  return (
    <div className="card bg-base-100 w-full shadow-xl">
      <div className="card-body">
        <div className="flex justify-between items-center mb-4">
          <h2 className="card-title text-base-content">Recent Sales</h2>
          <CreditCardIcon className="h-8 w-8 text-green-500 bg-green-100 p-2 rounded-full" />
        </div>
        <div className="space-y-4">
          {recentSales.map((sale, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="avatar placeholder">
                  <div className="bg-base-200 text-base-content rounded-full w-12 h-12">
                    <span className="text-xl">{sale.customer.charAt(0)}</span>
                  </div>
                </div>
                <div>
                  <div className="font-bold text-base-content">{sale.customer}</div>
                  <div className="text-sm text-base-content/70">Purchase</div>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <div className="font-bold text-base-content">{sale.amount}</div>
                <div className="text-sm text-base-content/50">{sale.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
