import { createElement, HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

/**
 * Semantic text component with typographic variants.
 * h1/h2/h3 use Playfair Display (400 weight, editorial).
 * h4 and smaller use the system sans/serif stack.
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
  balance?: boolean
  pretty?: boolean
}

const variantStyles: Record<TextVariant, string> = {
  h1:      'text-[clamp(2.5rem,7vw,5rem)] leading-none font-normal tracking-[-0.025em]',
  h2:      'text-[clamp(2rem,5vw,3.5rem)] leading-none font-normal tracking-[-0.02em]',
  h3:      'text-[1.728rem] leading-snug font-normal tracking-[-0.01em]',
  h4:      'text-[1.2rem] leading-snug font-medium',
  lead:    'text-[1.1rem] leading-[1.7] font-normal',
  body:    'text-base leading-[1.65] font-normal',
  small:   'text-[0.833rem] leading-normal font-normal',
  caption: 'text-[0.694rem] leading-normal font-medium uppercase tracking-[.2em]',
}

const displayFontVariants: TextVariant[] = ['h1', 'h2', 'h3']

const colorStyles: Record<TextColor, string> = {
  primary:   '',
  secondary: '',
  tertiary:  '',
  inverse:   '',
  accent:    '',
}

const colorVars: Record<TextColor, string> = {
  primary:   'var(--ink)',
  secondary: 'var(--ink-60)',
  tertiary:  'rgba(17,17,16,.4)',
  inverse:   'var(--white)',
  accent:    'var(--sage)',
}

const defaultElement: Record<TextVariant, string> = {
  h1:      'h1',
  h2:      'h2',
  h3:      'h3',
  h4:      'h4',
  lead:    'p',
  body:    'p',
  small:   'p',
  caption: 'span',
}

export function Text({
  variant = 'body',
  as,
  color = 'primary',
  balance = false,
  pretty = false,
  className,
  style,
  children,
  ...props
}: TextProps) {
  const element = as || (defaultElement[variant] as TextProps['as'])
  const isDisplay = displayFontVariants.includes(variant)

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
      style: {
        fontFamily: isDisplay ? 'var(--font-display)' : undefined,
        color: colorVars[color],
        ...style,
      },
      ...props,
    },
    children
  )
}
