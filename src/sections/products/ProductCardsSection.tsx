import { Check, ArrowRight } from 'lucide-react'
import SectionHeader from '../../components/SectionHeader'
import ScrollReveal from '../../components/ScrollReveal'
import Link from 'next/link'

const products = [
  {
    badge: 'PROPRIETARY POS ENGINE',
    title: 'CivoraX Retail POS Client',
    description: 'Perfectly suited for local supermarkets, hardware warehouses, and restaurant groups. Links physical receipt printers, payment drawers, and barcode scanners directly via browser USB endpoints without native binary wrappers.',
    features: [
      { label: 'Thermal Raw API', detail: 'ESC/POS Printer Ready' },
      { label: 'Dual-Sync', detail: 'Cloud / Local replicas' },
      { label: 'Dynamic VAT logs', detail: 'Instant audit XMLs' },
      { label: 'Barcode Parser', detail: 'USB/BT Native listeners' },
    ],
    cta: 'Schedule POS audit demo',
  },
  {
    badge: 'REGIONAL ERP FRAMEWORK',
    title: 'CivoraX Core ERP Console',
    description: 'Aggregate raw material ledgers and branches under a single pane of glass. Optimize stock movements, track distribution channels, and access real-time metrics across your branches.',
    features: [
      { label: 'Branch Performance Monitor', detail: 'Live Telemetry' },
      { label: 'Live Inventory Tracking', detail: 'Real-time stock levels' },
      { label: 'Multi-Province Sync', detail: 'Cross-branch consistency' },
      { label: 'IRD Report Automation', detail: 'One-click compliance' },
    ],
    cta: 'Get in touch',
  },
]

export default function ProductCardsSection() {
  return (
    <section className="section-padding" style={{ backgroundColor: '#f5f5f5' }}>
      <div className="content-max-width">
        <ScrollReveal>
          <SectionHeader
            label="ENTERPRISE SOLUTIONS"
            heading="Built to manage high-volume, multi-branch complexity."
            align="left"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          {products.map((product) => (
            <ScrollReveal key={product.title}>
              <div
                className="bg-white rounded-2xl p-8 md:p-10 h-full transition-all duration-300 hover:-translate-y-1"
                style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}
              >
                <span
                  className="inline-block rounded-lg px-3 py-1 label-text"
                  style={{ backgroundColor: '#f0f7e0', color: '#5a7a2a' }}
                >
                  {product.badge}
                </span>

                <h3 className="mt-4 text-xl md:text-[28px] font-bold" style={{ color: '#1a1a1a' }}>
                  {product.title}
                </h3>

                <p className="mt-3 text-base leading-relaxed" style={{ color: '#6b7280' }}>
                  {product.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                  {product.features.map((f) => (
                    <div key={f.label} className="flex items-start gap-3">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ backgroundColor: '#e8f5e0' }}
                      >
                        <Check size={12} style={{ color: '#4ecdc4' }} />
                      </div>
                      <div>
                        <p className="text-sm font-medium" style={{ color: '#1a1a1a' }}>{f.label}</p>
                        <p className="text-xs" style={{ color: '#6b7280' }}>{f.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-1 mt-8 label-text transition-colors duration-200 hover:text-[#8ab53d]"
                  style={{ color: '#1a1a1a' }}
                >
                  {product.cta}
                  <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
