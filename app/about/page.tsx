'use client'

import { motion } from 'framer-motion'
import { Metadata } from 'next'
import { Container } from '@/components/primitives/Container'
import { Text } from '@/components/primitives/Text'
import { LinkButton } from '@/components/primitives/LinkButton'
import { Card } from '@/components/primitives/Card'
import { Timeline } from '@/components/patterns/Timeline'
import { SectionHeader } from '@/components/patterns/SectionHeader'
import { staggerContainer, staggerItem, useReducedMotion } from '@/lib/motion'
import { timelineItems, tools } from '@/lib/data'
import { Download } from 'lucide-react'

/**
 * About page
 * Bio, timeline, tools, and contact CTA
 */

export default function AboutPage() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <>
      {/* Intro Section */}
      <section className="py-20 md:py-32">
        <Container size="md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <Text variant="caption" color="accent" className="mb-4 block text-center">
              ABOUT
            </Text>
            <Text variant="h1" className="mb-8 text-center" balance>
              Design systems that scale.
              <br />
              Products that feel human.
            </Text>

            <div className="space-y-6 text-lg leading-relaxed">
              <Text variant="lead" color="secondary" pretty>
                I'm a designer who codes. For the past 14+ years, I've been building
                design systems and product experiences for everyone from early-stage
                startups to Fortune 500 companies.
              </Text>

              <Text variant="lead" color="secondary" pretty>
                My work spans enterprise UX (United Airlines, Boeing, Samsung), Web3
                platforms (Kyzen, Impact Theory), and design systems that have shipped to
                millions of users. I believe the best design systems are built with code,
                not just Figma files.
              </Text>

              <Text variant="lead" color="secondary" pretty>
                Currently available for design system projects, product redesigns, and
                strategic design leadership. Based in [Location], working with teams
                worldwide.
              </Text>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
              <LinkButton href="mailto:hello@girtonian.com" size="lg" external>
                Get in touch
              </LinkButton>
              <LinkButton
                href="/resume.pdf"
                variant="secondary"
                size="lg"
                external
              >
                <Download size={20} />
                Download resume
              </LinkButton>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-32 bg-[rgb(var(--color-bg-sunken))]">
        <Container size="lg">
          <SectionHeader
            eyebrow="Career"
            title="Journey so far"
            description="Key milestones from 14+ years in design"
            className="mb-16"
          />

          <Timeline items={timelineItems} orientation="vertical" />
        </Container>
      </section>

      {/* Tools & Approach */}
      <section className="py-20 md:py-32">
        <Container>
          <SectionHeader
            eyebrow="Toolkit"
            title="Tools & approach"
            description="I believe in using the right tool for the job, and knowing when to build from scratch."
            className="mb-16"
          />

          <motion.div
            variants={staggerContainer(0.1)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {tools.map((tool, index) => (
              <motion.div key={index} variants={staggerItem(shouldReduceMotion)}>
                <Card variant="outlined" className="p-6 text-center h-full">
                  <Text variant="h4" className="mb-2">
                    {tool.name}
                  </Text>
                  <Text variant="small" color="secondary">
                    {tool.category}
                  </Text>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Design Philosophy */}
          <div className="mt-20 max-w-3xl mx-auto">
            <Text variant="h3" className="mb-8 text-center">
              Design philosophy
            </Text>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {philosophy.map((item, index) => (
                <div key={index}>
                  <Text variant="h4" className="mb-3">
                    {item.title}
                  </Text>
                  <Text variant="body" color="secondary">
                    {item.description}
                  </Text>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-[rgb(var(--color-bg-sunken))]">
        <Container size="md">
          <div className="text-center">
            <Text variant="h2" className="mb-6" balance>
              Let's work together
            </Text>
            <Text variant="lead" color="secondary" className="mb-8 max-w-2xl mx-auto" pretty>
              I'm currently available for design system projects, product redesigns, and
              strategic design leadership. Reach out to discuss your project.
            </Text>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <LinkButton href="mailto:hello@girtonian.com" size="lg" external>
                Email me
              </LinkButton>
              <LinkButton
                href="https://linkedin.com/in/girtonian"
                variant="secondary"
                size="lg"
                external
              >
                LinkedIn
              </LinkButton>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

const philosophy = [
  {
    title: 'Systems over solutions',
    description:
      'Build once, reuse everywhere. Every component should solve a class of problems, not just one.',
  },
  {
    title: 'Code is design',
    description:
      'The best design systems are built with code, not just Figma files. I prototype in React.',
  },
  {
    title: 'Accessibility is baseline',
    description:
      "WCAG compliance isn't a feature—it's table stakes. Good design works for everyone.",
  },
  {
    title: 'Performance is UX',
    description:
      "A beautiful interface that's slow is a broken interface. 60fps or don't ship.",
  },
]
