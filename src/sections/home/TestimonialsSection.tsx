import SectionHeader from '../../components/SectionHeader'
import ScrollReveal from '../../components/ScrollReveal'

const testimonials = [
  {
    quote: "Internet drops don't stop us — transactions queue locally and sync when the connection returns. Our staff can process sales during load-shedding without any disruption.",
    name: 'Ramesh Karki',
    title: 'Owner, Karki General Store — Dharan',
    image: '/assets/testimonial-ramesh.jpg',
  },
  {
    quote: 'The IRD compliance features alone saved us weeks of manual work. VAT reports generate automatically and we\'ve never had an issue with tax audits.',
    name: 'Sita Sharma',
    title: 'Manager, Himalayan Mart — Kathmandu',
    image: '/assets/testimonial-sita.jpg',
  },
  {
    quote: 'We went from spreadsheets to a full ERP in under a month. The team at CivoraX understood our multi-branch challenges and built exactly what we needed.',
    name: 'Bikash Rai',
    title: 'Director, Koshi Logistics — Biratnagar',
    image: '/assets/testimonial-bikash.jpg',
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
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
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
