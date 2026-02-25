import Link from 'next/link'

const products = [
  {
    title: 'Steel Carports',
    href: '/products/carports',
    description:
      'Protect your vehicles and equipment with a steel carport built to handle Texas weather. Regular, Boxed Eave, and Vertical roofing styles — open or enclosed sides.',
    icon: '🏗️',
  },
  {
    title: 'Metal Garages & Workshops',
    href: '/products/garages-workshops',
    description:
      'Need a real workspace? Our metal garages give you room to work, store, and build. Multiple sizes — from two-car setups to full shop configurations.',
    icon: '🔧',
  },
  {
    title: 'Barns & Agricultural Buildings',
    href: '/products/barns-agricultural-buildings',
    description:
      'Built for livestock, hay storage, and farm equipment. Steel barns engineered to take what Texas weather throws at them without flinching.',
    icon: '🌾',
  },
  {
    title: 'RV Covers',
    href: '/products/rv-covers',
    description:
      'Your RV is a serious investment. Keep it protected year-round with a dedicated steel RV cover — open side, enclosed, or somewhere in between.',
    icon: '🚐',
  },
  {
    title: 'Barndominium Shells',
    href: '/products/barndominium-shells',
    description:
      'Starting a barndominium build? We install the steel shell — frame and roofing — so your contractor can take it from there. A solid start to any barn-style home.',
    icon: '🏠',
  },
  {
    title: 'Storage Sheds',
    href: '/products/storage-sheds',
    description:
      'A durable steel storage shed outlasts wood and vinyl by decades. Great for backyard storage, seasonal equipment, or anything that needs a covered spot.',
    icon: '📦',
  },
  {
    title: 'Combo Units',
    href: '/products/combo-units',
    description:
      'One structure, more than one purpose. Combo units combine workspace, storage bays, or covered parking into a single steel building — built to your specs.',
    icon: '🔀',
  },
]

export default function ProductGrid() {
  return (
    <section className="py-20 bg-[var(--color-background)]">
      <div className="max-w-[var(--max-width-site)] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12">
          <h2 className="font-[family-name:var(--font-family-heading)] text-[var(--text-h2)] font-bold text-[var(--color-text)] mb-3">
            Metal Buildings in Texas — Shop by Category
          </h2>
          <p className="text-[var(--color-text-muted)] max-w-2xl mx-auto">
            Every build starts with the right structure. Browse our full line of steel buildings and find the one that fits your property.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {products.map((product) => (
            <Link
              key={product.href}
              href={product.href}
              className="group bg-white border border-[var(--color-border)] rounded-[var(--radius-brand-lg)] p-6 hover:border-[var(--color-primary)] hover:shadow-[var(--shadow-brand)] transition-all duration-200"
            >
              <div className="text-3xl mb-3">{product.icon}</div>
              <h3 className="font-[family-name:var(--font-family-heading)] font-bold text-lg text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors mb-2 leading-tight">
                {product.title}
              </h3>
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                {product.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-[var(--color-primary)] group-hover:gap-2 transition-all">
                Learn more
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
