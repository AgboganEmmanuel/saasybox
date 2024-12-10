"use client"
import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { Features } from '@/components/Features'
import { Integrations } from '@/components/Integrations'
import { Footer } from '@/components/Footer'
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
        <Integrations />
        <Features />
      </main>
      <Footer />
    </div>
  );
}
