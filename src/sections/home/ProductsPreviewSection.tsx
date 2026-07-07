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
    description: 'Business portals, admin panels, and internal tools. Built to scale.',
  },
]

export default function ProductsPreviewSection() {
  return (
    <section className="section-padding bg-bg-light">
      <div className="content-max-width">
        <ScrollReveal>
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="label-text text-accent-dark dark:text-accent-light">PRODUCTS</span>
              <h2 className="mt-4 text-3xl md:text-[42px] font-bold leading-tight text-text-primary dark:text-white tracking-tight">
                What we build
              </h2>
            </div>
            <Link
              href="/products"
              className="group hidden md:inline-flex items-center gap-1 label-text text-accent-dark dark:text-accent-light transition-colors duration-200"
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
              className="group rounded-2xl p-8 bg-bg-light dark:bg-bg-card border border-border-light transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="text-lg font-semibold text-text-primary dark:text-white">
                {product.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-text-body">
                {product.description}
              </p>
              <span className="inline-flex items-center gap-1 mt-4 label-text text-accent-dark dark:text-accent-light transition-colors duration-200">
                Learn more
                <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </ScrollReveal>

        <Link
          href="/products"
          className="group md:hidden inline-flex items-center gap-1 mt-8 label-text text-accent-dark dark:text-accent-light transition-colors duration-200"
        >
          View all products
          <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  )
}
