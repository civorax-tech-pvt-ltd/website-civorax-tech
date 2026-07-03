import AboutHeroSection from '@/sections/about/AboutHeroSection'
import StatsSection from '@/sections/about/StatsSection'
import OurStorySection from '@/sections/about/OurStorySection'
import PhilosophySection from '@/sections/about/PhilosophySection'
import TeamSection from '@/sections/about/TeamSection'
import ClientQuoteSection from '@/sections/about/ClientQuoteSection'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description: '14 engineers in Dharan building production-grade software for Nepal. 100% in-house code, zero vendor lock-in.',
  openGraph: {
    title: 'About CivoraX — Software Engineering Studio, Dharan',
    description: '14 engineers in Dharan building production-grade software for Nepal. 100% in-house code, zero vendor lock-in.',
  },
}

export default function AboutPage() {
  return (
    <>
      <AboutHeroSection />
      <StatsSection />
      <OurStorySection />
      <PhilosophySection />
      <TeamSection />
      <ClientQuoteSection />
    </>
  )
}
