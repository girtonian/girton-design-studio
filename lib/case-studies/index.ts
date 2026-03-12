import type { CaseStudyContent } from '@/lib/types'
import { signetJewelersCaseStudy } from './signet-jewelers'
import { spicedRealmsFructasiaCaseStudy } from './spiced-realms-fructasia'
import { kyzenCaseStudy } from './project-kyzen'
import { merryModzCaseStudy } from './merry-modz'
import { tesselloCaseStudy } from './tessello'
import { curmunchkinsCaseStudy } from './curmunchkins'
import { inkBitcoinOrdinalsApparelCaseStudy } from './ink-bitcoin-ordinals-apparel'

export const caseStudyBySlug: Record<string, CaseStudyContent> = {
  'signet-jewelers': signetJewelersCaseStudy,
  'ink-bitcoin-ordinals-apparel': inkBitcoinOrdinalsApparelCaseStudy,
  'spiced-realms-fructasia': spicedRealmsFructasiaCaseStudy,
  'project-kyzen': kyzenCaseStudy,
  'merry-modz': merryModzCaseStudy,
  'tessello': tesselloCaseStudy,
  'curmunchkins': curmunchkinsCaseStudy,
}
