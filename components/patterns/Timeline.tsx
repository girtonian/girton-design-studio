'use client'

import { motion } from 'framer-motion'
import { Text } from '@/components/primitives/Text'
import { cn } from '@/lib/utils'
import { staggerContainer, staggerItem, useReducedMotion } from '@/lib/motion'
import { TimelineItem as TimelineItemType } from '@/lib/types'

/**
 * Vertical timeline component
 * For career milestones, project history, etc.
 */

export interface TimelineProps {
  items: TimelineItemType[]
  orientation?: 'vertical' | 'horizontal'
  className?: string
}

export function Timeline({
  items,
  orientation = 'vertical',
  className,
}: TimelineProps) {
  const shouldReduceMotion = useReducedMotion()

  if (orientation === 'horizontal') {
    // Horizontal layout for large screens (optional enhancement)
    return (
      <div className={cn('overflow-x-auto pb-4', className)}>
        <div className="flex gap-8 min-w-max">
          {items.map((item, index) => (
            <TimelineItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    )
  }

  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: '-100px' }}
      variants={staggerContainer(0.1)}
      className={cn('relative', className)}
    >
      {/* Vertical line */}
      <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-[rgb(var(--color-border-default))]" />

      {/* Timeline items */}
      <div className="space-y-12">
        {items.map((item, index) => (
          <TimelineItem
            key={index}
            item={item}
            index={index}
            isEven={index % 2 === 0}
          />
        ))}
      </div>
    </motion.div>
  )
}

function TimelineItem({
  item,
  index,
  isEven = true,
}: {
  item: TimelineItemType
  index: number
  isEven?: boolean
}) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      variants={staggerItem(shouldReduceMotion)}
      className={cn(
        'relative pl-8 md:pl-0',
        isEven ? 'md:pr-[calc(50%+2rem)] md:text-right' : 'md:pl-[calc(50%+2rem)]'
      )}
    >
      {/* Dot */}
      <div
        className={cn(
          'absolute left-0 md:left-1/2 top-1 w-3 h-3 rounded-full',
          'bg-[rgb(var(--color-accent-primary))]',
          'transform -translate-x-[5px] md:-translate-x-1/2',
          'border-4 border-[rgb(var(--color-bg-canvas))]',
          'z-10'
        )}
      />

      {/* Content */}
      <div>
        <Text variant="caption" color="accent" className="mb-2 block">
          {item.year}
        </Text>
        <Text variant="h4" className="mb-2">
          {item.title}
        </Text>
        {item.company && (
          <Text variant="small" color="secondary" className="mb-2 block">
            {item.company}
          </Text>
        )}
        <Text variant="body" color="secondary">
          {item.description}
        </Text>
      </div>
    </motion.div>
  )
}
