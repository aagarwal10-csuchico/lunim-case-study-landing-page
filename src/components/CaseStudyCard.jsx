function hexToRgba(hex, alpha = 1) {
  const v = hex.replace('#', '')
  const full =
    v.length === 3
      ? v
          .split('')
          .map((c) => c + c)
          .join('')
      : v
  const r = parseInt(full.slice(0, 2), 16)
  const g = parseInt(full.slice(2, 4), 16)
  const b = parseInt(full.slice(4, 6), 16)
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

export default function CaseStudyCard({
  study,
  variant = 'default',
  filteredOut = false,
  delay = 0,
}) {
  const isFeatured = variant === 'featured'
  const isWide = variant === 'wide'
  const isTall = variant === 'tall'

  const headingSize = isFeatured
    ? 'text-3xl md:text-5xl'
    : isWide
      ? 'text-2xl md:text-4xl'
      : 'text-xl md:text-2xl'

  const metric = study.metrics[0]
  const metricSize = isFeatured
    ? 'text-6xl md:text-8xl'
    : isWide
      ? 'text-5xl md:text-7xl'
      : 'text-4xl md:text-6xl'

  return (
    <a
      href={study.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${study.client} — ${study.headline}`}
      className={`case-card group block bg-bg-card border border-border rounded-[4px] p-6 md:p-8 h-full ${
        filteredOut ? 'opacity-30 pointer-events-none' : 'opacity-100'
      } transition-opacity duration-500`}
      style={{
        '--card-accent': hexToRgba(study.accent, 1),
        borderLeft: `2px solid ${hexToRgba(study.accent, 0.85)}`,
        transitionDelay: `${delay}ms`,
      }}
    >
      <div
        className={`flex flex-col h-full ${
          isFeatured ? 'md:min-h-[420px]' : isWide ? 'md:min-h-[300px]' : 'md:min-h-[300px]'
        }`}
      >
        {/* Top row: client + category chip */}
        <div className="flex items-center justify-between mb-6">
          <span className="text-xs tracking-[0.18em] uppercase text-text-muted">
            {study.client}
          </span>
          <span
            className="text-[10px] md:text-[11px] tracking-[0.16em] uppercase font-medium px-2.5 py-1 rounded-[3px]"
            style={{
              backgroundColor: hexToRgba(study.accent, 0.12),
              color: hexToRgba(study.accent, 1),
              border: `1px solid ${hexToRgba(study.accent, 0.3)}`,
            }}
          >
            {study.category}
          </span>
        </div>

        {/* Headline */}
        <h3
          className={`font-display font-bold text-text-primary leading-[1.05] tracking-tight ${headingSize}`}
        >
          {study.headline}
        </h3>

        {/* Hover-revealed challenge teaser */}
        <p className="challenge-teaser text-sm md:text-[15px] text-text-secondary leading-relaxed">
          {study.challenge}
        </p>

        {/* Spacer that pushes metric to bottom on featured/wide */}
        <div className="flex-1 min-h-[28px]" />

        {/* Metric */}
        <div className="mt-6">
          <div
            className={`font-display font-bold leading-none tracking-tight ${metricSize}`}
            style={{ color: hexToRgba(study.accent, 1) }}
          >
            {metric.value}
          </div>
          <p className="mt-3 text-xs md:text-sm text-text-secondary max-w-[28ch] leading-snug">
            {metric.label}
          </p>
        </div>

        {/* Footer: tags + arrow */}
        <div className="mt-6 flex items-center justify-between gap-4 pt-5 border-t border-border/80">
          <ul className="flex flex-wrap gap-2">
            {study.tags.map((t) => (
              <li
                key={t}
                className="text-[10px] md:text-[11px] tracking-[0.14em] uppercase text-tag-text bg-tag-bg px-2 py-1 rounded-[3px] border border-border"
              >
                {t}
              </li>
            ))}
          </ul>
          <span className="flex items-center gap-1.5 text-xs text-accent shrink-0">
            View
            <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </span>
        </div>
      </div>
    </a>
  )
}
