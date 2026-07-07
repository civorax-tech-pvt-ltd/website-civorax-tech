import { ArrowRight, Phone, Mail, MessageCircle } from 'lucide-react'
import Link from 'next/link'
import ScrollReveal from '../../components/ScrollReveal'

export default function CTABannerSection() {
  return (
    <section className="relative overflow-hidden bg-bg-primary">
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
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] blur-[120px] opacity-10 bg-accent-light" />

      <div className="content-max-width px-4 sm:px-6 lg:px-8 py-20 md:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: CTA Text */}
          <ScrollReveal>
            <div>
              <span className="label-text inline-flex items-center gap-2 text-accent-light">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent-light" />
                LET&apos;S TALK
              </span>

              <h2 className="mt-4 text-3xl md:text-[42px] font-bold leading-tight text-white tracking-tight">
                Tell us how your business runs.{' '}
                <em className="not-italic text-accent-light">We&apos;ll</em> build around it.
              </h2>

              <p className="mt-5 text-base leading-relaxed max-w-lg text-text-secondary">
                Let&apos;s sit down and figure out what you need. No sales pitch. Honest engineering advice from people who understand Nepal&apos;s infrastructure.
              </p>

              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 mt-8 text-[15px] font-semibold rounded-full px-9 py-4 bg-accent-light text-bg-primary transition-all duration-300 hover:scale-[1.02]"
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
                className="group flex items-center gap-4 p-5 rounded-xl bg-bg-secondary border border-border-dark transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-accent/10 border border-accent/15 transition-colors duration-300">
                  <Phone size={20} className="text-accent-light" />
                </div>
                <div>
                  <p className="label-text text-text-tertiary">CALL US</p>
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
                className="group flex items-center gap-4 p-5 rounded-xl bg-bg-secondary border border-border-dark transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-whatsapp/10 border border-whatsapp/15 transition-colors duration-300">
                  <MessageCircle size={20} className="text-whatsapp" />
                </div>
                <div>
                  <p className="label-text text-text-tertiary">WHATSAPP</p>
                  <p className="text-lg font-semibold text-white mt-0.5 group-hover:text-whatsapp transition-colors duration-300">
                    Chat with us instantly
                  </p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:info@civorax.com"
                className="group flex items-center gap-4 p-5 rounded-xl bg-bg-secondary border border-border-dark transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-accent/10 border border-accent/15 transition-colors duration-300">
                  <Mail size={20} className="text-accent-light" />
                </div>
                <div>
                  <p className="label-text text-text-tertiary">EMAIL</p>
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
