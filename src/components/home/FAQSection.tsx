'use client'

import { useState } from 'react'

const faqs = [
  {
    q: 'What areas of Texas does ProStructures serve?',
    a: 'ProStructures serves customers across Texas from 11 showroom locations — including Granbury, Belton, Bowie, Crosby, Tomball, Willis, New Caney, Liberty, Longview, and the greater San Antonio area (Adkins and Floresville). If you\'re in Texas, there\'s a ProStructures location within driving distance.',
  },
  {
    q: 'Does ProStructures install the concrete slab, or do I need to hire someone separately?',
    a: "Concrete slab work is available through ProStructures — you don't need to hire a separate contractor. We handle the steel structure and can handle the slab work too, which means one point of contact for your entire project.",
  },
  {
    q: 'How fast can ProStructures deliver and install a metal building?',
    a: 'We move quickly on custom builds — faster than many competitors who require long lead times on customized orders. Timeline varies by project and location, but speed of delivery is one of the reasons customers choose ProStructures. Contact your nearest showroom to get a current estimate for your build.',
  },
]

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[var(--max-width-site)] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">

          <h2 className="font-[family-name:var(--font-family-heading)] text-[var(--text-h2)] font-bold text-[var(--color-text)] mb-10 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border border-[var(--color-border)] rounded-[var(--radius-brand-lg)] overflow-hidden"
              >
                <button
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                  onClick={() => setOpen(open === idx ? null : idx)}
                  aria-expanded={open === idx}
                >
                  <span className="font-[family-name:var(--font-family-heading)] font-bold text-base text-[var(--color-text)] pr-4">
                    {faq.q}
                  </span>
                  <svg
                    className={`w-5 h-5 text-[var(--color-primary)] shrink-0 transition-transform duration-200 ${open === idx ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                  </svg>
                </button>
                {open === idx && (
                  <div className="px-6 pb-5 text-sm text-[var(--color-text-muted)] leading-relaxed border-t border-[var(--color-border)] pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-[var(--color-text-muted)] mb-4">Have more questions?</p>
            <a
              href="/faq"
              className="inline-block font-[family-name:var(--font-family-heading)] font-bold text-sm uppercase tracking-wider text-[var(--color-primary)] border-2 border-[var(--color-primary)] px-6 py-3 rounded-[var(--radius-brand)] hover:bg-[var(--color-primary)] hover:text-white transition-colors"
            >
              See All FAQs
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
