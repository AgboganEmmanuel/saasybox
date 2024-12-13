'use client'

import Image from 'next/image'
import { useState } from 'react'

interface ProfileAvatarProps {
  src: string
  alt: string
  width: number
  height: number
}

export function ProfileAvatar({ 
  src, 
  alt, 
  width, 
  height 
}: ProfileAvatarProps) {
  const [imageSrc, setImageSrc] = useState(src)

  const handleError = () => {
    setImageSrc('/default-avatar.png')
  }

  return (
    <div className="avatar">
      <div className="w-36 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
        <Image 
          src={imageSrc} 
          alt={alt} 
          width={width} 
          height={height} 
          className="object-cover"
          onError={handleError}
        />
      </div>
    </div>
  )
}