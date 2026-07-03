import type { Metadata } from 'next'
import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BackToTop from '../components/BackToTop'
import PageTransition from '../components/PageTransition'

export const metadata: Metadata = {
  title: {
    default: 'CivoraX — Software Engineering Studio, Dharan, Nepal',
    template: '%s | CivoraX',
  },
  description: 'CivoraX Tech Pvt. Ltd. builds offline POS systems, ERPs, and web portals from Dharan, Nepal.',
  metadataBase: new URL('https://civorax.com.np'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'CivoraX Tech',
    title: 'CivoraX — Software Engineering Studio, Dharan, Nepal',
    description: 'Offline POS systems, ERPs, and web portals built in Dharan, Nepal. Production-grade software for businesses that need reliability.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CivoraX — Software Engineering Studio, Dharan, Nepal',
    description: 'Offline POS systems, ERPs, and web portals built in Dharan, Nepal.',
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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-md focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:bg-lime-500 focus:text-white"
        >
          Skip to content
        </a>
        <div className="min-h-screen bg-white">
          <Header />
          <main id="main-content">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
          <BackToTop />
        </div>
      </body>
    </html>
  )
}
