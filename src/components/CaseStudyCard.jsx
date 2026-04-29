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
  const metric = study.metrics[0]

  const baseClass = `case-card group block bg-bg-card border border-border rounded-[4px] h-full ${
    filteredOut ? 'opacity-30 pointer-events-none' : 'opacity-100'
  } transition-opacity duration-500`

  const cardStyle = {
    '--card-accent': hexToRgba(study.accent, 1),
    borderLeft: `2px solid ${hexToRgba(study.accent, 0.85)}`,
    transitionDelay: `${delay}ms`,
  }

  if (isFeatured) {
    return (
      <a
        href={study.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${study.client} — ${study.headline}`}
        className={`${baseClass} p-8 md:p-12 lg:p-16`}
        style={cardStyle}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center min-h-[420px] md:min-h-[480px]">
          {/* Left: editorial content */}
          <div className="lg:col-span-7 flex flex-col h-full">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[10px] md:text-[11px] tracking-[0.24em] uppercase text-accent font-medium">
                Featured Case Study
              </span>
              <span className="h-px flex-1 bg-border" />
            </div>

            <span className="text-xs tracking-[0.18em] uppercase text-text-muted mb-5">
              {study.eyebrow}
            </span>

            <h3 className="font-display font-bold text-text-primary leading-[1.02] tracking-tight text-4xl md:text-5xl lg:text-6xl">
              {study.headline}
            </h3>

            <p className="mt-6 md:mt-8 text-text-secondary text-base md:text-lg leading-relaxed max-w-[55ch]">
              {study.challenge}
            </p>

            <div className="flex-1 min-h-[24px]" />

            <div className="mt-8 flex items-center justify-between gap-4 pt-6 border-t border-border/80">
              <ul className="flex flex-wrap gap-2">
                {study.tags.map((t) => (
                  <li
                    key={t}
                    className="text-[10px] md:text-[11px] tracking-[0.14em] uppercase text-tag-text bg-tag-bg px-2.5 py-1 rounded-[3px] border border-border"
                  >
                    {t}
                  </li>
                ))}
              </ul>
              <span className="flex items-center gap-1.5 text-sm text-accent shrink-0">
                Read case study
                <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </span>
            </div>
          </div>

          {/* Right: oversized metric */}
          <div className="lg:col-span-5 flex flex-col justify-center lg:pl-6 lg:border-l lg:border-border/60">
            <div
              className="font-display font-bold leading-[0.92] tracking-tight text-[80px] md:text-[100px] lg:text-[120px]"
              style={{ color: hexToRgba(study.accent, 1) }}
            >
              {metric.value}
            </div>
            <p className="mt-5 text-sm md:text-base text-text-secondary max-w-[32ch] leading-snug">
              {metric.label}
            </p>
          </div>
        </div>
      </a>
    )
  }

  return (
    <a
      href={study.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${study.client} — ${study.headline}`}
      className={`${baseClass} p-6 md:p-8`}
      style={cardStyle}
    >
      <div className="flex flex-col h-full md:min-h-[300px]">
        <div className="mb-6">
          <span className="text-xs tracking-[0.18em] uppercase text-text-muted">
            {study.eyebrow}
          </span>
        </div>

        <h3 className="font-display font-bold text-text-primary leading-[1.05] tracking-tight text-xl md:text-2xl">
          {study.headline}
        </h3>

        <div className="flex-1 min-h-[28px]" />

        <div className="mt-6">
          <div
            className="font-display font-bold leading-none tracking-tight text-4xl md:text-6xl"
            style={{ color: hexToRgba(study.accent, 1) }}
          >
            {metric.value}
          </div>
          <p className="mt-3 text-xs md:text-sm text-text-secondary max-w-[28ch] leading-snug">
            {metric.label}
          </p>
        </div>

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
