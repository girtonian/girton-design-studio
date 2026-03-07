'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { Container } from '@/components/primitives/Container'
import { Link } from '@/components/primitives/Link'
import { LinkButton } from '@/components/primitives/LinkButton'
import { cn } from '@/lib/utils'
import { NavItem } from '@/lib/types'

/**
 * Global navigation with mobile drawer
 * Features: sticky header, backdrop blur on scroll, focus trap in mobile
 */

const navItems: NavItem[] = [
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Writing', href: '/writing' },
]

export function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  // Track scroll position for backdrop blur effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  return (
    <header
      className={cn(
        'sticky top-0 z-[var(--z-sticky)] transition-all duration-[var(--motion-duration-fast)]',
        isScrolled
          ? 'bg-[rgb(var(--color-bg-canvas)_/_0.8)] backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      )}
    >
      <Container>
        <nav className="flex items-center justify-between py-4 md:py-6">
          {/* Logo */}
          <Link
            href="/"
            variant="nav"
            className="text-lg font-bold tracking-tight hover:text-[rgb(var(--color-accent-primary))]"
          >
            Girtonian
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                variant="nav"
                className={cn(
                  'font-medium',
                  pathname === item.href && 'text-[rgb(var(--color-accent-primary))]'
                )}
              >
                {item.label}
              </Link>
            ))}
            <LinkButton href="/contact" size="sm">
              Let's talk
            </LinkButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 -mr-2 rounded-lg hover:bg-[rgb(var(--color-bg-sunken))] transition-colors"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={{
              initial: { opacity: 0 },
              animate: { opacity: 1, transition: { duration: 0.2 } },
              exit: { opacity: 0, transition: { duration: 0.15 } },
            }}
            className="fixed inset-0 top-[72px] z-[var(--z-modal)] bg-[rgb(var(--color-bg-canvas))] md:hidden"
          >
            <Container className="py-8">
              <motion.div
                initial={{ opacity: 0, y: -12, filter: 'blur(4px)' }}
                animate={{
                  opacity: 1,
                  y: 0,
                  filter: 'blur(0px)',
                  transition: { type: 'spring', stiffness: 120, damping: 24, bounce: 0, duration: 0.4 },
                }}
                exit={{ opacity: 0, y: -12, filter: 'blur(4px)', transition: { duration: 0.2 } }}
                className="flex flex-col gap-6"
              >
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: { delay: 0.05 + index * 0.06, type: 'spring', stiffness: 120, damping: 24, bounce: 0 },
                    }}
                  >
                    <Link
                      href={item.href}
                      variant="nav"
                      className={cn(
                        'text-2xl font-semibold block py-2',
                        pathname === item.href &&
                          'text-[rgb(var(--color-accent-primary))]'
                      )}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.05 + navItems.length * 0.06, type: 'spring', stiffness: 120, damping: 24, bounce: 0 },
                  }}
                  className="pt-4"
                >
                  <LinkButton href="/contact" fullWidth>
                    Let's talk
                  </LinkButton>
                </motion.div>
              </motion.div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
