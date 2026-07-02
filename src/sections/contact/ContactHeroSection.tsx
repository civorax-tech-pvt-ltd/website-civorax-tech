import { Clock, Shield, Ban } from 'lucide-react'
import ScrollReveal from '../../components/ScrollReveal'

const badges = [
  { icon: Clock, text: '< 24H REPLY' },
  { icon: Shield, text: 'ENCRYPTED TRANSIT' },
  { icon: Ban, text: 'NO SALES FUNNEL' },
]

const slaItems = [
  { label: 'INQUIRY RESPONSE', sub: 'On business days', value: '< 24 hours' },
  { label: 'ARCHITECTURE AUDIT', sub: 'After discovery call', value: '5-7 days' },
  { label: 'INCIDENT RESPONSE', sub: 'For production clients', value: '< 4 hours' },
  { label: 'QUARTERLY REVIEW', sub: 'Active engagements only', value: 'Every 90 days' },
]

export default function ContactHeroSection() {
  return (
    <section style={{ backgroundColor: 'var(--bg-primary)', paddingTop: '160px', paddingBottom: '64px' }}>
      <div className="content-max-width px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <div>
            <ScrollReveal>
              <span className="label-text" style={{ color: 'var(--text-secondary)' }}>
                GET IN TOUCH — 06 / CONTACT STUDIO
              </span>
              <h1 className="mt-4 text-4xl sm:text-5xl md:text-[56px] font-bold leading-[1.1]" style={{ letterSpacing: '-0.02em' }}>
                <span className="text-white">Initiate your custom</span>
                <br />
                <em style={{ color: 'var(--accent-light)' }}>system scoping guide.</em>
              </h1>
              <p className="mt-6 text-base sm:text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                File an inquiry with our Dharan studio. State your regional warehouses, transaction scales, hardware inventory, or budget targets — our lead architects will construct an actionable technical proposal within the week.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.15} className="flex flex-wrap items-center gap-6 mt-8">
              {badges.map((badge) => (
                <div key={badge.text} className="flex items-center gap-2">
                  <badge.icon size={16} style={{ color: 'var(--text-secondary)' }} />
                  <span className="label-text" style={{ color: 'var(--text-secondary)' }}>{badge.text}</span>
                </div>
              ))}
            </ScrollReveal>
          </div>

          {/* Right — SLA Card */}
          <ScrollReveal delay={0.2}>
            <div
              className="rounded-2xl p-6 md:p-8"
              style={{ backgroundColor: 'var(--bg-secondary)' }}
            >
              {/* macOS dots */}
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: 'var(--terminal-red)' }} />
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: 'var(--yellow)' }} />
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: 'var(--terminal-green)' }} />
                <span className="font-mono text-[13px] ml-2" style={{ color: 'var(--text-secondary)' }}>RESPONSE.SLA</span>
              </div>

              {/* SLA Items */}
              <div className="divide-y" style={{ borderColor: 'var(--border-dark)' }}>
                {slaItems.map((item) => (
                  <div key={item.label} className="flex items-center justify-between py-5">
                    <div>
                      <p className="text-sm font-medium text-white">{item.label}</p>
                      <p className="text-xs mt-0.5" style={{ color: 'var(--text-secondary)' }}>{item.sub}</p>
                    </div>
                    <span className="font-mono text-base" style={{ color: 'var(--teal)' }}>
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--teal)' }} />
                <span className="label-text" style={{ color: 'var(--teal)', fontSize: '10px' }}>
                  STUDIO MONITORING • ALL CHANNELS ONLINE
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
