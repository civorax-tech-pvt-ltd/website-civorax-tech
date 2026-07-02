'use client'

import { Mail, MapPin, Clock } from 'lucide-react'
import ScrollReveal from '../../components/ScrollReveal'

export default function ContactFormSection() {
  return (
    <section className="section-padding bg-white">
      <div className="content-max-width">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left — Contact Info + Map */}
          <div className="flex flex-col">
            <ScrollReveal>
              <span className="label-text" style={{ color: 'var(--accent-dark)' }}>WORK WITH US</span>
              <h2 className="mt-4 text-3xl md:text-[42px] font-bold leading-tight" style={{ color: 'var(--bg-primary)', letterSpacing: '-0.01em' }}>
                Let&apos;s build something beautiful.
              </h2>
              <p className="mt-4 text-base leading-relaxed" style={{ color: 'var(--text-body)' }}>
                Connect with our Dharan studio. Tell us about your operational constraints, branch counts, or specific legacy data architectures.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.1} className="mt-8 space-y-6">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'var(--accent-badge)' }}
                >
                  <Mail size={18} style={{ color: 'var(--accent-dark)' }} />
                </div>
                <div>
                  <p className="text-base font-medium" style={{ color: 'var(--bg-primary)' }}>info@civorax.com</p>
                  <p className="label-text mt-0.5" style={{ color: 'var(--text-body)', fontSize: '10px' }}>DIRECT STUDIO EMAIL</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'var(--accent-badge)' }}
                >
                  <MapPin size={18} style={{ color: 'var(--accent-dark)' }} />
                </div>
                <div>
                  <p className="text-sm" style={{ color: 'var(--text-body)' }}>
                    <span className="font-medium" style={{ color: 'var(--bg-primary)' }}>CivoraX Tech Pvt. Ltd.</span><br />
                    Putali Line-12, Dharan,<br />
                    Koshi Province, Nepal
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'var(--accent-badge)' }}
                >
                  <Clock size={18} style={{ color: 'var(--accent-dark)' }} />
                </div>
                <div>
                  <p className="text-sm" style={{ color: 'var(--text-body)' }}>
                    Sunday — Friday<br />
                    09:00 AM to 06:00 PM NPT
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Google Map */}
            <ScrollReveal delay={0.2} className="mt-8 flex-1">
              <div
                className="rounded-2xl overflow-hidden h-full"
                style={{ border: '1px solid var(--border-light)' }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56515.23754881395!2d87.270706!3d26.8125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e1931a15f3c97b%3A0x11b0a3c4c2b8e0c0!2sDharan%2C%20Nepal!5e0!3m2!1sen!2snp!4v1700000000000!5m2!1sen!2snp"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="CivoraX Tech - Dharan, Nepal"
                />
              </div>
            </ScrollReveal>
          </div>

          {/* Right — Form */}
          <ScrollReveal delay={0.15} className="flex flex-col">
            <form
              className="rounded-2xl p-8 md:p-10 flex-1"
              style={{ backgroundColor: 'var(--bg-light)' }}
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="space-y-5">
                <div>
                  <label className="label-text block mb-2" style={{ color: 'var(--text-body)', fontSize: '11px' }}>
                    Client Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full rounded-lg px-4 py-3 text-sm outline-none transition-colors duration-200 focus:border-accent-light"
                    style={{ backgroundColor: 'var(--text-white)', border: '1px solid var(--border-light)', color: 'var(--bg-primary)' }}
                  />
                </div>

                <div>
                  <label className="label-text block mb-2" style={{ color: 'var(--text-body)', fontSize: '11px' }}>
                    Direct Email *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full rounded-lg px-4 py-3 text-sm outline-none transition-colors duration-200 focus:border-accent-light"
                    style={{ backgroundColor: 'var(--text-white)', border: '1px solid var(--border-light)', color: 'var(--bg-primary)' }}
                  />
                </div>

                <div>
                  <label className="label-text block mb-2" style={{ color: 'var(--text-body)', fontSize: '11px' }}>
                    Target Core Platform
                  </label>
                  <select
                    className="w-full rounded-lg px-4 py-3 text-sm outline-none transition-colors duration-200 focus:border-accent-light"
                    style={{ backgroundColor: 'var(--text-white)', border: '1px solid var(--border-light)', color: 'var(--bg-primary)' }}
                  >
                    <option>Retail POS</option>
                    <option>Enterprise ERP</option>
                    <option>Custom Web Portal</option>
                    <option>Not Sure Yet</option>
                  </select>
                </div>

                <div>
                  <label className="label-text block mb-2" style={{ color: 'var(--text-body)', fontSize: '11px' }}>
                    System Specifications & Context
                  </label>
                  <textarea
                    rows={4}
                    className="w-full rounded-lg px-4 py-3 text-sm outline-none transition-colors duration-200 resize-none focus:border-accent-light"
                    style={{ backgroundColor: 'var(--text-white)', border: '1px solid var(--border-light)', color: 'var(--bg-primary)' }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg py-3.5 text-[15px] font-semibold transition-all duration-300 hover:opacity-90"
                  style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-white)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--accent-light)'
                    e.currentTarget.style.color = 'var(--bg-primary)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--bg-primary)'
                    e.currentTarget.style.color = 'var(--text-white)'
                  }}
                >
                  File Studio Inquiry
                </button>
              </div>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
