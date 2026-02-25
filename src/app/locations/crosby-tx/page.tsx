import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/ui/PageHero'
import FAQAccordion from '@/components/ui/FAQAccordion'

export const metadata: Metadata = {
  title: 'Metal Buildings Crosby TX | ProStructures Showroom',
  description:
    'ProStructures in Crosby, TX offers metal buildings for East Houston. Visit our FM 2100 showroom — garages, carports, and turnkey concrete installation.',
}

const products = [
  { title: 'Metal Garages & Workshops', href: '/products/garages-workshops', desc: 'Standalone steel garages and workshops in a range of sizes. Perfect for parking vehicles, setting up a home workshop, or storing equipment. Regular, Boxed Eave, and Vertical roof styles.' },
  { title: 'Carports', href: '/products/carports', desc: 'Open or partially enclosed steel carports for vehicles, boats, and trailers. A popular choice for suburban homeowners who need covered parking without building a full garage.' },
  { title: 'RV Covers', href: '/products/rv-covers', desc: 'Tall, wide steel structures built to shelter your RV or camper year-round — with clearance for slide-outs.' },
  { title: 'Barns & Agricultural Buildings', href: '/products/barns-agricultural-buildings', desc: 'Steel barns that hold up to Texas heat, rain, and humidity without rotting or warping. Built for East Harris County landowners.' },
  { title: 'Storage Sheds', href: '/products/storage-sheds', desc: 'Compact steel sheds that outlast wood or vinyl — no painting, no rot, no pest problems.' },
  { title: 'Combo Units & Barndominium Shells', href: '/products/combo-units', desc: 'Multi-purpose structures for homeowners who want more than a single-use building.' },
]

const faqs = [
  {
    q: 'Does ProStructures have a showroom near Houston?',
    a: (
      <>
        Yes — our Crosby location at 13713 FM 2100 is our dedicated Houston East showroom. We also have locations in Liberty and Tomball for other parts of the Houston area. Visit{' '}
        <Link href="/locations/texas" className="text-[var(--color-primary)] font-bold hover:underline">all ProStructures Texas locations</Link> to find the one closest to you.
      </>
    ),
  },
  {
    q: 'Does ProStructures serve the Crosby and Baytown area?',
    a: 'Absolutely. Our Crosby showroom serves Crosby, Baytown, Highlands, Channelview, and the broader East Houston and East Harris County area. Call us at 281-462-4620 or stop by the showroom.',
  },
  {
    q: 'Are your metal buildings hurricane-rated for the Houston area?',
    a: (
      <>
        Our steel buildings are engineered to meet Texas wind and load requirements. If you have specific concerns about wind rating for your site or county, our team can walk you through the options when you call or visit.{' '}
        <Link href="/contact" className="text-[var(--color-primary)] font-bold hover:underline">Get a Free Quote</Link> and we&rsquo;ll make sure your build is spec&rsquo;d for your location.
      </>
    ),
  },
]

export default function CrosbyTXPage() {
  return (
    <>
      <PageHero
        title="Metal Buildings in Crosby, TX"
        subtitle="Houston East Showroom — 13713 FM 2100, Crosby, TX. Walk in and see real structures before you buy."
        eyebrow="ProStructures · Houston East"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Locations', href: '/locations/texas' },
          { label: 'Crosby, TX' },
        ]}
        cta={{ label: 'Get a Free Quote', href: '/contact' }}
      />

      {/* Location info bar */}
      <div className="bg-[var(--color-primary)] text-white">
        <div className="max-w-[var(--max-width-site)] mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap gap-6 items-center text-sm font-bold">
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/></svg>
            13713 FM 2100, Crosby, TX
          </span>
          <a href="tel:2814624620" className="flex items-center gap-2 hover:underline">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
            281-462-4620
          </a>
          <a href="mailto:crosby@prostructures.com" className="hover:underline">crosby@prostructures.com</a>
        </div>
      </div>

      {/* About */}
      <section className="py-16 bg-white">
        <div className="max-w-[var(--max-width-site)] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-[family-name:var(--font-family-heading)] text-[var(--text-h2)] font-bold text-[var(--color-text)] mb-4">
              About Our Crosby Showroom
            </h2>
            <p className="text-[var(--color-text)] leading-relaxed mb-4">
              Our Crosby location at 13713 FM 2100 sits on a well-traveled stretch connecting the Houston East suburbs with the rural communities of East Harris and Chambers counties. Our customers run the full range — suburban homeowners who need a garage or carport, and rural landowners who want a barn, shop, or multi-use structure on their property.
            </p>
            <p className="text-[var(--color-text)] leading-relaxed">
              You can walk the lot, look at the building styles up close, and talk to our team without a sales pitch attached. We&rsquo;d rather answer your questions and help you figure out the right size and style than rush you into a decision.
            </p>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 bg-[var(--color-background)]">
        <div className="max-w-[var(--max-width-site)] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-family-heading)] text-[var(--text-h2)] font-bold text-[var(--color-text)] mb-3">
            Metal Buildings Available at This Location
          </h2>
          <p className="text-[var(--color-text-muted)] mb-8">Full product line available — customized to your lot, dimensions, and use case.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {products.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="group bg-white border border-[var(--color-border)] rounded-[var(--radius-brand-lg)] p-6 hover:border-[var(--color-primary)] hover:shadow-[var(--shadow-brand)] transition-all"
              >
                <h3 className="font-[family-name:var(--font-family-heading)] font-bold text-lg text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors mb-2">{p.title}</h3>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{p.desc}</p>
              </Link>
            ))}
          </div>
          <p className="mt-6 text-sm text-[var(--color-text-muted)]">
            Concrete slab work is available through ProStructures — so if you need it, you can work with one contractor from start to finish instead of coordinating a separate crew. Ask about the option when you get your quote. <Link href="/installation" className="text-[var(--color-primary)] font-bold hover:underline">See how installation works.</Link>
          </p>
        </div>
      </section>

      {/* Why Houston East */}
      <section className="py-16 bg-white">
        <div className="max-w-[var(--max-width-site)] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-[family-name:var(--font-family-heading)] text-[var(--text-h2)] font-bold text-[var(--color-text)] mb-4">
                Built for the Houston East Market
              </h2>
              <p className="text-[var(--color-text)] leading-relaxed mb-4">
                East of Houston is a different kind of terrain than the inner city. You&rsquo;ve got suburban neighborhoods with tight lots sitting right next to rural acreage. Hail storms roll through regularly, and hurricane season brings real wind loads to this part of Texas. That matters when you&rsquo;re picking a building material.
              </p>
              <p className="text-[var(--color-text)] leading-relaxed mb-4">
                Steel holds up where wood and vinyl don&rsquo;t. Our buildings are engineered to meet Texas wind and load requirements. For homeowners in Baytown, Highlands, and Channelview who&rsquo;ve had their carport or shed damaged by hail or a storm, switching to steel is usually a straightforward decision.
              </p>
              <p className="text-[var(--color-text)] leading-relaxed">
                If you&rsquo;re on rural land east of the city — East Harris County or into Chambers County — you get the same durability with larger footprints: barns, equipment sheds, multi-bay workshops on a concrete slab, designed to work for decades.
              </p>
            </div>
            <div className="bg-[var(--color-background)] border border-[var(--color-border)] rounded-[var(--radius-brand-xl)] p-8">
              <h3 className="font-[family-name:var(--font-family-heading)] font-bold text-xl text-[var(--color-text)] mb-5">Areas We Serve</h3>
              {['Crosby', 'Baytown', 'Highlands', 'Channelview', 'East Houston', 'East Harris County', 'Chambers County', 'Liberty County'].map((area) => (
                <div key={area} className="flex items-center gap-3 py-2.5 border-b border-[var(--color-border)] last:border-0">
                  <svg className="w-4 h-4 text-[var(--color-primary)] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-sm text-[var(--color-text)]">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Directions */}
      <section className="py-16 bg-[var(--color-background)]">
        <div className="max-w-[var(--max-width-site)] mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="font-[family-name:var(--font-family-heading)] text-[var(--text-h2)] font-bold text-[var(--color-text)] mb-4">
            Directions to 13713 FM 2100, Crosby, TX
          </h2>
          <p className="text-[var(--color-text)] leading-relaxed mb-4">
            We&rsquo;re located at <strong>13713 FM 2100, Crosby, TX</strong> — on FM 2100 between the Crosby community and the Highlands area. Easy to find from Highway 90 East or Beltway 8 East. Take FM 2100 north and look for our lot on the right.
          </p>
          <p className="text-[var(--color-text)] leading-relaxed">
            Coming from Baytown, Channelview, or Highlands — we&rsquo;re your closest ProStructures location. Farther east toward Liberty County? We&rsquo;re also{' '}
            <Link href="/locations/liberty-tx" className="text-[var(--color-primary)] font-bold hover:underline">serving the Liberty area</Link>.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-white">
        <div className="max-w-[var(--max-width-site)] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-[family-name:var(--font-family-heading)] text-[var(--text-h2)] font-bold text-[var(--color-text)] mb-6">
                Contact the Crosby Location
              </h2>
              <div className="space-y-4">
                {[
                  { label: 'Phone', value: '281-462-4620', href: 'tel:2814624620' },
                  { label: 'Email', value: 'crosby@prostructures.com', href: 'mailto:crosby@prostructures.com' },
                  { label: 'Address', value: '13713 FM 2100, Crosby, TX', href: null },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4">
                    <span className="font-bold text-sm text-[var(--color-text-muted)] w-16 shrink-0">{item.label}</span>
                    {item.href
                      ? <a href={item.href} className="text-sm text-[var(--color-primary)] font-bold hover:underline">{item.value}</a>
                      : <span className="text-sm text-[var(--color-text)]">{item.value}</span>
                    }
                  </div>
                ))}
                {/* Social links — placeholders until location pages are live */}
                <div className="flex gap-4 pt-2">
                  <a href="CROSBY_FACEBOOK_URL" aria-label="Crosby location on Facebook" className="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  </a>
                  <a href="CROSBY_INSTAGRAM_URL" aria-label="Crosby location on Instagram" className="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                  </a>
                </div>
              </div>
              <div className="mt-8 flex gap-4">
                <Link href="/contact" className="inline-block bg-[var(--color-primary)] text-white font-[family-name:var(--font-family-heading)] font-bold text-sm uppercase tracking-wider px-6 py-3 rounded-[var(--radius-brand)] hover:bg-[var(--color-primary-700)] transition-colors">
                  Get a Free Quote
                </Link>
                <a href="tel:2814624620" className="inline-block bg-transparent text-[var(--color-text)] border-2 border-[var(--color-border)] font-[family-name:var(--font-family-heading)] font-bold text-sm uppercase tracking-wider px-6 py-3 rounded-[var(--radius-brand)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors">
                  Call 281-462-4620
                </a>
              </div>
            </div>
            {/* Google Reviews placeholder */}
            <div className="bg-[var(--color-background)] border border-[var(--color-border)] rounded-[var(--radius-brand-xl)] p-8">
              <h3 className="font-[family-name:var(--font-family-heading)] font-bold text-xl text-[var(--color-text)] mb-4">Google Reviews — Crosby</h3>
              {/* CMS: Google Reviews Widget — Place ID: CROSBY_TX_PLACE_ID */}
              <p className="text-sm text-[var(--color-text-muted)] italic">
                Live reviews will appear here once the Google Business Profile Place ID is configured for this location.
              </p>
            </div>
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
          <div className="mt-8">
            <Link href="/locations/liberty-tx" className="text-sm font-bold text-[var(--color-primary)] hover:underline inline-flex items-center gap-1">
              See Our Liberty Location
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
