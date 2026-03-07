import type { CaseStudyContent } from '@/lib/types'
import { signetJewelersCaseStudy } from './signet-jewelers'
import { spicedRealmsFructasiaCaseStudy } from './spiced-realms-fructasia'

export const caseStudyBySlug: Record<string, CaseStudyContent> = {
  'signet-jewelers': signetJewelersCaseStudy,
  'spiced-realms-fructasia': spicedRealmsFructasiaCaseStudy,
}
