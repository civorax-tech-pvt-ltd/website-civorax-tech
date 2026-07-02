'use client'

import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import ScrollReveal from '../../components/ScrollReveal'

const products = [
  {
    slug: 'civorax-retail-pos',
    title: 'CivoraX Retail POS',
    description: 'Offline-first billing for supermarkets, restaurants, and hardware stores.',
  },
  {
    slug: 'civorax-core-erp',
    title: 'CivoraX Core ERP',
    description: 'One dashboard for inventory, performance, and multi-branch operations.',
  },
  {
    slug: 'custom-web-apps',
    title: 'Custom Web Apps',
    description: 'Business portals, admin panels, and internal tools — built to scale.',
  },
]

export default function ProductsPreviewSection() {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--bg-light)' }}>
      <div className="content-max-width">
        <ScrollReveal>
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="label-text" style={{ color: 'var(--accent-dark)' }}>PRODUCTS</span>
              <h2 className="mt-4 text-3xl md:text-[42px] font-bold leading-tight" style={{ color: 'var(--bg-primary)', letterSpacing: '-0.01em' }}>
                What we build
              </h2>
            </div>
            <Link
              href="/products"
              className="group hidden md:inline-flex items-center gap-1 label-text transition-colors duration-200"
              style={{ color: 'var(--accent-dark)' }}
            >
              View all products
              <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </ScrollReveal>

        <ScrollReveal stagger={0.12} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <Link
              key={product.title}
              href={`/products/${product.slug}`}
              className="group rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1"
              style={{ backgroundColor: '#f5f5f5', border: '1px solid var(--border-light)' }}
            >
              <h3 className="text-lg font-semibold" style={{ color: 'var(--bg-primary)' }}>
                {product.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed" style={{ color: 'var(--text-body)' }}>
                {product.description}
              </p>
              <span
                className="inline-flex items-center gap-1 mt-4 label-text transition-colors duration-200"
                style={{ color: 'var(--accent-dark)' }}
              >
                Learn more
                <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </ScrollReveal>

        <Link
          href="/products"
          className="group md:hidden inline-flex items-center gap-1 mt-8 label-text transition-colors duration-200"
          style={{ color: 'var(--accent-dark)' }}
        >
          View all products
          <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  )
}
