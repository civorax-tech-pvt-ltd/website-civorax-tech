'use client'

import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import ScrollReveal from '../../components/ScrollReveal'

export default function CareerCTASection() {
  return (
    <section className="section-padding bg-bg-primary">
      <div className="content-max-width">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-[42px] font-bold leading-tight text-text-white tracking-tight">
              Don&apos;t see a role that fits?
              <br />
              <em className="text-accent-light">Reach out anytime.</em>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-text-secondary">
              Send us your portfolio. If there&apos;s a fit, we&apos;ll find a place for you.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div>
              <p className="label-text text-text-secondary">
                REACH OUT DIRECTLY
              </p>
              <p className="mt-3 text-[22px] font-semibold text-accent-light">
                +977-9805309473
              </p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 mt-4 text-[15px] font-semibold text-white rounded-full transition-all duration-300 hover:bg-white hover:text-[var(--bg-primary)] bg-bg-secondary border border-border-dark px-7 py-3"
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