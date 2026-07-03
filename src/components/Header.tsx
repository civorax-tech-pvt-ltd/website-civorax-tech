'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ArrowRight } from 'lucide-react'

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
              className="text-xl font-bold"
              style={{
                color: 'var(--accent)',
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
                className="relative text-[15px] font-medium transition-opacity duration-200"
                style={{
                  color: pathname === link.path ? 'var(--text-white)' : 'rgba(255,255,255,0.7)',
                  opacity: pathname === link.path ? 1 : 0.7,
                }}
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
                    className="absolute -bottom-1 left-0 right-0 h-0.5"
                    style={{ backgroundColor: 'var(--accent-light)' }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center gap-2 text-[15px] font-semibold text-white rounded-full transition-all duration-300 hover:gap-3"
            style={{
              backgroundColor: scrolled ? 'var(--bg-primary)' : 'transparent',
              border: '1px solid var(--border-dark)',
              padding: '10px 24px',
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
            <ArrowRight size={16} />
          </Link>

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
        className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 md:hidden transition-all duration-300"
        style={{
          backgroundColor: 'rgba(26,26,26,0.98)',
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? 'auto' : 'none',
        }}
      >
        {navLinks.map((link, i) => (
          <Link
            key={link.path}
            href={link.path}
            className="text-2xl font-semibold transition-all duration-300"
            style={{
              color: pathname === link.path ? 'var(--accent-light)' : 'var(--text-white)',
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
          className="mt-4 inline-flex items-center gap-2 text-lg font-semibold rounded-full px-8 py-3 transition-all duration-300"
          style={{
            backgroundColor: 'var(--accent-light)',
            color: 'var(--bg-primary)',
            transform: mobileOpen ? 'translateY(0)' : 'translateY(12px)',
            opacity: mobileOpen ? 1 : 0,
            transitionDelay: mobileOpen ? `${navLinks.length * 60}ms` : '0ms',
          }}
          onClick={() => setMobileOpen(false)}
        >
          Get In Touch
          <ArrowRight size={18} />
        </Link>
      </div>
    </>
  )
}
