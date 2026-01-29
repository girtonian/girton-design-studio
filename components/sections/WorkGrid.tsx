'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ProjectCard } from '@/components/patterns/ProjectCard'
import { Container } from '@/components/primitives/Container'
import { Text } from '@/components/primitives/Text'
import { cn } from '@/lib/utils'
import { staggerContainer, staggerItem, useReducedMotion } from '@/lib/motion'
import { Project } from '@/lib/types'

/**
 * Filterable project grid
 * Masonry layout with category filtering
 */

export interface WorkGridProps {
  projects: Project[]
  showFilters?: boolean
}

export function WorkGrid({ projects, showFilters = true }: WorkGridProps) {
  const [selectedTag, setSelectedTag] = useState<string>('All')
  const shouldReduceMotion = useReducedMotion()

  // Extract unique tags
  const allTags = ['All', ...new Set(projects.flatMap((p) => p.tags))]

  // Filter projects
  const filteredProjects =
    selectedTag === 'All'
      ? projects
      : projects.filter((p) => p.tags.includes(selectedTag))

  return (
    <section className="py-20 md:py-32">
      <Container>
        {/* Filters */}
        {showFilters && (
          <div className="mb-12 flex flex-wrap gap-3 justify-center">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={cn(
                  'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200',
                  'hover:shadow-md',
                  selectedTag === tag
                    ? 'bg-[rgb(var(--color-accent-primary))] text-[rgb(var(--color-fg-inverse))]'
                    : 'bg-[rgb(var(--color-bg-surface))] text-[rgb(var(--color-fg-secondary))] border border-[rgb(var(--color-border-default))]'
                )}
              >
                {tag}
              </button>
            ))}
          </div>
        )}

        {/* Grid */}
        <motion.div
          layout
          variants={staggerContainer(0.1)}
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.slug}
              layout
              variants={staggerItem(shouldReduceMotion)}
              className={cn(project.featured && 'md:col-span-2 lg:col-span-2')}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <Text variant="lead" color="secondary">
              No projects found for this category.
            </Text>
          </div>
        )}
      </Container>
    </section>
  )
}
