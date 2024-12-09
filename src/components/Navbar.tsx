import Link from 'next/link'
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 py-4 animate-fadeInUp">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-gray-900 bg-opacity-70 backdrop-blur-md rounded-full border border-gray-700">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-white">
              SaaSyBox
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="#features" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Features
              </Link>
              <Link href="#pricing" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Pricing
              </Link>
              <Link href="#contact" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </Link>
              <Link href="#contact" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Dashbo
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <Button className="ml-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white transition-transform hover:scale-105 active:scale-95">
              Get Started
            </Button>
          </div>
        </div>
      </nav>
    </div>
  )
}

