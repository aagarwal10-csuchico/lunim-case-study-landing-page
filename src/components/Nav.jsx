export default function Nav() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-30">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10 py-6 flex items-center justify-between">
        <a href="https://lunim.io" className="group">
          <img
            src="/logo.png"
            alt="Lunim"
            className="h-10 w-auto transition-opacity duration-300 group-hover:opacity-90"
          />
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm text-text-secondary">
          <a href="https://lunim.io/digital" className="hover:text-text-primary transition-colors">
            Digital
          </a>
          <a href="https://lunim.io/studio" className="hover:text-text-primary transition-colors">
            Studio
          </a>
          <a href="https://lunim.io/about" className="hover:text-text-primary transition-colors">
            About
          </a>
        </div>

        <a
          href="https://lunim.io/digital#get-in-touch"
          className="inline-flex items-center bg-accent text-bg-base font-medium text-sm px-5 py-2.5 rounded-md hover:bg-accent-hover transition-colors"
        >
          Get In Touch
        </a>
      </div>
    </nav>
  )
}
