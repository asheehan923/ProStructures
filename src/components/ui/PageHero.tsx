import Link from 'next/link'

interface Breadcrumb {
  label: string
  href?: string
}

interface PageHeroProps {
  title: string
  subtitle?: string
  breadcrumbs?: Breadcrumb[]
  eyebrow?: string
  cta?: { label: string; href: string }
}

export default function PageHero({ title, subtitle, breadcrumbs, eyebrow, cta }: PageHeroProps) {
  return (
    <section className="bg-[var(--color-secondary)] text-white">
      <div className="relative">
        <div className="absolute top-0 left-0 right-0 h-1 bg-[var(--color-primary)]" />
      </div>
      <div className="max-w-[var(--max-width-site)] mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">

        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="flex items-center gap-2 text-xs text-gray-400 mb-4" aria-label="Breadcrumb">
            {breadcrumbs.map((crumb, idx) => (
              <span key={idx} className="flex items-center gap-2">
                {idx > 0 && <span>/</span>}
                {crumb.href
                  ? <Link href={crumb.href} className="hover:text-white transition-colors">{crumb.label}</Link>
                  : <span className="text-gray-300">{crumb.label}</span>
                }
              </span>
            ))}
          </nav>
        )}

        {eyebrow && (
          <p className="font-[family-name:var(--font-family-heading)] text-[var(--color-primary-300)] text-sm font-bold uppercase tracking-widest mb-3">
            {eyebrow}
          </p>
        )}

        <h1 className="font-[family-name:var(--font-family-heading)] text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase leading-tight mb-4">
          {title}
        </h1>

        {subtitle && (
          <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mb-6">
            {subtitle}
          </p>
        )}

        {cta && (
          <Link
            href={cta.href}
            className="inline-block bg-[var(--color-primary)] text-white font-[family-name:var(--font-family-heading)] font-bold text-sm uppercase tracking-wider px-7 py-3.5 rounded-[var(--radius-brand)] hover:bg-[var(--color-primary-700)] transition-colors"
          >
            {cta.label}
          </Link>
        )}
      </div>
    </section>
  )
}
