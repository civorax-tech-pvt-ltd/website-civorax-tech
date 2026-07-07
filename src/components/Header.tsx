'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ArrowRight } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Products', path: '/products' },
  { label: 'Career', path: '/career' },
  { label: 'Contact', path: '/contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const firstLinkRef = useRef<HTMLAnchorElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)

  const handleOverlayKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setMobileOpen(false)
      return
    }
    if (e.key === 'Tab' && overlayRef.current) {
      const focusable = overlayRef.current.querySelectorAll('a, button, [tabindex]:not([tabindex="-1"])')
      const first = focusable[0] as HTMLElement
      const last = focusable[focusable.length - 1] as HTMLElement
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
  }, [])

  useEffect(() => {
    if (mobileOpen && firstLinkRef.current) {
      firstLinkRef.current.focus()
    }
  }, [mobileOpen])

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center transition-all duration-300"
        style={{
          backgroundColor: scrolled ? 'rgba(26,26,26,0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
        }}
      >
        <div className="content-max-width w-full flex items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-0">
            <span className="text-xl font-bold text-white">Civora</span>
            <span
              className="text-xl font-bold text-accent"
              style={{
                clipPath: 'polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)',
                padding: '0 6px',
                marginLeft: '2px',
              }}
            >
              X
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`relative text-[15px] font-medium transition-opacity duration-200 ${
                  pathname === link.path ? 'text-text-white opacity-100' : 'text-white/70 opacity-70'
                }`}
                onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => { e.currentTarget.style.opacity = '1' }}
                onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                  if (pathname !== link.path) {
                    e.currentTarget.style.opacity = '0.7'
                  }
                }}
              >
                {link.label}
                {pathname === link.path && (
                  <span
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent-light"
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-[15px] font-semibold text-white rounded-full transition-all duration-300 hover:gap-3 px-6 py-2.5 border border-border-dark"
              style={{
                backgroundColor: scrolled ? 'var(--bg-primary)' : 'transparent',
              }}
              onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                e.currentTarget.style.backgroundColor = 'var(--accent-light)'
                e.currentTarget.style.color = 'var(--bg-primary)'
                e.currentTarget.style.borderColor = 'var(--accent-light)'
              }}
              onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                e.currentTarget.style.backgroundColor = scrolled ? 'var(--bg-primary)' : 'transparent'
                e.currentTarget.style.color = 'var(--text-white)'
                e.currentTarget.style.borderColor = 'var(--border-dark)'
              }}
            >
              Get In Touch
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Overlay */}
      <div
        ref={overlayRef}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        onKeyDown={handleOverlayKeyDown}
        className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 md:hidden transition-all duration-300 bg-[rgba(26,26,26,0.98)]"
        style={{
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? 'auto' : 'none',
        }}
      >
        {navLinks.map((link, i) => (
          <Link
            key={link.path}
            ref={i === 0 ? firstLinkRef : undefined}
            href={link.path}
            className={`text-2xl font-semibold transition-all duration-300 ${
              pathname === link.path ? 'text-accent-light' : 'text-text-white'
            }`}
            style={{
              transform: mobileOpen ? 'translateY(0)' : 'translateY(12px)',
              opacity: mobileOpen ? 1 : 0,
              transitionDelay: mobileOpen ? `${i * 60}ms` : '0ms',
            }}
            onClick={() => setMobileOpen(false)}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/contact"
          className="mt-4 inline-flex items-center gap-2 text-lg font-semibold rounded-full px-8 py-3 transition-all duration-300 bg-accent-light text-bg-primary"
          style={{
            transform: mobileOpen ? 'translateY(0)' : 'translateY(12px)',
            opacity: mobileOpen ? 1 : 0,
            transitionDelay: mobileOpen ? `${navLinks.length * 60}ms` : '0ms',
          }}
          onClick={() => setMobileOpen(false)}
        >
          Get In Touch
          <ArrowRight size={18} />
        </Link>
        <div
          className="mt-2 transition-all duration-300"
          style={{
            transform: mobileOpen ? 'translateY(0)' : 'translateY(12px)',
            opacity: mobileOpen ? 1 : 0,
            transitionDelay: mobileOpen ? `${(navLinks.length + 1) * 60}ms` : '0ms',
          }}
        >
          <ThemeToggle />
        </div>
      </div>
    </>
  )
}
