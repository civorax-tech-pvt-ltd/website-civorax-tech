import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import ScrollReveal from '../../components/ScrollReveal'

export default function ProductsCTASection() {
  return (
    <section className="section-padding" style={{ backgroundColor: '#1a1a1a' }}>
      <div className="content-max-width">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <ScrollReveal>
            <h2 className="text-3xl md:text-[42px] font-bold leading-tight" style={{ color: '#ffffff', letterSpacing: '-0.01em' }}>
              Tell us how your business runs.{` `}
              <em style={{ color: '#c8f07d' }}>We&apos;ll</em> build around it.
            </h2>
            <p className="mt-4 text-base leading-relaxed" style={{ color: '#9ca3af' }}>
              Let&apos;s sit down and figure out what you actually need.
            </p>
          </ScrollReveal>

          {/* Right */}
          <ScrollReveal delay={0.15}>
            <div>
              <p className="label-text" style={{ color: '#9ca3af' }}>
                LET&apos;S SIT DOWN AND FIGURE OUT WHAT YOU ACTUALLY NEED.
              </p>
              <p className="mt-3 text-[22px] font-semibold" style={{ color: '#c8f07d' }}>
                +977-9805309473
              </p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 mt-4 text-[15px] font-semibold text-white rounded-full transition-all duration-300 hover:bg-white hover:text-[#1a1a1a]"
                style={{
                  backgroundColor: '#2d2d2d',
                  border: '1px solid #3d3d3d',
                  padding: '12px 28px',
                }}
              >
                Get in touch
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
