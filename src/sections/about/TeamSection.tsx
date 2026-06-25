import SectionHeader from '../../components/SectionHeader'
import ScrollReveal from '../../components/ScrollReveal'

const team = [
  {
    name: 'Saugat Dhungana',
    role: 'FOUNDER & LEAD ENGINEER',
    bio: 'Full-stack engineer focused on offline-first systems and apps that work on slow connections. Leads architecture decisions and works directly with clients.',
    focus: 'System Architecture & Offline Sync',
    image: '/assets/team-saugat.jpg',
  },
  {
    name: 'Dheeraj Uparkoti',
    role: 'BACKEND ENGINEER',
    bio: 'Handles servers and databases. Builds Go sync engines that keep branches connected when internet and power are unreliable.',
    focus: 'Go Engines & DB Infrastructure',
    image: '/assets/team-dheeraj.jpg',
  },
  {
    name: 'Aarav Thapa',
    role: 'FRONTEND ENGINEER',
    bio: 'Frontend engineer who builds responsive, accessible interfaces that work well on cheap phones and slow mobile connections in Nepal.',
    focus: 'Mobile-First UI & Accessibility',
    image: '/assets/team-aarav.jpg',
  },
]

export default function TeamSection() {
  return (
    <section className="section-padding bg-white">
      <div className="content-max-width">
        <ScrollReveal>
          <SectionHeader
            label="THE TEAM"
            heading="Meet Our Team"
            subheading="Six engineers. No account managers. Every person you talk to is a builder."
          />
        </ScrollReveal>

        <ScrollReveal stagger={0.12} className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {team.map((member) => (
            <div
              key={member.name}
              className="rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1"
              style={{ backgroundColor: '#f5f5f5' }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-20 h-20 rounded-full object-cover mb-5"
              />
              <h3 className="text-[22px] font-semibold" style={{ color: '#1a1a1a' }}>
                {member.name}
              </h3>
              <p className="label-text mt-1" style={{ color: '#6b7280' }}>
                {member.role}
              </p>
              <div className="my-5 h-px" style={{ backgroundColor: '#e5e5e5' }} />
              <p className="text-sm leading-relaxed" style={{ color: '#6b7280' }}>
                {member.bio}
              </p>
              <p className="label-text mt-4" style={{ color: '#6b7280', fontSize: '10px' }}>
                FOCUS
              </p>
              <p className="text-[13px] font-medium mt-1" style={{ color: '#1a1a1a' }}>
                {member.focus}
              </p>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  )
}
