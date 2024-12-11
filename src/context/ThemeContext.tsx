'use client'

import React, { createContext, useState, useContext, useEffect } from 'react'

// Daisy UI themes
export type DaisyUITheme = 
  | 'light' 
  | 'dark' 
  | 'cupcake' 
  | 'bumblebee' 
  | 'emerald' 
  | 'corporate' 
  | 'synthwave' 
  | 'retro' 
  | 'cyberpunk' 
  | 'valentine' 
  | 'halloween' 
  | 'garden' 
  | 'forest' 
  | 'aqua' 
  | 'lofi' 
  | 'pastel' 
  | 'fantasy' 
  | 'wireframe' 
  | 'black' 
  | 'luxury' 
  | 'dracula' 
  | 'cmyk' 
  | 'autumn' 
  | 'business' 
  | 'acid' 
  | 'lemonade' 
  | 'night' 
  | 'coffee' 
  | 'winter'

interface ThemeContextType {
  theme: DaisyUITheme
  setTheme: (theme: DaisyUITheme) => void
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'cupcake',
  setTheme: () => {}
})

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<DaisyUITheme>(() => {
    // Server-side rendering safe initialization
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('theme') as DaisyUITheme) || 'dark'	
    }
    return 'dark'
  })

  useEffect(() => {
    // Update data-theme attribute and localStorage
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-theme', theme)
      localStorage.setItem('theme', theme)
    }
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)