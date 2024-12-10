import React, { useEffect, useRef, useState } from 'react'

interface FadeInSectionProps {
  children: React.ReactNode;
  className?: string;
  initiallyVisible?: boolean;
  alwaysVisible?: boolean;
}

export function FadeInSection({ 
  children, 
  className = '', 
  initiallyVisible = false,
  alwaysVisible = false
}: FadeInSectionProps) {
  const [isVisible, setIsVisible] = useState(initiallyVisible || alwaysVisible)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // If not initially visible and not always visible, set up intersection observer
    if (!initiallyVisible && !alwaysVisible) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.unobserve(entry.target)
          }
        },
        {
          root: null,
          rootMargin: '0px',
          threshold: 0.1 // Trigger when 10% of the section is visible
        }
      )

      if (sectionRef.current) {
        observer.observe(sectionRef.current)
      }

      return () => {
        if (sectionRef.current) {
          observer.unobserve(sectionRef.current)
        }
      }
    }
  }, [initiallyVisible, alwaysVisible])

  return (
    <div 
      ref={sectionRef} 
      className={`
        ${className} 
        transition-all duration-700 ease-out 
        ${isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'}
      `}
    >
      {children}
    </div>
  )
}
