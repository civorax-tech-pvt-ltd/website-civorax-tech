import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page Not Found',
  description: 'The page you are looking for does not exist or has been moved.',
}

export default function NotFound() {
  return (
    <section
      className="section-padding flex items-center justify-center text-center bg-bg-primary min-h-[80vh]"
    >
      <div className="max-w-[480px] mx-auto">
        <span
          className="text-[120px] font-bold leading-none text-accent-light opacity-30"
        >
          404
        </span>
        <h1
          className="mt-4 text-3xl md:text-[42px] font-bold leading-tight text-text-white tracking-tight"
        >
          Page not found
        </h1>
        <p
          className="mt-4 text-base leading-relaxed text-text-secondary"
        >
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-[15px] font-semibold rounded-full transition-all duration-300 hover:scale-[1.02] bg-accent-light text-bg-primary px-8 py-3.5"
          >
            Back to home
          </Link>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 text-[15px] font-semibold text-white rounded-full transition-all duration-300 bg-transparent border border-border-dark px-8 py-3.5"
          >
            Contact us
          </Link>
        </div>
      </div>
    </section>
  )
}
