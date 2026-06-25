import SectionHeader from '../../components/SectionHeader'
import ScrollReveal from '../../components/ScrollReveal'

const departments = [
  {
    name: 'ENGINEERING',
    members: [
      {
        name: 'Dheeraj Uparkoti',
        role: 'Founder & Lead Engineer',
        bio: 'Twelve years building production software across desktop, mobile, and web. Started with C# enterprise applications, expanded into Flutter mobile apps and full-stack web systems. Every major architecture decision at CivoraX goes through him. Clients work with him directly, not through layers of management.',
        focus: 'System Architecture · C# · Flutter · Full Stack',
      },
      {
        name: 'Saugat Dhungana',
        role: 'Full Stack AI Engineer',
        bio: 'Full-stack engineer with a focus on AI integration and backend systems. Builds the intelligence layer — recommendation engines, automated reporting, and the data pipelines that make our dashboards actually useful. Handles client-facing web portals end to end.',
        focus: 'AI Systems · Python · Full Stack · API Design',
      },
      {
        name: 'Pooja Dhungana',
        role: 'Backend Engineer',
        bio: 'Builds the server-side systems that keep POS and ERP data consistent across branches. Focused on API reliability, data integrity, and making sure sync conflicts resolve correctly when branches reconnect after outages.',
        focus: 'Backend APIs · Data Integrity · System Reliability',
      },
      {
        name: 'Anil Tajpuriya',
        role: 'Backend Engineer',
        bio: 'Works on the core billing and transaction engine. Handles IRD integration logic, VAT computation pipelines, and the audit trail systems that keep clients compliant without any manual work.',
        focus: 'Billing Systems · IRD Compliance · Transaction Engines',
      },
      {
        name: 'Sandip Nembang',
        role: 'Mobile Engineer',
        bio: 'Builds the Flutter-based mobile interfaces for our POS and ERP systems. Optimizes for low-end Android devices common in Koshi and Bagmati retail environments. If it needs to work on a Rs. 12,000 phone, Sandip makes it work.',
        focus: 'Flutter · Android · Low-bandwidth Mobile UI',
      },
      {
        name: 'Dipendra Dhami',
        role: 'Full Stack Engineer',
        bio: 'Works across both frontend and backend depending on what the project needs. Handles client portal development, admin dashboards, and custom web systems for businesses that need something beyond our standard products.',
        focus: 'Full Stack · Web Portals · Admin Systems',
      },
      {
        name: 'Parbin Pokharel',
        role: 'Database Engineer',
        bio: 'Designs and maintains the database infrastructure across all deployments. Handles schema design, query optimization, and the offline-first data layer that makes our sync engine reliable under real-world conditions.',
        focus: 'PostgreSQL · Database Architecture · Offline Sync Layer',
      },
    ],
  },
  {
    name: 'QA & DELIVERY',
    members: [
      {
        name: 'Neelam Ghimire',
        role: 'QA Lead',
        bio: 'Runs quality assurance across every product release. Writes test plans, manages UAT with clients, and is the last line of defence before anything ships. If a bug makes it past Neelam, it was genuinely hard to find.',
        focus: 'Test Planning · UAT · Release Quality',
      },
      {
        name: 'Aman Bhujel',
        role: 'QA Engineer',
        bio: 'Handles day-to-day testing across the POS and ERP systems. Specializes in edge cases — offline-to-online sync transitions, printer failures, concurrent terminal conflicts — the scenarios that only show up in real retail environments.',
        focus: 'Manual Testing · Edge Cases · Regression',
      },
    ],
  },
  {
    name: 'PRODUCT & DESIGN',
    members: [
      {
        name: 'Jagat Bhusal',
        role: 'Product Designer',
        bio: 'Translates client operational workflows into interfaces that non-technical staff can actually use. Spends time in client locations watching how billing staff and shop owners interact with screens before designing anything.',
        focus: 'UX Research · Interface Design · Workflow Mapping',
      },
    ],
  },
  {
    name: 'OPERATIONS & PROJECT',
    members: [
      {
        name: 'Anup Ghimire',
        role: 'Project Manager',
        bio: 'Keeps every engagement on track. Owns the delivery timeline, manages client communication, and makes sure what gets promised gets shipped. Has a low tolerance for scope creep and a high tolerance for client phone calls at odd hours.',
        focus: 'Project Delivery · Client Communication · Timelines',
      },
    ],
  },
  {
    name: 'HR & PEOPLE',
    members: [
      {
        name: 'Binita Sangroula',
        role: 'HR Manager',
        bio: 'Handles hiring, onboarding, and everything that keeps the team running smoothly as we grow. The first person new engineers meet at CivoraX and usually the reason they stay.',
        focus: 'Hiring · People Operations · Studio Culture',
      },
    ],
  },
]

function getInitials(name: string) {
  return name.split(' ').map((n) => n[0]).join('').slice(0, 2)
}

export default function TeamSection() {
  return (
    <section className="section-padding bg-white">
      <div className="content-max-width">
        <ScrollReveal>
          <SectionHeader
            label="THE TEAM"
            heading="5 Departments. One Studio."
            subheading="11 engineers and professionals. Every person ships real work."
          />
        </ScrollReveal>

        <div className="mt-16 space-y-16">
          {departments.map((dept) => (
            <ScrollReveal key={dept.name}>
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-2">
                  <span
                    className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 label-text"
                    style={{ backgroundColor: '#f0f7e0', color: '#5a7a2a' }}
                  >
                    {dept.name}
                  </span>
                  <span className="label-text" style={{ color: '#9ca3af' }}>
                    {dept.members.length} {dept.members.length === 1 ? 'member' : 'members'}
                  </span>
                </div>
              </div>

              <div className={`grid grid-cols-1 gap-6 ${
                dept.members.length <= 2 ? 'md:grid-cols-2' :
                dept.members.length <= 3 ? 'md:grid-cols-3' :
                'md:grid-cols-2 lg:grid-cols-3'
              }`}>
                {dept.members.map((member) => (
                  <div
                    key={member.name}
                    className="rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1"
                    style={{ backgroundColor: '#f5f5f5' }}
                  >
                    <div className="flex items-center gap-4 mb-5">
                      <div
                        className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: '#e8f5e0' }}
                      >
                        <span className="text-base font-bold" style={{ color: '#5a7a2a' }}>
                          {getInitials(member.name)}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold" style={{ color: '#1a1a1a' }}>
                          {member.name}
                        </h3>
                        <p className="label-text" style={{ color: '#6b7280', fontSize: '11px' }}>
                          {member.role}
                        </p>
                      </div>
                    </div>

                    <div className="my-4 h-px" style={{ backgroundColor: '#e5e5e5' }} />

                    <p className="text-sm leading-relaxed" style={{ color: '#6b7280' }}>
                      {member.bio}
                    </p>

                    <p className="label-text mt-4" style={{ color: '#9ca3af', fontSize: '10px' }}>
                      FOCUS
                    </p>
                    <p className="text-[13px] font-medium mt-1" style={{ color: '#1a1a1a' }}>
                      {member.focus}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
