import { Shield, Cpu, BarChart3, Receipt, Zap, Settings2 } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Enterprise-Grade Security',
    description: 'End-to-end encryption, role-based access controls, and audit trails. You keep all data.',
  },
  {
    icon: Cpu,
    title: 'Offline Sync Engine',
    description: 'Our proprietary Go-based sync engine handles intermittent connectivity. Branch data stays consistent even across unreliable networks.',
  },
  {
    icon: BarChart3,
    title: 'Real-Time Analytics',
    description: 'Live dashboards showing transaction volumes, branch performance, inventory levels, and compliance status across all locations.',
  },
  {
    icon: Receipt,
    title: 'IRD-Approved Tax Logging',
    description: 'Automated VAT computation, consecutive invoice numbering, and one-click XML generation that passes IRD audits every time.',
  },
  {
    icon: Zap,
    title: 'Rapid Deployment',
    description: 'From first call to live system in weeks, not months. Named engineers, weekly calls, transparent progress.',
  },
  {
    icon: Settings2,
    title: 'Full Source Ownership',
    description: 'No subscriptions, no lock-in. You own the code. We build it, you keep it.',
  },
]

export function Features() {
  return (
    <div>
      <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
        <h2 className="text-balance text-4xl font-medium lg:text-5xl text-text-primary">
          Built for Nepal&apos;s Reality
        </h2>
        <p className="text-text-body">
          Every feature designed around the constraints our clients face: intermittent power, slow connections, complex compliance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="text-center rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 bg-bg-white border border-border-light shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
          >
            <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto bg-accent-badge">
              <feature.icon size={22} className="text-accent-dark" />
            </div>
            <h3 className="mt-6 text-[22px] font-semibold text-bg-primary">
              {feature.title}
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-text-body">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}