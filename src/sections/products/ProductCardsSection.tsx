'use client'

import { ArrowRight, Check } from 'lucide-react'
import SectionHeader from '../../components/SectionHeader'
import ScrollReveal from '../../components/ScrollReveal'
import Link from 'next/link'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../../components/ui/card'

const products = [
  {
    slug: 'civorax-retail-pos',
    title: 'CivoraX Retail POS',
    description: 'For supermarkets, hardware stores, and restaurant groups. Connects receipt printers, payment drawers, and barcode scanners directly, no extra software installs needed.',
    features: [
      'ESC/POS printer support',
      'Works offline, syncs when connection returns',
      'Automatic VAT logs and audit-ready reports',
      'Barcode scanner support (USB/Bluetooth)',
    ],
    cta: 'Talk to us about POS',
  },
  {
    slug: 'civorax-core-erp',
    title: 'CivoraX Core ERP',
    description: 'One dashboard for all your branches. Track inventory, monitor performance, and manage distribution from a single view.',
    features: [
      'Live inventory tracking',
      'Multi-branch sync',
      'One-click IRD compliance reports',
    ],
    cta: 'Get in touch',
  },
  {
    slug: 'custom-web-apps',
    title: 'Custom Websites & Web Apps',
    description: 'Business websites, client portals, and internal tools — built clean, fast, and made to grow with you. No templates, no bloated page builders.',
    features: [
      'SEO-friendly, fast-loading builds',
      'Custom admin panels and dashboards',
      'Built to integrate with your POS/ERP if needed',
    ],
    cta: 'Discuss your website',
  },
]

export default function ProductCardsSection() {
  return (
    <section className="section-padding bg-bg-light">
      <div className="content-max-width">
        <ScrollReveal>
          <SectionHeader
            label="ENTERPRISE SOLUTIONS"
            heading="Built to manage high-volume, multi-branch complexity."
            subheading=""
            align="left"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {products.map((product) => (
            <ScrollReveal key={product.title}>
              <Link href={`/products/${product.slug}`} className="block h-full">
                <Card
                  className="h-full transition-all duration-300 hover:-translate-y-1 flex flex-col bg-bg-light border border-border-light shadow-none"
                  onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 24px rgba(54,83,20,0.12)' }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.boxShadow = 'none' }}
                >
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-text-primary">
                      {product.title}
                    </CardTitle>
                    <CardDescription className="text-[15px] leading-relaxed text-text-body">
                      {product.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="flex-1">
                    <ul className="space-y-3">
                      {product.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5 text-sm text-text-body">
                          <Check size={16} className="mt-0.5 flex-shrink-0 text-accent-dark" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </CardContent>

                  <CardFooter>
                    <span className="group inline-flex items-center gap-1 label-text transition-colors duration-200 text-accent-dark">
                      {product.cta}
                      <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </CardFooter>
                </Card>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}