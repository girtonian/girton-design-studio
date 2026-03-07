'use client'

import { motion } from 'framer-motion'
import { Hero } from '@/components/patterns/Hero'
import { SectionHeader } from '@/components/patterns/SectionHeader'
import { Stat } from '@/components/patterns/Stat'
import { Container } from '@/components/primitives/Container'
import { Text } from '@/components/primitives/Text'
import { LinkButton } from '@/components/primitives/LinkButton'
import { Card } from '@/components/primitives/Card'
import { ParallaxGallery } from '@/components/sections/ParallaxGallery'
import { staggerContainer, staggerItemPolish, useReducedMotion } from '@/lib/motion'
import { projects, stats } from '@/lib/data'
import { Zap, Layers, Users } from 'lucide-react'

/**
 * Home page
 * Sections: Hero, Featured Work, Capabilities, Social Proof, CTA
 */

export default function HomePage() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <>
      {/* Hero Section */}
      <Hero
        title={
          <>
            Design systems that <span className="hero-accent">scale</span>.
            <br />
            Products that feel <span className="hero-accent">human</span>.
          </>
        }
        subtitle="14+ years building enterprise UX and Web3 interfaces. Currently helping teams ship faster with design systems that actually work."
        cta={{ label: 'View work', href: '/work' }}
        secondaryCta={{ label: 'About me', href: '/about' }}
      />

      {/* Featured Work — horizontal parallax gallery */}
      <ParallaxGallery projects={projects} />

      {/* Capabilities */}
      <section className="py-20 md:py-32">
        <Container>
          <SectionHeader
            eyebrow="What I do"
            title="Capabilities"
            description="End-to-end product design with a focus on systems thinking and craft."
            className="mb-16"
          />

          <motion.div
            variants={staggerContainer(0.1)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-80px', amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {capabilities.map((capability, index) => (
              <motion.div key={index} variants={staggerItemPolish(shouldReduceMotion)}>
                <Card variant="outlined" className="p-8 h-full">
                  <div className="w-12 h-12 rounded-lg bg-[rgb(var(--color-accent-primary))] flex items-center justify-center mb-6">
                    <capability.icon size={24} className="text-[rgb(var(--color-fg-inverse))]" />
                  </div>
                  <Text variant="h4" className="mb-3">
                    {capability.title}
                  </Text>
                  <Text variant="body" color="secondary">
                    {capability.description}
                  </Text>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Social Proof / Stats */}
      <section className="py-20 md:py-32 bg-[rgb(var(--color-accent-primary))] text-[rgb(var(--color-fg-inverse))]">
        <Container>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-60px' }}
            variants={staggerContainer(0.08)}
          >
            {stats.map((stat, index) => (
              <motion.div key={index} variants={staggerItemPolish(shouldReduceMotion)}>
                <Stat
                  {...stat}
                  animateOnView={!shouldReduceMotion}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Client logos — staggered fade-in on scroll */}
          <motion.div
            className="mt-16 pt-16 border-t border-[rgb(var(--color-fg-inverse)_/_0.2)]"
            variants={staggerContainer(0.06)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-40px' }}
          >
            <motion.div variants={staggerItemPolish(shouldReduceMotion)}>
              <Text variant="caption" className="text-center mb-8 block text-[rgb(var(--color-fg-inverse)_/_0.7)]">
                TRUSTED BY
              </Text>
            </motion.div>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-70">
              {['Samsung', 'United', 'Boeing', 'Fjord', 'Impact Theory'].map((client) => (
                <motion.div key={client} variants={staggerItemPolish(shouldReduceMotion)}>
                  <Text
                    variant="h4"
                    className="text-[rgb(var(--color-fg-inverse))]"
                  >
                    {client}
                  </Text>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* CTA Section — scroll-in polish */}
      <section className="py-20 md:py-32">
        <Container size="md">
          <motion.div
            className="text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-80px', amount: 0.3 }}
            variants={staggerContainer(0.1)}
          >
            <motion.div variants={staggerItemPolish(shouldReduceMotion)}>
              <Text variant="h2" className="mb-6" balance>
                Let's build something together
              </Text>
            </motion.div>
            <motion.div variants={staggerItemPolish(shouldReduceMotion)}>
              <Text variant="lead" color="secondary" className="mb-8 max-w-2xl mx-auto" pretty>
                Whether you need a design system, a product redesign, or strategic design
                leadership, I'd love to hear about your project.
              </Text>
            </motion.div>
            <motion.div
              variants={staggerItemPolish(shouldReduceMotion)}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <LinkButton href="mailto:hello@girtonian.com" size="lg" external>
                Get in touch
              </LinkButton>
              <LinkButton
                href="https://linkedin.com/in/girtonian"
                variant="secondary"
                size="lg"
                external
              >
                Connect on LinkedIn
              </LinkButton>
            </motion.div>
          </motion.div>
        </Container>
      </section>
    </>
  )
}

const capabilities = [
  {
    icon: Layers,
    title: 'Design Systems',
    description:
      'Scalable component libraries, design tokens, and documentation that accelerate development.',
  },
  {
    icon: Zap,
    title: 'Web3 Interfaces',
    description:
      'DeFi platforms, NFT marketplaces, and decentralized apps with best-in-class UX.',
  },
  {
    icon: Users,
    title: 'Enterprise UX',
    description:
      'Complex workflows, data visualization, and B2B tools for Fortune 500 companies.',
  },
]
