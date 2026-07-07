import HeroSection from '@/sections/home/HeroSection'
import TrustedBySection from '@/sections/home/TrustedBySection'
import HowItWorksSection from '@/sections/home/HowItWorksSection'
import ProductsPreviewSection from '@/sections/home/ProductsPreviewSection'
import TestimonialsSection from '@/sections/home/TestimonialsSection'
import FAQSection from '@/sections/home/FAQSection'
import CTABannerSection from '@/sections/home/CTABannerSection'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CivoraX — Offline-First Software from Nepal',
  description: 'Offline POS systems, ERPs, and web portals built in Dharan, Nepal. Production-grade software for businesses that need reliability.',
  keywords: [
    'civora', 'civorax', 'civora tech', 'best software company koshi',
    'POS nepal', 'ERP nepal', 'offline POS', 'inventory software',
    'restaurant POS', 'web development dharan', 'gen AI apps',
    'saugat dhungana', 'dheeraj uparkoti',
  ],
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustedBySection />
      <ProductsPreviewSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <FAQSection />
      <CTABannerSection />
    </>
  )
}
