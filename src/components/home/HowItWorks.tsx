import Link from 'next/link'

const steps = [
  {
    step: '1',
    title: 'Get a Quote',
    body: "Tell us what you need — size, style, how you plan to use it. We'll put together a quote that fits your project and your budget. No pressure, no obligation.",
  },
  {
    step: '2',
    title: 'Customize Your Build',
    body: "Choose your roofing style, dimensions, color, and any add-ons. We'll walk you through the options so you get exactly the structure you need — not a cookie-cutter version of it.",
  },
  {
    step: '3',
    title: 'We Handle Installation',
    body: 'Once your build is ready, we deliver and install it. Concrete slab work is available through us too, so the whole project stays with one contractor from start to finish.',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-20 bg-[var(--color-secondary)]">
      <div className="max-w-[var(--max-width-site)] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12">
          <h2 className="font-[family-name:var(--font-family-heading)] text-[var(--text-h2)] font-bold text-white">
            How It Works
          </h2>
          <p className="mt-3 text-gray-400 max-w-xl mx-auto">
            Getting your metal building from idea to installed is a straightforward process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {steps.map((step, idx) => (
            <div key={step.step} className="relative">
              {/* Connector line */}
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-6 left-[calc(50%+2rem)] right-0 h-px bg-gray-700" />
              )}
              <div className="bg-gray-900 border border-gray-800 rounded-[var(--radius-brand-xl)] p-6 relative z-10">
                <div className="w-12 h-12 bg-[var(--color-primary)] rounded-full flex items-center justify-center font-[family-name:var(--font-family-heading)] font-extrabold text-xl text-white mb-4">
                  {step.step}
                </div>
                <h3 className="font-[family-name:var(--font-family-heading)] font-bold text-lg text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {step.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/contact"
            className="inline-block bg-[var(--color-primary)] text-white font-[family-name:var(--font-family-heading)] font-bold text-base uppercase tracking-wider px-10 py-4 rounded-[var(--radius-brand)] hover:bg-[var(--color-primary-700)] transition-colors"
          >
            Get a Free Quote
          </Link>
        </div>
      </div>
    </section>
  )
}
