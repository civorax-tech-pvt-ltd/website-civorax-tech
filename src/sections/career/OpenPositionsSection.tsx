'use client'

import { Code2, Smartphone, Bug, Users, ArrowRight } from 'lucide-react'
import SectionHeader from '../../components/SectionHeader'
import ScrollReveal from '../../components/ScrollReveal'
import Link from 'next/link'

const jobs = [
  {
    icon: Code2,
    title: 'Backend Engineer',
    meta: 'FULL-TIME',
    location: 'Dharan / Remote',
    description: 'Build server-side systems and transaction engines for offline-first POS and ERP deployments. Work on real production code that handles intermittent connectivity, branch synchronization, and IRD compliance logic.',
    accent: '#365314',
  },
  {
    icon: Smartphone,
    title: 'Mobile Engineer',
    meta: 'FULL-TIME',
    location: 'Dharan / Remote',
    description: 'Build Flutter-based interfaces for retail environments. Optimize for low-end Android devices and slow mobile connections across Koshi and Bagmati Province.',
    accent: '#84cc16',
  },
  {
    icon: Bug,
    title: 'QA Engineer',
    meta: 'FULL-TIME',
    location: 'Dharan / Remote',
    description: 'Test POS and ERP systems under real-world conditions. Write test cases for offline sync transitions, printer failures, and concurrent terminal conflicts. If it can break in a Dharan shop, you find it first.',
    accent: '#65a30d',
  },
  {
    icon: Users,
    title: 'HR & Operations Associate',
    meta: 'FULL-TIME',
    location: 'Dharan',
    description: 'Support hiring, onboarding, and studio operations as the team grows. First point of contact for new engineers joining CivoraX.',
    accent: '#4d7c0f',
  },
]

export default function OpenPositionsSection() {
  return (
    <section id="openings" className="section-padding" style={{ backgroundColor: 'var(--bg-light)' }}>
      <div className="content-max-width">
        <ScrollReveal>
          <SectionHeader
            label="OPEN POSITIONS"
            heading="Join the Studio"
            subheading="We're looking for engineers who want to build production systems — not polished demos."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {jobs.map((job) => (
            <ScrollReveal key={job.title}>
              <div
                className="rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col cursor-pointer"
                style={{ backgroundColor: '#f5f5f5', border: '1px solid var(--border-light)' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 24px rgba(54,83,20,0.12)' }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.boxShadow = 'none' }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: job.accent }}
                    >
                      <job.icon size={18} color="#fff" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold" style={{ color: 'var(--bg-primary)' }}>
                        {job.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span
                          className="text-xs font-medium px-2 py-0.5 rounded-full"
                          style={{ backgroundColor: `${job.accent}18`, color: job.accent }}
                        >
                          {job.meta}
                        </span>
                        <span className="text-xs" style={{ color: 'var(--text-tertiary)' }}>
                          {job.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-[15px] leading-relaxed flex-1" style={{ color: 'var(--text-body)' }}>
                  {job.description}
                </p>

                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-1 mt-6 label-text transition-colors duration-200"
                  style={{ color: 'var(--accent-dark)' }}
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
