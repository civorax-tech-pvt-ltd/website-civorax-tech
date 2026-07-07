'use client'

import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import ScrollReveal from '../../components/ScrollReveal'

export default function CareerHeroSection() {
  return (
    <section className="flex items-center justify-center text-center px-4 bg-bg-primary min-h-[80vh] pt-40 pb-24">
      <div className="max-w-[720px]">
        <ScrollReveal>
          <span className="label-text text-text-secondary">CAREERS</span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-[56px] font-bold leading-[1.1] tracking-tighter">
            <span className="text-white">Build software that</span>
            <br />
            <em className="text-accent-light">works under real conditions.</em>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="mt-6 text-base sm:text-lg leading-relaxed max-w-[560px] mx-auto text-text-secondary">
            We hire engineers who build production systems, not demos that break in the field. Throw your ideas into production.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3} className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <Link
            href="#openings"
            className="group inline-flex items-center gap-2 text-[15px] font-semibold rounded-full transition-all duration-300 hover:scale-[1.02] bg-accent-light text-bg-primary py-3.5 px-8"
          >
            View Openings
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 text-[15px] font-semibold text-white rounded-full transition-all duration-300 bg-transparent border border-border-dark py-3.5 px-8"
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--accent-light)' }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border-dark)' }}
          >
            Internship Track
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  )
}