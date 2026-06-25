import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

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
  }, { scope: containerRef })

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: '#1a1a1a', paddingTop: '120px' }}
    >
      {/* Animated Grid Background */}
      <div
        className="absolute inset-0 animate-grid-drift pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          perspective: '1000px',
          transform: 'rotateX(60deg) translateY(-100px) scale(2)',
          transformOrigin: 'center center',
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-[720px] mx-auto">
        {/* Eyebrow */}
        <div className="hero-label opacity-0 inline-flex items-center gap-2 mb-6">
          <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#c8f07d' }} />
          <span className="label-text" style={{ color: '#9ca3af' }}>
            SOFTWARE ENGINEERING STUDIO • DHARAN, NEPAL
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-[56px] font-bold leading-[1.1]" style={{ letterSpacing: '-0.02em' }}>
          <span className="hero-headline-1 opacity-0 block text-white">
            Software that runs your business,
          </span>
          <span className="hero-headline-2 opacity-0 block">
            <em className="not-italic" style={{ color: '#c8f07d' }}>not</em>
            <span className="text-white"> the other way.</span>
          </span>
        </h1>

        {/* Subheadline */}
        <p
          className="hero-sub opacity-0 mt-6 text-base sm:text-lg leading-relaxed max-w-[560px] mx-auto"
          style={{ color: '#9ca3af' }}
        >
          We build ERP, POS, and web systems for businesses in Nepal. No internet? Still works. IRD billing? Already handled.
        </p>

        {/* CTAs */}
        <div className="hero-cta opacity-0 flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 text-[15px] font-semibold rounded-full transition-all duration-300 hover:scale-[1.02]"
            style={{ backgroundColor: '#c8f07d', color: '#1a1a1a', padding: '14px 32px' }}
          >
            Start a Project
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link
            to="/products"
            className="group inline-flex items-center gap-2 text-[15px] font-semibold text-white rounded-full transition-all duration-300 hover:scale-[1.02]"
            style={{ backgroundColor: 'transparent', border: '1px solid #3d3d3d', padding: '14px 32px' }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#c8f07d' }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#3d3d3d' }}
          >
            See Our Work
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Stats */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16 mt-16">
          {[
            { value: '12+', label: 'BUSINESSES SERVED' },
            { value: '99.9%', label: 'UPTIME COMMITMENT' },
            { value: 'Nepal', label: 'BUILT FOR LOCAL SCALE' },
          ].map((stat) => (
            <div key={stat.label} className="hero-stat opacity-0 text-center">
              <div className="text-3xl md:text-[36px] font-bold text-white" style={{ letterSpacing: '-0.02em' }}>
                {stat.value}
              </div>
              <div className="label-text mt-1" style={{ color: '#9ca3af' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
