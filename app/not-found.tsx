import { Container } from '@/components/primitives/Container'
import { Text } from '@/components/primitives/Text'
import { LinkButton } from '@/components/primitives/LinkButton'

/**
 * 404 Not Found page
 */

export default function NotFound() {
  return (
    <section className="py-20 md:py-32 min-h-[60vh] flex items-center">
      <Container size="md">
        <div className="max-w-2xl mx-auto text-center">
          <Text variant="h1" className="mb-4">
            404
          </Text>
          <Text variant="h2" className="mb-6" balance>
            Page not found
          </Text>
          <Text variant="lead" color="secondary" className="mb-8" pretty>
            The page you're looking for doesn't exist or has been moved.
          </Text>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <LinkButton href="/" size="lg">
              Go home
            </LinkButton>
            <LinkButton href="/work" variant="secondary" size="lg">
              View work
            </LinkButton>
          </div>
        </div>
      </Container>
    </section>
  )
}
