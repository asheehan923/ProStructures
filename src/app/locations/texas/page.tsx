import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/ui/PageHero'
import FAQAccordion from '@/components/ui/FAQAccordion'

export const metadata: Metadata = {
  title: 'Metal Buildings Texas | ProStructures — 11 Locations',
  description:
    'ProStructures operates 11 Texas showrooms offering metal buildings, garages, barns, and more. Turnkey with concrete available. Get a free quote today.',
}

const locations = [
  { name: 'ProStructures of Granbury', address: '3401 Glen Rose Hwy, Granbury, TX 76048', phone: '817-776-2523', tel: '8177762523', href: '/locations/granbury-tx', region: 'DFW / North Texas' },
  { name: 'ProStructures of Adkins', address: '10795 US Highway 87 E, Adkins, TX 78101', phone: '210-757-3032', tel: '2107573032', href: '/locations/adkins-tx', region: 'San Antonio' },
  { name: 'ProStructures of Belton', address: '5500 W FM 93, Belton, TX', phone: '936-666-5577', tel: '9366665577', href: '/locations/belton-tx', region: 'Central Texas' },
  { name: 'ProStructures of Bowie', address: '1309 E. Wise St., Bowie, TX 76230', phone: '940-233-0657', tel: '9402330657', href: '/locations/bowie-tx', region: 'DFW / North Texas' },
  { name: 'ProStructures of Crosby', address: '13713 FM 2100, Crosby, TX', phone: '281-462-4620', tel: '2814624620', href: '/locations/crosby-tx', region: 'Houston Metro' },
  { name: 'ProStructures of Floresville', address: '601 10th Street, Floresville, TX 78114', phone: '210-907-2695', tel: '2109072695', href: '/locations/floresville-tx', region: 'San Antonio' },
  { name: 'ProStructures of Liberty', address: '3560 US-90 B, Liberty, TX 77575', phone: '936-776-2360', tel: '9367762360', href: '/locations/liberty-tx', region: 'Houston Metro' },
  { name: 'ProStructures of Tomball', address: '17413 Waller-Tomball Rd, Tomball, TX 77377', phone: '832-534-1710', tel: '8325341710', href: '/locations/tomball-tx', region: 'Houston Metro' },
  { name: 'ProStructures of Willis', address: '13019 Interstate 45 N, Willis, TX 77318', phone: '936-666-5577', tel: '9366665577', href: '/locations/willis-tx', region: 'Houston Metro' },
  { name: 'ProStructures of New Caney', address: '20890 US-59, New Caney, TX 77357', phone: '713-202-9228', tel: '7132029228', href: '/locations/new-caney-tx', region: 'Houston Metro' },
  { name: 'ProStructures of Longview East', address: '4876 FM 1844, Longview, TX 75605', phone: '903-932-8778', tel: '9039328778', href: '/locations/longview-east-tx', region: 'East Texas' },
]

const regions = [
  { label: 'DFW / North Texas', locations: ['Granbury', 'Bowie'] },
  { label: 'Houston Metro', locations: ['Crosby', 'Tomball', 'Willis', 'New Caney', 'Liberty'] },
  { label: 'San Antonio / South Texas', locations: ['Adkins', 'Floresville'] },
  { label: 'Central Texas', locations: ['Belton'] },
  { label: 'East Texas', locations: ['Longview East'] },
]

const products = [
  { title: 'Steel Carports', desc: 'Regular, Boxed Eave, and Vertical roofing styles — open or enclosed.', href: '/products/carports' },
  { title: 'Garages & Workshops', desc: 'Steel garages and workshops for vehicles, tools, or hobby spaces.', href: '/products/garages-workshops' },
  { title: 'RV Covers', desc: 'Open or enclosed steel structures protecting your RV from Texas sun, hail, and wind.', href: '/products/rv-covers' },
  { title: 'Barns & Agricultural Buildings', desc: 'Livestock shelters, hay storage, and equipment barns built for Texas weather.', href: '/products/barns-agricultural-buildings' },
  { title: 'Barndominium Shells', desc: 'Steel frame and roof installed on your slab — the foundation for your barndominium build.', href: '/products/barndominium-shells' },
  { title: 'Storage Sheds', desc: 'Compact steel sheds — tougher and longer-lasting than wood or vinyl alternatives.', href: '/products/storage-sheds' },
  { title: 'Combo Units', desc: 'Multi-purpose buildings combining workspace, living area, or storage bays in one structure.', href: '/products/combo-units' },
]

const faqs = [
  {
    q: 'What areas of Texas does ProStructures serve?',
    a: 'ProStructures has showrooms in Granbury, Adkins, Belton, Bowie, Crosby, Floresville, Liberty, Tomball, Willis, New Caney, and Longview — covering North Texas, the Houston metro, San Antonio, Central Texas, and East Texas.',
  },
  {
    q: 'Does ProStructures have showrooms I can visit in Texas?',
    a: 'Yes. All 11 ProStructures locations are physical showrooms with display buildings on-site. You can visit during business hours, see the structures in person, and talk through your project with a local team member before you commit to anything.',
  },
  {
    q: 'How do I find the closest ProStructures location to me?',
    a: 'Use the location cards above to find the showroom nearest your city or county. You can also call any ProStructures location — they\'ll help you figure out which showroom is your best fit based on where you are and what you\'re building.',
  },
]

export default function TexasLocationsPage() {
  return (
    <>
      <PageHero
        title="Metal Buildings Texas — 11 Showroom Locations"
        subtitle="ProStructures is a Texas-based metal building company with showrooms from North Texas to Houston and San Antonio. Walk in, see real structures, and talk to a local team before you buy."
        eyebrow="ProStructures · Statewide Coverage"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Locations', href: '/locations/texas' },
        ]}
        cta={{ label: 'Get a Free Quote', href: '/contact' }}
      />

      {/* Location grid */}
      <section className="py-16 bg-[var(--color-background)]" id="location-grid">
        <div className="max-w-[var(--max-width-site)] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-family-heading)] text-[var(--text-h2)] font-bold text-[var(--color-text)] mb-3">
            Find Your ProStructures Location
          </h2>
          <p className="text-[var(--color-text-muted)] mb-10 max-w-2xl">
            Each location is staffed by a team that knows your area, your county&rsquo;s permit requirements, and what local landowners are actually building.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {locations.map((loc) => (
              <Link
                key={loc.href}
                href={loc.href}
                className="group bg-white border border-[var(--color-border)] rounded-[var(--radius-brand-lg)] p-5 hover:border-[var(--color-primary)] hover:shadow-[var(--shadow-brand)] transition-all"
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-[var(--color-primary-50)] rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-[var(--color-primary)]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] font-bold text-[var(--color-primary)] uppercase tracking-widest">{loc.region}</span>
                    <h3 className="font-[family-name:var(--font-family-heading)] font-bold text-base text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors mt-0.5">{loc.name}</h3>
                    <p className="text-xs text-[var(--color-text-muted)] mt-1">{loc.address}</p>
                    <span className="text-xs font-bold text-[var(--color-primary)] mt-1.5 block">
                      {loc.phone}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <p className="mt-6 text-sm text-[var(--color-text-muted)]">
            Not sure which location is closest? Call any location and they&rsquo;ll point you in the right direction.
          </p>
        </div>
      </section>

      {/* Coverage by region */}
      <section className="py-16 bg-white">
        <div className="max-w-[var(--max-width-site)] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-family-heading)] text-[var(--text-h2)] font-bold text-[var(--color-text)] mb-3">
            Texas Metal Building Showrooms — Coverage by Region
          </h2>
          <p className="text-[var(--color-text-muted)] mb-8">ProStructures covers the major Texas regions where residential metal building demand is highest.</p>
          {/* CMS: Static map image — Texas outline with 11 showroom pins */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
            {regions.map((r) => (
              <div key={r.label} className="bg-[var(--color-background)] border border-[var(--color-border)] rounded-[var(--radius-brand-lg)] p-4">
                <p className="font-[family-name:var(--font-family-heading)] font-bold text-sm text-[var(--color-primary)] mb-2">{r.label}</p>
                <ul className="space-y-1">
                  {r.locations.map((l) => (
                    <li key={l} className="text-xs text-[var(--color-text-muted)] flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-[var(--color-primary)] shrink-0" />
                      {l}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-sm text-[var(--color-text-muted)]">No matter which region you&rsquo;re in, there&rsquo;s a ProStructures showroom within driving distance.</p>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 bg-[var(--color-background)]">
        <div className="max-w-[var(--max-width-site)] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-family-heading)] text-[var(--text-h2)] font-bold text-[var(--color-text)] mb-3">
            Metal Buildings Texas: What We Build
          </h2>
          <p className="text-[var(--color-text-muted)] mb-8 max-w-2xl">
            ProStructures carries seven product lines to cover residential and light agricultural needs across Texas. Every product can be customized — color, size, doors, windows, and roofing style.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {products.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="group bg-white border border-[var(--color-border)] rounded-[var(--radius-brand-lg)] p-5 hover:border-[var(--color-primary)] hover:shadow-[var(--shadow-brand)] transition-all"
              >
                <h3 className="font-[family-name:var(--font-family-heading)] font-bold text-base text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors mb-2">{p.title}</h3>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{p.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why ProStructures */}
      <section className="py-16 bg-[var(--color-secondary)]">
        <div className="max-w-[var(--max-width-site)] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-family-heading)] text-[var(--text-h2)] font-bold text-white mb-4">
            Why Texas Buyers Choose ProStructures
          </h2>
          <p className="text-gray-400 max-w-2xl mb-10">
            The difference isn&rsquo;t just price — it&rsquo;s who shows up, does the job right, and doesn&rsquo;t leave you managing two or three subcontractors to get a building on your land.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: 'Concrete slab available', desc: "Need a slab? We offer concrete slab work as an option — so you can work with one contractor instead of coordinating a separate crew." },
              { title: 'Fast on custom builds', desc: 'Most competitors make you wait longer for anything beyond a stock size. We move faster.' },
              { title: 'Real showrooms', desc: 'Walk in, ask questions, and see display buildings before committing to anything.' },
              { title: 'Texas-based team', desc: 'We know Texas soil conditions, building codes, and weather. That matters when your building has to last.' },
            ].map((item) => (
              <div key={item.title} className="bg-gray-900 border border-gray-800 rounded-[var(--radius-brand-xl)] p-6">
                <div className="w-8 h-8 bg-[var(--color-primary)] rounded-full flex items-center justify-center mb-4">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                </div>
                <h3 className="font-[family-name:var(--font-family-heading)] font-bold text-base text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/contact" className="inline-block bg-[var(--color-primary)] text-white font-[family-name:var(--font-family-heading)] font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-[var(--radius-brand)] hover:bg-[var(--color-primary-700)] transition-colors">
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-[var(--max-width-site)] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-family-heading)] text-[var(--text-h2)] font-bold text-[var(--color-text)] mb-8">
            Frequently Asked Questions
          </h2>
          <FAQAccordion faqs={faqs} />
          <p className="mt-10 text-[var(--color-text-muted)]">
            Ready to get started?{' '}
            <Link href="/contact" className="text-[var(--color-primary)] font-bold hover:underline">Get a Free Quote</Link>{' '}
            — or walk into any Texas showroom and we&rsquo;ll help you from there.
          </p>
        </div>
      </section>
    </>
  )
}
