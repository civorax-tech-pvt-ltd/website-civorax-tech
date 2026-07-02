import { Check, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CivoraX Retail POS — CivoraX',
  description: 'Offline-first POS system for supermarkets, hardware stores, and restaurant groups. ESC/POS printer support, barcode scanning, and IRD-compliant VAT logging.',
}

const features = [
  {
    title: 'ESC/POS Printer Support',
    description: 'Connects directly to thermal receipt printers via browser USB endpoints. No native binary wrappers or extra software installs required.',
  },
  {
    title: 'Offline-First Sync',
    description: 'Transactions queue locally during connectivity loss and sync automatically when the connection returns. Your business never stops.',
  },
  {
    title: 'Automatic VAT Logging',
    description: 'Built-in VAT computation with consecutive secure invoice numbering. One-click XML reports that pass IRD audits every time.',
  },
  {
    title: 'Barcode Scanner Support',
    description: 'USB and Bluetooth barcode scanner support via native browser listeners. Works with standard retail scanners out of the box.',
  },
  {
    title: 'Payment Drawer Control',
    description: 'Direct hardware control for cash drawers through the POS terminal. Triggered automatically on cash transactions.',
  },
  {
    title: 'Multi-Terminal Support',
    description: 'Run multiple POS terminals at a single location. Real-time sync keeps inventory and sales data consistent across all terminals.',
  },
]

const specs = [
  { label: 'Platform', value: 'Web-based (Chrome, Edge)' },
  { label: 'Connectivity', value: 'Offline-first with cloud sync' },
  { label: 'Hardware', value: 'USB/Bluetooth printers, scanners, drawers' },
  { label: 'Compliance', value: 'IRD-approved VAT logging' },
  { label: 'Deployment', value: '2-4 weeks' },
  { label: 'Support', value: 'Named engineer, weekly calls' },
]

export default function POSProductPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="flex items-center text-center px-4"
        style={{ backgroundColor: 'var(--bg-primary)', minHeight: '60vh', paddingTop: '160px', paddingBottom: '80px' }}
      >
        <div className="max-w-[720px] mx-auto">
          <span className="label-text" style={{ color: 'var(--text-secondary)' }}>RETAIL POS</span>
          <h1
            className="mt-4 text-4xl sm:text-5xl md:text-[56px] font-bold leading-[1.1]"
            style={{ letterSpacing: '-0.02em' }}
          >
            <span className="text-white">Billing that works</span>
            <br />
            <em style={{ color: 'var(--accent-light)' }}>when the internet doesn&apos;t.</em>
          </h1>
          <p
            className="mt-6 text-base sm:text-lg leading-relaxed max-w-[560px] mx-auto"
            style={{ color: 'var(--text-secondary)' }}
          >
            Offline-first POS for supermarkets, hardware stores, and restaurant groups. Connects receipt printers, payment drawers, and barcode scanners directly.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 text-[15px] font-semibold rounded-full transition-all duration-300 hover:scale-[1.02]"
              style={{ backgroundColor: 'var(--accent-light)', color: 'var(--bg-primary)', padding: '14px 32px' }}
            >
              Talk to us about POS
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/products"
              className="group inline-flex items-center gap-2 text-[15px] font-semibold text-white rounded-full transition-all duration-300"
              style={{ backgroundColor: 'transparent', border: '1px solid var(--border-dark)', padding: '14px 32px' }}
            >
              All products
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-white">
        <div className="content-max-width">
          <span className="label-text" style={{ color: 'var(--accent-dark)' }}>FEATURES</span>
          <h2 className="mt-4 text-3xl md:text-[42px] font-bold leading-tight" style={{ color: 'var(--bg-primary)', letterSpacing: '-0.01em' }}>
            Built for real retail
          </h2>
          <p className="mt-4 text-base leading-relaxed max-w-[600px]" style={{ color: 'var(--text-body)' }}>
            Every feature designed around the constraints Nepali retailers face daily.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1"
                style={{ backgroundColor: '#f5f5f5', border: '1px solid var(--border-light)' }}
              >
                <h3 className="text-lg font-semibold" style={{ color: 'var(--bg-primary)' }}>
                  {f.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed" style={{ color: 'var(--text-body)' }}>
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specs */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-light)' }}>
        <div className="content-max-width max-w-[800px]">
          <span className="label-text" style={{ color: 'var(--accent-dark)' }}>SPECIFICATIONS</span>
          <h2 className="mt-4 text-3xl md:text-[42px] font-bold leading-tight" style={{ color: 'var(--bg-primary)', letterSpacing: '-0.01em' }}>
            Technical details
          </h2>

          <div className="mt-8 space-y-4">
            {specs.map((s) => (
              <div
                key={s.label}
                className="flex items-center justify-between py-4"
                style={{ borderBottom: '1px solid var(--border-light)' }}
              >
                <span className="text-sm font-medium" style={{ color: 'var(--bg-primary)' }}>{s.label}</span>
                <span className="text-sm" style={{ color: 'var(--text-body)' }}>{s.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="content-max-width text-center">
          <h2 className="text-3xl md:text-[42px] font-bold leading-tight" style={{ color: 'var(--text-white)', letterSpacing: '-0.01em' }}>
            Ready to modernize your billing?
          </h2>
          <p className="mt-4 text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Let&apos;s talk about your retail operation.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 mt-8 text-[15px] font-semibold rounded-full transition-all duration-300 hover:scale-[1.02]"
            style={{ backgroundColor: 'var(--accent-light)', color: 'var(--bg-primary)', padding: '14px 32px' }}
          >
            Get in touch
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </>
  )
}
