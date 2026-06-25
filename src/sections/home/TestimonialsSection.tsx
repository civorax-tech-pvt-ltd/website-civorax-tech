import SectionHeader from '../../components/SectionHeader'
import ScrollReveal from '../../components/ScrollReveal'

const testimonials = [
  {
    quote: "Internet drops don't stop us — transactions queue locally and sync when the connection returns. Our staff can process sales during load-shedding without any disruption.",
    name: 'Ram Prasad Khatiwada',
    title: 'Owner, Suraj Hardware Suppliers — Itahari',
  },
  {
    quote: 'The IRD compliance features saved us weeks of manual work every quarter. VAT reports generate automatically and the audit XML is always ready.',
    name: 'Sunita Rai',
    title: 'Manager, Muna General Store — Dharan',
  },
  {
    quote: 'We moved from handwritten bills to a full billing system in under three weeks. The CivoraX team knew exactly what a restaurant operation in Dharan actually needs.',
    name: 'Bikram Limbu',
    title: 'Owner, Sanjog Restaurant & Catering — Dharan',
  },
]

export default function TestimonialsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="content-max-width">
        <ScrollReveal>
          <SectionHeader
            label="TESTIMONIALS"
            heading="What Our Clients Say"
          />
        </ScrollReveal>

        <ScrollReveal stagger={0.12} className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1"
              style={{ backgroundColor: '#f5f5f5' }}
            >
              {/* Quote mark */}
              <span
                className="text-6xl font-bold leading-none block mb-4"
                style={{ color: 'rgba(200,240,125,0.3)' }}
              >
                &ldquo;
              </span>

              <p className="text-base italic leading-relaxed" style={{ color: '#1a1a1a' }}>
                {t.quote}
              </p>

              <div
                className="my-6 h-px"
                style={{ backgroundColor: '#e5e5e5' }}
              />

              <div className="flex items-center gap-3">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: '#f0f7e0' }}
                >
                  <span className="text-sm font-bold" style={{ color: '#5a7a2a' }}>
                    {t.name.split(' ').map((n) => n[0]).join('').slice(0, 2)}
                  </span>
                </div>
                <div>
                  <p className="text-[15px] font-semibold" style={{ color: '#1a1a1a' }}>
                    {t.name}
                  </p>
                  <p className="text-[13px]" style={{ color: '#6b7280' }}>
                    {t.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  )
}
