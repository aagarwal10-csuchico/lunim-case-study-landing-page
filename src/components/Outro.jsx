import Reveal from './Reveal.jsx'

export default function Outro() {
  return (
    <section className="relative bg-bg-base">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          maskImage:
            'radial-gradient(ellipse at 50% 50%, black 30%, transparent 70%)',
          WebkitMaskImage:
            'radial-gradient(ellipse at 50% 50%, black 30%, transparent 70%)',
        }}
      />
      <div
        aria-hidden
        className="absolute pointer-events-none left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 h-[420px] w-[420px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(0,212,255,0.10) 0%, rgba(0,212,255,0) 60%)',
          filter: 'blur(20px)',
        }}
      />

      <div className="relative mx-auto max-w-[1280px] px-6 md:px-10 py-24 md:py-36 text-center">
        <Reveal as="p" className="text-xs tracking-[0.24em] uppercase text-accent mb-8">
          <span className="inline-block h-px w-8 bg-accent align-middle mr-3" />
          LIGHT THE WAY
        </Reveal>

        <Reveal delay={120}>
          <h2 className="font-display font-bold text-text-primary text-4xl md:text-7xl tracking-tight leading-[1.02]">
            Ready for your
            <br />
            <span className="text-accent">moonshot?</span>
          </h2>
        </Reveal>

        <Reveal delay={260} className="mt-10 flex justify-center">
          <a
            href="https://lunim.io/digital#get-in-touch"
            className="inline-flex items-center gap-2 bg-accent text-bg-base font-medium text-base px-7 py-3.5 rounded-md hover:bg-accent-hover transition-colors"
          >
            Get In Touch →
          </a>
        </Reveal>

        <Reveal delay={380} className="mt-6 text-text-muted text-xs">
          lunim.io · London, United Kingdom
        </Reveal>
      </div>
      <footer className="relative border-t border-border">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10 py-6 flex flex-col gap-2 md:flex-row md:items-center md:justify-between text-xs text-text-muted">
          <span>© 2026 Risidio Ltd. T/A Lunim Innovation Studio. All rights reserved.</span>
          <a href="https://lunim.io/privacy-policy" className="hover:text-text-primary transition-colors">
            Privacy Policy
          </a>
        </div>
      </footer>
    </section>
  )
}
