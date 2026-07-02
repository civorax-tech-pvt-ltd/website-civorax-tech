import ScrollReveal from '../../components/ScrollReveal'

const partners = [
  { name: 'Suraj Hardware Suppliers', location: 'Itahari' },
  { name: 'Muna General Store', location: 'Dharan-8' },
  { name: 'Sanjog Restaurant & Catering', location: 'Dharan' },
]

export default function BetaPartnersSection() {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--bg-light)' }}>
      <div className="content-max-width">
        <ScrollReveal>
          <span className="label-text" style={{ color: 'var(--accent-dark)' }}>BETA PARTNERS</span>
          <h2 className="mt-4 text-3xl md:text-[42px] font-bold leading-tight" style={{ color: 'var(--bg-primary)', letterSpacing: '-0.01em' }}>
            Currently running with:
          </h2>
        </ScrollReveal>

        <ScrollReveal stagger={0.1} className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="bg-white rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1"
              style={{ border: '1px solid var(--border-light)' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: 'var(--teal)' }} />
                <span className="label-text" style={{ color: 'var(--teal)' }}>ACTIVE BETA</span>
              </div>
              <h3 className="text-lg font-semibold" style={{ color: 'var(--bg-primary)' }}>
                {partner.name}
              </h3>
              <p className="text-sm mt-1" style={{ color: 'var(--text-body)' }}>
                {partner.location}
              </p>
            </div>
          ))}
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <p className="mt-8 text-sm" style={{ color: 'var(--text-body)' }}>
            General availability opens Q3 2026. Inquiries open now.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
