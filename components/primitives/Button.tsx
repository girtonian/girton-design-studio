'use client'

import { ButtonHTMLAttributes, forwardRef } from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'
import { cn } from '@/lib/utils'

/**
 * Accessible button component with loading/disabled states
 * Includes hover/focus animations (feedback category)
 */

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'link'
export type ButtonSize = 'sm' | 'md' | 'lg'

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'> {
  variant?: ButtonVariant
  size?: ButtonSize
  isLoading?: boolean
  fullWidth?: boolean
  whileHover?: any
  whileTap?: any
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

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      isLoading = false,
      disabled = false,
      fullWidth = false,
      className,
      children,
      whileHover,
      whileTap,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || isLoading

    // Filter out props that conflict with motion.button
    const { onDrag, onDragStart, onDragEnd, ...restProps } = props as any

    return (
      <motion.button
        ref={ref}
        disabled={isDisabled}
        whileHover={
          whileHover ||
          (!isDisabled && variant !== 'link'
            ? { y: -2, transition: { duration: 0.18, ease: [0, 0, 0.2, 1] } }
            : undefined)
        }
        whileTap={whileTap || (!isDisabled ? { scale: 0.98 } : undefined)}
        className={cn(
          // Base styles
          'inline-flex items-center justify-center gap-2',
          'font-medium transition-all duration-[var(--motion-duration-hover)]',
          'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
          'focus-visible:outline-[rgb(var(--color-accent-primary))]',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          // Variant styles
          variantStyles[variant],
          // Size styles (not for link variant)
          variant !== 'link' && sizeStyles[size],
          // Full width
          fullWidth && 'w-full',
          className
        )}
        {...restProps}
      >
        {isLoading && (
          <svg
            className="animate-spin h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {children}
      </motion.button>
    )
  }
)

Button.displayName = 'Button'
