const logos = [
  'Suraj Hardware Suppliers',
  'Muna General Store',
  'Sanjog Restaurant & Catering',
  'Koshi Cold Drinks & Beverages',
  'Sunrise Pharmacy',
  'Rai Brothers Electronics',
  'Tamang Textile House',
  'Purbeli Logistics',
]

export default function TrustedBySection() {
  return (
    <section className="py-12" style={{ backgroundColor: '#f5f5f5' }}>
      <div className="content-max-width px-4 sm:px-6 lg:px-8">
        <p className="text-sm text-center mb-6" style={{ color: '#6b7280' }}>
          Trusted by businesses across Koshi Province
        </p>

        {/* Marquee Container */}
        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 z-10" style={{ background: 'linear-gradient(to right, #f5f5f5, transparent)' }} />
          <div className="absolute right-0 top-0 bottom-0 w-16 z-10" style={{ background: 'linear-gradient(to left, #f5f5f5, transparent)' }} />

          <div className="flex animate-marquee whitespace-nowrap">
            {[...logos, ...logos].map((name, i) => (
              <div
                key={`${name}-${i}`}
                className="inline-flex items-center justify-center mx-6 px-4 py-2"
              >
                <span
                  className="text-sm font-semibold uppercase tracking-wider"
                  style={{ color: '#9ca3af' }}
                >
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
