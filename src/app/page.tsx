import type { Metadata } from 'next'
import HeroSection from '@/components/home/HeroSection'
import ProductGrid from '@/components/home/ProductGrid'
import WhyChoose from '@/components/home/WhyChoose'
import HowItWorks from '@/components/home/HowItWorks'
import LocationsList from '@/components/home/LocationsList'
import GalleryTeaser from '@/components/home/GalleryTeaser'
import ReviewsSection from '@/components/home/ReviewsSection'
import FAQSection from '@/components/home/FAQSection'

export const metadata: Metadata = {
  title: 'Metal Buildings, Carports & Garages in Texas — ProStructures',
  description:
    'ProStructures builds custom metal buildings across Texas — carports, garages, barns, and RV covers. Concrete slab work available. Get a free quote today.',
  openGraph: {
    title: 'Metal Buildings & Carports in Texas | ProStructures',
    description:
      'ProStructures builds custom metal buildings across Texas — carports, garages, barns, and RV covers. Concrete slab work available. Get a free quote today.',
    url: 'https://prostructures.com/',
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
      '@id': 'https://prostructures.com/#organization',
      name: 'ProStructures, LLC',
      url: 'https://prostructures.com',
      description:
        'ProStructures builds custom metal buildings across Texas — carports, garages, barns, and RV covers. Concrete slab work available. Get a free quote today.',
      telephone: '817-776-2523',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '3401 Glen Rose Hwy',
        addressLocality: 'Granbury',
        addressRegion: 'TX',
        postalCode: '76048',
        addressCountry: 'US',
      },
    },
    {
      '@type': 'WebPage',
      '@id': 'https://prostructures.com/#webpage',
      url: 'https://prostructures.com/',
      name: 'Metal Buildings, Carports & Garages in Texas — ProStructures',
      description:
        'ProStructures builds custom metal buildings across Texas — carports, garages, barns, and RV covers. Concrete slab work available. Get a free quote today.',
      isPartOf: { '@id': 'https://prostructures.com/#website' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What areas of Texas does ProStructures serve?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'ProStructures serves customers across Texas from 11 showroom locations — including Granbury, Belton, Bowie, Crosby, Tomball, Willis, New Caney, Liberty, Longview, and the greater San Antonio area (Adkins and Floresville). If you\'re in Texas, there\'s a ProStructures location within driving distance.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does ProStructures install the concrete slab, or do I need to hire someone separately?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Concrete slab work is available through ProStructures — you don't need to hire a separate contractor. We handle the steel structure and can handle the slab work too, which means one point of contact for your entire project.",
          },
        },
        {
          '@type': 'Question',
          name: 'How fast can ProStructures deliver and install a metal building?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We move quickly on custom builds — faster than many competitors who require long lead times on customized orders. Timeline varies by project and location, but speed of delivery is one of the reasons customers choose ProStructures. Contact your nearest showroom to get a current estimate for your build.',
          },
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://prostructures.com/' },
      ],
    },
  ],
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <HeroSection />
      <ProductGrid />
      <WhyChoose />
      <HowItWorks />
      <LocationsList />
      <GalleryTeaser />
      <ReviewsSection />
      <FAQSection />
    </>
  )
}
