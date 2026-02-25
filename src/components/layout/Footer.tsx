import Link from 'next/link'

const products = [
  { label: 'Carports', href: '/products/carports' },
  { label: 'Garages & Workshops', href: '/products/garages-workshops' },
  { label: 'Barns & Agricultural', href: '/products/barns-agricultural-buildings' },
  { label: 'RV Covers', href: '/products/rv-covers' },
  { label: 'Barndominium Shells', href: '/products/barndominium-shells' },
  { label: 'Storage Sheds', href: '/products/storage-sheds' },
  { label: 'Combo Units', href: '/products/combo-units' },
]

const company = [
  { label: 'About Us', href: '/about' },
  { label: 'Installation', href: '/installation' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Financing', href: '/financing' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

const locations = [
  { label: 'Granbury', href: '/locations/granbury-tx' },
  { label: 'Belton', href: '/locations/belton-tx' },
  { label: 'Bowie', href: '/locations/bowie-tx' },
  { label: 'Crosby (Houston)', href: '/locations/crosby-tx' },
  { label: 'Tomball', href: '/locations/tomball-tx' },
  { label: 'Willis', href: '/locations/willis-tx' },
  { label: 'New Caney', href: '/locations/new-caney-tx' },
  { label: 'Liberty', href: '/locations/liberty-tx' },
  { label: 'Longview East', href: '/locations/longview-east-tx' },
  { label: 'Adkins (San Antonio)', href: '/locations/adkins-tx' },
  { label: 'Floresville', href: '/locations/floresville-tx' },
]

export default function Footer() {
  return (
    <footer className="bg-[var(--color-secondary)] text-white">
      <div className="max-w-[var(--max-width-site)] mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand column */}
          <div>
            <span className="font-[family-name:var(--font-family-heading)] text-2xl font-bold text-white uppercase tracking-wide block mb-3">
              ProStructures
            </span>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Custom metal buildings across Texas. Carports, garages, barns, RV covers, and more — with turnkey installation and concrete slab available.
            </p>
            <p className="text-sm font-bold text-white mb-1">Main: <a href="tel:8177762523" className="hover:text-[var(--color-primary-300)] transition-colors">817-776-2523</a></p>
            <p className="text-sm text-gray-400">
              <a href="mailto:info@prostructures.com" className="hover:text-white transition-colors">info@prostructures.com</a>
            </p>
            {/* Social links — placeholder until corporate pages are live */}
            <div className="flex gap-3 mt-4">
              {/* CORPORATE_FACEBOOK_URL */}
              <a href="#" aria-label="ProStructures on Facebook" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              {/* CORPORATE_INSTAGRAM_URL */}
              <a href="#" aria-label="ProStructures on Instagram" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-[family-name:var(--font-family-heading)] font-bold text-sm uppercase tracking-widest text-gray-400 mb-4">
              Products
            </h3>
            <ul className="space-y-2">
              {products.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-gray-300 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-[family-name:var(--font-family-heading)] font-bold text-sm uppercase tracking-widest text-gray-400 mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-gray-300 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="font-[family-name:var(--font-family-heading)] font-bold text-sm uppercase tracking-widest text-gray-400 mb-4">
              Texas Locations
            </h3>
            <ul className="space-y-2">
              {locations.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-gray-300 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} ProStructures, LLC. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">Terms of Service</Link>
            <Link href="/sitemap" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
