import type { Metadata } from 'next'
import { headingFont, bodyFont } from '@/lib/fonts'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Metal Buildings & Carports in Texas | ProStructures',
    template: '%s | ProStructures',
  },
  description:
    'ProStructures builds custom metal buildings across Texas — carports, garages, barns, and RV covers. We handle the concrete slab too. Get a free quote today.',
  metadataBase: new URL('https://prostructures.com'),
  openGraph: {
    siteName: 'ProStructures',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
