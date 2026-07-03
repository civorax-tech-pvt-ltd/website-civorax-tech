import ProductsHeroSection from '@/sections/products/ProductsHeroSection'
import ProductCardsSection from '@/sections/products/ProductCardsSection'
import BetaPartnersSection from '@/sections/products/BetaPartnersSection'
import ProductsCTASection from '@/sections/products/ProductsCTASection'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Products',
  description: 'Production-grade retail and enterprise software. CivoraX Retail POS, Core ERP, and custom web applications.',
  openGraph: {
    title: 'CivoraX Products — Retail POS, Core ERP, Web Apps',
    description: 'Production-grade retail and enterprise software built in Dharan, Nepal.',
  },
}

export default function ProductsPage() {
  return (
    <>
      <ProductsHeroSection />
      <ProductCardsSection />
      <BetaPartnersSection />
      <ProductsCTASection />
    </>
  )
}
