import type { Metadata } from 'next'
import './globals.css'
import { Nav } from '@/components/patterns/Nav'
import { Footer } from '@/components/patterns/Footer'
import { GlobalEffects } from '@/components/patterns/GlobalEffects'

export const metadata: Metadata = {
  title: {
    default: 'Jonathan Girton — Design Futurist',
    template: '%s | Jonathan Girton',
  },
  description:
    'Working at the intersection of emerging technology, human behavior, and visual systems. Chicago, IL.',
  keywords: [
    'Design Systems',
    'UX Design',
    'Product Design',
    'Web3',
    'Game UX',
    'Creative Technology',
  ],
  authors: [{ name: 'Jonathan Girton' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://girtonian.com',
    siteName: 'Jonathan Girton',
    title: 'Jonathan Girton — Design Futurist',
    description:
      'Working at the intersection of emerging technology, human behavior, and visual systems.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Jonathan Girton Design Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jonathan Girton — Design Futurist',
    description:
      'Working at the intersection of emerging technology, human behavior, and visual systems.',
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
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {/* Video background */}
        {/* Background video (1080×1080) */}
        <div className="video-bg-wrap" aria-hidden="true">
          <video autoPlay muted loop playsInline preload="auto">
            <source src="/girtonian-mobile-opt.webm" type="video/webm" />
            <source src="/girtonian-mobile-opt.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Left-side scroll progress line */}
        <div className="scroll-line" id="scrollLine" />

        {/* Custom square cursor */}
        <div className="cursor" id="cursor" />
        <div className="cursor-follower" id="follower" />

        {/* Ambient floating fragments */}
        <div className="fragment-field" aria-hidden="true">
          <div className="fragment rect"   style={{ ['--fx' as string]:'8vw',  ['--fy' as string]:'18vh', ['--fr' as string]:'12deg',  ['--fx2' as string]:'11vw', ['--fy2' as string]:'14vh', ['--fr2' as string]:'28deg',  ['--drift-dur' as string]:'9200ms', ['--drift-delay' as string]:'0ms' }} />
          <div className="fragment square" style={{ ['--fx' as string]:'88vw', ['--fy' as string]:'22vh', ['--fr' as string]:'-8deg',  ['--fx2' as string]:'85vw', ['--fy2' as string]:'26vh', ['--fr2' as string]:'5deg',   ['--drift-dur' as string]:'7800ms', ['--drift-delay' as string]:'1200ms' }} />
          <div className="fragment tri"    style={{ ['--fx' as string]:'15vw', ['--fy' as string]:'72vh', ['--fr' as string]:'0deg',   ['--fx2' as string]:'18vw', ['--fy2' as string]:'68vh', ['--fr2' as string]:'15deg',  ['--drift-dur' as string]:'10500ms', ['--drift-delay' as string]:'2400ms' }} />
          <div className="fragment bar"    style={{ ['--fx' as string]:'80vw', ['--fy' as string]:'68vh', ['--fr' as string]:'22deg',  ['--fx2' as string]:'77vw', ['--fy2' as string]:'72vh', ['--fr2' as string]:'38deg',  ['--drift-dur' as string]:'8600ms', ['--drift-delay' as string]:'600ms' }} />
          <div className="fragment tiny"   style={{ ['--fx' as string]:'50vw', ['--fy' as string]:'10vh', ['--fr' as string]:'45deg',  ['--fx2' as string]:'53vw', ['--fy2' as string]:'8vh',  ['--fr2' as string]:'60deg',  ['--drift-dur' as string]:'6800ms', ['--drift-delay' as string]:'3200ms' }} />
          <div className="fragment rect"   style={{ ['--fx' as string]:'5vw',  ['--fy' as string]:'48vh', ['--fr' as string]:'-15deg', ['--fx2' as string]:'7vw',  ['--fy2' as string]:'52vh', ['--fr2' as string]:'-5deg',  ['--drift-dur' as string]:'11200ms', ['--drift-delay' as string]:'4000ms' }} />
          <div className="fragment square" style={{ ['--fx' as string]:'92vw', ['--fy' as string]:'50vh', ['--fr' as string]:'30deg',  ['--fx2' as string]:'89vw', ['--fy2' as string]:'46vh', ['--fr2' as string]:'18deg',  ['--drift-dur' as string]:'8900ms', ['--drift-delay' as string]:'1800ms' }} />
          <div className="fragment bar"    style={{ ['--fx' as string]:'40vw', ['--fy' as string]:'88vh', ['--fr' as string]:'-5deg',  ['--fx2' as string]:'43vw', ['--fy2' as string]:'85vh', ['--fr2' as string]:'10deg',  ['--drift-dur' as string]:'7400ms', ['--drift-delay' as string]:'2800ms' }} />
          <div className="fragment tri"    style={{ ['--fx' as string]:'72vw', ['--fy' as string]:'12vh', ['--fr' as string]:'0deg',   ['--fx2' as string]:'75vw', ['--fy2' as string]:'9vh',  ['--fr2' as string]:'-12deg', ['--drift-dur' as string]:'9800ms', ['--drift-delay' as string]:'5000ms' }} />
          <div className="fragment tiny"   style={{ ['--fx' as string]:'25vw', ['--fy' as string]:'90vh', ['--fr' as string]:'60deg',  ['--fx2' as string]:'22vw', ['--fy2' as string]:'86vh', ['--fr2' as string]:'75deg',  ['--drift-dur' as string]:'6200ms', ['--drift-delay' as string]:'1000ms' }} />
        </div>

        {/* Skip to main content */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2"
          style={{ background: 'var(--sage)', color: 'var(--white)' }}
        >
          Skip to main content
        </a>

        <Nav />
        <main id="main-content">{children}</main>
        <Footer />

        {/* Client-side cursor + scroll line effects */}
        <GlobalEffects />
      </body>
    </html>
  )
}
