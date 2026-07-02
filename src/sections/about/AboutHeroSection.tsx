import ScrollReveal from '../../components/ScrollReveal'

export default function AboutHeroSection() {
  return (
    <section
      className="flex items-center justify-center text-center px-4"
      style={{ backgroundColor: 'var(--bg-primary)', paddingTop: '160px', paddingBottom: '96px' }}
    >
      <div className="max-w-[720px]">
        <ScrollReveal>
          <span className="label-text" style={{ color: 'var(--text-secondary)' }}>ABOUT US</span>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h1
            className="mt-4 text-4xl sm:text-5xl md:text-[56px] font-bold leading-[1.1]"
            style={{ letterSpacing: '-0.02em', color: 'var(--text-white)' }}
          >
            We build software that works under Nepal&apos;s{' '}
            <em style={{ color: 'var(--accent-light)' }}>real</em> conditions.
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p
            className="mt-6 text-base sm:text-lg leading-relaxed max-w-[560px] mx-auto"
            style={{ color: 'var(--text-secondary)' }}
          >
            CivoraX Tech Pvt. Ltd. is a software engineering studio in Dharan that builds offline-first retail POS systems, multi-branch ERPs, and custom web portals for businesses across Koshi Province and beyond.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
