import ScrollReveal from '../../components/ScrollReveal'

export default function ProductsHeroSection() {
  return (
    <section className="flex items-center justify-center text-center px-4 bg-bg-primary pt-40 pb-24">
      <div className="max-w-[720px]">
        <ScrollReveal>
          <span className="label-text text-text-secondary">
            <span className="w-1.5 h-1.5 rounded-full inline-block mr-2 bg-accent-light" />
            RUNTIME UI SUITE
          </span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-[56px] font-bold leading-[1.1] tracking-tighter text-text-white">
            Production-Grade
          </h1>
          <h1 className="text-4xl sm:text-5xl md:text-[56px] font-bold leading-[1.1] italic tracking-tighter text-accent-light">
            Retail and Enterprise Software.
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="mt-6 text-base sm:text-lg leading-relaxed max-w-[560px] mx-auto text-text-secondary">
            Our POS and ERP systems are currently in private beta with select businesses across Koshi Province. Below: live beta telemetry. Real transactions, sync events, IRD submissions from active deployments.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3} className="flex flex-wrap items-center justify-center gap-6 mt-8">
          <span className="label-text text-text-secondary">
            LIVE BETA SNAPSHOT · Jun 2026
          </span>
          <span className="label-text text-text-secondary">
            SCOPE: KOSHI PROVINCE BETA
          </span>
        </ScrollReveal>
      </div>
    </section>
  )
}