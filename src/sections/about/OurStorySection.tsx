import Image from 'next/image'
import ScrollReveal from '../../components/ScrollReveal'

export default function OurStorySection() {
  return (
    <section className="section-padding bg-white dark:bg-bg-primary">
      <div className="content-max-width">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <ScrollReveal>
              <span className="label-text text-accent-dark">OUR STORY</span>
              <h2 className="mt-4 text-3xl md:text-[42px] font-bold leading-tight text-text-primary tracking-tight">
                How We Started
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-text-body">
                <p>
                  CivoraX was founded in 2026 in Dharan by Dheeraj Uparkoti and a group of engineers who grew up watching businesses in Koshi Province struggle with software that assumed perfect conditions: stable internet, reliable power, IT staff who could troubleshoot on the fly.
                </p>
                <p>
                  Most of that software was built somewhere else, for someone else&apos;s infrastructure. It didn&apos;t account for load-shedding. It didn&apos;t work offline. It locked businesses into subscriptions they couldn&apos;t exit and platforms they couldn&apos;t control.
                </p>
                <p>
                  CivoraX started to fix that. Every system we build is owned entirely by the client. No subscriptions, no forced updates, no vendor leverage. IRD compliance is built in from day one.
                </p>
                <p>
                  Based in Dharan, serving Nepal, sometimes taking on projects elsewhere in South Asia where bad connectivity is a real constraint. Software built assuming conditions will be imperfect. Systems that must work anyway.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Image */}
          <ScrollReveal delay={0.15}>
            <Image
              src="/assets/team-office.jpg"
              alt="CivoraX team working in their Dharan office"
              width={800}
              height={600}
              className="w-full rounded-2xl object-cover aspect-[4/3]"
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
