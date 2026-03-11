'use client'

import NextLink from 'next/link'
import { Project } from '@/lib/types'

/**
 * Portfolio-style project card — Playfair Display title, 1px border grid,
 * sage hover background, mono index/year/arrow.
 * No thumbnail — text-first, editorial aesthetic.
 */

export interface ProjectCardProps
  extends Pick<Project, 'title' | 'role' | 'year' | 'tags' | 'href' | 'description'> {
  index: number
  className?: string
}

export function ProjectCard({
  title,
  role,
  year,
  tags,
  href,
  description,
  index,
}: ProjectCardProps) {
  const isExternal = href?.startsWith('http')

  const content = (
    <div
      className="card-portfolio reveal"
      style={{ height: '100%' }}
    >
      <p
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '10px',
          letterSpacing: '.15em',
          color: 'var(--sage)',
          marginBottom: '28px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {String(index).padStart(2, '0')}
      </p>

      <p
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '9px',
          letterSpacing: '.12em',
          textTransform: 'uppercase',
          color: 'var(--ink-60)',
          marginBottom: '16px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {tags.slice(0, 3).join(' · ')}
      </p>

      <h2
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '28px',
          fontWeight: 400,
          letterSpacing: '-.01em',
          lineHeight: 1.2,
          marginBottom: '16px',
          position: 'relative',
          zIndex: 1,
          color: 'var(--ink)',
        }}
      >
        {title}
      </h2>

      {description && (
        <p
          style={{
            fontSize: '13.5px',
            color: 'var(--ink-60)',
            lineHeight: 1.65,
            position: 'relative',
            zIndex: 1,
            maxWidth: '320px',
          }}
        >
          {description}
        </p>
      )}

      <div
        style={{
          marginTop: '36px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '10px',
            letterSpacing: '.12em',
            color: 'var(--ink-60)',
          }}
        >
          {role} · {year}
        </span>

        {href && (
          <span
            className="card-arrow-indicator"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontFamily: 'var(--font-mono)',
              fontSize: '9px',
              letterSpacing: '.15em',
              textTransform: 'uppercase',
              color: 'var(--sage)',
              opacity: 0,
              transform: 'translateX(-8px)',
              transition: 'opacity 380ms cubic-bezier(.22,1,.36,1), transform 380ms cubic-bezier(.22,1,.36,1)',
            }}
          >
            View
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        )}
      </div>

      <style>{`
        .card-portfolio:hover .card-arrow-indicator {
          opacity: 1 !important;
          transform: translateX(0) !important;
        }
      `}</style>
    </div>
  )

  if (!href) return content

  return isExternal ? (
    <a href={href} target="_blank" rel="noopener noreferrer" style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
      {content}
    </a>
  ) : (
    <NextLink href={href} style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
      {content}
    </NextLink>
  )
}
