import ProductsHeroSection from '@/sections/products/ProductsHeroSection'
import LiveDashboardSection from '@/sections/products/LiveDashboardSection'
import BetaPartnersSection from '@/sections/products/BetaPartnersSection'
import ProductCardsSection from '@/sections/products/ProductCardsSection'
import ProductsCTASection from '@/sections/products/ProductsCTASection'

export default function ProductsPage() {
  return (
    <>
      <ProductsHeroSection />
      <LiveDashboardSection />
      <BetaPartnersSection />
      <ProductCardsSection />
      <ProductsCTASection />
    </>
  )
}
