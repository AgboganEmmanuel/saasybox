"use client"
import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'cupcake');
  }, []);

  return (
    <div className="min-h-screen bg-base-200 flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
      </main>
    </div>
  );
}
