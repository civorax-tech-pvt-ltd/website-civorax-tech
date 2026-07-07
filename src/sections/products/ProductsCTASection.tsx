import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import ScrollReveal from '../../components/ScrollReveal'

export default function ProductsCTASection() {
  return (
    <section className="section-padding bg-bg-primary">
      <div className="content-max-width">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <ScrollReveal>
            <h2 className="text-3xl md:text-[42px] font-bold leading-tight text-text-white tracking-tight">
              Tell us how your business runs.{` `}
              <em className="text-accent-light">We&apos;ll</em> build around it.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-text-secondary">
              Let&apos;s sit down and figure out what you need.
            </p>
          </ScrollReveal>

          {/* Right */}
          <ScrollReveal delay={0.15}>
            <div>
              <p className="label-text text-text-secondary">
                TELL US HOW YOUR BUSINESS RUNS.
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