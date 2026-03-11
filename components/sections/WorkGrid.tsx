'use client'

import { useState } from 'react'
import { ProjectCard } from '@/components/patterns/ProjectCard'
import { Project } from '@/lib/types'

/**
 * Portfolio-style filterable work grid — 2-column with 1px border dividers.
 * Section-tag eyebrow, Playfair titles, sage hover cards.
 */

export interface WorkGridProps {
  projects: Project[]
  showFilters?: boolean
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
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
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
                transition: 'all 180ms cubic-bezier(.22,1,.36,1)',
              }}
            >
              {tag}
            </button>
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
          {filteredProjects.map((project, i) => (
            <ProjectCard
              key={project.slug}
              {...project}
              description={project.description}
              index={i + 1}
            />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div style={{ textAlign: 'center', padding: '80px 0' }}>
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
          </div>
        )}
      </div>
    </section>
  )
}
