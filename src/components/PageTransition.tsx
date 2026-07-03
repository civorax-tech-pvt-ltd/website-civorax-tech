'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [visible, setVisible] = useState(false)
  const prevPath = useRef(pathname)

  useEffect(() => {
    if (prevPath.current !== pathname) {
      setVisible(false)
      const timeout = setTimeout(() => {
        setVisible(true)
        prevPath.current = pathname
      }, 150)
      return () => clearTimeout(timeout)
    }
    setVisible(true)
  }, [pathname])

  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(8px)',
        transition: 'opacity 200ms ease-out, transform 200ms ease-out',
      }}
    >
      {children}
    </div>
  )
}
