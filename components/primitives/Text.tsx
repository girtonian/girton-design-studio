import { createElement, HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

/**
 * Semantic text component with typographic variants
 * Follows editorial hierarchy from design system
 */

export type TextVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'body'
  | 'lead'
  | 'small'
  | 'caption'

export type TextColor = 'primary' | 'secondary' | 'tertiary' | 'inverse' | 'accent'

export interface TextProps extends Omit<HTMLAttributes<HTMLElement>, 'color'> {
  variant?: TextVariant
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div'
  color?: TextColor
  balance?: boolean // text-wrap: balance
  pretty?: boolean // text-wrap: pretty
}

const variantStyles: Record<TextVariant, string> = {
  h1: 'text-[2.488rem] leading-tight font-bold tracking-tight', // 4xl
  h2: 'text-[2.074rem] leading-tight font-bold tracking-tight', // 3xl
  h3: 'text-[1.728rem] leading-snug font-semibold', // 2xl
  h4: 'text-[1.44rem] leading-snug font-semibold', // xl
  lead: 'text-[1.2rem] leading-normal font-normal', // lg
  body: 'text-base leading-normal font-normal',
  small: 'text-[0.833rem] leading-normal font-normal', // sm
  caption: 'text-[0.694rem] leading-normal font-medium uppercase tracking-wide', // xs
}

const colorStyles: Record<TextColor, string> = {
  primary: 'text-[rgb(var(--color-fg-primary))]',
  secondary: 'text-[rgb(var(--color-fg-secondary))]',
  tertiary: 'text-[rgb(var(--color-fg-tertiary))]',
  inverse: 'text-[rgb(var(--color-fg-inverse))]',
  accent: 'text-[rgb(var(--color-accent-primary))]',
}

// Default semantic HTML element for each variant
const defaultElement: Record<TextVariant, string> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  lead: 'p',
  body: 'p',
  small: 'p',
  caption: 'span',
}

export function Text({
  variant = 'body',
  as,
  color = 'primary',
  balance = false,
  pretty = false,
  className,
  children,
  ...props
}: TextProps) {
  const element = as || (defaultElement[variant] as TextProps['as'])

  return createElement(
    element!,
    {
      className: cn(
        variantStyles[variant],
        colorStyles[color],
        balance && 'text-balance',
        pretty && 'text-pretty',
        className
      ),
      ...props,
    },
    children
  )
}
