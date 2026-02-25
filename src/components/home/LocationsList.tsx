'use client'

import Link from 'next/link'

const locations = [
  { city: 'Granbury', address: '3401 Glen Rose Hwy', phone: '817-776-2523', tel: '8177762523', href: '/locations/granbury-tx' },
  { city: 'Adkins (San Antonio East)', address: '10795 US Highway 87 E', phone: '210-757-3032', tel: '2107573032', href: '/locations/adkins-tx' },
  { city: 'Belton', address: '5500 W FM 93', phone: '936-666-5577', tel: '9366665577', href: '/locations/belton-tx' },
  { city: 'Bowie', address: '1309 E. Wise St.', phone: '940-233-0657', tel: '9402330657', href: '/locations/bowie-tx' },
  { city: 'Crosby (Houston East)', address: '13713 FM 2100', phone: '281-462-4620', tel: '2814624620', href: '/locations/crosby-tx' },
  { city: 'Floresville (San Antonio South)', address: '601 10th Street', phone: '210-907-2695', tel: '2109072695', href: '/locations/floresville-tx' },
  { city: 'Liberty', address: '3560 US-90 B', phone: '936-776-2360', tel: '9367762360', href: '/locations/liberty-tx' },
  { city: 'Tomball', address: '17413 Waller-Tomball Rd', phone: '832-534-1710', tel: '8325341710', href: '/locations/tomball-tx' },
  { city: 'Willis', address: '13019 Interstate 45 N', phone: '936-666-5577', tel: '9366665577', href: '/locations/willis-tx' },
  { city: 'New Caney', address: '20890 US-59', phone: '713-202-9228', tel: '7132029228', href: '/locations/new-caney-tx' },
  { city: 'Longview East', address: '4876 FM 1844', phone: '903-932-8778', tel: '9039328778', href: '/locations/longview-east-tx' },
]

export default function LocationsList() {
  return (
    <section className="py-20 bg-[var(--color-background)]">
      <div className="max-w-[var(--max-width-site)] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <h2 className="font-[family-name:var(--font-family-heading)] text-[var(--text-h2)] font-bold text-[var(--color-text)]">
              Our Texas Showroom Locations
            </h2>
            <p className="mt-2 text-[var(--color-text-muted)]">
              ProStructures serves customers across Texas from 11 showroom locations. Find the one nearest to you.
            </p>
          </div>
          <Link
            href="/locations/texas"
            className="shrink-0 inline-block bg-[var(--color-primary)] text-white font-[family-name:var(--font-family-heading)] font-bold text-sm uppercase tracking-wider px-6 py-3 rounded-[var(--radius-brand)] hover:bg-[var(--color-primary-700)] transition-colors"
          >
            See All Locations
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {locations.map((loc) => (
            <Link
              key={loc.href}
              href={loc.href}
              className="group bg-white border border-[var(--color-border)] rounded-[var(--radius-brand-lg)] p-5 hover:border-[var(--color-primary)] hover:shadow-[var(--shadow-brand)] transition-all duration-200"
            >
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-[var(--color-primary-50)] rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-[var(--color-primary)]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-[family-name:var(--font-family-heading)] font-bold text-base text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors">
                    {loc.city}
                  </h3>
                  <p className="text-xs text-[var(--color-text-muted)] mt-0.5">{loc.address}</p>
                  <a
                    href={`tel:${loc.tel}`}
                    onClick={(e) => e.stopPropagation()}
                    className="text-xs font-bold text-[var(--color-primary)] mt-1 block hover:underline"
                  >
                    {loc.phone}
                  </a>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
