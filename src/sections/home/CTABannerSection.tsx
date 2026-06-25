import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import ScrollReveal from '../../components/ScrollReveal'

export default function CTABannerSection() {
  return (
    <section className="section-padding" style={{ backgroundColor: '#1a1a1a' }}>
      <div className="content-max-width flex justify-center">
        <ScrollReveal scale={0.95} className="w-full max-w-[800px]">
          <div
            className="rounded-3xl p-12 md:p-16 text-center"
            style={{ backgroundColor: '#2d2d2d' }}
          >
            <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight">
              Tell us how your business runs. We&apos;ll build around it.
            </h2>
            <p className="mt-4 text-base leading-relaxed max-w-[480px] mx-auto" style={{ color: '#9ca3af' }}>
              Let&apos;s sit down and figure out what you actually need. No sales pitch — just honest engineering advice.
            </p>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 mt-8 text-[15px] font-semibold rounded-full transition-all duration-300 hover:scale-[1.02]"
              style={{ backgroundColor: '#c8f07d', color: '#1a1a1a', padding: '16px 36px' }}
            >
              Get in touch
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <p className="mt-6 text-lg font-semibold" style={{ color: '#c8f07d' }}>
              +977-980-0000000
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
