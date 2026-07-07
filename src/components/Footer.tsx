import Link from 'next/link'
import { Monitor, Compass, MapPin, Smartphone, Database, Users, Heart, Headphones, Globe, Server, ArrowRight } from 'lucide-react'
import WhatsAppFAB from './WhatsAppFAB'

const socialLinks = [
  { icon: 'M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01zm-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.56 3.71-8.27 8.28-8.27 2.21 0 4.29.86 5.85 2.43a8.27 8.27 0 0 1 2.42 5.86c0 4.56-3.72 8.27-8.3 8.27zm4.54-6.21c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.63.81-.77.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.14-.25-.02-.38.1-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43-.14 0-.31-.02-.48-.02-.17 0-.43.06-.66.31-.22.25-.86.84-.86 2.05 0 1.21.88 2.38 1 2.54.12.17 1.73 2.64 4.19 3.7.59.25 1.05.4 1.4.51.59.19 1.13.16 1.55.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.05-.1-.22-.16-.47-.28z', label: 'WhatsApp' },
  { icon: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z', label: 'Facebook' },
  { icon: 'M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85 0 3.2-.01 3.58-.07 4.85-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.65.07-4.85.07-3.2 0-3.58-.01-4.85-.07-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.65-.07-4.85 0-3.2.01-3.58.07-4.85C2.38 3.92 3.9 2.38 7.15 2.23 8.42 2.18 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 2.7.27.27 2.69.07 7.05.01 8.33 0 8.74 0 12c0 3.26.01 3.67.07 4.95.2 4.36 2.62 6.78 6.98 6.98C8.33 23.99 8.74 24 12 24c3.26 0 3.67-.01 4.95-.07 4.35-.2 6.78-2.62 6.98-6.98.06-1.28.07-1.69.07-4.95 0-3.26-.01-3.67-.07-4.95C23.73 2.69 21.3.27 16.95.07 15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm7.85-10.4a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z', label: 'Instagram' },
  { icon: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z', label: 'LinkedIn' },
  { icon: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z', label: 'X' },
  { icon: 'M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z', label: 'TikTok' },
]

export default function Footer() {
  return (
    <footer className="relative bg-bg-primary">
      {/* CTA Banner */}
      <div className="px-4 sm:px-6 lg:px-8 py-12 bg-bg-secondary">
        <div className="content-max-width flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-white">
              Ready to start your project?
            </h3>
            <p className="mt-1 text-sm text-text-secondary">
              Free architecture consultation for businesses in Nepal.
            </p>
          </div>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 text-[15px] font-semibold rounded-full px-8 py-3.5 bg-accent-light text-bg-primary transition-all duration-300 hover:gap-3"
          >
            Get In Touch
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      {/* Top accent bar */}
      <div className="h-px w-full bg-accent-light" />

      <div className="content-max-width px-4 sm:px-6 lg:px-8 pt-16 pb-6">
        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-0">
              <span className="text-xl font-bold text-white">Civora</span>
              <span
                className="text-xl font-bold text-accent-light px-1.5 ml-0.5"
                style={{ clipPath: 'polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)' }}
              >
                X
              </span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-text-secondary max-w-[280px]">
              Offline-first software for Nepal. POS systems, ERPs, and web portals built in Dharan.
            </p>

            {/* Server status card */}
            <div className="mt-4 inline-flex items-center gap-2.5 px-3 py-2 rounded-lg bg-bg-card border border-border-subtle-dark">
              <Server size={14} className="text-teal" />
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full animate-pulse-live bg-teal" />
                <span className="text-xs font-medium text-text-secondary">Dharan Main Server: LIVE</span>
              </div>
            </div>

            {/* Nepal badge */}
            <div className="mt-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-accent/10 bg-accent/5">
              <Globe size={12} className="text-accent-light" />
              <span className="text-[11px] font-medium text-accent-light">Made in Nepal</span>
            </div>
          </div>

          {/* Productions */}
          <nav aria-label="Products">
            <h4 className="flex items-center gap-2 label-text text-text-secondary mb-5">
              <Monitor size={14} className="text-accent-light" />
              PRODUCTIONS
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/products/civorax-retail-pos" className="flex items-center gap-2 text-sm text-text-secondary transition-colors duration-200 hover:text-white group">
                  <Smartphone size={13} className="opacity-50 group-hover:opacity-100 transition-opacity text-accent-light" />
                  Retail POS Client
                </Link>
              </li>
              <li>
                <Link href="/products/civorax-core-erp" className="flex items-center gap-2 text-sm text-text-secondary transition-colors duration-200 hover:text-white group">
                  <Database size={13} className="opacity-50 group-hover:opacity-100 transition-opacity text-accent-light" />
                  Enterprise ERP
                </Link>
              </li>
            </ul>
          </nav>

          {/* Studio Blueprint */}
          <nav aria-label="Company">
            <h4 className="flex items-center gap-2 label-text text-text-secondary mb-5">
              <Compass size={14} className="text-accent-light" />
              STUDIO BLUEPRINT
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="flex items-center gap-2 text-sm text-text-secondary transition-colors duration-200 hover:text-white group">
                  <Users size={13} className="opacity-50 group-hover:opacity-100 transition-opacity text-accent-light" />
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/about" className="flex items-center gap-2 text-sm text-text-secondary transition-colors duration-200 hover:text-white group">
                  <Heart size={13} className="opacity-50 group-hover:opacity-100 transition-opacity text-accent-light" />
                  Company Values
                </Link>
              </li>
              <li>
                <Link href="/contact" className="flex items-center gap-2 text-sm text-text-secondary transition-colors duration-200 hover:text-white group">
                  <Headphones size={13} className="opacity-50 group-hover:opacity-100 transition-opacity text-accent-light" />
                  Contact Helpdesk
                </Link>
              </li>
            </ul>
          </nav>

          {/* Regional Branches */}
          <div>
            <h4 className="flex items-center gap-2 label-text text-text-secondary mb-5">
              <MapPin size={14} className="text-accent-light" />
              REGIONAL BRANCHES
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-2.5">
                <MapPin size={13} className="mt-0.5 flex-shrink-0 text-accent-light" />
                <div>
                  <span className="text-sm font-medium text-white">Koshi HQ</span>
                  <p className="text-xs mt-0.5 text-text-tertiary">Dharan-12, Koshi Province</p>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={13} className="mt-0.5 flex-shrink-0 text-text-tertiary" />
                <div>
                  <span className="text-sm font-medium text-white">Bagmati Hub</span>
                  <p className="text-xs mt-0.5 text-text-tertiary">Tinkune, Kathmandu <span className="text-accent-dark">*expanding soon</span></p>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={13} className="mt-0.5 flex-shrink-0 text-text-tertiary" />
                <div>
                  <span className="text-sm font-medium text-white">Gandaki Node</span>
                  <p className="text-xs mt-0.5 text-text-tertiary">Pokhara Lakeside <span className="text-accent-dark">*expanding soon</span></p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border-dark">
          <div className="text-xs text-text-tertiary">
            &copy; 2026 CivoraX Tech Pvt. Ltd. All rights reserved.
            <span className="hidden sm:inline"> &bull; </span>
            <br className="sm:hidden" />
            PAN: 608291042 &bull; Dharan, Koshi Province, Nepal
          </div>

          {/* Social Icons */}
          <nav aria-label="Social media" className="flex items-center gap-3">
            {socialLinks
              .filter((social) => social.label === 'WhatsApp')
              .map((social) => (
                <a
                  key={social.label}
                  href="https://wa.me/9779805309473"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-text-tertiary transition-all duration-200 hover:bg-bg-secondary hover:text-white"
                  aria-label={social.label}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
          </nav>
        </div>
      </div>

      <WhatsAppFAB />
    </footer>
  )
}
