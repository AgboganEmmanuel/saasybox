"use client"
import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext'
import { DaisyUITheme } from '@/context/ThemeContext';
import { AuthModal } from './AuthModal';
import { Avatar } from './Avatar';  
import { useState } from 'react';
import { useSession, signOut } from 'next-auth/react';  

export function Navbar() {
  const { theme, setTheme } = useTheme()
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
  const { data: session } = useSession()  

  const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(event.target.value as DaisyUITheme)
  }

  const handleOpenAuthModal = () => {
    setIsAuthModalOpen(true)
  }

  const handleCloseAuthModal = () => {
    setIsAuthModalOpen(false)
  }

  const handleLogout = () => {
    signOut({ callbackUrl: '/' })
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50 p-2 sm:p-4 md:p-6 lg:p-8 ">
      <div className="navbar bg-base-100 rounded-full shadow-lg">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-base-content"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li>
                <Link href="/dashboard" className="text-base-content">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <Link href="/" className="btn btn-ghost text-xl text-base-content">SaaSyBox</Link>
        </div>
        <div className="navbar-end">
          <select
            className="select select-bordered text-base-content mr-2"
            value={theme}
            onChange={handleThemeChange}
          >
            <option value="light">Light</option>
            <option value="dracula">Dark</option>
            <option value="cupcake">Cupcake</option>
          </select>
          
          {/* Conditionally render login button or avatar dropdown */}
          {!session ? (
            <button 
              onClick={handleOpenAuthModal} 
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-base-content"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          ) : (
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <Avatar 
                  firstName={session.user?.name?.split(' ')[0] || 'User'} 
                  className="w-10 rounded-full" 
                />
              </div>
              <ul 
                tabIndex={0} 
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link href="/profile" className="justify-between text-base-content hover:bg-base-200">
                    Profile
                    <span className="badge badge-primary badge-sm">New</span>
                  </Link>
                </li>
                <li>
                  <Link href="/settings" className="text-base-content hover:bg-base-200">Settings</Link>
                </li>
                <li>
                  <a 
                    onClick={handleLogout} 
                    className="text-error hover:bg-error hover:text-error-content"
                  >
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          )}
          
          <AuthModal 
            isOpen={isAuthModalOpen} 
            onClose={handleCloseAuthModal} 
          />
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-base-content"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}
