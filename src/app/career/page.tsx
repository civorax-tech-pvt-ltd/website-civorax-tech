import CareerHeroSection from '@/sections/career/CareerHeroSection'
import CultureSection from '@/sections/career/CultureSection'
import PerksSection from '@/sections/career/PerksSection'
import OpenPositionsSection from '@/sections/career/OpenPositionsSection'
import CareerCTASection from '@/sections/career/CareerCTASection'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Career',
  description: 'Join CivoraX in Dharan. Build production software that works under real conditions in Nepal.',
  openGraph: {
    title: 'Career at CivoraX — Build Software That Works',
    description: 'Join CivoraX in Dharan. Build production software that works under real conditions in Nepal.',
  },
}

export default function CareerPage() {
  return (
    <>
      <CareerHeroSection />
      <CultureSection />
      <PerksSection />
      <OpenPositionsSection />
      <CareerCTASection />
    </>
  )
}
