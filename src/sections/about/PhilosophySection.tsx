import ScrollReveal from '../../components/ScrollReveal'

const badges = [
  'SOVEREIGN DEPLOYMENT',
  'NO FORCED UPDATES',
  'VENDOR INDEPENDENT',
]

export default function PhilosophySection() {
  return (
    <section className="section-padding" style={{ backgroundColor: '#f5f5f5' }}>
      <div className="content-max-width max-w-[800px] mx-auto text-center">
        <ScrollReveal>
          <span className="label-text" style={{ color: '#8ab53d' }}>MANIFESTO</span>
          <h2 className="mt-4 text-3xl md:text-[42px] font-bold leading-tight" style={{ color: '#1a1a1a', letterSpacing: '-0.01em' }}>
            We give you the code. You own it forever.
          </h2>
          <p className="mt-4 text-lg" style={{ color: '#6b7280' }}>
            No subscriptions. No lock-in. Just software that works.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15} className="flex flex-wrap items-center justify-center gap-4 mt-12">
          {badges.map((badge) => (
            <span
              key={badge}
              className="inline-flex items-center gap-2 rounded-full px-5 py-2 label-text"
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e5e5e5',
                color: '#1a1a1a',
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#c8f07d' }} />
              {badge}
            </span>
          ))}
        </ScrollReveal>
      </div>
    </section>
  )
}
