'use client'

import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowLeft, Construction } from 'lucide-react'
import { Container } from '@/components/primitives/Container'
import { Text } from '@/components/primitives/Text'
import { Image } from '@/components/primitives/Image'
import { LinkButton } from '@/components/primitives/LinkButton'
import { Breadcrumbs } from '@/components/patterns/Breadcrumbs'
import type { Project, CaseStudyContent, CaseStudySection } from '@/lib/types'
import {
  useReducedMotion,
  enterPolish,
  staggerContainer,
  staggerItem,
  staggerItemPolish,
  slideUp,
  scaleIn,
  fadeIn,
  viewportOptions,
  springRefined,
} from '@/lib/motion'

// ─── Scroll Progress Bar ──────────────────────────────────────────────────────

function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1])
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-[rgb(var(--color-accent-primary))] origin-left z-50"
      style={{ scaleX }}
      aria-hidden="true"
    />
  )
}

// ─── "In Progress" Callout ────────────────────────────────────────────────────

function InProgressCallout({ body }: { body: string }) {
  return (
    <div className="rounded-lg border border-dashed border-[rgb(var(--color-border-default))] bg-[rgb(var(--color-bg-sunken))] p-6 md:p-8 flex gap-4 items-start">
      <motion.div
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        className="mt-0.5 shrink-0"
        aria-hidden="true"
      >
        <Construction
          size={18}
          className="text-[rgb(var(--color-accent-muted))]"
        />
      </motion.div>
      <p className="text-sm italic text-[rgb(var(--color-fg-secondary))] leading-relaxed">
        {body}
      </p>
    </div>
  )
}

// ─── Flow Steps ───────────────────────────────────────────────────────────────

function AnimatedFlow({
  steps,
  shouldReduce,
}: {
  steps: { label: string; description?: string }[]
  shouldReduce: boolean
}) {
  return (
    <motion.div
      className="flex flex-col gap-4 py-2"
      variants={staggerContainer(0.06)}
    >
      {steps.map((step, i) => (
        <motion.div
          key={i}
          variants={staggerItemPolish(shouldReduce)}
          className="flex items-baseline gap-3"
        >
          <span
            className="w-2 h-2 rounded-full bg-[rgb(var(--color-accent-primary))] shrink-0 mt-[6px]"
            aria-hidden="true"
          />
          <span className="text-[rgb(var(--color-accent-primary))] font-semibold text-sm shrink-0 min-w-[80px]">
            {step.label}
          </span>
          {step.description && (
            <Text variant="body" color="secondary" as="span">
              {step.description}
            </Text>
          )}
        </motion.div>
      ))}
    </motion.div>
  )
}

// ─── Before / After ───────────────────────────────────────────────────────────

function BeforeAfterBlock({
  before,
  after,
  shouldReduce,
}: {
  before: string[]
  after: string[]
  shouldReduce: boolean
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-6">
      <motion.div
        initial={{ opacity: 0, x: shouldReduce ? 0 : -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={viewportOptions}
        transition={{ ...springRefined }}
      >
        <Text
          variant="caption"
          color="tertiary"
          className="block mb-3 uppercase tracking-widest"
        >
          Before
        </Text>
        <ul className="space-y-2">
          {before.map((item, i) => (
            <li key={i}>
              <Text variant="body" color="secondary">
                {item}
              </Text>
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: shouldReduce ? 0 : 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={viewportOptions}
        transition={{ ...springRefined }}
      >
        <Text
          variant="caption"
          color="tertiary"
          className="block mb-3 uppercase tracking-widest"
        >
          After
        </Text>
        <ul className="space-y-2">
          {after.map((item, i) => (
            <li key={i}>
              <Text variant="body" color="secondary">
                {item}
              </Text>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  )
}

// ─── Section Block ────────────────────────────────────────────────────────────

function AnimatedSectionBlock({
  section,
  index,
  shouldReduce,
}: {
  section: CaseStudySection
  index: number
  shouldReduce: boolean
}) {
  const bodyArray = section.body
    ? Array.isArray(section.body)
      ? section.body
      : [section.body]
    : []

  const isInProgress =
    section.title === 'Documentation In Progress' ||
    section.title?.toLowerCase().includes('in progress')

  return (
    <motion.section
      initial="initial"
      whileInView="animate"
      viewport={viewportOptions}
      variants={staggerContainer(0.08)}
      className="space-y-6"
    >
      {/* Section image */}
      {section.image && (
        <motion.div
          variants={scaleIn(shouldReduce)}
          whileHover={shouldReduce ? {} : { scale: 1.01 }}
          transition={{ duration: 0.18, ease: 'easeOut' }}
          className="rounded-xl overflow-hidden shadow-lg"
        >
          <Image
            src={section.image}
            alt={section.title ?? 'Case study image'}
            width={1200}
            height={675}
            aspectRatio="16/9"
            className="w-full object-cover"
          />
        </motion.div>
      )}

      {/* Section image gallery */}
      {section.images && section.images.length > 0 && (
        <motion.div
          variants={scaleIn(shouldReduce)}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {section.images.map((src, i) => (
            <motion.div
              key={src}
              variants={staggerItemPolish(shouldReduce)}
              whileHover={shouldReduce ? {} : { scale: 1.02 }}
              transition={{ duration: 0.18, ease: 'easeOut' }}
              className="rounded-xl overflow-hidden shadow-lg"
            >
              <Image
                src={src}
                alt={`${section.title ?? 'Case study'} image ${i + 1}`}
                width={800}
                height={600}
                aspectRatio="auto"
                className="w-full object-cover"
              />
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* Section header row: index number + title */}
      {section.title && (
        <div className="space-y-2">
          <motion.span
            variants={fadeIn}
            className="font-mono text-xs text-[rgb(var(--color-fg-tertiary))] tracking-widest"
          >
            {String(index + 1).padStart(2, '0')}
          </motion.span>
          <motion.h2
            variants={staggerItemPolish(shouldReduce)}
            className="text-2xl md:text-3xl font-semibold text-[rgb(var(--color-fg-primary))] leading-snug"
          >
            {section.title}
          </motion.h2>
        </div>
      )}

      {/* Body text */}
      {bodyArray.length > 0 && (
        <motion.div className="space-y-4" variants={staggerContainer(0.05)}>
          {(() => {
            const bullets: string[] = []
            const nodes: React.ReactNode[] = []

            const flushBullets = () => {
              if (bullets.length > 0) {
                nodes.push(
                  <motion.ul
                    key={`bullets-${nodes.length}`}
                    variants={staggerItem(shouldReduce)}
                    className="list-none space-y-2 pl-0"
                  >
                    {bullets.map((b, bi) => (
                      <li key={bi} className="flex items-start gap-2">
                        <span
                          className="mt-[9px] w-1.5 h-1.5 rounded-full bg-[rgb(var(--color-accent-muted))] shrink-0"
                          aria-hidden="true"
                        />
                        <Text variant="body" color="secondary" as="span">
                          {b}
                        </Text>
                      </li>
                    ))}
                  </motion.ul>
                )
                bullets.length = 0
              }
            }

            bodyArray.forEach((paragraph, pi) => {
              if (isInProgress) {
                flushBullets()
                nodes.push(
                  <motion.div
                    key={`inprog-${pi}`}
                    variants={staggerItem(shouldReduce)}
                  >
                    <InProgressCallout body={paragraph} />
                  </motion.div>
                )
              } else if (paragraph.startsWith('•')) {
                bullets.push(paragraph.slice(1).trim())
              } else {
                flushBullets()
                nodes.push(
                  <motion.p
                    key={`para-${pi}`}
                    variants={staggerItem(shouldReduce)}
                    className="text-base text-[rgb(var(--color-fg-secondary))] leading-relaxed text-pretty"
                  >
                    {paragraph}
                  </motion.p>
                )
              }
            })

            flushBullets()
            return nodes
          })()}
        </motion.div>
      )}

      {/* Quote */}
      {section.quote && (
        <motion.blockquote
          variants={slideUp(shouldReduce)}
          className="pl-5 border-l-2 border-[rgb(var(--color-accent-primary))] italic text-lg md:text-xl text-[rgb(var(--color-fg-secondary))] leading-relaxed my-6"
        >
          {section.quote}
        </motion.blockquote>
      )}

      {/* Before / After */}
      {section.beforeAfter && (
        <motion.div variants={fadeIn}>
          <BeforeAfterBlock
            before={section.beforeAfter.before}
            after={section.beforeAfter.after}
            shouldReduce={shouldReduce}
          />
        </motion.div>
      )}

      {/* Flow */}
      {section.flow && section.flow.length > 0 && (
        <motion.div variants={fadeIn}>
          <AnimatedFlow steps={section.flow} shouldReduce={shouldReduce} />
        </motion.div>
      )}
    </motion.section>
  )
}

// ─── Hero Section ─────────────────────────────────────────────────────────────

function CaseStudyHero({
  project,
  projectIndex,
  shouldReduce,
}: {
  project: Project
  projectIndex: number
  shouldReduce: boolean
}) {
  return (
    <section className="pt-8 pb-12 md:pt-12 md:pb-16">
      <Container>
        <motion.div
          variants={staggerContainer(0.07)}
          initial="initial"
          animate="animate"
          className="max-w-3xl"
        >
          {/* Breadcrumbs */}
          <motion.div variants={enterPolish(shouldReduce)} className="mb-8">
            <Breadcrumbs
              items={[
                { label: 'Home', href: '/' },
                { label: 'Work', href: '/work' },
                { label: project.title },
              ]}
            />
          </motion.div>

          {/* Project index + discipline tags (portfolio.html card-index / card-type pattern) */}
          <motion.div
            variants={enterPolish(shouldReduce)}
            className="flex items-center gap-3 mb-5"
          >
            <span className="font-mono text-xs text-[rgb(var(--color-fg-tertiary))] tracking-widest">
              {String(projectIndex).padStart(2, '0')}
            </span>
            <span
              className="w-px h-4 bg-[rgb(var(--color-border-default))]"
              aria-hidden="true"
            />
            <span className="text-xs uppercase tracking-widest text-[rgb(var(--color-fg-tertiary))]">
              {project.tags.slice(0, 3).join(' · ')}
            </span>
          </motion.div>

          {/* Title with hero-accent gradient */}
          <motion.h1
            variants={staggerItemPolish(shouldReduce)}
            className="hero-accent text-4xl md:text-5xl font-bold leading-tight mb-5"
          >
            {project.title}
          </motion.h1>

          {/* Lead description */}
          <motion.p
            variants={staggerItem(shouldReduce)}
            className="text-lg md:text-xl text-[rgb(var(--color-fg-secondary))] leading-relaxed mb-8 text-pretty"
          >
            {project.description}
          </motion.p>

          {/* Meta row */}
          <motion.div
            variants={staggerContainer(0.05)}
            className="flex flex-wrap gap-6 pb-8 border-b border-[rgb(var(--color-border-subtle))]"
          >
            {[
              { label: 'Role', value: project.role },
              { label: 'Year', value: String(project.year) },
              ...(project.client ? [{ label: 'Client', value: project.client }] : []),
            ].map(({ label, value }) => (
              <motion.div key={label} variants={staggerItem(shouldReduce)}>
                <span className="block text-xs uppercase tracking-widest text-[rgb(var(--color-fg-tertiary))] mb-1">
                  {label}
                </span>
                <span className="text-sm font-medium text-[rgb(var(--color-fg-primary))]">
                  {value}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Tags */}
          <motion.div
            variants={staggerContainer(0.04)}
            className="flex flex-wrap gap-2 pt-6"
          >
            {project.tags.map((tag) => (
              <motion.span
                key={tag}
                variants={staggerItem(shouldReduce)}
                className="px-3 py-1 text-xs font-medium bg-[rgb(var(--color-bg-sunken))] text-[rgb(var(--color-fg-secondary))] rounded-full border border-[rgb(var(--color-border-subtle))]"
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}

// ─── Main Component ───────────────────────────────────────────────────────────

interface CaseStudyContentProps {
  project: Project
  caseStudy: CaseStudyContent | undefined
  nextProject: Project
  projectIndex: number
}

export function CaseStudyContent({
  project,
  caseStudy,
  nextProject,
  projectIndex,
}: CaseStudyContentProps) {
  const shouldReduce = useReducedMotion()

  return (
    <>
      <ScrollProgress />

      <CaseStudyHero
        project={project}
        projectIndex={projectIndex}
        shouldReduce={shouldReduce}
      />

      {/* Divider */}
      <div className="border-t border-[rgb(var(--color-border-subtle))]" />

      {/* Case study content */}
      {caseStudy ? (
        <section className="py-12 md:py-20 bg-[rgb(var(--color-bg-sunken))]">
          <Container size="md">
            <div className="space-y-16 md:space-y-24">
              {caseStudy.sections.map((section, index) => (
                <AnimatedSectionBlock
                  key={index}
                  section={section}
                  index={index}
                  shouldReduce={shouldReduce}
                />
              ))}
            </div>
          </Container>
        </section>
      ) : (
        <section className="py-12 md:py-20 bg-[rgb(var(--color-bg-sunken))]">
          <Container size="md">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={viewportOptions}
              variants={staggerContainer(0.08)}
              className="min-h-[400px] flex items-center justify-center"
            >
              <motion.div
                variants={staggerItemPolish(shouldReduce)}
                className="text-center max-w-sm"
              >
                <Text variant="h3" className="mb-4">
                  Case study coming soon
                </Text>
                <Text variant="body" color="secondary">
                  Full case study with process, outcomes, and learnings will be added here.
                </Text>
              </motion.div>
            </motion.div>
          </Container>
        </section>
      )}

      {/* Navigation */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.5 }}
        variants={staggerContainer(0.07)}
        className="py-12 md:py-16 border-t border-[rgb(var(--color-border-subtle))]"
      >
        <Container>
          <div className="flex flex-col sm:flex-row justify-between gap-6">
            <motion.div variants={staggerItem(shouldReduce)}>
              <LinkButton href="/work" variant="secondary">
                <ArrowLeft size={18} />
                Back to work
              </LinkButton>
            </motion.div>

            <motion.div variants={staggerItem(shouldReduce)}>
              <LinkButton href={`/work/${nextProject.slug}`} variant="ghost">
                <span className="flex flex-col items-end gap-0.5">
                  <span className="text-xs uppercase tracking-widest text-[rgb(var(--color-fg-tertiary))]">
                    Next project
                  </span>
                  <span>{nextProject.title}</span>
                </span>
              </LinkButton>
            </motion.div>
          </div>
        </Container>
      </motion.section>
    </>
  )
}
