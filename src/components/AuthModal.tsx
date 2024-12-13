"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

export function AuthModal({ isOpen, onClose }: { 
  isOpen: boolean, 
  onClose: () => void 
}) {
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = async (provider: string) => {
    setIsLoading(true);
    try {
      await signIn(provider, { 
        callbackUrl: "/" 
      });
    } catch (error) {
      console.error(`${provider} Sign In Error:`, error);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal modal-open">
      <div className="modal-box bg-base-100 text-base-content">
        <button 
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" 
          onClick={onClose}
        >
          ✕
        </button>
        
        <h2 className="text-xl font-bold mb-4">Sign In to SaaSyBox</h2>
        
        <div className="space-y-4">
          <button 
            onClick={() => handleSignIn("google")}
            disabled={isLoading}
            className="btn btn-outline btn-primary w-full"
          >
            {isLoading ? (
              <span className="loading loading-spinner"></span>
            ) : (
              "Sign in with Google"
            )}
          </button>
          
          <button 
            onClick={() => handleSignIn("github")}
            disabled={isLoading}
            className="btn btn-outline btn-neutral w-full"
          >
            {isLoading ? (
              <span className="loading loading-spinner"></span>
            ) : (
              "Sign in with GitHub"
            )}
          </button>
        </div>
        
        <div className="modal-action">
          <p className="text-xs text-base-content/70">
            By signing in, you agree to our Terms of Service
          </p>
        </div>
      </div>
    </div>
  );
}