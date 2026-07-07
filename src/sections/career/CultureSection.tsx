'use client'

import { Users, Target, Code2, MapPin, Zap, Heart } from 'lucide-react'
import ScrollReveal from '../../components/ScrollReveal'

const values = [
  {
    icon: Users,
    title: 'Direct Mentorship',
    description: 'Work directly with senior engineers. No layers of management between you and the work.',
    tag: 'Growth',
    accent: '#365314',
  },
  {
    icon: Target,
    title: 'Meaningful Impact',
    description: 'Your code keeps shops running during load-shedding. Real consequences.',
    tag: 'Purpose',
    accent: '#84cc16',
  },
  {
    icon: Code2,
    title: 'Production Over Demos',
    description: 'We ship code that runs in real shops. No throwaway prototypes.',
    tag: 'Engineering',
    accent: '#65a30d',
  },
  {
    icon: MapPin,
    title: 'Local Roots',
    description: 'Built in Dharan for Koshi Province. If you\'re from here, you understand the problems we solve.',
    tag: 'Community',
    accent: '#4d7c0f',
  },
  {
    icon: Zap,
    title: 'Move Fast, Stay Solid',
    description: 'Weeks, not months. We deploy quickly but never cut corners on reliability.',
    tag: 'Speed',
    accent: '#a3e635',
  },
  {
    icon: Heart,
    title: 'Own What You Build',
    description: 'Full source ownership for clients means your work has lasting value, not vendor lock-in.',
    tag: 'Ownership',
    accent: '#365314',
  },
]

export default function CultureSection() {
  return (
    <section className="section-padding bg-white dark:bg-bg-primary">
      <div className="content-max-width">
        <ScrollReveal>
          <div className="text-center max-w-[720px] mx-auto">
            <span className="label-text text-accent-dark">WHY CIVORAX</span>
            <h2 className="mt-4 text-3xl md:text-[42px] font-bold leading-tight text-text-primary tracking-tight">
              We don&apos;t chase trends.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-text-body">
              We build offline-first systems for Nepal&apos;s infrastructure. Build software your community uses.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal stagger={0.12} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {values.map((v) => (
            <div
              key={v.title}
              className="rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 bg-bg-light"
              onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 24px rgba(54,83,20,0.12)' }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.boxShadow = 'none' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: v.accent }}
                >
                  <v.icon size={18} color="#fff" />
                </div>
                <span
                  className="text-xs font-medium px-2.5 py-1 rounded-full"
                  style={{ backgroundColor: `${v.accent}18`, color: v.accent }}
                >
                  {v.tag}
                </span>
              </div>
              <h3 className="text-lg font-semibold leading-snug text-text-primary">
                {v.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-text-body">
                {v.description}
              </p>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  )
}