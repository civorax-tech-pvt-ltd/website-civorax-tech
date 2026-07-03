'use client'

import { useRef, useState, useEffect } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  stagger?: number
  y?: number
  duration?: number
  scale?: number
}

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  stagger = 0,
  y = 40,
  duration = 0.7,
  scale,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [prefersReduced, setPrefersReduced] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReduced(mq.matches)
    const handler = (e: MediaQueryListEvent) => setPrefersReduced(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  useGSAP(() => {
    if (!ref.current) return
    const targets = stagger > 0
      ? ref.current.children
      : ref.current

    if (prefersReduced) {
      gsap.set(targets, { opacity: 1, y: 0, ...(scale !== undefined ? { scale: 1 } : {}) })
      return
    }

    const fromVars: gsap.TweenVars = {
      opacity: 0,
      y,
      ...(scale !== undefined ? { scale } : {}),
    }

    const toVars: gsap.TweenVars = {
      opacity: 1,
      y: 0,
      ...(scale !== undefined ? { scale: 1 } : {}),
      duration,
      delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 85%',
        once: true,
      },
    }

    if (stagger > 0) {
      toVars.stagger = stagger
    }

    gsap.fromTo(targets, fromVars, toVars)
  }, { scope: ref, dependencies: [prefersReduced] })

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
