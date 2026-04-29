import CaseStudyCard from './CaseStudyCard.jsx'
import { useScrollReveal } from '../hooks/useScrollReveal.js'

/**
 * Editorial layout pattern (12-col on desktop):
 * Pair index 0: 7 / 5 (featured wide on left)
 * Pair index 1: 5 / 7 (featured wide on right)
 * Pair index 2: 7 / 5 (alternates again)
 * On md and below this collapses to a single column.
 */
function getLayoutFor(index) {
  const pair = Math.floor(index / 2)
  const isLeft = index % 2 === 0
  const isWidePair = pair % 2 === 0

  if (isLeft) {
    return {
      colSpan: isWidePair ? 'md:col-span-7' : 'md:col-span-5',
      variant: pair === 0 ? 'featured' : isWidePair ? 'wide' : 'default',
    }
  }
  return {
    colSpan: isWidePair ? 'md:col-span-5' : 'md:col-span-7',
    variant: !isWidePair ? 'wide' : 'default',
  }
}

export default function CaseStudyGrid({ studies, allStudies }) {
  const visibleIds = new Set(studies.map((s) => s.id))

  // Always render all studies in a stable order so opacity transitions
  // smoothly when filtering. Layout positions are based on the full set.
  return (
    <section className="relative bg-bg-base">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10 py-16 md:py-24">
        <SectionIntro />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6 mt-10 md:mt-14">
          {allStudies.map((study, i) => {
            const { colSpan, variant } = getLayoutFor(i)
            const filteredOut = !visibleIds.has(study.id)
            return (
              <GridItem
                key={study.id}
                colSpan={colSpan}
                index={i}
                filteredOut={filteredOut}
              >
                <CaseStudyCard
                  study={study}
                  variant={variant}
                  filteredOut={filteredOut}
                  delay={(i % 3) * 80}
                />
              </GridItem>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function GridItem({ colSpan, index, children, filteredOut }) {
  const [ref, visible] = useScrollReveal(0.1)
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} col-span-1 ${colSpan} ${
        filteredOut ? 'md:opacity-30' : ''
      }`}
      style={{ transitionDelay: `${(index % 3) * 90}ms` }}
    >
      {children}
    </div>
  )
}

function SectionIntro() {
  const [ref, visible] = useScrollReveal(0.2)
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} flex items-end justify-between gap-6 flex-wrap`}
    >
      <div>
        <p className="text-xs tracking-[0.24em] uppercase text-accent mb-4">
          <span className="inline-block h-px w-8 bg-accent align-middle mr-3" />
          THE WORK
        </p>
        <h2 className="font-display font-bold text-text-primary text-3xl md:text-5xl tracking-tight leading-[1.05] max-w-3xl">
          Selected case studies, weighted by outcome.
        </h2>
      </div>
    </div>
  )
}
