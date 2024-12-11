import React from 'react'
import { 
  CurrencyDollarIcon, 
  UserGroupIcon, 
  ChartBarIcon, 
  RocketLaunchIcon 
} from '@heroicons/react/24/solid'

export function DashboardCards() {
  const cardData = [
    {
      title: 'Revenue',
      value: '$45,231',
      description: 'Total revenue this quarter',
      icon: CurrencyDollarIcon,
      iconColor: 'text-green-500 bg-green-100 p-2 rounded-full'
    },
    {
      title: 'Paid Subscriptions',
      value: '1,234',
      description: 'Total active paid subscriptions',
      icon: ChartBarIcon,
      iconColor: 'text-blue-500 bg-blue-100 p-2 rounded-full'
    },
    {
      title: 'Total Users',
      value: '5,678',
      description: 'Registered users',
      icon: UserGroupIcon,
      iconColor: 'text-purple-500 bg-purple-100 p-2 rounded-full'
    },
    {
      title: 'Users This Month',
      value: '456',
      description: 'New users this month',
      icon: RocketLaunchIcon,
      iconColor: 'text-orange-500 bg-orange-100 p-2 rounded-full'
    }
  ]

  return (
    <div className="flex justify-center space-x-4 w-full">
      {cardData.map((card, index) => (
        <div key={index} className="card bg-base-100 w-64 shadow-xl">
          <div className="card-body">
            <div className="flex justify-between items-center">
              <h2 className="card-title text-xl text-base-content">{card.title}</h2>
              <card.icon className={`h-8 w-8 ${card.iconColor}`} />
            </div>
            <p className="text-3xl font-bold text-base-content">{card.value}</p>
            <p className="text-sm text-base-content">{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}