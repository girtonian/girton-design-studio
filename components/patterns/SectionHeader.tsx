'use client'

import { motion } from 'framer-motion'
import { Text } from '@/components/primitives/Text'
import { cn } from '@/lib/utils'
import { slideUp, useReducedMotion } from '@/lib/motion'

/**
 * Reusable section header
 * Includes optional eyebrow label, title, and description
 */

export interface SectionHeaderProps {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
}: SectionHeaderProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: '-100px' }}
      variants={slideUp(shouldReduceMotion)}
      className={cn(
        align === 'center' && 'text-center',
        align === 'center' && 'mx-auto max-w-3xl',
        className
      )}
    >
      {/* Eyebrow */}
      {eyebrow && (
        <Text
          variant="caption"
          color="accent"
          className="mb-4 block"
        >
          {eyebrow}
        </Text>
      )}

      {/* Title */}
      <Text variant="h2" className="mb-4" balance>
        {title}
      </Text>

      {/* Description */}
      {description && (
        <Text variant="lead" color="secondary" pretty>
          {description}
        </Text>
      )}
    </motion.div>
  )
}
