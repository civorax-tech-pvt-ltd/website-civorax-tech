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
                color: '#c8f07d',
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
                  color: pathname === link.path ? '#ffffff' : 'rgba(255,255,255,0.7)',
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
                    style={{ backgroundColor: '#c8f07d' }}
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
              backgroundColor: scrolled ? '#1a1a1a' : 'transparent',
              border: '1px solid #3d3d3d',
              padding: '10px 24px',
            }}
            onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
              e.currentTarget.style.backgroundColor = '#c8f07d'
              e.currentTarget.style.color = '#1a1a1a'
              e.currentTarget.style.borderColor = '#c8f07d'
            }}
            onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
              e.currentTarget.style.backgroundColor = scrolled ? '#1a1a1a' : 'transparent'
              e.currentTarget.style.color = '#ffffff'
              e.currentTarget.style.borderColor = '#3d3d3d'
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
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 md:hidden"
          style={{ backgroundColor: 'rgba(26,26,26,0.98)' }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className="text-2xl font-semibold transition-colors duration-200"
              style={{
                color: pathname === link.path ? '#c8f07d' : '#ffffff',
              }}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-4 inline-flex items-center gap-2 text-lg font-semibold rounded-full px-8 py-3"
            style={{ backgroundColor: '#c8f07d', color: '#1a1a1a' }}
            onClick={() => setMobileOpen(false)}
          >
            Get In Touch
            <ArrowRight size={18} />
          </Link>
        </div>
      )}
    </>
  )
}
