import Link from 'next/link'

export default function NotFound() {
  return (
    <section
      className="section-padding flex items-center justify-center text-center"
      style={{ backgroundColor: 'var(--bg-primary)', minHeight: '80vh' }}
    >
      <div className="max-w-[480px] mx-auto">
        <span
          className="text-[120px] font-bold leading-none"
          style={{ color: 'var(--accent-light)', opacity: 0.3 }}
        >
          404
        </span>
        <h1
          className="mt-4 text-3xl md:text-[42px] font-bold leading-tight"
          style={{ color: 'var(--text-white)', letterSpacing: '-0.01em' }}
        >
          Page not found
        </h1>
        <p
          className="mt-4 text-base leading-relaxed"
          style={{ color: 'var(--text-secondary)' }}
        >
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-[15px] font-semibold rounded-full transition-all duration-300 hover:scale-[1.02]"
            style={{ backgroundColor: 'var(--accent-light)', color: 'var(--bg-primary)', padding: '14px 32px' }}
          >
            Back to home
          </Link>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 text-[15px] font-semibold text-white rounded-full transition-all duration-300"
            style={{ backgroundColor: 'transparent', border: '1px solid var(--border-dark)', padding: '14px 32px' }}
          >
            Contact us
          </Link>
        </div>
      </div>
    </section>
  )
}
