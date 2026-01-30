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

/** Before/after comparison for case study sections */
export interface BeforeAfter {
  before: string[]
  after: string[]
}

/** Single step in a flow (e.g. Vision → Bets → Execution) */
export interface FlowStep {
  label: string
  description?: string
}

/** One section of a case study (title, body, optional quote, image, before/after, or flow) */
export interface CaseStudySection {
  title?: string
  body?: string | string[]
  quote?: string
  image?: string
  images?: string[]
  beforeAfter?: BeforeAfter
  flow?: FlowStep[]
}

/** Full case study content keyed by project slug */
export interface CaseStudyContent {
  sections: CaseStudySection[]
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
