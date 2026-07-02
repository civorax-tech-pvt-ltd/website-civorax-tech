interface SectionHeaderProps {
  label: string
  heading: string
  subheading?: string
  light?: boolean
  align?: 'center' | 'left'
}

export default function SectionHeader({
  label,
  heading,
  subheading,
  light = false,
  align = 'center',
}: SectionHeaderProps) {
  return (
    <div className={`${align === 'center' ? 'text-center' : 'text-left'}`}>
      <span
        className="label-text inline-flex items-center gap-2"
        style={{ color: light ? 'var(--accent-light)' : 'var(--accent-dark)' }}
      >
        <span
          className="inline-block w-1.5 h-1.5 rounded-full"
          style={{ backgroundColor: light ? 'var(--accent-light)' : 'var(--accent-dark)' }}
        />
        {label}
      </span>
      <h2
        className="mt-4 text-3xl md:text-[42px] font-bold leading-tight"
        style={{ color: light ? 'var(--text-white)' : 'var(--bg-primary)', letterSpacing: '-0.01em' }}
      >
        {heading}
      </h2>
      {subheading && (
        <p
          className="mt-4 text-base leading-relaxed max-w-xl"
          style={{
            color: light ? 'var(--text-secondary)' : 'var(--text-body)',
            margin: align === 'center' ? '16px auto 0' : '16px 0 0',
          }}
        >
          {subheading}
        </p>
      )}
    </div>
  )
}
