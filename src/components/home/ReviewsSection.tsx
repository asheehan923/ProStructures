export default function ReviewsSection() {
  return (
    <section className="py-20 bg-[var(--color-background)]">
      <div className="max-w-[var(--max-width-site)] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-10">
          <h2 className="font-[family-name:var(--font-family-heading)] text-[var(--text-h2)] font-bold text-[var(--color-text)] mb-3">
            What Our Customers Say
          </h2>
          <p className="text-[var(--color-text-muted)] max-w-xl mx-auto">
            Texas homeowners across our 11 locations trust ProStructures for metal buildings, carports, and garages.
          </p>
        </div>

        {/*
          Developer note: Embed Google Reviews widget here.
          Component: _dev/google-reviews-widget.html
          Pull top-rated reviews from each active showroom location.
          Display customer first name + city (e.g., "John D. — Granbury, TX").
          Minimum 3 reviews visible above fold on desktop.
          Place IDs per location are in each location page draft.
        */}
        <div className="bg-white border border-[var(--color-border)] rounded-[var(--radius-brand-xl)] p-10 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            {/* Google G */}
            <svg width="28" height="28" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
              <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
              <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
              <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
            </svg>
            <span className="font-[family-name:var(--font-family-heading)] font-bold text-2xl text-[var(--color-text)]">
              Google Reviews
            </span>
          </div>
          <p className="text-[var(--color-text-muted)] mb-6 text-sm">
            Live reviews will appear here once Google Business Profile Place IDs are configured.
          </p>
          <a
            href="https://www.google.com/search?q=ProStructures+Texas+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[var(--color-primary)] text-white font-[family-name:var(--font-family-heading)] font-bold text-sm uppercase tracking-wider px-6 py-3 rounded-[var(--radius-brand)] hover:bg-[var(--color-primary-700)] transition-colors"
          >
            Read Our Google Reviews
          </a>
        </div>
      </div>
    </section>
  )
}
