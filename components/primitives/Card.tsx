'use client'

import { HTMLAttributes, forwardRef } from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'
import NextLink from 'next/link'
import { cn } from '@/lib/utils'

/**
 * Elevated surface component with hover states
 * Can be made clickable by passing href
 */

export type CardVariant = 'flat' | 'elevated' | 'outlined'

export interface CardProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'color'>,
    Pick<HTMLMotionProps<'div'>, 'whileHover'> {
  variant?: CardVariant
  hoverable?: boolean
  href?: string
  as?: 'div' | 'article' | 'section'
}

const variantStyles: Record<CardVariant, string> = {
  flat: 'bg-[rgb(var(--color-bg-surface))]',
  elevated: 'bg-[rgb(var(--color-bg-elevated))] shadow-base',
  outlined:
    'bg-[rgb(var(--color-bg-surface))] border border-[rgb(var(--color-border-default))]',
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      variant = 'elevated',
      hoverable = false,
      href,
      as: Component = 'div',
      className,
      children,
      whileHover,
      ...props
    },
    ref
  ) => {
    const isInteractive = hoverable || !!href

    // Filter out props that conflict with motion.div
    const { onDrag, onDragStart, onDragEnd, ...restProps } = props as any

    const cardContent = (
      <motion.div
        ref={!href ? ref : undefined}
        whileHover={
          whileHover ||
          (isInteractive
            ? {
                y: -2,
                boxShadow: '0 8px 16px 0 rgb(0 0 0 / 0.10)',
                transition: { duration: 0.2 },
              }
            : undefined)
        }
        className={cn(
          'rounded-lg overflow-hidden',
          'transition-shadow duration-200',
          variantStyles[variant],
          isInteractive && 'cursor-pointer',
          className
        )}
        {...restProps}
      >
        {children}
      </motion.div>
    )

    if (href) {
      return (
        <NextLink
          ref={ref as any}
          href={href}
          className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[rgb(var(--color-accent-primary))] rounded-lg"
        >
          {cardContent}
        </NextLink>
      )
    }

    return cardContent
  }
)

Card.displayName = 'Card'
