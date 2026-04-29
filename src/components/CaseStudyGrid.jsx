import CaseStudyCard from './CaseStudyCard.jsx'
import { useScrollReveal } from '../hooks/useScrollReveal.js'

/**
 * Editorial hierarchy:
 *  - The first study renders as a full-width featured hero card.
 *  - The remaining studies sit in a 2-column grid beneath it.
 * This intentionally breaks a uniform grid so the lead piece carries
 * more visual weight than the supporting work.
 */
export default function CaseStudyGrid({ studies, allStudies }) {
  const visibleIds = new Set(studies.map((s) => s.id))
  const [featured, ...rest] = allStudies

  if (!featured) return null

  return (
    <section className="relative bg-bg-base">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10 py-16 md:py-24">
        <SectionIntro />

        <div className="mt-10 md:mt-14">
          <GridItem index={0} filteredOut={!visibleIds.has(featured.id)}>
            <CaseStudyCard
              study={featured}
              variant="featured"
              filteredOut={!visibleIds.has(featured.id)}
              delay={0}
            />
          </GridItem>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mt-5 md:mt-6">
          {rest.map((study, i) => {
            const filteredOut = !visibleIds.has(study.id)
            return (
              <GridItem
                key={study.id}
                index={i + 1}
                filteredOut={filteredOut}
              >
                <CaseStudyCard
                  study={study}
                  variant="default"
                  filteredOut={filteredOut}
                  delay={(i % 2) * 80}
                />
              </GridItem>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function GridItem({ index, children, filteredOut }) {
  const [ref, visible] = useScrollReveal(0.1)
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${
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
