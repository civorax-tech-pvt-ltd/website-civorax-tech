'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ArrowRight, Building2, Activity, MapPin } from 'lucide-react'
import Link from 'next/link'
import DotPattern from '../../components/DotPattern'

function DashboardMockup() {
  return (
    <div className="animate-float-mockup relative w-full max-w-[520px] mx-auto lg:mx-0">
      {/* Glow behind */}
      <div
        className="absolute -inset-4 rounded-3xl blur-3xl opacity-20"
        style={{ backgroundColor: 'var(--accent-light)' }}
      />

      {/* Main frame */}
      <div
        className="relative rounded-2xl overflow-hidden"
        style={{
          backgroundColor: 'var(--bg-elevated)',
          border: '1px solid var(--border-dark)',
          boxShadow: '0 25px 60px rgba(0,0,0,0.5), 0 0 40px rgba(132,204,22,0.08)',
        }}
      >
        {/* Window bar */}
        <div
          className="flex items-center gap-2 px-4 py-2.5"
          style={{ backgroundColor: 'var(--bg-code)', borderBottom: '1px solid var(--border-dark)' }}
        >
          <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: 'var(--terminal-red)' }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: 'var(--yellow)' }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: 'var(--terminal-green)' }} />
          <div className="flex-1 flex justify-center">
            <div
              className="flex items-center gap-1.5 px-3 py-0.5 rounded-md text-xs"
              style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-tertiary)' }}
            >
              <span className="w-1.5 h-1.5 rounded-full animate-pulse-live" style={{ backgroundColor: 'var(--teal)' }} />
              CivoraX POS — Live Session
            </div>
          </div>
        </div>

        {/* Dashboard content */}
        <div className="p-4 space-y-3">
          {/* Top stats row */}
          <div className="grid grid-cols-3 gap-2">
            {[
              { label: 'Today\'s Sales', value: 'NPR 2,84,500', color: 'var(--accent-light)' },
              { label: 'Transactions', value: '147', color: 'var(--teal)' },
              { label: 'Items Sold', value: '1,203', color: 'var(--yellow)' },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-lg p-2.5"
                style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-subtle-dark)' }}
              >
                <p className="text-[9px] uppercase tracking-wider" style={{ color: 'var(--text-tertiary)' }}>{s.label}</p>
                <p className="text-sm font-bold mt-0.5" style={{ color: s.color }}>{s.value}</p>
              </div>
            ))}
          </div>

          {/* Mini chart */}
          <div
            className="rounded-lg p-3"
            style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-subtle-dark)' }}
          >
            <div className="flex items-center justify-between mb-2">
              <p className="text-[9px] uppercase tracking-wider" style={{ color: 'var(--text-tertiary)' }}>Weekly Revenue</p>
              <p className="text-[10px] font-medium" style={{ color: 'var(--accent-light)' }}>+12.4%</p>
            </div>
            <div className="flex items-end gap-1 h-12">
              {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-sm animate-bar-grow"
                  style={{
                    backgroundColor: i === 5 ? 'var(--accent-light)' : 'var(--border-dark)',
                    '--bar-height': `${h}%`,
                    height: `${h}%`,
                  } as React.CSSProperties}
                />
              ))}
            </div>
            <div className="flex justify-between mt-1">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((d) => (
                <span key={d} className="text-[7px] flex-1 text-center" style={{ color: 'var(--chart-text)' }}>{d}</span>
              ))}
            </div>
          </div>

          {/* Recent transactions */}
          <div
            className="rounded-lg p-3"
            style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-subtle-dark)' }}
          >
            <p className="text-[9px] uppercase tracking-wider mb-2" style={{ color: 'var(--text-tertiary)' }}>Recent Transactions</p>
            {[
              { item: 'Samsung 55" TV', qty: 1, price: 'NPR 85,000', status: 'Paid' },
              { item: 'LG Washing Machine', qty: 2, price: 'NPR 1,24,000', status: 'Paid' },
              { item: 'Panasonic AC 1.5T', qty: 1, price: 'NPR 62,500', status: 'Pending' },
            ].map((t, i) => (
              <div
                key={i}
                className="flex items-center justify-between py-1.5"
                style={{ borderBottom: i < 2 ? '1px solid var(--border-subtle-dark)' : 'none' }}
              >
                <div className="flex-1">
                  <p className="text-[10px] font-medium" style={{ color: 'var(--border-light)' }}>{t.item}</p>
                  <p className="text-[8px]" style={{ color: 'var(--text-tertiary)' }}>Qty: {t.qty}</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-medium" style={{ color: 'var(--border-light)' }}>{t.price}</p>
                  <p
                    className="text-[8px] font-medium"
                    style={{ color: t.status === 'Paid' ? 'var(--teal)' : 'var(--yellow)' }}
                  >
                    {t.status}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div
            className="flex items-center justify-between rounded-lg px-3 py-2"
            style={{ backgroundColor: 'var(--bg-code)', border: '1px solid var(--border-subtle-dark)' }}
          >
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full animate-pulse-live" style={{ backgroundColor: 'var(--teal)' }} />
              <span className="text-[9px]" style={{ color: 'var(--text-tertiary)' }}>IRD Compliant • VAT Active</span>
            </div>
            <span className="text-[9px] font-medium" style={{ color: 'var(--accent-light)' }}>NPR 14,23,000</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!containerRef.current) return
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    tl.fromTo('.hero-label', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, 0.3)
      .fromTo('.hero-headline-1', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7 }, 0.45)
      .fromTo('.hero-headline-2', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7 }, 0.6)
      .fromTo('.hero-sub', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, 0.75)
      .fromTo('.hero-cta', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, 0.9)
      .fromTo('.hero-stat', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 }, 1.0)
      .fromTo('.hero-mockup', { opacity: 0, x: 40, scale: 0.95 }, { opacity: 1, x: 0, scale: 1, duration: 1 }, 0.6)
  }, { scope: containerRef })

  const stats = [
    { value: '15+', label: 'BUSINESSES SERVED', sub: 'Trusted by shop owners across Koshi Province.', Icon: Building2 },
    { value: '99.9%', label: 'UPTIME COMMITMENT', sub: 'Monitored live from Dharan', Icon: Activity },
    { value: 'Nepal', label: 'BUILT FOR LOCAL SCALE', sub: 'Offline always works', Icon: MapPin },
  ]

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: 'var(--bg-primary)', paddingTop: '100px', paddingBottom: '80px' }}
    >
      {/* Interactive Dot Pattern Background */}
      <DotPattern glowColor="#84cc16" />

      {/* Content */}
      <div className="relative z-10 content-max-width w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left: Text */}
          <div className="text-center lg:text-left">
            {/* Eyebrow */}
            <div className="hero-label opacity-0 inline-flex items-center gap-2 mb-6">
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--accent-light)' }} />
              <span className="label-text" style={{ color: 'var(--text-secondary)' }}>
                SOFTWARE ENGINEERING STUDIO • DHARAN, NEPAL
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-[56px] font-bold leading-[1.1]" style={{ letterSpacing: '-0.02em' }}>
              <span className="hero-headline-1 opacity-0 block text-white">
                Clean, dependable software systems.

              </span>
              <span className="hero-headline-2 opacity-0 block">
                <em className="not-italic" style={{ color: 'var(--accent-light)' }}>  </em>
                <span className="text-white">  </span>
              </span>
            </h1>

            {/* Subheadline */}
            <p
              className="hero-sub opacity-0 mt-6 text-base sm:text-lg leading-relaxed max-w-[560px] mx-auto lg:mx-0"
              style={{ color: 'var(--text-secondary)' }}
            >
              Offline-first platforms engineered for businesses that need speed, reliability, and zero downtime.
            </p>

            {/* CTAs */}
            <div className="hero-cta opacity-0 flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-4 mt-10">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 text-[15px] font-semibold rounded-full transition-all duration-300 hover:scale-[1.02]"
                style={{ backgroundColor: 'var(--accent-light)', color: 'var(--bg-primary)', padding: '14px 32px' }}
              >
                Start a Project
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/products"
                className="group inline-flex items-center gap-2 text-[15px] font-semibold text-white rounded-full transition-all duration-300 hover:scale-[1.02]"
                style={{ backgroundColor: 'transparent', border: '1px solid var(--border-dark)', padding: '14px 32px' }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--accent-light)' }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border-dark)' }}
              >
                See Our Work
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-6 sm:gap-10 mt-14">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className="hero-stat opacity-0 flex items-center gap-3"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: 'rgba(132,204,22,0.1)', border: '1px solid rgba(132,204,22,0.15)' }}
                  >
                    <stat.Icon size={18} style={{ color: 'var(--accent-light)' }} />
                  </div>
                  <div className="text-left">
                    <div className="text-2xl md:text-[28px] font-bold text-white" style={{ letterSpacing: '-0.02em' }}>
                      {stat.value}
                    </div>
                    <div className="label-text" style={{ color: 'var(--text-secondary)' }}>{stat.label}</div>
                    <div className="text-[11px] mt-0.5" style={{ color: 'var(--text-tertiary)' }}>{stat.sub}</div>
                  </div>
                  {i < stats.length - 1 && (
                    <div className="hidden sm:block w-px h-10 ml-6" style={{ backgroundColor: 'var(--border-dark)' }} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Mockup */}
          <div className="hero-mockup opacity-0 flex justify-center lg:justify-end">
            <DashboardMockup />
          </div>
        </div>
      </div>
    </section>
  )
}
