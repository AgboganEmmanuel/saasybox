"use client"
import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { Features } from '@/components/Features'
import { Integrations } from '@/components/Integrations'
import { Pricing } from '@/components/Pricing'
import { Footer } from '@/components/Footer'
import { FadeInSection } from '@/components/FadeInSection'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'cupcake');
  }, []);

  return (
    <div className="min-h-screen bg-base-200 flex flex-col">
      <Navbar />
      <main className="flex-grow space-y-16 pt-24">
        <FadeInSection>
          <Hero />
        </FadeInSection>
        <FadeInSection>
          <Integrations />
        </FadeInSection>
        <FadeInSection>
          <Features />
        </FadeInSection>
        <FadeInSection>
          <Pricing />
        </FadeInSection>
      </main>
      <FadeInSection>
        <Footer />
      </FadeInSection>
    </div>
  );
}
