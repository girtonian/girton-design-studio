'use client'

import { AnchorHTMLAttributes, forwardRef } from 'react'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { ExternalLink } from 'lucide-react'

/**
 * Next.js Link wrapper with motion and external link handling
 * Includes accessibility features for external links
 */

export type LinkVariant = 'default' | 'subtle' | 'nav'

export interface LinkProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>,
    Pick<NextLinkProps, 'href' | 'prefetch' | 'replace' | 'scroll'> {
  variant?: LinkVariant
  external?: boolean
  showExternalIcon?: boolean
}

const variantStyles: Record<LinkVariant, string> = {
  default:
    'text-[rgb(var(--color-accent-primary))] underline-offset-4 hover:underline ' +
    'transition-colors duration-100',
  subtle:
    'text-[rgb(var(--color-fg-secondary))] hover:text-[rgb(var(--color-accent-primary))] ' +
    'transition-colors duration-100',
  nav: 'text-[rgb(var(--color-fg-primary))] hover:text-[rgb(var(--color-accent-primary))] ' +
    'transition-colors duration-100',
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      href,
      variant = 'default',
      external = false,
      showExternalIcon = true,
      className,
      children,
      prefetch,
      replace,
      scroll,
      ...props
    },
    ref
  ) => {
    // Determine if link is external
    const isExternal =
      external ||
      (typeof href === 'string' && (href.startsWith('http') || href.startsWith('mailto')))

    const linkClassName = cn(
      'inline-flex items-center gap-1',
      'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
      'focus-visible:outline-[rgb(var(--color-accent-primary))] rounded-sm',
      variantStyles[variant],
      className
    )

    if (isExternal) {
      // Filter out props that conflict with motion.a
      const { onDrag, onDragStart, onDragEnd, ...restProps } = props as any

      return (
        <motion.a
          ref={ref}
          href={typeof href === 'string' ? href : href.toString()}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClassName}
          whileHover={{ x: 2 }}
          transition={{ duration: 0.1 }}
          {...restProps}
        >
          {children}
          {showExternalIcon && variant === 'default' && (
            <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
          )}
          <span className="sr-only">(opens in new tab)</span>
        </motion.a>
      )
    }

    return (
      <NextLink
        ref={ref}
        href={href}
        prefetch={prefetch}
        replace={replace}
        scroll={scroll}
        className={linkClassName}
        {...props}
      >
        {children}
      </NextLink>
    )
  }
)

Link.displayName = 'Link'
