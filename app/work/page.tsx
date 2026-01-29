import { Metadata } from 'next'
import { Container } from '@/components/primitives/Container'
import { Text } from '@/components/primitives/Text'
import { WorkGrid } from '@/components/sections/WorkGrid'
import { projects } from '@/lib/data'

/**
 * Work page
 * Filterable project showcase
 */

export const metadata: Metadata = {
  title: 'Work',
  description:
    'Selected projects: design systems, Web3 platforms, and enterprise UX for Fortune 500 companies.',
}

export default function WorkPage() {
  return (
    <>
      {/* Page Header */}
      <section className="py-20 md:py-32">
        <Container size="lg">
          <div className="max-w-3xl mx-auto text-center">
            <Text variant="caption" color="accent" className="mb-4 block">
              PORTFOLIO
            </Text>
            <Text variant="h1" className="mb-6" balance>
              Selected work
            </Text>
            <Text variant="lead" color="secondary" pretty>
              14+ years of design systems, Web3 platforms, and enterprise experiences.
              Filter by category to explore specific areas of expertise.
            </Text>
          </div>
        </Container>
      </section>

      {/* Project Grid */}
      <WorkGrid projects={projects} showFilters={true} />
    </>
  )
}
