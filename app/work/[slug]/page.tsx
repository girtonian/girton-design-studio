import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Container } from '@/components/primitives/Container'
import { Text } from '@/components/primitives/Text'
import { Breadcrumbs } from '@/components/patterns/Breadcrumbs'
import { LinkButton } from '@/components/primitives/LinkButton'
import { Link } from '@/components/primitives/Link'
import { projects } from '@/lib/data'
import { ArrowLeft } from 'lucide-react'

/**
 * Case study page (template)
 * Dynamic route for individual projects
 */

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  return {
    title: project.title,
    description: project.description,
  }
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    notFound()
  }

  const currentIndex = projects.findIndex((p) => p.slug === slug)
  const nextProject = projects[(currentIndex + 1) % projects.length]

  return (
    <>
      {/* Hero */}
      <section className="py-12 md:py-16">
        <Container>
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Work', href: '/work' },
              { label: project.title },
            ]}
            className="mb-8"
          />

          <div className="max-w-3xl">
            <Text variant="h1" className="mb-4">
              {project.title}
            </Text>
            <Text variant="lead" color="secondary" className="mb-8">
              {project.description}
            </Text>

            {/* Metadata */}
            <div className="flex flex-wrap gap-6 text-sm">
              <div>
                <Text variant="caption" color="tertiary" className="block mb-1">
                  ROLE
                </Text>
                <Text variant="body">{project.role}</Text>
              </div>
              <div>
                <Text variant="caption" color="tertiary" className="block mb-1">
                  YEAR
                </Text>
                <Text variant="body">{project.year}</Text>
              </div>
              {project.client && (
                <div>
                  <Text variant="caption" color="tertiary" className="block mb-1">
                    CLIENT
                  </Text>
                  <Text variant="body">{project.client}</Text>
                </div>
              )}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm bg-[rgb(var(--color-bg-sunken))] text-[rgb(var(--color-fg-secondary))] rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Placeholder Content */}
      <section className="py-12 md:py-16 bg-[rgb(var(--color-bg-sunken))]">
        <Container size="md">
          <div className="min-h-[400px] flex items-center justify-center">
            <div className="text-center">
              <Text variant="h3" className="mb-4">
                Case study content coming soon
              </Text>
              <Text variant="body" color="secondary">
                Full case study with process, outcomes, and learnings will be added here.
              </Text>
            </div>
          </div>
        </Container>
      </section>

      {/* Navigation */}
      <section className="py-12 md:py-16">
        <Container>
          <div className="flex flex-col sm:flex-row justify-between gap-6">
            <LinkButton
              href="/work"
              variant="secondary"
            >
              <ArrowLeft size={20} />
              Back to work
            </LinkButton>

            <LinkButton
              href={`/work/${nextProject.slug}`}
              variant="ghost"
            >
              Next: {nextProject.title}
            </LinkButton>
          </div>
        </Container>
      </section>
    </>
  )
}
