import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://powerlinkbihar.in'),
  title: {
    default: 'PowerLink Solutions - Solar Installation Company in Bihar | Katihar',
    template: '%s | PowerLink Solutions'
  },
  description: 'Bihar\'s #1 solar installation company. Government-authorized Tata, Waaree & Adani solar dealer in Katihar. 500+ installations, 98% satisfaction. PM Surya Ghar subsidy assistance.',
  keywords: ['solar installation bihar', 'solar panels katihar', 'tata solar dealer bihar', 'pm surya ghar bihar', 'solar subsidy katihar', 'residential solar bihar', 'commercial solar installation', 'waaree solar panels', 'adani solar dealer', 'net metering bihar', 'solar company purnea'],
  authors: [{ name: 'PowerLink Solutions' }],
  creator: 'PowerLink Solutions',
  publisher: 'PowerLink Solutions',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/assets/favicon.svg',
    shortcut: '/assets/favicon.svg',
    apple: '/assets/favicon.svg',
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://powerlinkbihar.in',
    siteName: 'PowerLink Solutions',
    title: 'PowerLink Solutions - Premier Solar Company in Bihar',
    description: 'Authorized Tata, Waaree & Adani solar dealer. 500+ successful installations across Bihar. Government-approved PM Surya Ghar partner.',
    images: [
      {
        url: '/assets/hero-bg.png',
        width: 1200,
        height: 630,
        alt: 'PowerLink Solutions - Solar Installation Bihar',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PowerLink Solutions - Solar Company Bihar',
    description: 'Bihar\'s trusted solar installer. 500+ projects, 98% satisfaction. PM Surya Ghar subsidies available.',
    images: ['/assets/hero-bg.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://powerlinkbihar.in',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "PowerLink Solutions",
    "description": "Premier solar installation and retail company in Bihar, offering Tata, Waaree, and Adani solar products with government subsidies and expert installation.",
    "url": "https://powerlinkbihar.in",
    "telephone": "+91-8240184863",
    "email": "info@powerlinkbihar.in",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Barosi, Latif Complex",
      "addressLocality": "Katihar",
      "addressRegion": "Bihar",
      "postalCode": "854105",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "25.5333",
      "longitude": "87.5667"
    },
    "sameAs": [
      "https://facebook.com/powerlinkbihar",
      "https://instagram.com/powerlinkbihar"
    ],
    "priceRange": "₹₹",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "19:00"
    }
  };

  return (
    <html lang="en" className={`${outfit.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="antialiased bg-[#0f172a] text-[#F8FAFC] font-sans">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
