import ScrollReveal from '../../components/ScrollReveal'

const partners = [
  { name: 'Suraj Hardware Suppliers', location: 'Itahari' },
  { name: 'Muna General Store', location: 'Dharan-8' },
  { name: 'Sanjog Restaurant & Catering', location: 'Dharan' },
]

export default function BetaPartnersSection() {
  return (
    <section className="section-padding" style={{ backgroundColor: '#f5f5f5' }}>
      <div className="content-max-width">
        <ScrollReveal>
          <span className="label-text" style={{ color: '#8ab53d' }}>BETA PARTNERS</span>
          <h2 className="mt-4 text-3xl md:text-[42px] font-bold leading-tight" style={{ color: '#1a1a1a', letterSpacing: '-0.01em' }}>
            Currently running with:
          </h2>
        </ScrollReveal>

        <ScrollReveal stagger={0.1} className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="bg-white rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1"
              style={{ border: '1px solid #e5e5e5' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#4ecdc4' }} />
                <span className="label-text" style={{ color: '#4ecdc4' }}>ACTIVE BETA</span>
              </div>
              <h3 className="text-lg font-semibold" style={{ color: '#1a1a1a' }}>
                {partner.name}
              </h3>
              <p className="text-sm mt-1" style={{ color: '#6b7280' }}>
                {partner.location}
              </p>
            </div>
          ))}
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <p className="mt-8 text-sm" style={{ color: '#6b7280' }}>
            General availability opens Q3 2026. Inquiries open now.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
