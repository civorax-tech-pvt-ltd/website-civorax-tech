'use client'

import Image from 'next/image'
import { useState } from 'react'
import ScrollReveal from '../../components/ScrollReveal'

const departments = [
  {
    name: 'LEADERSHIP',
    members: [
      {
        name: 'Dheeraj Uparkoti',
        role: 'Founder & Lead Engineer',
        image: '/assets/profile_picture/dheeraj.png',
      },
      {
        name: 'Saugat Dhungana',
        role: 'Chief Technical Officer',
        image: '/assets/profile_picture/saugat.jpg',
      },
      {
        name: 'Anup Ghimire',
        role: 'Project Manager',
        image: '/assets/profile_picture/anup.jpg',
      },
    ],
  },
  {
    name: 'OPERATIONS & PEOPLE',
    members: [
      {
        name: 'Neelam Ghimire',
        role: 'HR Manager',
        image: '/assets/profile_picture/neelam.jpeg',
      },
    ],
  },
  {
    name: 'PUBLIC RELATIONS',
    members: [
      {
        name: 'Raaj Budathoki',
        role: 'PR Officer',
        image: '/assets/profile_picture/Raaj Budathoki.jpg',
      },
    ],
  },
  {
    name: 'ENGINEERING',
    members: [
      {
        name: 'Pooja Dhungana',
        role: 'Backend Engineer',
        image: '/assets/profile_picture/pooja.png',
      },
      {
        name: 'Nikesh Dhakal',
        role: 'Backend Engineer',
        image: '/assets/profile_picture/nikesh.jpeg',
      },
      {
        name: 'Dipendra Dhami',
        role: 'Full Stack Engineer',
        image: '/assets/profile_picture/dipendra.jpg',
      },
      {
        name: 'Pushpalata Yadav',
        role: 'Full Stack Engineer',
        image: '',
      },
      {
        name: 'Bhuwan Dahal',
        role: 'Flutter Developer',
        image: '',
      },
      {
        name: 'Arjun Yadav',
        role: 'Data Scientist',
        image: '',
      },
    ],
  },
  {
    name: 'DESIGN & PRODUCT',
    members: [
      {
        name: 'Anil Tajpuriya',
        role: 'Frontend Engineer',
        image: '/assets/profile_picture/anil.jpg',
      },
      {
        name: 'Parbin Pokharel',
        role: 'Product Designer',
        image: '/assets/profile_picture/parbin.jpg',
      },
      {
        name: 'Aman Bhujel',
        role: 'QA Engineer',
        image: '/assets/profile_picture/aman.jpg',
      },
      {
        name: 'Binita Sangroula',
        role: 'QA Intern',
        image: '/assets/profile_picture/binita.png',
      },
    ],
  },
]

const allDepartments = ['ALL', ...departments.map((d) => d.name)]

function getInitials(name: string) {
  return name.split(' ').map((n) => n[0]).join('').slice(0, 2)
}

export default function TeamSection() {
  const [activeFilter, setActiveFilter] = useState('ALL')

  const filteredDepartments = activeFilter === 'ALL'
    ? [{ name: 'ALL', members: departments.flatMap((d) => d.members) }]
    : departments.filter((d) => d.name === activeFilter)

  return (
    <section className="section-padding bg-white dark:bg-bg-primary">
      <div className="content-max-width">
        <ScrollReveal>
          <div className="mb-12">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-text-primary">
              Meet the <span className="font-bold">team.</span>
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mb-12 overflow-x-auto scrollbar-hide">
            <div className="flex gap-2 min-w-max pb-2">
              {allDepartments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setActiveFilter(dept)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                    activeFilter === dept
                      ? 'bg-accent text-white shadow-md'
                      : 'bg-bg-light dark:bg-bg-secondary text-text-secondary hover:text-text-primary hover:bg-bg-secondary dark:hover:bg-bg-card'
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <div className="space-y-16">
          {filteredDepartments.map((dept) => (
            <ScrollReveal key={dept.name}>
              {activeFilter !== 'ALL' && (
                <div className="mb-8">
                  <span className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 label-text bg-accent-badge text-accent-badge-text">
                    {dept.name}
                  </span>
                </div>
              )}

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 lg:gap-8">
                {dept.members.map((member) => (
                  <div key={member.name} className="group flex flex-col items-center text-center">
                    <div className="relative w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 mx-auto">
                      <div className="w-full h-full rounded-full overflow-hidden border-4 border-border-light dark:border-border-dark group-hover:border-accent transition-all duration-300">
                        {member.image ? (
                          <Image
                            src={member.image}
                            alt={member.name}
                            width={160}
                            height={160}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-bg-light dark:bg-bg-secondary flex items-center justify-center">
                            <span className="text-2xl sm:text-3xl font-bold text-accent">
                              {getInitials(member.name)}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                    <h3 className="mt-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-text-primary">
                      {member.name}
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm text-accent font-medium">
                      {member.role}
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
