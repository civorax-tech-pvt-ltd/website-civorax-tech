'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ClientQuoteSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!sectionRef.current) return

    gsap.fromTo('.quote-text', { opacity: 0, y: 30 }, {
      opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
      scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', once: true },
    })

    gsap.fromTo('.quote-divider', { scaleX: 0 }, {
      scaleX: 1, duration: 0.6, ease: 'power2.out', delay: 0.3,
      scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', once: true },
    })

    gsap.fromTo('.quote-author', { opacity: 0, y: 15 }, {
      opacity: 1, y: 0, duration: 0.5, ease: 'power3.out', delay: 0.5,
      scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', once: true },
    })
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} className="section-padding" style={{ backgroundColor: '#1a1a1a' }}>
      <div className="content-max-width max-w-[720px] mx-auto text-center">
        <p className="quote-text opacity-0 text-lg sm:text-xl italic leading-relaxed text-white">
          &ldquo;Power cuts don&apos;t stop us. Sales keep running offline and sync on their own later. My staff never had to learn anything new — it just works.&rdquo;
        </p>

        <div
          className="quote-divider mx-auto my-8 h-0.5 origin-center"
          style={{ width: '48px', backgroundColor: '#c8f07d' }}
        />

        <p className="quote-author opacity-0 text-base font-semibold text-white">
          Ram Prasad Khatiwada
        </p>
        <p className="quote-author opacity-0 text-sm mt-1" style={{ color: '#9ca3af' }}>
          Owner, Suraj Hardware Suppliers — Itahari
        </p>
      </div>
    </section>
  )
}
