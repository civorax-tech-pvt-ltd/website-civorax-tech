import { Mail, MapPin, Clock } from 'lucide-react'
import ScrollReveal from '../../components/ScrollReveal'

export default function ContactFormSection() {
  return (
    <section className="section-padding bg-white">
      <div className="content-max-width">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left — Contact Info */}
          <div>
            <ScrollReveal>
              <span className="label-text" style={{ color: '#8ab53d' }}>WORK WITH US</span>
              <h2 className="mt-4 text-3xl md:text-[42px] font-bold leading-tight" style={{ color: '#1a1a1a', letterSpacing: '-0.01em' }}>
                Let&apos;s build something beautiful.
              </h2>
              <p className="mt-4 text-base leading-relaxed" style={{ color: '#6b7280' }}>
                Connect with our Dharan studio. Tell us about your operational constraints, branch counts, or specific legacy data architectures.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.1} className="mt-8 space-y-6">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: '#f0f7e0' }}
                >
                  <Mail size={18} style={{ color: '#8ab53d' }} />
                </div>
                <div>
                  <p className="text-base font-medium" style={{ color: '#1a1a1a' }}>info@civorax.com</p>
                  <p className="label-text mt-0.5" style={{ color: '#6b7280', fontSize: '10px' }}>DIRECT STUDIO EMAIL</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: '#f0f7e0' }}
                >
                  <MapPin size={18} style={{ color: '#8ab53d' }} />
                </div>
                <div>
                  <p className="text-sm" style={{ color: '#6b7280' }}>
                    <span className="font-medium" style={{ color: '#1a1a1a' }}>CivoraX Tech Pvt. Ltd.</span><br />
                    Putali Line-12, Dharan,<br />
                    Koshi Province, Nepal
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: '#f0f7e0' }}
                >
                  <Clock size={18} style={{ color: '#8ab53d' }} />
                </div>
                <div>
                  <p className="text-sm" style={{ color: '#6b7280' }}>
                    Sunday — Friday<br />
                    09:00 AM to 06:00 PM NPT
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right — Form */}
          <ScrollReveal delay={0.15}>
            <form
              className="rounded-2xl p-8 md:p-10"
              style={{ backgroundColor: '#f5f5f5' }}
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="space-y-5">
                <div>
                  <label className="label-text block mb-2" style={{ color: '#6b7280', fontSize: '11px' }}>
                    Client Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full rounded-lg px-4 py-3 text-sm outline-none transition-colors duration-200 focus:border-[#c8f07d]"
                    style={{ backgroundColor: '#ffffff', border: '1px solid #e5e5e5', color: '#1a1a1a' }}
                  />
                </div>

                <div>
                  <label className="label-text block mb-2" style={{ color: '#6b7280', fontSize: '11px' }}>
                    Direct Email *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full rounded-lg px-4 py-3 text-sm outline-none transition-colors duration-200 focus:border-[#c8f07d]"
                    style={{ backgroundColor: '#ffffff', border: '1px solid #e5e5e5', color: '#1a1a1a' }}
                  />
                </div>

                <div>
                  <label className="label-text block mb-2" style={{ color: '#6b7280', fontSize: '11px' }}>
                    Target Core Platform
                  </label>
                  <select
                    className="w-full rounded-lg px-4 py-3 text-sm outline-none transition-colors duration-200 focus:border-[#c8f07d]"
                    style={{ backgroundColor: '#ffffff', border: '1px solid #e5e5e5', color: '#1a1a1a' }}
                  >
                    <option>Retail POS</option>
                    <option>Enterprise ERP</option>
                    <option>Custom Web Portal</option>
                    <option>Not Sure Yet</option>
                  </select>
                </div>

                <div>
                  <label className="label-text block mb-2" style={{ color: '#6b7280', fontSize: '11px' }}>
                    System Specifications & Context
                  </label>
                  <textarea
                    rows={4}
                    className="w-full rounded-lg px-4 py-3 text-sm outline-none transition-colors duration-200 resize-none focus:border-[#c8f07d]"
                    style={{ backgroundColor: '#ffffff', border: '1px solid #e5e5e5', color: '#1a1a1a' }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg py-3.5 text-[15px] font-semibold transition-all duration-300 hover:opacity-90"
                  style={{ backgroundColor: '#1a1a1a', color: '#ffffff' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#c8f07d'
                    e.currentTarget.style.color = '#1a1a1a'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#1a1a1a'
                    e.currentTarget.style.color = '#ffffff'
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
