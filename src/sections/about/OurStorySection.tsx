import ScrollReveal from '../../components/ScrollReveal'

export default function OurStorySection() {
  return (
    <section className="section-padding bg-white">
      <div className="content-max-width">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <ScrollReveal>
              <span className="label-text" style={{ color: '#8ab53d' }}>OUR STORY</span>
              <h2 className="mt-4 text-3xl md:text-[42px] font-bold leading-tight" style={{ color: '#1a1a1a', letterSpacing: '-0.01em' }}>
                How We Started
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="mt-6 space-y-4 text-base leading-relaxed" style={{ color: '#6b7280' }}>
                <p>
                  CivoraX was founded in 2026 in Dharan by Dheeraj Uparkoti and a group of engineers who grew up watching businesses in Koshi Province struggle with software that assumed perfect conditions — stable internet, reliable power, and IT staff who could troubleshoot on the fly.
                </p>
                <p>
                  Most of that software was built somewhere else, for someone else&apos;s infrastructure. It didn&apos;t account for load-shedding. It didn&apos;t work offline. It locked businesses into subscriptions they couldn&apos;t exit and platforms they couldn&apos;t control.
                </p>
                <p>
                  We started CivoraX to fix that. Every system we build is owned entirely by the client. No subscriptions, no forced updates, no calling us back because we hold the keys. IRD compliance is built in from day one, not bolted on later.
                </p>
                <p>
                  We are based in Dharan. We mainly serve Nepal. We sometimes take on projects elsewhere in South Asia where bad connectivity is a real constraint. We build software the way infrastructure should be built — with the assumption that conditions will be imperfect, and the system must work anyway.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Image */}
          <ScrollReveal delay={0.15}>
            <img
              src="/assets/team-office.jpg"
              alt="CivoraX team working in their Dharan office"
              className="w-full rounded-2xl object-cover aspect-[4/3]"
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
