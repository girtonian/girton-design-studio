import type { CaseStudyContent } from '@/lib/types'
import { signetJewelersCaseStudy } from './signet-jewelers'

export const caseStudyBySlug: Record<string, CaseStudyContent> = {
  'signet-jewelers': signetJewelersCaseStudy,
}
