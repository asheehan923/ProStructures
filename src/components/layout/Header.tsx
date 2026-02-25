'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const nav = [
  {
    label: 'Products',
    href: '#',
    children: [
      { label: 'Carports', href: '/products/carports' },
      { label: 'Garages & Workshops', href: '/products/garages-workshops' },
      { label: 'Barns & Agricultural', href: '/products/barns-agricultural-buildings' },
      { label: 'RV Covers', href: '/products/rv-covers' },
      { label: 'Barndominium Shells', href: '/products/barndominium-shells' },
      { label: 'Storage Sheds', href: '/products/storage-sheds' },
      { label: 'Combo Units', href: '/products/combo-units' },
    ],
  },
  { label: 'Installation', href: '/installation' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Locations', href: '/locations/texas' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)

  return (
    <header className="bg-white border-b border-[var(--color-border)] sticky top-0 z-50 shadow-[var(--shadow-brand-sm)]">
      <div className="max-w-[var(--max-width-site)] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/images/prostructures-logo.png"
              alt="ProStructures — We've Got You Covered"
              width={220}
              height={55}
              priority
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {nav.map((item) =>
              item.children ? (
                <div key={item.label} className="relative group">
                  <button
                    className="font-[family-name:var(--font-family-heading)] font-bold text-sm uppercase tracking-wider text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors flex items-center gap-1"
                  >
                    {item.label}
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className="absolute top-full left-0 mt-1 w-56 bg-white border border-[var(--color-border)] rounded-[var(--radius-brand-lg)] shadow-[var(--shadow-brand)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-[var(--color-text)] hover:bg-[var(--color-primary-50)] hover:text-[var(--color-primary)] first:rounded-t-[var(--radius-brand-lg)] last:rounded-b-[var(--radius-brand-lg)] transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="font-[family-name:var(--font-family-heading)] font-bold text-sm uppercase tracking-wider text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href="tel:8177762523"
              className="hidden sm:block font-[family-name:var(--font-family-heading)] font-bold text-sm text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors"
            >
              817-776-2523
            </a>
            <Link
              href="/contact"
              className="bg-[var(--color-primary)] text-white font-[family-name:var(--font-family-heading)] font-bold text-sm uppercase tracking-wider px-5 py-2.5 rounded-[var(--radius-brand)] hover:bg-[var(--color-primary-700)] transition-colors"
            >
              Free Quote
            </Link>
            <button
              className="lg:hidden p-2 text-[var(--color-text)] hover:text-[var(--color-primary)]"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen
                  ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                }
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-[var(--color-border)] py-4 space-y-1">
            <button
              className="flex items-center justify-between w-full px-2 py-2 font-[family-name:var(--font-family-heading)] font-bold text-sm uppercase tracking-wider text-[var(--color-text)]"
              onClick={() => setProductsOpen(!productsOpen)}
            >
              Products
              <svg className={`w-4 h-4 transition-transform ${productsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {productsOpen && (
              <div className="pl-4 space-y-1">
                {nav[0].children?.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-primary)]"
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            )}
            {nav.slice(1).map((item) => (
              <Link
                key={item.href}
                href={item.href!}
                onClick={() => setMobileOpen(false)}
                className="block px-2 py-2 font-[family-name:var(--font-family-heading)] font-bold text-sm uppercase tracking-wider text-[var(--color-text)] hover:text-[var(--color-primary)]"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="tel:8177762523"
              className="block px-2 py-2 font-bold text-sm text-[var(--color-primary)]"
            >
              817-776-2523
            </a>
          </div>
        )}
      </div>
    </header>
  )
}
