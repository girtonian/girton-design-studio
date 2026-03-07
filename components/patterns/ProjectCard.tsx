'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/primitives/Card'
import { Text } from '@/components/primitives/Text'
import { Image } from '@/components/primitives/Image'
import { cn } from '@/lib/utils'
import { useReducedMotion, hoverTransition } from '@/lib/motion'
import { Project } from '@/lib/types'

/**
 * Project showcase card
 * Displays project thumbnail with metadata
 * Optionally featured (larger layout)
 */

export interface ProjectCardProps extends Pick<Project, 'title' | 'role' | 'year' | 'tags' | 'thumbnail' | 'href' | 'featured'> {
  className?: string
}

export function ProjectCard({
  title,
  role,
  year,
  tags,
  thumbnail,
  href,
  featured = false,
  className,
}: ProjectCardProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <Card
      variant="outlined"
      hoverable
      href={href}
      className={cn(
        'group overflow-hidden',
        featured && 'md:col-span-2',
        className
      )}
    >
      {/* Thumbnail */}
      <motion.div
        className="relative overflow-hidden"
        whileHover={shouldReduceMotion ? undefined : { y: -4 }}
        transition={hoverTransition}
      >
        <Image
          src={thumbnail}
          alt={title}
          width={featured ? 1200 : 600}
          height={featured ? 675 : 400}
          aspectRatio="16/9"
        />

        {/* Hover gradient overlay — Jakub: materializes on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-[220ms] ease-out pointer-events-none" />

        {/* Featured badge */}
        {featured && (
          <div className="absolute top-4 right-4 px-3 py-1 bg-[rgb(var(--color-accent-primary))] text-[rgb(var(--color-fg-inverse))] text-xs font-medium rounded-full">
            Featured
          </div>
        )}
      </motion.div>

      {/* Content */}
      <div className={cn('p-6', featured && 'md:p-8')}>
        <Text
          variant={featured ? 'h3' : 'h4'}
          className={cn('mb-2', featured ? 'text-2xl' : 'text-xl')}
        >
          {title}
        </Text>

        <div className="flex items-center gap-2 mb-4">
          <Text variant="small" color="secondary">
            {role}
          </Text>
          <span className="text-[rgb(var(--color-fg-tertiary))]">·</span>
          <Text variant="small" color="secondary">
            {year}
          </Text>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs font-medium bg-[rgb(var(--color-bg-sunken))] text-[rgb(var(--color-fg-secondary))] rounded"
            >
              {tag}
            </span>
          ))}
          {tags.length > 4 && (
            <span className="px-2 py-1 text-xs font-medium text-[rgb(var(--color-fg-tertiary))]">
              +{tags.length - 4} more
            </span>
          )}
        </div>
      </div>
    </Card>
  )
}
