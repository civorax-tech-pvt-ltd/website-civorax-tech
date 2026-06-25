import { WifiOff, Lock, Zap } from 'lucide-react'
import SectionHeader from '../../components/SectionHeader'
import ScrollReveal from '../../components/ScrollReveal'

const steps = [
  {
    icon: WifiOff,
    title: 'Offline-First Design',
    description: 'Transactions queue locally and sync cleanly when links return. Your business never stops, even when the internet does.',
  },
  {
    icon: Lock,
    title: 'IRD-Ready Billing',
    description: 'Built-in VAT compliance, consecutive secure invoice codes, and instant audit-ready XML reports. No configuration headaches.',
  },
  {
    icon: Zap,
    title: 'Rapid Deployment',
    description: 'From first call to live system in weeks, not months. Named engineers, weekly calls, transparent progress.',
  },
]

export default function HowItWorksSection() {
  return (
    <section className="section-padding bg-white">
      <div className="content-max-width">
        <ScrollReveal>
          <SectionHeader
            label="HOW IT WORKS"
            heading="How CivoraX Systems Work"
            subheading="Your trusted partner in building software that works under Nepal's real conditions."
          />
        </ScrollReveal>

        <ScrollReveal stagger={0.12} className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {steps.map((step) => (
            <div
              key={step.title}
              className="text-center rounded-2xl p-10 transition-all duration-300 hover:-translate-y-1"
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e5e5e5',
              }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mx-auto"
                style={{ backgroundColor: '#f0f7e0' }}
              >
                <step.icon size={22} style={{ color: '#8ab53d' }} />
              </div>
              <h3 className="mt-6 text-[22px] font-semibold" style={{ color: '#1a1a1a' }}>
                {step.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed" style={{ color: '#6b7280' }}>
                {step.description}
              </p>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  )
}
