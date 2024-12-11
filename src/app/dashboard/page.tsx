"use client"
import { Navbar } from '@/components/Navbar'
import { DashboardCards } from './_components/Card'
import { RecentUsers } from './_components/RecentUsers'
import { RecentSales } from './_components/RecentSales'
import { Footer } from '@/components/Footer'
import { UserLineGraph } from './_components/UserLineGraph'
import { SalesBarChart } from './_components/SalesBarChart'

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-base-200 flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 flex flex-col items-center space-y-6 px-4 sm:px-6 lg:px-60"> 
        <h1 className="text-3xl sm:text-4xl lg:text-5xl mt-6 font-bold text-base-content text-center">Dashboard</h1>
        <DashboardCards />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full px-4 md:px-8 lg:px-12">
          <RecentUsers />
          <RecentSales />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full px-4 md:px-8 lg:px-12">
          <UserLineGraph />
          <SalesBarChart />
        </div>
      </main>
      <Footer />  
    </div>
  )
}
