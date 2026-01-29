import { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

/**
 * Max-width container with responsive padding
 * Follows editorial layout constraints from design system
 */

export type ContainerSize = 'sm' | 'md' | 'lg' | 'xl' | 'full'

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: ContainerSize
  noPadding?: boolean
  as?: 'div' | 'section' | 'article' | 'main' | 'aside'
}

const sizeStyles: Record<ContainerSize, string> = {
  sm: 'max-w-[640px]',
  md: 'max-w-[768px]',
  lg: 'max-w-[1024px]',
  xl: 'max-w-[1120px]', // Narrow for editorial feel
  full: 'max-w-full',
}

export function Container({
  size = 'xl',
  noPadding = false,
  as: Component = 'div',
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <Component
      className={cn(
        'w-full mx-auto',
        !noPadding && 'px-6', // var(--spacing-container-x) = 1.5rem = 24px
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  )
}
