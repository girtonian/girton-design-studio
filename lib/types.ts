/**
 * Shared TypeScript types and interfaces
 */

// === PROJECT / CASE STUDY TYPES ===

export interface Project {
  slug: string
  title: string
  role: string
  year: number
  client?: string
  tags: string[]
  thumbnail: string
  featured?: boolean
  description: string
  href: string
}

export interface CaseStudyMeta {
  title: string
  role: string
  year: number
  client?: string
  tags: string[]
  description: string
  heroImage: string
  featured?: boolean
}

// === TIMELINE TYPES ===

export interface TimelineItem {
  year: string
  title: string
  description: string
  company?: string
}

// === TOOL/SKILL TYPES ===

export interface Tool {
  name: string
  category: string
  icon?: string
  description?: string
}

// === STAT TYPES ===

export interface Stat {
  value: number
  label: string
  suffix?: string
  prefix?: string
}

// === NAV TYPES ===

export interface NavItem {
  label: string
  href: string
  external?: boolean
}

// === SOCIAL TYPES ===

export interface SocialLink {
  platform: string
  url: string
  icon: string
  label: string
}

// === CONTENT BLOCK TYPES (for MDX case studies) ===

export type ContentBlockType =
  | 'text'
  | 'image'
  | 'imageGrid'
  | 'quote'
  | 'video'
  | 'code'
  | 'callout'

export interface ContentBlock {
  type: ContentBlockType
  content: unknown
}
