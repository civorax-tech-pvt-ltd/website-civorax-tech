import { Code2, Layout, ArrowRight } from 'lucide-react'
import SectionHeader from '../../components/SectionHeader'
import ScrollReveal from '../../components/ScrollReveal'
import { Link } from 'react-router-dom'

const jobs = [
  {
    icon: Code2,
    title: 'Backend Engineer',
    meta: 'FULL-TIME • DHARAN / REMOTE',
    description: 'Build Go-based sync engines and PostgreSQL infrastructure for offline-first systems. Work on real production code that handles intermittent connectivity and branch synchronization.',
  },
  {
    icon: Layout,
    title: 'Frontend Engineer',
    meta: 'FULL-TIME • DHARAN / REMOTE',
    description: 'Craft responsive, accessible interfaces for retail POS and ERP dashboards. Optimize for low-bandwidth, mobile-first experiences across Nepali market devices.',
  },
]

export default function OpenPositionsSection() {
  return (
    <section id="openings" className="section-padding" style={{ backgroundColor: '#f5f5f5' }}>
      <div className="content-max-width">
        <ScrollReveal>
          <SectionHeader
            label="OPEN POSITIONS"
            heading="Join the Studio"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {jobs.map((job) => (
            <ScrollReveal key={job.title}>
              <div
                className="bg-white rounded-2xl p-8 md:p-10 transition-all duration-300 hover:-translate-y-1 h-full"
                style={{ border: '1px solid #e5e5e5' }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: '#f0f7e0' }}
                >
                  <job.icon size={22} style={{ color: '#8ab53d' }} />
                </div>

                <h3 className="mt-5 text-[22px] font-semibold" style={{ color: '#1a1a1a' }}>
                  {job.title}
                </h3>
                <p className="label-text mt-2" style={{ color: '#6b7280' }}>
                  {job.meta}
                </p>

                <div className="my-5 h-px" style={{ backgroundColor: '#e5e5e5' }} />

                <p className="text-sm leading-relaxed" style={{ color: '#6b7280' }}>
                  {job.description}
                </p>

                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-1 mt-6 label-text transition-colors duration-200 hover:text-[#8ab53d]"
                  style={{ color: '#1a1a1a' }}
                >
                  Apply Now
                  <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
