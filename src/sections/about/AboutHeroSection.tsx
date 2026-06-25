import ScrollReveal from '../../components/ScrollReveal'

export default function AboutHeroSection() {
  return (
    <section
      className="flex items-center justify-center text-center px-4"
      style={{ backgroundColor: '#1a1a1a', paddingTop: '160px', paddingBottom: '96px' }}
    >
      <div className="max-w-[720px]">
        <ScrollReveal>
          <span className="label-text" style={{ color: '#9ca3af' }}>ABOUT US</span>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h1
            className="mt-4 text-4xl sm:text-5xl md:text-[56px] font-bold leading-[1.1]"
            style={{ letterSpacing: '-0.02em', color: '#ffffff' }}
          >
            We build software that works under Nepal&apos;s{' '}
            <em style={{ color: '#c8f07d' }}>real</em> conditions.
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p
            className="mt-6 text-base sm:text-lg leading-relaxed max-w-[560px] mx-auto"
            style={{ color: '#9ca3af' }}
          >
            CivoraX Tech Pvt. Ltd. is a small engineering studio in Dharan that builds offline-first retail POS, multi-branch ERPs, and custom web portals.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
