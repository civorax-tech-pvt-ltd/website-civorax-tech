import { Shield, Cpu, BarChart3, Receipt } from 'lucide-react'
import SectionHeader from '../../components/SectionHeader'
import ScrollReveal from '../../components/ScrollReveal'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Enterprise-Grade Security',
    description: 'End-to-end encryption, role-based access controls, and audit trails. Your data stays yours — always.',
  },
  {
    icon: Cpu,
    title: 'Offline Sync Engine',
    description: 'Our proprietary Go-based sync engine handles intermittent connectivity gracefully. Branch data stays consistent even across unreliable networks.',
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
]

export default function KeyFeaturesSection() {
  return (
    <section className="section-padding" style={{ backgroundColor: '#f5f5f5' }}>
      <div className="content-max-width">
        <ScrollReveal>
          <SectionHeader
            label="KEY FEATURES"
            heading="Built for Nepal's Reality"
            subheading="Every feature designed around the constraints our clients actually face — intermittent power, slow connections, and complex compliance."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          {features.map((feature, i) => (
            <ScrollReveal key={feature.title} delay={i % 2 === 0 ? 0 : 0.15}>
              <div
                className="bg-white rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 h-full"
                style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}
              >
                <div className="flex items-start gap-5">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#f0f7e0' }}
                  >
                    <feature.icon size={18} style={{ color: '#8ab53d' }} />
                  </div>
                  <div>
                    <h3 className="text-[22px] font-semibold" style={{ color: '#1a1a1a' }}>
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-[15px] leading-relaxed" style={{ color: '#6b7280' }}>
                      {feature.description}
                    </p>
                    <Link
                      to="/products"
                      className="group inline-flex items-center gap-1 mt-4 label-text transition-colors duration-200 hover:text-[#8ab53d]"
                      style={{ color: '#1a1a1a' }}
                    >
                      Learn More
                      <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
