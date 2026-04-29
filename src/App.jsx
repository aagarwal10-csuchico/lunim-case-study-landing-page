import { useMemo, useState } from 'react'
import Hero from './components/Hero.jsx'
import FilterBar from './components/FilterBar.jsx'
import CaseStudyGrid from './components/CaseStudyGrid.jsx'
import BeforeAfter from './components/BeforeAfter.jsx'
import ImpactMetrics from './components/ImpactMetrics.jsx'
import Outro from './components/Outro.jsx'
import { caseStudies } from './data/caseStudies.js'

export default function App() {
  const [filter, setFilter] = useState('All')

  const filtered = useMemo(() => {
    if (filter === 'All') return caseStudies
    return caseStudies.filter((s) => s.category === filter)
  }, [filter])

  return (
    <main className="bg-bg-base text-text-primary">
      <Hero />
      <div id="case-studies">
        <FilterBar active={filter} onChange={setFilter} />
        <CaseStudyGrid studies={filtered} allStudies={caseStudies} />
      </div>
      <BeforeAfter />
      <ImpactMetrics />
      <Outro />
    </main>
  )
}
