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
                  CivoraX started in 2026 in Dharan. A group of engineers got tired of watching businesses fail because their software needed constant internet or locked them into platforms they couldn&apos;t control.
                </p>
                <p>
                  We believe in giving clients their code. No hidden dependencies, no vendor lock-in, full IRD compliance from day one. Your team should be able to read, maintain, and extend the code without calling us back.
                </p>
                <p>
                  We mainly serve Nepal, where our software is IRD-compliant by design. We sometimes take on projects elsewhere in South Asia, especially where bad connectivity is a real problem.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <blockquote
                className="mt-8 text-lg italic leading-relaxed pl-6 py-2"
                style={{
                  color: '#1a1a1a',
                  borderLeft: '3px solid #c8f07d',
                }}
              >
                We build software the way infrastructure should be built — with the assumption that conditions will be imperfect, and the system must work anyway.
              </blockquote>
            </ScrollReveal>
          </div>

          {/* Image */}
          <ScrollReveal delay={0.15}>
            <img
              src="/assets/team-office.jpg"
              alt="CivoraX team working in their modern Dharan office"
              className="w-full rounded-2xl object-cover aspect-[4/3]"
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
