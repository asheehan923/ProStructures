import Link from 'next/link'

export default function GalleryTeaser() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[var(--max-width-site)] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[var(--color-primary-950)] rounded-[var(--radius-brand-xl)] px-8 py-14 sm:px-14 flex flex-col sm:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-[family-name:var(--font-family-heading)] text-[var(--text-h2)] font-bold text-white leading-tight mb-3">
              Completed Builds Across Texas
            </h2>
            <p className="text-gray-300 max-w-xl leading-relaxed">
              Real structures, real properties, real Texas. See completed builds from customers in Granbury, Crosby, Longview, and communities across the state.
            </p>
          </div>
          <Link
            href="/gallery"
            className="shrink-0 inline-block bg-[var(--color-primary)] text-white font-[family-name:var(--font-family-heading)] font-bold text-base uppercase tracking-wider px-8 py-4 rounded-[var(--radius-brand)] hover:bg-[var(--color-primary-700)] transition-colors whitespace-nowrap"
          >
            View Project Gallery
          </Link>
        </div>
      </div>
    </section>
  )
}
