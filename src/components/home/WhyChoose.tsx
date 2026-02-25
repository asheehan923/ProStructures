import Link from 'next/link'

const reasons = [
  {
    number: '01',
    title: 'Turnkey Installation With Concrete Slab Available',
    body: 'Most metal building companies drop off steel and leave. ProStructures handles turnkey installation — concrete slab work available. One contractor, one call, one job done right. No separate concrete crew to source.',
    cta: { label: 'About Installation', href: '/installation' },
  },
  {
    number: '02',
    title: 'Fast Delivery on Custom Builds',
    body: "We move quickly on customized orders. You won't wait months to see your building go up — and you can customize size, roofing style, color, and features without the delays you'd expect from a custom order.",
    cta: null,
  },
  {
    number: '03',
    title: '11 Texas Showrooms — See Before You Buy',
    body: 'Unlike national online-only sellers, ProStructures has physical showroom locations across Texas. Walk in, see the structures, talk to someone who knows the product, and get your questions answered in person.',
    cta: { label: 'Find a Location', href: '/locations/texas' },
  },
]

export default function WhyChoose() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[var(--max-width-site)] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-12">
          <h2 className="font-[family-name:var(--font-family-heading)] text-[var(--text-h2)] font-bold text-[var(--color-text)]">
            Why Texas Homeowners Choose ProStructures
          </h2>
          <p className="mt-3 text-[var(--color-text-muted)] max-w-2xl">
            When you&rsquo;re spending real money on a structure that&rsquo;s going to sit on your property for decades, who builds it matters as much as what they build.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason) => (
            <div key={reason.number} className="relative">
              {/* Number accent */}
              <span className="font-[family-name:var(--font-family-heading)] text-6xl font-extrabold text-[var(--color-primary-100)] leading-none select-none">
                {reason.number}
              </span>
              <div className="-mt-4">
                <h3 className="font-[family-name:var(--font-family-heading)] font-bold text-xl text-[var(--color-text)] mb-3">
                  {reason.title}
                </h3>
                <p className="text-[var(--color-text-muted)] leading-relaxed text-sm mb-4">
                  {reason.body}
                </p>
                {reason.cta && (
                  <Link
                    href={reason.cta.href}
                    className="text-sm font-bold text-[var(--color-primary)] hover:underline inline-flex items-center gap-1"
                  >
                    {reason.cta.label}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                    </svg>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
