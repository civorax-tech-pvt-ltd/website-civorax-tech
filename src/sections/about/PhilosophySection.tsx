import ScrollReveal from '../../components/ScrollReveal'

const badges = [
  'SOVEREIGN DEPLOYMENT',
  'NO FORCED UPDATES',
  'VENDOR INDEPENDENT',
]

export default function PhilosophySection() {
  return (
    <section className="section-padding bg-bg-light">
      <div className="content-max-width max-w-[800px] mx-auto text-center">
        <ScrollReveal>
          <span className="label-text text-accent-dark">MANIFESTO</span>
          <h2 className="mt-4 text-3xl md:text-[42px] font-bold leading-tight text-text-primary tracking-tight">
            We give you the code. You own it forever.
          </h2>
          <p className="mt-4 text-lg text-text-body">
            No subscriptions. No lock-in. Software that works.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15} className="flex flex-wrap items-center justify-center gap-4 mt-12">
          {badges.map((badge) => (
            <span
              key={badge}
              className="inline-flex items-center gap-2 rounded-full px-5 py-2 label-text bg-bg-white border border-border-light text-text-primary"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent-light" />
              {badge}
            </span>
          ))}
        </ScrollReveal>
      </div>
    </section>
  )
}
