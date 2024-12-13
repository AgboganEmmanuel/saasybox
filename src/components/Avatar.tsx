// src/components/Avatar.tsx
"use client"
import React from 'react';

interface AvatarProps {
  firstName: string;
  className?: string;
}

export function Avatar({ firstName, className = '' }: AvatarProps) {
  // Generate a background color based on the first letter of the first name
  const generateBackgroundColor = (name: string) => {
    const colors = [
      'bg-blue-500', 
      'bg-green-500', 
      'bg-purple-500', 
      'bg-pink-500', 
      'bg-indigo-500'
    ];
    const index = name.charCodeAt(0) % colors.length;
    return colors[index];
  };

  return (
    <div 
      className={`avatar placeholder ${className}`}
      title={firstName}
    >
      <div 
        className={`w-10 h-10 rounded-full ${generateBackgroundColor(firstName)} text-white flex items-center justify-center`}
      >
        <span className="text-sm font-bold uppercase">
          {firstName.charAt(0)}
        </span>
      </div>
    </div>
  );
}