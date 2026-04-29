import Nav from './Nav.jsx'
import Reveal from './Reveal.jsx'

export default function Hero() {
  return (
    <header className="relative min-h-screen overflow-hidden grain bg-bg-base">
      <Nav />

      {/* Soft cyan glow */}
      <div
        aria-hidden
        className="absolute pointer-events-none -top-40 -left-40 h-[520px] w-[520px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(0,212,255,0.18) 0%, rgba(0,212,255,0) 60%)',
          filter: 'blur(20px)',
        }}
      />
      <div
        aria-hidden
        className="absolute pointer-events-none top-1/3 -right-40 h-[480px] w-[480px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(0,212,255,0.10) 0%, rgba(0,212,255,0) 60%)',
          filter: 'blur(24px)',
        }}
      />

      {/* Faint grid */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          maskImage:
            'radial-gradient(ellipse at 50% 40%, black 35%, transparent 75%)',
          WebkitMaskImage:
            'radial-gradient(ellipse at 50% 40%, black 35%, transparent 75%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1280px] px-6 md:px-10 pt-40 md:pt-56 pb-24 md:pb-32">
        <Reveal
          as="p"
          className="font-mono text-xs tracking-[0.24em] uppercase text-accent mb-8"
        >
          <span className="inline-block h-px w-8 bg-accent align-middle mr-3" />
          Digital Services — Case Studies
        </Reveal>

        <Reveal delay={120}>
          <h1 className="font-display font-bold leading-[0.95] tracking-tight text-text-primary text-[44px] sm:text-6xl md:text-7xl lg:text-[112px]">
            Work that
            <br />
            changes <span className="text-accent">outcomes.</span>
          </h1>
        </Reveal>

        <Reveal delay={260} className="mt-10 max-w-2xl">
          <p className="text-base md:text-lg text-text-secondary leading-relaxed">
            Six projects across Human-Centric Design, AI and Web3 — measured by
            what shipped, who used it, and what changed.
          </p>
        </Reveal>

        <Reveal
          delay={400}
          className="mt-20 md:mt-32 flex items-center gap-3 text-text-muted text-xs tracking-[0.18em] uppercase"
        >
          <span className="inline-block h-px w-10 bg-text-muted/60" />
          Scroll to explore
        </Reveal>
      </div>
    </header>
  )
}
