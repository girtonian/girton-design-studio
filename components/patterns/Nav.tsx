'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import NextLink from 'next/link'
import { cn } from '@/lib/utils'

const navItems = [
  { label: 'Work',     href: '/work' },
  { label: 'About',   href: '/about' },
  { label: 'Writing', href: '/writing' },
  { label: 'Contact', href: '#contact' },
]

export function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileMenuOpen])

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '24px 48px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: 'rgba(250,250,248,.88)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--ink-20)',
      }}
    >
      {/* Brand name */}
      <NextLink
        href="/"
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '11px',
          letterSpacing: '.18em',
          textTransform: 'uppercase',
          color: 'var(--ink)',
          opacity: 0.8,
          textDecoration: 'none',
        }}
      >
        Jonathan Girton
      </NextLink>

      {/* Desktop nav */}
      <nav className="hidden md:flex" style={{ gap: '40px', listStyle: 'none' }}>
        {navItems.map((item) => (
          <NavLink key={item.href} href={item.href} active={pathname === item.href}>
            {item.label}
          </NavLink>
        ))}
      </nav>

      {/* Mobile hamburger */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden"
        aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={mobileMenuOpen}
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '10px',
          letterSpacing: '.15em',
          textTransform: 'uppercase',
          color: 'var(--ink-60)',
          background: 'none',
          border: 'none',
          padding: '4px',
        }}
      >
        {mobileMenuOpen ? 'Close' : 'Menu'}
      </button>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.2 } }}
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
            style={{
              position: 'fixed',
              inset: 0,
              top: '73px',
              background: 'var(--white)',
              zIndex: 99,
              padding: '48px 24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '32px',
            }}
          >
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: 8, filter: 'blur(4px)' }}
                animate={{
                  opacity: 1, y: 0, filter: 'blur(0px)',
                  transition: { delay: index * 0.06, duration: 0.3, ease: [0.22, 1, 0.36, 1] },
                }}
              >
                <NextLink
                  href={item.href}
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '28px',
                    fontWeight: 400,
                    color: pathname === item.href ? 'var(--sage)' : 'var(--ink)',
                    textDecoration: 'none',
                    display: 'block',
                  }}
                >
                  {item.label}
                </NextLink>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

function NavLink({
  href,
  active,
  children,
}: {
  href: string
  active: boolean
  children: React.ReactNode
}) {
  return (
    <NextLink
      href={href}
      style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '10px',
        letterSpacing: '.15em',
        textTransform: 'uppercase',
        color: active ? 'var(--ink)' : 'var(--ink-60)',
        textDecoration: 'none',
        position: 'relative',
      }}
      className="nav-link-item"
    >
      {children}
      <style>{`
        .nav-link-item::after {
          content: '';
          position: absolute;
          bottom: -2px; left: 0;
          width: 0; height: 1px;
          background: var(--sage);
          transition: width 180ms cubic-bezier(.22,1,.36,1);
        }
        .nav-link-item:hover { color: var(--ink) !important; }
        .nav-link-item:hover::after { width: 100%; }
      `}</style>
    </NextLink>
  )
}
