import Image from 'next/image'
import SectionHeader from '../../components/SectionHeader'
import ScrollReveal from '../../components/ScrollReveal'

const departments = [
  {
    name: 'ENGINEERING',
    members: [
      {
        name: 'Dheeraj Uparkoti',
        role: 'Founder & Lead Engineer',
        description: 'Leads system architecture across desktop, mobile, and web platforms.',
        image: '/assets/profile_picture/dheeraj.png',
      },
      {
        name: 'Saugat Dhungana',
        role: 'Full Stack AI Engineer',
        description: 'Builds AI integrations, data pipelines, and client-facing web portals.',
        image: '/assets/profile_picture/saugat.jpg',
      },
      {
        name: 'Pooja Dhungana',
        role: 'Backend Engineer',
        description: 'Keeps POS and ERP data consistent across branches and reconnections.',
        image: '/assets/profile_picture/pooja.png',
      },
      {
        name: 'Nikesh Dhakal',
        role: 'Backend Engineer',
        description: 'Handles branch sync, inventory systems, and API reliability.',
        image: '/assets/profile_picture/nikesh.jpeg',
      },
      {
        name: 'Dipendra Dhami',
        role: 'Full Stack Engineer',
        description: 'Builds client portals, admin dashboards, and custom web systems.',
        image: '/assets/profile_picture/dipendra.jpg',
      },
      {
        name: 'Pushpalata Yadav',
        role: 'Full Stack Engineer',
        description: 'Works on POS dashboards, API integrations, and client portals.',
        image: '',
      },
    ],
  },
  {
    name: 'MOBILE APP DEVELOPMENT',
    members: [
      {
        name: 'Bhuwan Dahal',
        role: 'Flutter Developer',
        description: 'Builds cross-platform mobile apps optimized for budget Android devices.',
        image: '',
      },
    ],
  },
  {
    name: 'DATA & AI',
    members: [
      {
        name: 'Arjun Yadav',
        role: 'Data Scientist',
        description: 'Builds analytics pipelines and demand forecasting models.',
        image: '',
      },
    ],
  },
  {
    name: 'QA & DELIVERY',
    members: [
      {
        name: 'Aman Bhujel',
        role: 'QA Engineer',
        description: 'Tests edge cases like offline sync, printer failures, and terminal conflicts.',
        image: '/assets/profile_picture/aman.jpg',
      },
      {
        name: 'Binita Sangroula',
        role: 'QA Intern',
        description: 'Supports test documentation, regression testing, and UAT.',
        image: '/assets/profile_picture/binita.png',
      },
    ],
  },
  {
    name: 'FRONTEND & DESIGN',
    members: [
      {
        name: 'Anil Tajpuriya',
        role: 'Frontend Engineer',
        description: 'Builds responsive POS and ERP dashboard interfaces.',
        image: '/assets/profile_picture/anil.jpg',
      },
      {
        name: 'Parbin Pokharel',
        role: 'Product Designer',
        description: 'Designs workflows based on how staff actually use the software.',
        image: '/assets/profile_picture/parbin.jpg',
      },
    ],
  },
  {
    name: 'OPERATIONS & PROJECT',
    members: [
      {
        name: 'Anup Ghimire',
        role: 'Project Manager',
        description: 'Manages delivery timelines, client communication, and scope.',
        image: '/assets/profile_picture/anup.jpg',
      },
    ],
  },
  {
    name: 'HR & PEOPLE',
    members: [
      {
        name: 'Neelam Ghimire',
        role: 'HR Manager',
        description: 'Handles hiring, onboarding, and studio culture.',
        image: '/assets/profile_picture/neelam.jpeg',
      },
    ],
  },
]

function getInitials(name: string) {
  return name.split(' ').map((n) => n[0]).join('').slice(0, 2)
}

export default function TeamSection() {
  return (
    <section className="section-padding bg-white dark:bg-bg-primary">
      <div className="content-max-width">
        <ScrollReveal>
          <SectionHeader
            label="THE TEAM"
            heading="7 Departments. One Studio."
            subheading="14 engineers and professionals. Every person ships real work."
          />
        </ScrollReveal>

        <div className="mt-16 space-y-16">
          {departments.map((dept) => (
            <ScrollReveal key={dept.name}>
              <div className="mb-6">
                <span
                  className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 label-text bg-accent-badge text-accent-badge-text"
                >
                  {dept.name}
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
                {dept.members.map((member) => (
                  <div key={member.name} className="group flex flex-col items-center text-center">
                    <div className="w-36 h-36 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                      {member.image ? (
                        <Image
                          src={member.image}
                          alt={`${member.name} — ${member.role}`}
                          width={144}
                          height={144}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      ) : (
                        <span className="text-3xl font-bold text-accent-badge-text">
                          {getInitials(member.name)}
                        </span>
                      )}
                    </div>
                    <h3 className="mt-4 text-[15px] font-semibold text-text-primary">
                      {member.name}
                    </h3>
                    <p className="label-text mt-1 text-accent-dark text-[11px]">
                      {member.role}
                    </p>
                    <p className="text-[13px] mt-1.5 leading-relaxed max-w-[220px] text-text-tertiary">
                      {member.description}
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
