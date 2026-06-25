import { Users, Target } from 'lucide-react'
import ScrollReveal from '../../components/ScrollReveal'

const values = [
  {
    icon: Users,
    title: 'Direct Mentorship',
    description: 'Work directly with senior engineers. No layers of management between you and the work.',
  },
  {
    icon: Target,
    title: 'Meaningful Impact',
    description: 'Your code keeps shops running during load-shedding. Real consequences, real satisfaction.',
  },
]

export default function CultureSection() {
  return (
    <section className="section-padding bg-white">
      <div className="content-max-width max-w-[800px] mx-auto text-center">
        <ScrollReveal>
          <span className="label-text" style={{ color: '#8ab53d' }}>WHY CIVORAX</span>
          <h2 className="mt-4 text-3xl md:text-[42px] font-bold leading-tight" style={{ color: '#1a1a1a', letterSpacing: '-0.01em' }}>
            We don&apos;t chase trends.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mt-6 space-y-4 text-base leading-relaxed" style={{ color: '#6b7280' }}>
            <p>
              We build offline-first systems that survive Nepal&apos;s real infrastructure — intermittent power, unreliable internet, and IRD compliance requirements that most software ignores entirely.
            </p>
            <p>
              If you are from Dharan, Itahari, Biratnagar, or anywhere in Koshi Province and you want to build software that your own community actually uses, this is that place.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal stagger={0.12} className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 text-left">
          {values.map((v) => (
            <div
              key={v.title}
              className="rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1"
              style={{ backgroundColor: '#f5f5f5' }}
            >
              <v.icon size={28} style={{ color: '#8ab53d' }} />
              <h3 className="mt-4 text-[22px] font-semibold" style={{ color: '#1a1a1a' }}>
                {v.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: '#6b7280' }}>
                {v.description}
              </p>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  )
}
