'use client'

import { forwardRef } from 'react'
import { motion } from 'framer-motion'
import NextLink from 'next/link'
import { cn } from '@/lib/utils'
import { ButtonSize, ButtonVariant } from './Button'

/**
 * Link component styled as a button
 * Use this when you need a link that looks like a button
 */

export interface LinkButtonProps {
  href: string
  variant?: ButtonVariant
  size?: ButtonSize
  fullWidth?: boolean
  external?: boolean
  className?: string
  children?: React.ReactNode
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-[rgb(var(--color-accent-primary))] text-[rgb(var(--color-fg-inverse))] ' +
    'hover:bg-[rgb(var(--color-accent-hover))] active:bg-[rgb(var(--color-accent-active))] ' +
    'shadow-sm hover:shadow-md',
  secondary:
    'bg-[rgb(var(--color-bg-surface))] text-[rgb(var(--color-accent-primary))] ' +
    'border border-[rgb(var(--color-border-default))] ' +
    'hover:border-[rgb(var(--color-border-emphasis))] hover:shadow-sm',
  ghost:
    'bg-transparent text-[rgb(var(--color-accent-primary))] ' +
    'hover:bg-[rgb(var(--color-bg-sunken))]',
  link: 'bg-transparent text-[rgb(var(--color-accent-primary))] underline-offset-4 hover:underline p-0',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-sm rounded-md',
  md: 'px-4 py-2 text-base rounded-lg',
  lg: 'px-6 py-3 text-lg rounded-lg',
}

export const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>(
  (
    {
      href,
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      external = false,
      className,
      children,
    },
    ref
  ) => {
    const baseClassName = cn(
      // Base styles
      'inline-flex items-center justify-center gap-2',
      'font-medium transition-all duration-100',
      'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
      'focus-visible:outline-[rgb(var(--color-accent-primary))]',
      // Variant styles
      variantStyles[variant],
      // Size styles (not for link variant)
      variant !== 'link' && sizeStyles[size],
      // Full width
      fullWidth && 'w-full',
      className
    )

    if (external) {
      return (
        <motion.a
          ref={ref}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={baseClassName}
          whileHover={{ y: -1, transition: { duration: 0.1 } }}
          whileTap={{ scale: 0.98 }}
        >
          {children}
        </motion.a>
      )
    }

    return (
      <NextLink
        ref={ref}
        href={href}
        className={baseClassName}
      >
        <motion.span
          className="inline-flex items-center justify-center gap-2 w-full"
          whileHover={{ y: -1, transition: { duration: 0.1 } }}
          whileTap={{ scale: 0.98 }}
        >
          {children}
        </motion.span>
      </NextLink>
    )
  }
)

LinkButton.displayName = 'LinkButton'
