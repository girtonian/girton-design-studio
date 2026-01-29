import { ChevronRight } from 'lucide-react'
import { Link } from '@/components/primitives/Link'
import { Text } from '@/components/primitives/Text'
import { cn } from '@/lib/utils'

/**
 * Breadcrumb navigation
 * For case study pages and deep navigation
 */

export interface BreadcrumbItem {
  label: string
  href?: string
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[]
  className?: string
}

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn('flex items-center gap-2', className)}>
      <ol className="flex items-center gap-2 flex-wrap">
        {items.map((item, index) => {
          const isLast = index === items.length - 1

          return (
            <li key={index} className="flex items-center gap-2">
              {item.href && !isLast ? (
                <Link href={item.href} variant="subtle" className="text-sm">
                  {item.label}
                </Link>
              ) : (
                <Text
                  variant="small"
                  color={isLast ? 'primary' : 'secondary'}
                  className="font-medium"
                  as="span"
                >
                  {item.label}
                </Text>
              )}

              {!isLast && (
                <ChevronRight
                  size={16}
                  className="text-[rgb(var(--color-fg-tertiary))]"
                  aria-hidden="true"
                />
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
