import SectionHeader from '../../components/SectionHeader'
import ScrollReveal from '../../components/ScrollReveal'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote: 'We moved from handwritten bills to a full billing system in under three weeks. The CivoraX team knew exactly what a restaurant operation in Dharan actually needs.',
    name: 'Bikram Limbu',
    role: 'Owner',
    business: 'Sanjog Restaurant & Catering',
    location: 'Dharan',
    badge: 'RESTAURANT',
  },
  {
    quote: 'Load-shedding used to mean lost sales. Now the POS works offline and syncs everything when power returns. We haven\'t lost a single transaction in four months.',
    name: 'Ram Prasad Khatiwada',
    role: 'Owner',
    business: 'Suraj Hardware Suppliers',
    location: 'Itahari',
    badge: 'HARDWARE',
  },
  {
    quote: 'The IRD compliance alone saved us weeks of manual reporting. VAT XML generation used to be our biggest headache — now it\'s one click.',
    name: 'Sunita Rai',
    role: 'Manager',
    business: 'Muna General Store',
    location: 'Dharan',
    badge: 'RETAIL',
  },
]

export default function TestimonialsSection() {
  return (
    <section className="section-padding relative overflow-hidden" style={{ backgroundColor: 'var(--bg-light)' }}>
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, var(--bg-primary) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      />

      <div className="content-max-width relative z-10">
        <ScrollReveal>
          <SectionHeader
            label="TESTIMONIALS"
            heading="What our clients say"
            subheading="Real feedback from businesses across Koshi Province."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 0.12}>
              <div
                className="rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col relative"
                style={{
                  backgroundColor: 'var(--text-white)',
                  border: '1px solid var(--border-light)',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                }}
              >
                {/* Quote icon */}
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mb-4"
                  style={{ backgroundColor: 'var(--accent-badge)' }}
                >
                  <Quote size={18} style={{ color: 'var(--accent-dark)' }} />
                </div>

                {/* Badge */}
                <span
                  className="inline-block self-start rounded-md px-2.5 py-1 label-text mb-4"
                  style={{ backgroundColor: 'var(--accent-badge)', color: 'var(--accent-badge-text)' }}
                >
                  {t.badge}
                </span>

                {/* Quote text */}
                <p
                  className="relative text-[15px] leading-relaxed italic flex-1"
                  style={{ color: 'var(--text-body)' }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Divider */}
                <div
                  className="my-6 h-px"
                  style={{ backgroundColor: 'var(--border-light)' }}
                />

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold"
                    style={{ backgroundColor: 'var(--accent-badge)', color: 'var(--accent-badge-text)' }}
                  >
                    {t.name.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <div>
                    <p className="text-sm font-semibold" style={{ color: 'var(--bg-primary)' }}>
                      {t.name}
                    </p>
                    <p className="text-xs" style={{ color: 'var(--text-tertiary)' }}>
                      {t.role}, {t.business}
                    </p>
                    <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                      {t.location}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
