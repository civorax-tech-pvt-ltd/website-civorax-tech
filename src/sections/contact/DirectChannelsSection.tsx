import { Mail, MessageCircle, Phone, Clock } from 'lucide-react'
import ScrollReveal from '../../components/ScrollReveal'
import { ArrowRight } from 'lucide-react'

const channels = [
  {
    icon: Mail,
    title: 'Email',
    detail: 'info@civorax.com',
    description: 'Best for formal inquiries, RFPs, and detailed briefs. Replies within 24 hours on business days.',
    cta: 'SEND EMAIL',
    href: 'mailto:info@civorax.com',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    detail: '+977-9805309473',
    description: 'Quickest route. Our lead architects respond to operational emergencies and live build questions.',
    cta: 'OPEN CHAT',
    href: 'https://wa.me/9779805309473',
  },
  {
    icon: Phone,
    title: 'Phone',
    detail: '+977-9805309473',
    description: 'Direct line to the Dharan studio. Best for voice conversations and scheduled deep-dive sessions.',
    cta: 'CALL NOW',
    href: 'tel:+9779805309473',
  },
  {
    icon: Clock,
    title: 'Studio Hours',
    detail: 'Sun-Fri \u2022 9AM-6PM NPT',
    description: 'Office is closed on Saturdays. Production clients have a 24/7 incident response channel.',
    status: 'CURRENTLY OPEN',
  },
]

export default function DirectChannelsSection() {
  return (
    <section className="section-padding" style={{ backgroundColor: '#f5f5f5' }}>
      <div className="content-max-width">
        <ScrollReveal>
          <span className="label-text" style={{ color: '#8ab53d' }}>DIRECT CHANNELS</span>
          <h2 className="mt-4 text-3xl md:text-[42px] font-bold leading-tight" style={{ color: '#1a1a1a', letterSpacing: '-0.01em' }}>
            Prefer to reach us directly?
          </h2>
          <p className="mt-3 text-base leading-relaxed max-w-[560px]" style={{ color: '#6b7280' }}>
            Four direct lines into the studio. Pick the channel that matches the urgency of your inquiry.
          </p>
        </ScrollReveal>

        <ScrollReveal stagger={0.12} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {channels.map((ch) => (
            <div
              key={ch.title}
              className="bg-white rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1"
              style={{ border: '1px solid #e5e5e5' }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: '#f0f7e0' }}
              >
                <ch.icon size={22} style={{ color: '#8ab53d' }} />
              </div>

              <h3 className="mt-5 text-[22px] font-semibold" style={{ color: '#1a1a1a' }}>
                {ch.title}
              </h3>
              <p className="mt-2 text-sm font-medium" style={{ color: '#1a1a1a' }}>
                {ch.detail}
              </p>
              <p className="mt-2 text-[13px] leading-relaxed" style={{ color: '#6b7280' }}>
                {ch.description}
              </p>

              {ch.cta && ch.href && (
                <a
                  href={ch.href}
                  target={ch.href.startsWith('http') ? '_blank' : undefined}
                  rel={ch.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group inline-flex items-center gap-1 mt-5 label-text transition-colors duration-200 hover:text-[#8ab53d]"
                  style={{ color: '#1a1a1a' }}
                >
                  {ch.cta}
                  <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              )}

              {ch.status && (
                <div className="mt-5 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#4ecdc4' }} />
                  <span className="label-text" style={{ color: '#4ecdc4' }}>{ch.status}</span>
                </div>
              )}
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  )
}
