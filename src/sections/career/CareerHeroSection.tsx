import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import ScrollReveal from '../../components/ScrollReveal'

export default function CareerHeroSection() {
  return (
    <section
      className="flex items-center justify-center text-center px-4"
      style={{ backgroundColor: '#1a1a1a', minHeight: '80vh', paddingTop: '160px', paddingBottom: '96px' }}
    >
      <div className="max-w-[720px]">
        <ScrollReveal>
          <span className="label-text" style={{ color: '#9ca3af' }}>CAREERS</span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h1
            className="mt-4 text-4xl sm:text-5xl md:text-[56px] font-bold leading-[1.1]"
            style={{ letterSpacing: '-0.02em' }}
          >
            <span className="text-white">Build software that</span>
            <br />
            <em style={{ color: '#c8f07d' }}>works under real conditions.</em>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p
            className="mt-6 text-base sm:text-lg leading-relaxed max-w-[560px] mx-auto"
            style={{ color: '#9ca3af' }}
          >
            We hire engineers who want to build production systems — not polished demos that break in the field. Throw your ideas into production. Be a part of it.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3} className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <Link
            to="#openings"
            className="group inline-flex items-center gap-2 text-[15px] font-semibold rounded-full transition-all duration-300 hover:scale-[1.02]"
            style={{ backgroundColor: '#c8f07d', color: '#1a1a1a', padding: '14px 32px' }}
          >
            View Openings
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 text-[15px] font-semibold text-white rounded-full transition-all duration-300"
            style={{ backgroundColor: 'transparent', border: '1px solid #3d3d3d', padding: '14px 32px' }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#c8f07d' }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#3d3d3d' }}
          >
            Internship Track
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  )
}
