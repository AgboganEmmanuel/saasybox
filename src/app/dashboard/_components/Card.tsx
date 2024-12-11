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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full px-4 md:px-8 lg:px-12">
      {cardData.map((card, index) => (
        <div key={index} className="card bg-base-100 shadow-xl flex-grow">
          <div className="card-body flex-1">
            <div className="flex justify-between items-center">
              <h2 className="card-title text-base sm:text-lg md:text-xl text-base-content">{card.title}</h2>
              <card.icon className={`h-6 w-6 sm:h-8 sm:w-8 ${card.iconColor}`} />
            </div>
            <p className="text-2xl sm:text-3xl font-bold text-base-content">{card.value}</p>
            <p className="text-xs sm:text-sm text-base-content">{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}