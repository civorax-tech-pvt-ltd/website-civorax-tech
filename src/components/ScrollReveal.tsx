'use client'

import { useRef } from 'react'
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

  useGSAP(() => {
    if (!ref.current) return
    const targets = stagger > 0
      ? ref.current.children
      : ref.current

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
  }, { scope: ref })

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
