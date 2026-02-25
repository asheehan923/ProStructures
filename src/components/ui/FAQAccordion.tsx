'use client'

import { useState } from 'react'

interface FAQItem {
  q: string
  a: string | React.ReactNode
}

export default function FAQAccordion({ faqs }: { faqs: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="space-y-3">
      {faqs.map((faq, idx) => (
        <div
          key={idx}
          className="border border-[var(--color-border)] rounded-[var(--radius-brand-lg)] overflow-hidden"
        >
          <button
            className="w-full flex items-center justify-between px-6 py-5 text-left bg-white hover:bg-[var(--color-primary-50)] transition-colors"
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {open === idx && (
            <div className="px-6 pb-5 text-sm text-[var(--color-text-muted)] leading-relaxed border-t border-[var(--color-border)] pt-4 bg-white">
              {faq.a}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
