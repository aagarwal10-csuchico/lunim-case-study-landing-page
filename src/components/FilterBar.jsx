import { categories } from '../data/caseStudies.js'

export default function FilterBar({ active, onChange, total }) {
  return (
    <div className="filter-bar sticky top-0 z-20">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
        <div className="flex items-center justify-between py-5">
          <div
            className="flex items-center gap-6 md:gap-10 overflow-x-auto no-scrollbar"
            role="tablist"
            aria-label="Filter case studies"
          >
            {categories.map((cat) => {
              const isActive = active === cat
              return (
                <button
                  key={cat}
                  role="tab"
                  aria-selected={isActive}
                  data-active={isActive}
                  onClick={() => onChange(cat)}
                  className={`filter-tab whitespace-nowrap text-sm md:text-[15px] font-medium tracking-wide ${
                    isActive ? 'text-text-primary' : 'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  {cat}
                </button>
              )
            })}
          </div>

          <span className="hidden md:inline-block text-xs tracking-[0.2em] uppercase text-text-muted">
            {total} {total === 1 ? 'project' : 'projects'}
          </span>
        </div>
      </div>
    </div>
  )
}
