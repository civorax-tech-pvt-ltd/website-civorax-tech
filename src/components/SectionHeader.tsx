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
    <div className={align === 'center' ? 'text-center' : 'text-left'}>
      <span className={`label-text inline-flex items-center gap-2 ${light ? 'text-accent-light' : 'text-accent-dark dark:text-accent-light'}`}>
        <span className={`inline-block w-1.5 h-1.5 rounded-full ${light ? 'bg-accent-light' : 'bg-accent-dark dark:bg-accent-light'}`} />
        {label}
      </span>
      <h2
        className={`mt-4 text-3xl md:text-[42px] font-bold leading-tight tracking-tight ${light ? 'text-text-white' : 'text-text-primary dark:text-white'}`}
      >
        {heading}
      </h2>
      {subheading && (
        <p
          className={`mt-4 text-base leading-relaxed max-w-xl ${align === 'center' ? 'mx-auto' : ''} ${light ? 'text-text-secondary' : 'text-text-body'}`}
        >
          {subheading}
        </p>
      )}
    </div>
  )
}
