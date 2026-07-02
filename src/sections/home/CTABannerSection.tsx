import { ArrowRight, Phone, Mail, MessageCircle } from 'lucide-react'
import Link from 'next/link'
import ScrollReveal from '../../components/ScrollReveal'

export default function CTABannerSection() {
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: 'var(--bg-primary)' }}>
      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(132,204,22,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(132,204,22,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Glow accent */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] blur-[120px] opacity-10"
        style={{ backgroundColor: 'var(--accent-light)' }}
      />

      <div className="content-max-width px-4 sm:px-6 lg:px-8 py-20 md:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: CTA Text */}
          <ScrollReveal>
            <div>
              <span className="label-text inline-flex items-center gap-2" style={{ color: 'var(--accent-light)' }}>
                <span className="inline-block w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--accent-light)' }} />
                LET&apos;S TALK
              </span>

              <h2 className="mt-4 text-3xl md:text-[42px] font-bold leading-tight text-white" style={{ letterSpacing: '-0.01em' }}>
                Tell us how your business runs.{' '}
                <em className="not-italic" style={{ color: 'var(--accent-light)' }}>We&apos;ll</em> build around it.
              </h2>

              <p className="mt-5 text-base leading-relaxed max-w-lg" style={{ color: 'var(--text-secondary)' }}>
                Let&apos;s sit down and figure out what you actually need. No sales pitch — just honest engineering advice from people who understand Nepal&apos;s infrastructure.
              </p>

              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 mt-8 text-[15px] font-semibold rounded-full transition-all duration-300 hover:scale-[1.02]"
                style={{ backgroundColor: 'var(--accent-light)', color: 'var(--bg-primary)', padding: '16px 36px' }}
              >
                Get in touch
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </ScrollReveal>

          {/* Right: Contact Info Cards */}
          <ScrollReveal delay={0.15}>
            <div className="space-y-4">
              {/* Phone */}
              <a
                href="tel:+9779805309473"
                className="group flex items-center gap-4 p-5 rounded-xl transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  backgroundColor: 'var(--bg-secondary)',
                  border: '1px solid var(--border-dark)',
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300"
                  style={{ backgroundColor: 'rgba(132,204,22,0.1)', border: '1px solid rgba(132,204,22,0.15)' }}
                >
                  <Phone size={20} style={{ color: 'var(--accent-light)' }} />
                </div>
                <div>
                  <p className="label-text" style={{ color: 'var(--text-tertiary)' }}>CALL US</p>
                  <p className="text-lg font-semibold text-white mt-0.5 group-hover:text-accent-light transition-colors duration-300">
                    +977-9805309473
                  </p>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/9779805309473"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-5 rounded-xl transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  backgroundColor: 'var(--bg-secondary)',
                  border: '1px solid var(--border-dark)',
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300"
                  style={{ backgroundColor: 'rgba(37,211,102,0.1)', border: '1px solid rgba(37,211,102,0.15)' }}
                >
                  <MessageCircle size={20} style={{ color: 'var(--whatsapp)' }} />
                </div>
                <div>
                  <p className="label-text" style={{ color: 'var(--text-tertiary)' }}>WHATSAPP</p>
                  <p className="text-lg font-semibold text-white mt-0.5 group-hover:text-[var(--whatsapp)] transition-colors duration-300">
                    Chat with us instantly
                  </p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:info@civorax.com"
                className="group flex items-center gap-4 p-5 rounded-xl transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  backgroundColor: 'var(--bg-secondary)',
                  border: '1px solid var(--border-dark)',
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300"
                  style={{ backgroundColor: 'rgba(132,204,22,0.1)', border: '1px solid rgba(132,204,22,0.15)' }}
                >
                  <Mail size={20} style={{ color: 'var(--accent-light)' }} />
                </div>
                <div>
                  <p className="label-text" style={{ color: 'var(--text-tertiary)' }}>EMAIL</p>
                  <p className="text-lg font-semibold text-white mt-0.5 group-hover:text-accent-light transition-colors duration-300">
                    info@civorax.com
                  </p>
                </div>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
