import HeroSection from '@/sections/home/HeroSection'
import TrustedBySection from '@/sections/home/TrustedBySection'
import HowItWorksSection from '@/sections/home/HowItWorksSection'
import ProductsPreviewSection from '@/sections/home/ProductsPreviewSection'
import TestimonialsSection from '@/sections/home/TestimonialsSection'
import FAQSection from '@/sections/home/FAQSection'
import CTABannerSection from '@/sections/home/CTABannerSection'

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
