import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative text-white overflow-hidden min-h-[600px] lg:min-h-[700px] flex items-center">

      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      >
        <source src="/video/hero.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay so text is readable */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Red accent bar at top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[var(--color-primary)] z-10" />

      <div className="relative z-10 max-w-[var(--max-width-site)] mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-36 w-full">
        <div className="max-w-3xl">

          {/* Eyebrow */}
          <p className="font-[family-name:var(--font-family-heading)] text-[var(--color-primary-300)] text-sm font-bold uppercase tracking-widest mb-4">
            11 Texas Showrooms · Custom Builds · Turnkey Installation
          </p>

          {/* Headline */}
          <h1 className="font-[family-name:var(--font-family-heading)] text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-none uppercase mb-4">
            We&rsquo;ve Got You{' '}
            <span className="text-[var(--color-primary)]">Covered.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-gray-200 leading-relaxed mb-8 max-w-2xl">
            ProStructures builds custom metal buildings across Texas — and we handle everything from steel to concrete, so you never have to manage two contractors. Carports, garages, barns, RV covers, and more.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
            <Link
              href="/contact"
              className="inline-block bg-[var(--color-primary)] text-white font-[family-name:var(--font-family-heading)] font-bold text-base uppercase tracking-wider px-8 py-4 rounded-[var(--radius-brand)] hover:bg-[var(--color-primary-700)] transition-colors text-center"
            >
              Get a Free Quote
            </Link>
            {/* TODO: Replace href with custom building creator URL when available */}
            <Link
              href="/contact?type=custom"
              className="inline-block bg-white text-black font-[family-name:var(--font-family-heading)] font-bold text-base uppercase tracking-wider px-8 py-4 rounded-[var(--radius-brand)] hover:bg-gray-100 transition-colors text-center"
            >
              Customize Your Metal Building
            </Link>
            <Link
              href="/locations/texas"
              className="inline-block bg-transparent text-white border-2 border-white font-[family-name:var(--font-family-heading)] font-bold text-base uppercase tracking-wider px-8 py-4 rounded-[var(--radius-brand)] hover:bg-white hover:text-black transition-colors text-center"
            >
              See Our Locations
            </Link>
          </div>

          {/* Trust bar */}
          <div className="mt-12 flex flex-wrap gap-6 text-sm text-gray-300">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[var(--color-primary)]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              Concrete slab available
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[var(--color-primary)]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              Custom sizing &amp; colors
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[var(--color-primary)]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              Fast delivery on custom builds
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
