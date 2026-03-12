'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ProjectCard } from '@/components/patterns/ProjectCard'
import { Project } from '@/lib/types'

/**
 * Portfolio-style filterable work grid — 2-column with 1px border dividers.
 * Section-tag eyebrow, Playfair titles, sage hover cards.
 * Filter changes animate with AnimatePresence + stagger.
 */

export interface WorkGridProps {
  projects: Project[]
  showFilters?: boolean
}

const cardVariants = {
  hidden: { opacity: 0, y: 16, filter: 'blur(4px)' },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
      delay: i * 0.06,
    },
  }),
  exit: {
    opacity: 0,
    y: -8,
    filter: 'blur(4px)',
    transition: { duration: 0.2, ease: [0.4, 0, 1, 1] },
  },
}

export function WorkGrid({ projects, showFilters = true }: WorkGridProps) {
  const [selectedTag, setSelectedTag] = useState<string>('All')

  const allTags = ['All', ...new Set(projects.flatMap((p) => p.tags))]

  const filteredProjects =
    selectedTag === 'All'
      ? projects
      : projects.filter((p) => p.tags.includes(selectedTag))

  return (
    <section style={{ position: 'relative', zIndex: 1 }}>
      {/* Section header */}
      <div
        style={{
          maxWidth: '900px',
          margin: '0 auto',
          padding: '80px 48px 0',
        }}
      >
        <p className="section-tag reveal">Work</p>
      </div>

      {/* Tag filters */}
      {showFilters && (
        <div
          style={{
            maxWidth: '900px',
            margin: '0 auto',
            padding: '0 48px 32px',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px',
          }}
        >
          {allTags.map((tag) => (
            <motion.button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              whileTap={{ scale: 0.96 }}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '9px',
                letterSpacing: '.12em',
                textTransform: 'uppercase',
                padding: '5px 12px',
                border: `1px solid ${selectedTag === tag ? 'var(--sage)' : 'var(--ink-20)'}`,
                background: selectedTag === tag ? 'var(--sage-faint)' : 'transparent',
                color: selectedTag === tag ? 'var(--sage)' : 'var(--ink-60)',
                cursor: 'none',
                transition: 'border-color 180ms ease, background 180ms ease, color 180ms ease',
              }}
            >
              {tag}
            </motion.button>
          ))}
        </div>
      )}

      {/* Cards grid */}
      <div
        style={{
          maxWidth: '900px',
          margin: '0 auto',
          padding: '0 48px 120px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <style>{`
          @media (max-width: 768px) {
            .work-grid-outer { padding-left: 24px !important; padding-right: 24px !important; }
          }
        `}</style>

        <div className="cards-grid work-grid-outer" style={{ maxWidth: '100%' }}>
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.slug}
                layout
                custom={i}
                variants={cardVariants}
                initial="hidden"
                animate="show"
                exit="exit"
              >
                <ProjectCard
                  {...project}
                  description={project.description}
                  index={i + 1}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <AnimatePresence>
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } }}
              exit={{ opacity: 0, y: -8, transition: { duration: 0.2 } }}
              style={{ textAlign: 'center', padding: '80px 0' }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  letterSpacing: '.15em',
                  textTransform: 'uppercase',
                  color: 'var(--ink-60)',
                }}
              >
                No projects in this category.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
