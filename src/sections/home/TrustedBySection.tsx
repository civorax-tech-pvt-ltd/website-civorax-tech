import { Store, UtensilsCrossed, Pill, Cpu, Truck, Home, Shirt, ShoppingBag } from 'lucide-react'

const businesses = [
  { name: 'Suraj Hardware Suppliers', icon: Store },
  { name: 'Muna General Store', icon: Home },
  { name: 'Sanjog Restaurant & Catering', icon: UtensilsCrossed },
  { name: 'Koshi Cold Drinks & Beverages', icon: ShoppingBag },
  { name: 'Sunrise Pharmacy', icon: Pill },
  { name: 'Rai Brothers Electronics', icon: Cpu },
  { name: 'Tamang Textile House', icon: Shirt },
  { name: 'Purbeli Logistics', icon: Truck },
]

export default function TrustedBySection() {
  return (
    <section className="py-16 bg-bg-trustedby">
      <div className="content-max-width px-4 sm:px-6 lg:px-8">
        <p className="text-sm text-center mb-8 font-medium text-text-body">
          Trusted by businesses across Koshi Province
        </p>

        {/* Marquee Container */}
        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-bg-trustedby to-transparent" />
          <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-bg-trustedby to-transparent" />

          <div className="flex animate-marquee whitespace-nowrap group-hover:[animation-play-state:paused] focus-within:[animation-play-state:paused]">
            {[...businesses, ...businesses].map((biz, i) => {
              const Icon = biz.icon
              return (
                <div
                  key={`${biz.name}-${i}`}
                  className="inline-flex items-center gap-2.5 mx-3 px-5 py-3 rounded-xl whitespace-nowrap bg-white dark:bg-bg-secondary border border-border-light shadow-xs"
                >
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 bg-accent-badge">
                    <Icon size={14} className="text-accent-badge-text" />
                  </div>
                  <span className="text-sm font-semibold tracking-wide text-text-logo">
                    {biz.name}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
