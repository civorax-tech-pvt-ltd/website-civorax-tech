import ScrollReveal from '../../components/ScrollReveal'

const stats = [
  { value: '14', label: 'ENGINEERS & STAFF' },
  { value: '3', label: 'REGIONAL HUBS' },
  { value: '100%', label: 'IN-HOUSE CODE' },
  { value: '0', label: 'VENDOR LOCK-IN' },
]

export default function StatsSection() {
  return (
    <section className="bg-bg-primary pb-[64px]">
      <div className="content-max-width px-4 sm:px-6 lg:px-8">
        <ScrollReveal stagger={0.1} className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="text-3xl md:text-[42px] font-bold text-accent-light tracking-tighter"
              >
                {stat.value}
              </div>
              <div className="label-text mt-2 text-text-secondary">
                {stat.label}
              </div>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  )
}
