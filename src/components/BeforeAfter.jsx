import { useCallback, useEffect, useRef, useState } from 'react'
import Reveal from './Reveal.jsx'
import { caseStudies } from '../data/caseStudies.js'
import CaseStudyCard from './CaseStudyCard.jsx'

const featured = caseStudies[0]

export default function BeforeAfter() {
  const [pct, setPct] = useState(50)
  const containerRef = useRef(null)
  const draggingRef = useRef(false)

  const setFromClientX = useCallback((clientX) => {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const raw = ((clientX - rect.left) / rect.width) * 100
    const clamped = Math.max(5, Math.min(95, raw))
    setPct(clamped)
  }, [])

  const onPointerDown = useCallback(
    (e) => {
      draggingRef.current = true
      const x = e.touches ? e.touches[0].clientX : e.clientX
      setFromClientX(x)
      e.preventDefault?.()
    },
    [setFromClientX],
  )

  useEffect(() => {
    const onMove = (e) => {
      if (!draggingRef.current) return
      const x = e.touches ? e.touches[0].clientX : e.clientX
      setFromClientX(x)
    }
    const onUp = () => {
      draggingRef.current = false
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup', onUp)
    window.addEventListener('touchmove', onMove, { passive: false })
    window.addEventListener('touchend', onUp)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseup', onUp)
      window.removeEventListener('touchmove', onMove)
      window.removeEventListener('touchend', onUp)
    }
  }, [setFromClientX])

  const onKeyDown = (e) => {
    if (e.key === 'ArrowLeft') setPct((p) => Math.max(5, p - 4))
    if (e.key === 'ArrowRight') setPct((p) => Math.min(95, p + 4))
    if (e.key === 'Home') setPct(5)
    if (e.key === 'End') setPct(95)
  }

  return (
    <section className="relative bg-bg-section border-y border-border">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10 py-16 md:py-24">
        <Reveal as="p" className="text-xs tracking-[0.24em] uppercase text-accent mb-4">
          <span className="inline-block h-px w-8 bg-accent align-middle mr-3" />
          BEFORE & AFTER
        </Reveal>
        <Reveal delay={100}>
          <h2 className="font-display font-bold text-text-primary text-3xl md:text-5xl tracking-tight leading-[1.05] max-w-3xl">
            The same portfolio.
            <br />
            Presented the way the work deserves.
          </h2>
        </Reveal>
        <Reveal delay={260} className="mt-10 md:mt-14">
          <div
            ref={containerRef}
            className="relative w-full overflow-hidden rounded-[4px] border border-border bg-bg-card select-none"
            style={{ aspectRatio: '16 / 10', minHeight: 420 }}
            onMouseDown={onPointerDown}
            onTouchStart={onPointerDown}
          >
            {/* BEFORE (full width, sits underneath) */}
            <div className="absolute inset-0 flex items-center justify-center p-6 md:p-10 bg-bg-card">
              <BeforePanel />
              <PanelLabel side="right">BEFORE</PanelLabel>
            </div>

            {/* AFTER (full width, clipped from the right via clip-path so layout matches Before exactly) */}
            <div
              className="absolute inset-0 flex items-center justify-center p-6 md:p-10 bg-bg-base"
              style={{ clipPath: `inset(0 ${100 - pct}% 0 0)` }}
            >
              <AfterPanel study={featured} />
              <PanelLabel side="left">
                AFTER
              </PanelLabel>
            </div>

            {/* Slider handle */}
            <div className="ba-handle" style={{ left: `${pct}%` }}>
              <button
                type="button"
                aria-label="Drag to compare"
                title="Drag to compare"
                className="ba-handle-grip"
                onMouseDown={onPointerDown}
                onTouchStart={onPointerDown}
                onKeyDown={onKeyDown}
              >
                <span aria-hidden>‹ ›</span>
              </button>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  )
}

function PanelLabel({ children, side, tone = 'default', inline = false }) {
  const isAccent = tone === 'accent'
  const positioning = inline
    ? ''
    : `absolute top-4 z-[3] ${side === 'left' ? 'left-4' : 'right-4'}`
  return (
    <div
      className={`${positioning} text-[10px] tracking-[0.24em] uppercase font-medium px-2.5 py-1.5 rounded-[3px] border ${
        isAccent
          ? 'bg-accent text-bg-base border-accent'
          : 'bg-white text-bg-base border-white'
      }`}
    >
      {children}
    </div>
  )
}

/* Snapshot of the current Lunim card */
function BeforePanel() {
  return (
    <div className="w-full max-w-[440px]">
      <img
        src="/image.png"
        alt="Current Lunim case study card"
        className="w-full h-auto rounded-2xl border border-border shadow-lg"
        draggable={false}
      />
    </div>
  )
}

function AfterPanel({ study }) {
  return (
    <div className="w-full max-w-[440px]">
      <CaseStudyCard study={study} variant="default" />
    </div>
  )
}
