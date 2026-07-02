'use client'

import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import ScrollReveal from '../../components/ScrollReveal'

export default function CareerCTASection() {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="content-max-width">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-[42px] font-bold leading-tight" style={{ color: 'var(--text-white)', letterSpacing: '-0.01em' }}>
              Don&apos;t see a role that fits?
              <br />
              <em style={{ color: 'var(--accent-light)' }}>We&apos;re always listening.</em>
            </h2>
            <p className="mt-4 text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Send us your portfolio. If there&apos;s a fit, we&apos;ll find a place for you.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div>
              <p className="label-text" style={{ color: 'var(--text-secondary)' }}>
                REACH OUT DIRECTLY
              </p>
              <p className="mt-3 text-[22px] font-semibold" style={{ color: 'var(--accent-light)' }}>
                +977-9805309473
              </p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 mt-4 text-[15px] font-semibold text-white rounded-full transition-all duration-300 hover:bg-white hover:text-[var(--bg-primary)]"
                style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-dark)', padding: '12px 28px' }}
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
