'use client'

import { signIn } from "next-auth/react"
import { useState } from "react"
import { useRouter } from "next/navigation"

export function AuthModal() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <>
      <button 
        className="btn btn-ghost btn-circle"
        onClick={openModal}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="none"
          stroke="currentColor"
          className="h-6 w-6 stroke-current"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" 
          />
        </svg>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-xl">
            <h2 className="text-xl font-bold mb-4">Sign In</h2>
            <div className="space-y-4">
              <button 
                onClick={() => signIn("google", { callbackUrl: "/" })} 
                className="btn btn-outline btn-primary w-full"
              >
                Sign in with Google
              </button>
              <button 
                onClick={() => signIn("github", { callbackUrl: "/" })} 
                className="btn btn-outline btn-secondary w-full"
              >
                Sign in with GitHub
              </button>
            </div>
            <button 
              onClick={closeModal} 
              className="mt-4 btn btn-ghost w-full"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  )
}