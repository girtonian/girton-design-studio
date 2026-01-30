import React from 'react'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Container } from '@/components/primitives/Container'
import { Text } from '@/components/primitives/Text'
import { Image } from '@/components/primitives/Image'
import { Breadcrumbs } from '@/components/patterns/Breadcrumbs'
import { Quote } from '@/components/patterns/Quote'
import { LinkButton } from '@/components/primitives/LinkButton'
import { projects } from '@/lib/data'
import { caseStudyBySlug } from '@/lib/case-studies'
import type { CaseStudySection } from '@/lib/types'
import { ArrowLeft } from 'lucide-react'

/**
 * Renders one case study section (title, body, quote, image, before/after, flow)
 */
function CaseStudySectionBlock({ section }: { section: CaseStudySection }) {
  const bodyArray = section.body
    ? Array.isArray(section.body)
      ? section.body
      : [section.body]
    : []

  return (
    <div className="space-y-6">
      {section.image && (
        <div className="rounded-lg overflow-hidden">
          <Image
            src={section.image}
            alt={section.title ?? 'Case study image'}
            width={1200}
            height={675}
            aspectRatio="16/9"
            className="w-full object-cover"
          />
        </div>
      )}

      {section.title && (
        <Text variant="h2" className="mt-8 first:mt-0" balance>
          {section.title}
        </Text>
      )}

      {bodyArray.length > 0 && (
        <div className="space-y-4">
          {(() => {
            const bullets: string[] = []
            const nodes: React.ReactNode[] = []
            const flushBullets = () => {
              if (bullets.length > 0) {
                nodes.push(
                  <ul key={nodes.length} className="list-disc pl-6 space-y-1">
                    {bullets.map((b, i) => (
                      <li key={i}>
                        <Text variant="body" color="secondary">
                          {b}
                        </Text>
                      </li>
                    ))}
                  </ul>
                )
                bullets.length = 0
              }
            }
            bodyArray.forEach((paragraph) => {
              if (paragraph.startsWith('•')) {
                bullets.push(paragraph.slice(1).trim())
              } else {
                flushBullets()
                nodes.push(
                  <Text key={nodes.length} variant="body" color="secondary" as="p" pretty>
                    {paragraph}
                  </Text>
                )
              }
            })
            flushBullets()
            return nodes
          })()}
        </div>
      )}

      {section.quote && <Quote>{section.quote}</Quote>}

      {section.beforeAfter && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-6">
          <div>
            <Text variant="caption" color="tertiary" className="block mb-3">
              BEFORE
            </Text>
            <ul className="space-y-2">
              {section.beforeAfter.before.map((item, i) => (
                <li key={i}>
                  <Text variant="body" color="secondary">
                    {item}
                  </Text>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Text variant="caption" color="tertiary" className="block mb-3">
              AFTER
            </Text>
            <ul className="space-y-2">
              {section.beforeAfter.after.map((item, i) => (
                <li key={i}>
                  <Text variant="body" color="secondary">
                    {item}
                  </Text>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {section.flow && section.flow.length > 0 && (
        <div className="flex flex-col gap-4 py-4">
          {section.flow.map((step, i) => (
            <div key={i} className="flex items-baseline gap-4">
              <span className="text-[rgb(var(--color-accent-primary))] font-semibold shrink-0">
                {step.label}
              </span>
              {step.description && (
                <Text variant="body" color="secondary" as="span">
                  {step.description}
                </Text>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

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
  const caseStudy = caseStudyBySlug[project.slug]

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

      {/* Case study content or placeholder */}
      {caseStudy ? (
        <section className="py-12 md:py-16 bg-[rgb(var(--color-bg-sunken))]">
          <Container size="md">
            <div className="space-y-16 md:space-y-20">
              {caseStudy.sections.map((section, index) => (
                <CaseStudySectionBlock key={index} section={section} />
              ))}
            </div>
          </Container>
        </section>
      ) : (
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
      )}

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
