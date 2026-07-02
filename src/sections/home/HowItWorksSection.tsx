'use client'

import { WifiOff, Lock, Zap, Shield, BarChart3, Settings2 } from 'lucide-react'
import SectionHeader from '../../components/SectionHeader'
import ScrollReveal from '../../components/ScrollReveal'

const steps = [
  {
    icon: WifiOff,
    title: 'Offline-First Sync',
    description: 'Transactions queue locally and sync automatically when the connection returns. Built on a Go-based sync engine that keeps branch data consistent even over unreliable networks.',
    tag: 'Core Infrastructure',
    accent: '#365314',
  },
  {
    icon: Lock,
    title: 'IRD-Ready Billing',
    description: 'Automated VAT computation, consecutive secure invoice numbering, and one-click XML reports that pass IRD audits. No manual configuration.',
    tag: 'Compliance',
    accent: '#84cc16',
  },
  {
    icon: Zap,
    title: 'Rapid Deployment',
    description: 'From first call to live system in weeks, not months. Named engineers, weekly calls, transparent progress.',
    tag: 'Process',
    accent: '#65a30d',
  },
  {
    icon: Shield,
    title: 'Enterprise-Grade Security',
    description: 'End-to-end encryption, role-based access, and full audit trails. Your data stays yours.',
    tag: 'Security',
    accent: '#365314',
  },
  {
    icon: BarChart3,
    title: 'Real-Time Analytics',
    description: 'Live dashboards for transaction volumes, branch performance, inventory levels, and compliance status — across every location.',
    tag: 'Intelligence',
    accent: '#4d7c0f',
  },
  {
    icon: Settings2,
    title: 'Full Source Ownership',
    description: 'No subscriptions, no lock-in. We build it, you keep the code, forever.',
    tag: 'Ownership',
    accent: '#84cc16',
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
            subheading="Built for the conditions our clients actually work in — not the conditions software usually assumes."
          />
        </ScrollReveal>

        <ScrollReveal stagger={0.12} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
          {steps.map((step) => (
            <div
              key={step.title}
              className="rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              style={{ backgroundColor: '#f5f5f5' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 24px rgba(54,83,20,0.15)' }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.boxShadow = 'none' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: step.accent }}
                >
                  <step.icon size={18} color="#fff" />
                </div>
                <span
                  className="text-xs font-medium px-2.5 py-1 rounded-full"
                  style={{ backgroundColor: `${step.accent}18`, color: step.accent }}
                >
                  {step.tag}
                </span>
              </div>
              <h3 className="text-lg font-semibold leading-snug" style={{ color: 'var(--bg-primary)' }}>
                {step.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed" style={{ color: 'var(--text-body)' }}>
                {step.description}
              </p>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  )
}
