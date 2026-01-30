import { Text } from '@/components/primitives/Text'
import { cn } from '@/lib/utils'

/**
 * Pull quote for case studies and long-form content
 */

export interface QuoteProps {
  children: string
  className?: string
}

export function Quote({ children, className }: QuoteProps) {
  return (
    <blockquote
      className={cn(
        'border-l-4 border-[rgb(var(--color-accent-primary))] pl-6 py-2 my-6 italic text-[rgb(var(--color-fg-secondary))]',
        className
      )}
    >
      <Text variant="lead" as="span">
        {children}
      </Text>
    </blockquote>
  )
}
