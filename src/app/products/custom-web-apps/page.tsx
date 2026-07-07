import { ArrowRight, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'
import WebAppsMockup from '../../../components/mockups/WebAppsMockup'

export const metadata: Metadata = {
  title: 'Custom Websites & Web Apps',
  description: 'Business websites, client portals, and internal tools. Built clean, fast, made to grow.',
  keywords: [
    'custom web development', 'business websites nepal', 'client portals',
    'admin panels', 'SEO websites', 'mobile-responsive',
    'web apps dharan', 'POS/ERP integration', 'clean code',
    'gen AI apps',
  ],
  openGraph: {
    title: 'Custom Web Apps — CivoraX',
    description: 'Business websites, client portals, and internal tools. Built clean, fast, made to grow.',
  },
}

const features = [
  {
    title: 'SEO-Friendly Builds',
    description: 'Fast-loading, search-optimized websites that rank. Clean code, proper semantics, and performance-first architecture.',
  },
  {
    title: 'Custom Admin Panels',
    description: 'Tailored dashboards and content management systems built around your specific workflows. No bloated page builders.',
  },
  {
    title: 'POS/ERP Integration',
    description: 'Built to connect with your CivoraX POS and ERP systems. Real-time data flows between your website and backend.',
  },
  {
    title: 'Client Portals',
    description: 'Secure customer-facing portals for order tracking, account management, and self-service. Built to scale with your business.',
  },
  {
    title: 'Mobile-Responsive',
    description: 'Every build is fully responsive across devices. Optimized for mobile-first experiences that convert visitors.',
  },
  {
    title: 'Clean, Maintainable Code',
    description: 'No templates, no vendor lock-in. You own the code and can modify or extend it at any time.',
  },
]

const specs = [
  { label: 'Stack', value: 'Next.js, React, TypeScript' },
  { label: 'Hosting', value: 'Vercel, AWS, or your infrastructure' },
  { label: 'Integrations', value: 'POS, ERP, payment gateways' },
  { label: 'Performance', value: '90+ Lighthouse scores' },
  { label: 'Timeline', value: '2-6 weeks depending on scope' },
  { label: 'Support', value: 'Named engineer, weekly calls' },
]

export default function WebAppsProductPage() {
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
            <span className="text-accent-light" aria-current="page">Custom Web Apps</span>
          </nav>
          <span className="label-text text-text-secondary">WEB DEVELOPMENT</span>
          <h1
            className="mt-4 text-4xl sm:text-5xl md:text-[56px] font-bold leading-[1.1] tracking-tighter"
          >
            <span className="text-white">Websites that</span>
            <br />
            <em className="text-accent-light">work for you.</em>
          </h1>
          <p
            className="mt-6 text-base sm:text-lg leading-relaxed max-w-[560px] mx-auto text-text-secondary"
          >
            Business websites, client portals, and internal tools. Built clean, fast, made to grow. No templates, no bloated page builders.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 text-[15px] font-semibold rounded-full transition-all duration-300 hover:scale-[1.02] bg-accent-light text-bg-primary px-8 py-3.5"
            >
              Discuss your website
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/products"
              className="group inline-flex items-center gap-2 text-[15px] font-semibold text-white rounded-full transition-all duration-300 bg-transparent border border-border-dark px-8 py-3.5"
            >
              All products
            </Link>
          </div>
          <WebAppsMockup />
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-white dark:bg-bg-primary">
        <div className="content-max-width">
          <span className="label-text text-accent-dark">FEATURES</span>
          <h2 className="mt-4 text-3xl md:text-[42px] font-bold leading-tight text-text-primary tracking-tight">
            Built to grow with you
          </h2>
          <p className="mt-4 text-base leading-relaxed max-w-[600px] text-text-body">
            Custom web solutions that integrate with your existing systems and scale as you grow.
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
            Ready to build something?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-text-secondary">
            Let&apos;s talk about your project.
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