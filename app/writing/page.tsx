import { Metadata } from 'next'
import { Container } from '@/components/primitives/Container'
import { Text } from '@/components/primitives/Text'

/**
 * Writing page (placeholder)
 * To be implemented with blog posts/articles
 */

export const metadata: Metadata = {
  title: 'Writing',
  description: 'Thoughts on design systems, Web3, and product design.',
}

export default function WritingPage() {
  return (
    <section className="py-20 md:py-32 min-h-[60vh]">
      <Container size="md">
        <div className="max-w-2xl mx-auto text-center">
          <Text variant="caption" color="accent" className="mb-4 block">
            WRITING
          </Text>
          <Text variant="h1" className="mb-6" balance>
            Coming soon
          </Text>
          <Text variant="lead" color="secondary" pretty>
            This section will feature articles about design systems, Web3 design patterns,
            and lessons learned from 14+ years in product design.
          </Text>
        </div>
      </Container>
    </section>
  )
}
