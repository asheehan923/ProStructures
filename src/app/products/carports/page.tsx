import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/ui/PageHero'
import FAQAccordion from '@/components/ui/FAQAccordion'

export const metadata: Metadata = {
  title: 'Metal Carports Texas | ProStructures — Get a Quote',
  description:
    'Metal carport styles — Regular, Boxed Eave & Vertical. ProStructures serves all of Texas, handling the concrete slab and installation. Get a free quote.',
}

const roofStyles = [
  {
    name: 'Regular Roof',
    badge: 'Most Affordable',
    badgeColor: 'bg-gray-100 text-gray-700',
    description:
      'Panels run horizontally with rounded ends — the classic, clean look. Most affordable option and works well in mild climates.',
    bestFor: 'Homeowners on a budget who need basic vehicle coverage in low-wind, low-precipitation areas.',
    note: 'Horizontal panels collect debris and standing water more easily. For heavy hail or frequent storms, consider stepping up.',
  },
  {
    name: 'Boxed Eave',
    badge: 'Best Value',
    badgeColor: 'bg-blue-50 text-blue-700',
    description:
      'Horizontal panels with boxed, angled ends — a cleaner, more finished look than the regular roof at a mid-range price.',
    bestFor: 'Homeowners who want a better appearance than a standard regular roof without moving to the premium price tier.',
    note: 'Better water runoff than regular style due to steeper pitch. Horizontal panels still collect some debris.',
  },
  {
    name: 'Vertical Roof',
    badge: 'Best for Texas',
    badgeColor: 'bg-red-50 text-[var(--color-primary)]',
    description:
      'Panels run vertically — rain, hail, and debris shed straight off. The ridge cap adds structural rigidity, making this the strongest of the three.',
    bestFor: 'Anyone in a high-wind or high-hail area, or anyone who wants their carport to last as long as possible.',
    note: 'Slightly higher price, but the right investment for expensive equipment or vehicles. Most customers choosing 10+ year durability go vertical.',
  },
]

const sizes = [
  { size: '12×20', fits: 'Single car, compact truck, golf cart' },
  { size: '18×21', fits: 'Full-size pickup truck, SUV, riding mower' },
  { size: '20×20', fits: 'Two standard vehicles side by side' },
  { size: '24×31', fits: 'Large truck + boat trailer, farm equipment, small RV' },
]

const steps = [
  {
    n: '1',
    title: 'Tell us what you need',
    body: "Fill out our quick quote form or call the showroom nearest you. Let us know the size, roofing style, and what you're covering. Not sure? Just tell us what you own — we'll make a recommendation.",
  },
  {
    n: '2',
    title: 'Review your quote',
    body: 'We send back a detailed quote with your options clearly laid out. No fine print, no surprise add-ons. Want to adjust the size or style? We update it on the spot.',
  },
  {
    n: '3',
    title: 'We handle everything else',
    body: 'Once you approve the order, we schedule delivery and installation. Our crew handles the concrete slab and puts up the structure. You show up to a finished carport, ready to use.',
  },
]

const faqs = [
  {
    q: 'How much does a metal carport cost installed in Texas?',
    a: (
      <>
        Metal carport pricing depends on the size, roofing style, and the scope of the concrete work. Because every property and every order is different, we give you a real quote based on exactly what you need.{' '}
        <Link href="/contact" className="text-[var(--color-primary)] font-bold hover:underline">Get a Free Quote</Link> and we&rsquo;ll get you a number fast.
      </>
    ),
  },
  {
    q: 'What is the difference between regular, boxed eave, and vertical roof carports?',
    a: (
      <>
        Regular roofs have horizontal panels and rounded ends — affordable, basic coverage. Boxed eave roofs also have horizontal panels but with a cleaner angled finish. Vertical roofs have panels that run vertically, shedding rain and debris more effectively and offering the most structural strength. See our{' '}
        <Link href="/blog/metal-building-roofing-styles-guide" className="text-[var(--color-primary)] font-bold hover:underline">roofing styles guide</Link> for a full comparison.
      </>
    ),
  },
  {
    q: 'Do I need a permit for a carport in Texas?',
    a: (
      <>
        Permit requirements vary by city and county. Some municipalities require a permit for any permanent structure on a concrete slab; others have exemptions for carports under a certain square footage. We recommend checking with your local building department before ordering. See our{' '}
        <Link href="/faq" className="text-[var(--color-primary)] font-bold hover:underline">FAQ page</Link> for more detail.
      </>
    ),
  },
]

export default function CarportsPage() {
  return (
    <>
      <PageHero
        title="Steel Carports Texas"
        subtitle="Regular, Boxed Eave & Vertical Roof — built and installed with concrete slab available. One contractor, one call, one job done right."
        eyebrow="ProStructures · 11 Texas Locations"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Products', href: '#' },
          { label: 'Carports' },
        ]}
        cta={{ label: 'Get a Free Quote', href: '/contact' }}
      />

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="max-w-[var(--max-width-site)] mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <p className="text-body text-[var(--color-text)] leading-relaxed">
            A metal carport is one of the fastest ways to protect what you own. Your truck, your RV, your tractor, your boat — everything that sits outside takes a beating from Texas sun, hail, and storms. A steel carport puts a stop to that, and ProStructures builds them across Texas with 11 showrooms to serve you.
          </p>
          <p className="mt-4 text-body text-[var(--color-text)] leading-relaxed">
            We handle everything: the structure, the installation, and the concrete slab. That means one contractor, one call, and no running around trying to coordinate a concrete crew on your own.
          </p>
        </div>
      </section>

      {/* Roof styles */}
      <section className="py-16 bg-[var(--color-background)]">
        <div className="max-w-[var(--max-width-site)] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-family-heading)] text-[var(--text-h2)] font-bold text-[var(--color-text)] mb-3">
            Metal Carport Roofing Styles Explained
          </h2>
          <p className="text-[var(--color-text-muted)] mb-10 max-w-2xl">
            The roof style affects how it looks, how well it handles rain and debris, and how long it lasts. Here&rsquo;s what you need to know before you order.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {roofStyles.map((style) => (
              <div key={style.name} className="bg-white border border-[var(--color-border)] rounded-[var(--radius-brand-xl)] p-6 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-[family-name:var(--font-family-heading)] font-bold text-xl text-[var(--color-text)]">
                    {style.name}
                  </h3>
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${style.badgeColor}`}>
                    {style.badge}
                  </span>
                </div>
                <p className="text-sm text-[var(--color-text)] leading-relaxed mb-4">{style.description}</p>
                <div className="mt-auto space-y-3">
                  <div className="bg-[var(--color-primary-50)] rounded-[var(--radius-brand)] p-3">
                    <p className="text-xs font-bold text-[var(--color-primary)] uppercase tracking-wide mb-1">Best for</p>
                    <p className="text-xs text-[var(--color-text-muted)]">{style.bestFor}</p>
                  </div>
                  <div className="bg-gray-50 rounded-[var(--radius-brand)] p-3">
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Worth knowing</p>
                    <p className="text-xs text-[var(--color-text-muted)]">{style.note}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-[var(--color-text-muted)]">
            For a detailed visual comparison, read our{' '}
            <Link href="/blog/metal-building-roofing-styles-guide" className="text-[var(--color-primary)] font-bold hover:underline">
              regular vs vertical roof guide
            </Link>.
          </p>
        </div>
      </section>

      {/* Sizes */}
      <section className="py-16 bg-white">
        <div className="max-w-[var(--max-width-site)] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-family-heading)] text-[var(--text-h2)] font-bold text-[var(--color-text)] mb-3">
            Popular Carport Sizes
          </h2>
          <p className="text-[var(--color-text-muted)] mb-8 max-w-xl">
            The right size depends on what you&rsquo;re covering. Here are the most common configurations.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[var(--color-secondary)] text-white">
                  <th className="font-[family-name:var(--font-family-heading)] font-bold text-left px-6 py-4 rounded-tl-[var(--radius-brand)]">Size</th>
                  <th className="font-[family-name:var(--font-family-heading)] font-bold text-left px-6 py-4 rounded-tr-[var(--radius-brand)]">What Fits</th>
                </tr>
              </thead>
              <tbody>
                {sizes.map((row, idx) => (
                  <tr key={row.size} className={idx % 2 === 0 ? 'bg-white' : 'bg-[var(--color-background)]'}>
                    <td className="px-6 py-4 font-[family-name:var(--font-family-heading)] font-bold text-[var(--color-primary)]">{row.size}</td>
                    <td className="px-6 py-4 text-sm text-[var(--color-text)]">{row.fits}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5 text-sm text-[var(--color-text-muted)]">
            Carports can be customized in length and width — if you need something between standard sizes, we can build it.{' '}
            <Link href="/contact" className="text-[var(--color-primary)] font-bold hover:underline">Get your carport quote</Link> and tell us what you&rsquo;re covering.
          </p>
        </div>
      </section>

      {/* What's included */}
      <section className="py-16 bg-[var(--color-background)]">
        <div className="max-w-[var(--max-width-site)] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-[family-name:var(--font-family-heading)] text-[var(--text-h2)] font-bold text-[var(--color-text)] mb-4">
                What&rsquo;s Included With Your Carport
              </h2>
              <p className="text-[var(--color-text)] leading-relaxed mb-4">
                When you order a carport from us, you&rsquo;re not buying a kit that shows up on a flatbed and sits in your driveway waiting for you to figure out the next step. We include{' '}
                <Link href="/installation" className="text-[var(--color-primary)] font-bold hover:underline">turnkey installation with concrete slab</Link>{' '}
                as part of the process. Our crew pours the slab, sets the anchors, and erects the structure.
              </p>
              <p className="text-[var(--color-text)] leading-relaxed">
                Most online carport sellers stop at delivery. You end up hiring a concrete contractor separately, scheduling two different crews, and managing the whole job yourself. ProStructures handles it from slab to roof.
              </p>
            </div>
            <div className="bg-white border border-[var(--color-border)] rounded-[var(--radius-brand-xl)] p-8">
              <h3 className="font-[family-name:var(--font-family-heading)] font-bold text-xl text-[var(--color-text)] mb-5">ProStructures handles it all</h3>
              {['Site assessment & sizing', 'Custom steel fabrication', 'Concrete slab pour', 'Anchor installation', 'Full structure erection', 'Final inspection walkthrough'].map((item) => (
                <div key={item} className="flex items-center gap-3 py-2.5 border-b border-[var(--color-border)] last:border-0">
                  <svg className="w-5 h-5 text-[var(--color-primary)] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-sm text-[var(--color-text)]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How to order */}
      <section className="py-16 bg-[var(--color-secondary)]">
        <div className="max-w-[var(--max-width-site)] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-family-heading)] text-[var(--text-h2)] font-bold text-white mb-10 text-center">
            How to Order a Carport From ProStructures
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {steps.map((step) => (
              <div key={step.n} className="bg-gray-900 border border-gray-800 rounded-[var(--radius-brand-xl)] p-6">
                <div className="w-10 h-10 bg-[var(--color-primary)] rounded-full flex items-center justify-center font-[family-name:var(--font-family-heading)] font-extrabold text-lg text-white mb-4">
                  {step.n}
                </div>
                <h3 className="font-[family-name:var(--font-family-heading)] font-bold text-lg text-white mb-2">{step.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
          <div className="text-center flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-[var(--color-primary)] text-white font-[family-name:var(--font-family-heading)] font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-[var(--radius-brand)] hover:bg-[var(--color-primary-700)] transition-colors"
            >
              Get a Free Quote
            </Link>
            <Link
              href="/installation"
              className="inline-block bg-transparent text-white border-2 border-white font-[family-name:var(--font-family-heading)] font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-[var(--radius-brand)] hover:bg-white hover:text-black transition-colors"
            >
              See How Installation Works
            </Link>
          </div>
        </div>
      </section>

      {/* Related products */}
      <section className="py-16 bg-white">
        <div className="max-w-[var(--max-width-site)] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-family-heading)] text-[var(--text-h2)] font-bold text-[var(--color-text)] mb-8">
            Related Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { title: 'Metal Garages & Workshops', desc: 'Same steel durability with full walls, a roll-up door, and a lockable structure — great for tools, vehicles, and workshops.', href: '/products/garages-workshops', cta: 'Need an enclosed garage?' },
              { title: 'RV Covers', desc: 'Built wider and taller than standard carports to fit Class A motorhomes, fifth wheels, and large travel trailers — with full clearance for slide-outs.', href: '/products/rv-covers', cta: 'Protecting an RV?' },
              { title: 'Combo Units', desc: 'Connect a carport to a shop or garage bay — all in one connected steel structure on a single concrete slab.', href: '/products/combo-units', cta: 'Need a combo?' },
            ].map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="group border border-[var(--color-border)] rounded-[var(--radius-brand-lg)] p-6 hover:border-[var(--color-primary)] hover:shadow-[var(--shadow-brand)] transition-all"
              >
                <p className="text-xs font-bold text-[var(--color-primary)] uppercase tracking-wide mb-2">{p.cta}</p>
                <h3 className="font-[family-name:var(--font-family-heading)] font-bold text-lg text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors mb-2">{p.title}</h3>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{p.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-[var(--color-background)]">
        <div className="max-w-[var(--max-width-site)] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-family-heading)] text-[var(--text-h2)] font-bold text-[var(--color-text)] mb-8">
            Frequently Asked Questions
          </h2>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>
    </>
  )
}
