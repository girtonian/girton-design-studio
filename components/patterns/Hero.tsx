'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { Container } from '@/components/primitives/Container'
import { Text } from '@/components/primitives/Text'
import { LinkButton } from '@/components/primitives/LinkButton'
import { cn } from '@/lib/utils'
import { staggerContainer, staggerItemPolish, useReducedMotion } from '@/lib/motion'
import { MagneticButton } from '@/components/primitives/MagneticButton'

/**
 * Full-viewport hero section
 * Variants: default (minimal), with CTA, with background element (3D/gradient)
 */

export type HeroVariant = 'default' | 'minimal'

export interface HeroProps {
  variant?: HeroVariant
  title: ReactNode
  subtitle?: string
  cta?: {
    label: string
    href: string
  }
  secondaryCta?: {
    label: string
    href: string
  }
  backgroundElement?: ReactNode
  className?: string
}

export function Hero({
  variant = 'default',
  title,
  subtitle,
  cta,
  secondaryCta,
  backgroundElement,
  className,
}: HeroProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      className={cn(
        'relative min-h-[90vh] flex items-center justify-center',
        'py-20 md:py-32',
        className
      )}
    >
      {/* Background element (optional 3D scene or gradient) */}
      {backgroundElement && (
        <div className="absolute inset-0 -z-10 overflow-hidden">
          {backgroundElement}
        </div>
      )}

      <Container size="lg">
        <motion.div
          variants={staggerContainer(0.12)}
          initial="initial"
          animate="animate"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Title */}
          <motion.div variants={staggerItemPolish(shouldReduceMotion)}>
            <Text
              variant="h1"
              className="text-4xl md:text-5xl lg:text-6xl mb-6"
              balance
            >
              {title}
            </Text>
          </motion.div>

          {/* Subtitle */}
          {subtitle && (
            <motion.div variants={staggerItemPolish(shouldReduceMotion)}>
              <Text
                variant="lead"
                color="secondary"
                className="max-w-2xl mx-auto mb-8 md:mb-12"
                pretty
              >
                {subtitle}
              </Text>
            </motion.div>
          )}

          {/* CTAs */}
          {(cta || secondaryCta) && (
            <motion.div
              variants={staggerItemPolish(shouldReduceMotion)}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              {cta && (
                <MagneticButton strength={10}>
                  <LinkButton href={cta.href} size="lg">
                    {cta.label}
                  </LinkButton>
                </MagneticButton>
              )}
              {secondaryCta && (
                <LinkButton
                  href={secondaryCta.href}
                  variant="secondary"
                  size="lg"
                >
                  {secondaryCta.label}
                </LinkButton>
              )}
            </motion.div>
          )}
        </motion.div>
      </Container>

      {/* Scroll indicator (optional) — refined spring, respects reduced motion */}
      {variant === 'default' && !shouldReduceMotion && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, type: 'spring', stiffness: 120, damping: 24, bounce: 0 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: [0.4, 0, 0.2, 1],
            }}
            className="w-6 h-10 border-2 border-[rgb(var(--color-border-default))] rounded-full p-1"
          >
            <div className="w-1 h-2 bg-[rgb(var(--color-accent-primary))] rounded-full mx-auto" />
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}
