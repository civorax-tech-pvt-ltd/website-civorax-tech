import { Laptop, Clock, BookOpen, Coffee, MapPin, Shield } from 'lucide-react'
import SectionHeader from '../../components/SectionHeader'
import ScrollReveal from '../../components/ScrollReveal'

const perks = [
  {
    icon: Laptop,
    title: 'Equipment',
    description: 'MacBook or Linux setup — your choice. Whatever helps you ship faster.',
  },
  {
    icon: Clock,
    title: 'Flexible Hours',
    description: 'Core overlap hours, not rigid 9-to-5. We care about output, not attendance.',
  },
  {
    icon: BookOpen,
    title: 'Learning Budget',
    description: 'Annual budget for courses, conferences, and books. Grow your skills on our dime.',
  },
  {
    icon: Coffee,
    title: 'Team Culture',
    description: 'Weekly team syncs, monthly outings, and a office stocked with coffee and snacks.',
  },
  {
    icon: MapPin,
    title: 'Remote-Friendly',
    description: 'Work from Dharan HQ or remote. We have engineers across Koshi Province.',
  },
  {
    icon: Shield,
    title: 'Health Benefits',
    description: 'Health insurance coverage for you and your family.',
  },
]

export default function PerksSection() {
  return (
    <section className="section-padding bg-white dark:bg-bg-primary">
      <div className="content-max-width">
        <ScrollReveal>
          <SectionHeader
            label="PERKS & BENEFITS"
            heading="What you get"
            subheading="We invest in the people building it."
          />
        </ScrollReveal>

        <ScrollReveal stagger={0.12} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {perks.map((perk) => (
            <div
              key={perk.title}
              className="flex items-start gap-4 p-6 rounded-xl transition-all duration-300 hover:-translate-y-1 bg-bg-light"
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 bg-accent-badge"
              >
                <perk.icon size={18} className="text-accent-dark" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-text-primary">
                  {perk.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-text-body">
                  {perk.description}
                </p>
              </div>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  )
}
