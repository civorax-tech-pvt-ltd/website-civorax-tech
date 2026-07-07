import { ArrowRight, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'
import ERPMockup from '../../../components/mockups/ERPMockup'

export const metadata: Metadata = {
  title: 'CivoraX Core ERP',
  description: 'One dashboard for all your branches. Track inventory, monitor performance, and manage distribution from a single view.',
  keywords: [
    'core ERP', 'ERP system nepal', 'inventory tracking',
    'multi-branch management', 'distribution management',
    'IRD compliance', 'performance dashboard', 'role-based access',
    'real-time sync', 'enterprise resource planning',
  ],
  openGraph: {
    title: 'CivoraX Core ERP — Multi-Branch Management',
    description: 'One dashboard for all your branches. Track inventory, monitor performance, and manage distribution from a single view.',
  },
}

const features = [
  {
    title: 'Live Inventory Tracking',
    description: 'Real-time stock levels across all branches. Know exactly what you have, where it is, and when to reorder.',
  },
  {
    title: 'Multi-Branch Sync',
    description: 'Keep all branches consistent with automatic data synchronization. Branch data stays aligned even over unreliable networks.',
  },
  {
    title: 'IRD Compliance Reports',
    description: 'One-click XML reports that pass IRD audits. Automated VAT computation and consecutive invoice numbering built in.',
  },
  {
    title: 'Performance Dashboard',
    description: 'Monitor transaction volumes, branch performance, and compliance status across every location from a single view.',
  },
  {
    title: 'Distribution Management',
    description: 'Track stock movements between branches. Optimize distribution channels and reduce waste with real-time visibility.',
  },
  {
    title: 'Role-Based Access',
    description: 'Granular permissions for managers, cashiers, and warehouse staff. Everyone sees exactly what they need — nothing more.',
  },
]

const specs = [
  { label: 'Platform', value: 'Web-based (any browser)' },
  { label: 'Sync Engine', value: 'Go-based offline-first sync' },
  { label: 'Branches', value: 'Unlimited branch support' },
  { label: 'Compliance', value: 'IRD-approved reporting' },
  { label: 'Deployment', value: '3-6 weeks' },
  { label: 'Support', value: 'Named engineer, weekly calls' },
]

export default function ERPProductPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="flex items-center text-center px-4 bg-bg-primary min-h-[60vh] pt-[160px] pb-[80px]"
      >
        <div className="max-w-[720px] mx-auto">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-1.5 text-xs mb-6 text-text-secondary">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={12} aria-hidden="true" />
            <Link href="/products" className="hover:text-white transition-colors">Products</Link>
            <ChevronRight size={12} aria-hidden="true" />
            <span className="text-accent-light" aria-current="page">Core ERP</span>
          </nav>
          <span className="label-text text-text-secondary">ENTERPRISE ERP</span>
          <h1
            className="mt-4 text-4xl sm:text-5xl md:text-[56px] font-bold leading-[1.1] tracking-tighter"
          >
            <span className="text-white">One dashboard.</span>
            <br />
            <em className="text-accent-light">Every branch.</em>
          </h1>
          <p
            className="mt-6 text-base sm:text-lg leading-relaxed max-w-[560px] mx-auto text-text-secondary"
          >
            Track inventory, monitor performance, and manage distribution across all your branches from a single view.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 text-[15px] font-semibold rounded-full transition-all duration-300 hover:scale-[1.02] bg-accent-light text-bg-primary px-8 py-3.5"
            >
              Get in touch
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/products"
              className="group inline-flex items-center gap-2 text-[15px] font-semibold text-white rounded-full transition-all duration-300 bg-transparent border border-border-dark px-8 py-3.5"
            >
              All products
            </Link>
          </div>
          <ERPMockup />
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-white dark:bg-bg-primary">
        <div className="content-max-width">
          <span className="label-text text-accent-dark">FEATURES</span>
          <h2 className="mt-4 text-3xl md:text-[42px] font-bold leading-tight text-text-primary tracking-tight">
            Built for multi-branch operations
          </h2>
          <p className="mt-4 text-base leading-relaxed max-w-[600px] text-text-body">
            Manage inventory, compliance, and performance across locations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 bg-bg-light border border-border-light"
              >
                <h3 className="text-lg font-semibold text-text-primary">
                  {f.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-text-body">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specs */}
      <section className="section-padding bg-bg-light">
        <div className="content-max-width max-w-[800px]">
          <span className="label-text text-accent-dark">SPECIFICATIONS</span>
          <h2 className="mt-4 text-3xl md:text-[42px] font-bold leading-tight text-text-primary tracking-tight">
            Technical details
          </h2>

          <div className="mt-8 space-y-4">
            {specs.map((s) => (
              <div
                key={s.label}
                className="flex items-center justify-between py-4 border-b border-border-light"
              >
                <span className="text-sm font-medium text-text-primary">{s.label}</span>
                <span className="text-sm text-text-body">{s.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-bg-primary">
        <div className="content-max-width text-center">
          <h2 className="text-3xl md:text-[42px] font-bold leading-tight text-text-white tracking-tight">
            Ready to unify your branches?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-text-secondary">
            Let&apos;s talk about your operations.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 mt-8 text-[15px] font-semibold rounded-full transition-all duration-300 hover:scale-[1.02] bg-accent-light text-bg-primary px-8 py-3.5"
          >
            Get in touch
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </>
  )
}