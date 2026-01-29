import type { Metadata } from 'next'
import './globals.css'
import { Nav } from '@/components/patterns/Nav'
import { Footer } from '@/components/patterns/Footer'

/**
 * Root layout
 * Includes global navigation and metadata
 * Font: Using system fonts via CSS (Inter loaded via CDN or system-ui fallback)
 */

export const metadata: Metadata = {
  title: {
    default: 'Girtonian — Design Systems & Product Design',
    template: '%s | Girtonian',
  },
  description:
    'Design systems that scale. Products that feel human. 14+ years building enterprise UX and Web3 interfaces.',
  keywords: [
    'Design Systems',
    'UX Design',
    'Product Design',
    'Web3',
    'Enterprise Design',
    'UI/UX',
  ],
  authors: [{ name: 'Girtonian LLC' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://girtonian.com',
    siteName: 'Girtonian',
    title: 'Girtonian — Design Systems & Product Design',
    description:
      'Design systems that scale. Products that feel human. 14+ years building enterprise UX and Web3 interfaces.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Girtonian Design Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Girtonian — Design Systems & Product Design',
    description:
      'Design systems that scale. Products that feel human.',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-[rgb(var(--color-accent-primary))] focus:text-[rgb(var(--color-fg-inverse))] focus:rounded-lg"
        >
          Skip to main content
        </a>

        <Nav />

        <main id="main-content">{children}</main>

        <Footer />
      </body>
    </html>
  )
}
