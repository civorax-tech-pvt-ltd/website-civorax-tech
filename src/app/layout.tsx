import type { Metadata } from 'next'
import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BackToTop from '../components/BackToTop'
import PageTransition from '../components/PageTransition'
import SmoothScrollProvider from '../components/SmoothScrollProvider'
import { ThemeProvider } from 'next-themes'

export const metadata: Metadata = {
  title: {
    default: 'CivoraX — Software Engineering Studio, Dharan, Nepal',
    template: '%s | CivoraX',
  },
  description: 'CivoraX Tech Pvt. Ltd. builds offline POS systems, ERPs, and web portals from Dharan, Nepal.',
  keywords: [
    'civora', 'civorax', 'civora tech', 'civora infra',
    'saugat dhungana', 'reverse minded', 'dheeraj uparkoti',
    'best software company koshi', 'IT company nepal', 'software company dharan',
    'best inventory software', 'POS system nepal', 'restaurant POS',
    'gen AI apps', 'offline POS', 'ERP system', 'web development nepal',
  ],
  metadataBase: new URL('https://civorax.com.np'),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'CivoraX Tech',
    title: 'CivoraX — Software Engineering Studio, Dharan, Nepal',
    description: 'Offline POS systems, ERPs, and web portals built in Dharan, Nepal. Production-grade software for businesses that need reliability.',
    images: [
      {
        url: '/og-default.png',
        width: 1200,
        height: 630,
        alt: 'CivoraX Tech — Offline-first software from Nepal',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CivoraX — Software Engineering Studio, Dharan, Nepal',
    description: 'Offline POS systems, ERPs, and web portals built in Dharan, Nepal.',
    images: ['/og-default.png'],
  },
  icons: {
    icon: [
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon/favicon.ico' },
    ],
    apple: '/favicon/apple-touch-icon.png',
    other: [
      { rel: 'manifest', url: '/favicon/manifest.json' },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#1a1a1a" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'CivoraX Tech Pvt. Ltd.',
              url: 'https://civorax.com.np',
              logo: 'https://civorax.com.np/favicon/favicon-32x32.png',
              description: 'Offline-first software for Nepal. POS systems, ERPs, and web portals built in Dharan.',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Putali Line-12',
                addressLocality: 'Dharan',
                addressRegion: 'Koshi Province',
                addressCountry: 'NP',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                email: 'info@civorax.com',
                telephone: '+977-9805309473',
                contactType: 'customer service',
              },
              sameAs: [
                'https://wa.me/9779805309473',
              ],
            }),
          }}
        />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <SmoothScrollProvider>
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-md focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:bg-lime-500 focus:text-white"
            >
              Skip to content
            </a>
            <div className="min-h-screen bg-white dark:bg-[#0f0f0f]">
              <Header />
              <main id="main-content">
                <PageTransition>{children}</PageTransition>
              </main>
              <Footer />
              <BackToTop />
            </div>
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
