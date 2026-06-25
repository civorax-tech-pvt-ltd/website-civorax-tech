import ScrollReveal from '../../components/ScrollReveal'

export default function ProductsHeroSection() {
  return (
    <section
      className="flex items-center justify-center text-center px-4"
      style={{ backgroundColor: '#1a1a1a', paddingTop: '160px', paddingBottom: '96px' }}
    >
      <div className="max-w-[720px]">
        <ScrollReveal>
          <span className="label-text" style={{ color: '#9ca3af' }}>
            <span className="w-1.5 h-1.5 rounded-full inline-block mr-2" style={{ backgroundColor: '#c8f07d' }} />
            RUNTIME UI SUITE
          </span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h1
            className="mt-4 text-4xl sm:text-5xl md:text-[56px] font-bold leading-[1.1]"
            style={{ letterSpacing: '-0.02em', color: '#ffffff' }}
          >
            Production-Grade
          </h1>
          <h1
            className="text-4xl sm:text-5xl md:text-[56px] font-bold leading-[1.1] italic"
            style={{ letterSpacing: '-0.02em', color: '#c8f07d' }}
          >
            Retail and Enterprise Software.
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p
            className="mt-6 text-base sm:text-lg leading-relaxed max-w-[560px] mx-auto"
            style={{ color: '#9ca3af' }}
          >
            A live snapshot of our deployed systems across Koshi and Bagmati. Real production telemetry — counters, sync state, and transaction throughput from active branches.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
