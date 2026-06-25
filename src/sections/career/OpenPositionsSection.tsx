import { Code2, Smartphone, Bug, Users, ArrowRight } from 'lucide-react'
import SectionHeader from '../../components/SectionHeader'
import ScrollReveal from '../../components/ScrollReveal'
import Link from 'next/link'

const jobs = [
  {
    icon: Code2,
    title: 'Backend Engineer',
    meta: 'FULL-TIME · DHARAN / REMOTE',
    description: 'Build server-side systems and transaction engines for offline-first POS and ERP deployments. Work on real production code that handles intermittent connectivity, branch synchronization, and IRD compliance logic.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Engineer',
    meta: 'FULL-TIME · DHARAN / REMOTE',
    description: 'Build Flutter-based interfaces for retail environments. Optimize for low-end Android devices and slow mobile connections across Koshi and Bagmati Province.',
  },
  {
    icon: Bug,
    title: 'QA Engineer',
    meta: 'FULL-TIME · DHARAN / REMOTE',
    description: 'Test POS and ERP systems under real-world conditions. Write test cases for offline sync transitions, printer failures, and concurrent terminal conflicts. If it can break in a Dharan shop, you find it first.',
  },
  {
    icon: Users,
    title: 'HR & Operations Associate',
    meta: 'FULL-TIME · DHARAN',
    description: 'Support hiring, onboarding, and studio operations as the team grows. First point of contact for new engineers joining CivoraX.',
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
                  href="/contact"
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
