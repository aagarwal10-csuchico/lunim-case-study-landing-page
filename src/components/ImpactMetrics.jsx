import { useEffect, useRef, useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal.js'

const metrics = [
  { value: 28, suffix: '%', label: 'Faster checkout for returning users · Pizza Hut' },
  { value: 93, suffix: '%', label: 'Task completion vs 68% originally' },
  { value: 22, suffix: '%', label: 'Reduction in form abandonment · ToucanBox' },
  { value: 10, suffix: 'hrs+', label: 'Saved per week through automation · WhatsApp AI' },
]

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3)
}

function CountUp({ to, suffix, active, duration = 1200 }) {
  const [n, setN] = useState(0)
  const startedRef = useRef(false)

  useEffect(() => {
    if (!active || startedRef.current) return
    startedRef.current = true

    const start = performance.now()
    let raf = 0

    const tick = (now) => {
      const elapsed = now - start
      const t = Math.min(1, elapsed / duration)
      const eased = easeOutCubic(t)
      setN(to * eased)
      if (t < 1) raf = requestAnimationFrame(tick)
      else setN(to)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [active, to, duration])

  const display = Number.isInteger(to) ? Math.round(n) : n.toFixed(1)
  return (
    <span className="font-display font-bold text-text-primary text-5xl lg:text-6xl tracking-tight leading-none tabular-nums">
      {display}
      <span
        className="text-accent"
        style={{ fontSize: suffix.length > 1 ? '0.6em' : '1em', marginLeft: suffix.length > 1 ? '0.1em' : 0 }}
      >
        {suffix}
      </span>
    </span>
  )
}

export default function ImpactMetrics() {
  const [ref, visible] = useScrollReveal(0.2)

  return (
    <section ref={ref} className="relative bg-bg-elevated border-y border-border">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10 py-16 md:py-24">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-10 md:mb-14">
          <div>
            <p className="text-xs tracking-[0.24em] uppercase text-accent mb-4">
              <span className="inline-block h-px w-8 bg-accent align-middle mr-3" />
              MEASURED IMPACT
            </p>
            <h2 className="font-display font-bold text-text-primary text-3xl md:text-5xl tracking-tight leading-[1.05] max-w-2xl">
              Numbers from real engagements.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 lg:gap-y-0 gap-x-6">
          {metrics.map((m, i) => (
            <div
              key={i}
              className={`reveal ${visible ? 'is-visible' : ''} relative lg:px-8 ${
                i > 0 ? 'lg:border-l lg:border-border' : ''
              }`}
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <CountUp to={m.value} suffix={m.suffix} active={visible} />
              <p className="mt-4 text-text-secondary text-sm md:text-[15px] leading-snug max-w-[24ch]">
                {m.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
