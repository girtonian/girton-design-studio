'use client'

import { motion } from 'motion/react'
import NextLink from 'next/link'

/**
 * Full-viewport hero — bottom-justified, Playfair Display headline,
 * italic sage accent, role tags, ink CTA with sage slide hover.
 * Stagger via Motion container/item variants (Jakub-style enter).
 */

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.05,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 10, filter: 'blur(5px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

export function Hero() {
  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: '0 48px 80px',
        maxWidth: '900px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1,
      }}
      className="hero-section"
    >
      <style>{`
        @media (max-width: 768px) {
          .hero-section {
            padding: 0 !important;
            justify-content: flex-end !important;
          }
        }
      `}</style>

      <motion.div
        className="hero-card"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.p
          className="reveal"
          variants={itemVariants}
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            letterSpacing: '.22em',
            textTransform: 'uppercase',
            color: 'var(--sage)',
            marginBottom: '24px',
          }}
        >
          Design Futurist
        </motion.p>

        <motion.h1
          variants={itemVariants}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(52px, 9vw, 100px)',
            fontWeight: 400,
            lineHeight: 1.0,
            letterSpacing: '-.025em',
            color: 'var(--ink)',
            marginBottom: 0,
          }}
        >
          I design for
          <br />
          <em style={{ fontStyle: 'italic', color: 'var(--sage)' }}>what&apos;s next.</em>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          style={{
            marginTop: '36px',
            fontSize: '16px',
            lineHeight: 1.7,
            color: 'var(--ink-60)',
            maxWidth: '440px',
          }}
        >
          Working at the intersection of emerging technology, human behavior,
          and visual systems — from game UX to generative tools to edtech.
          I keep showing up where design is heading.
        </motion.p>

        <motion.div
          variants={itemVariants}
          style={{
            marginTop: '48px',
            display: 'flex',
            alignItems: 'center',
            gap: '32px',
            flexWrap: 'wrap',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '10px',
              letterSpacing: '.15em',
              textTransform: 'uppercase',
              color: 'var(--ink-60)',
            }}
          >
            Chicago, IL &nbsp;·&nbsp; Available for the right problem.
          </span>
        </motion.div>

        <motion.div
          variants={itemVariants}
          style={{ marginTop: '20px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}
        >
          {['Game UX', 'Generative Design', 'Creative Technology', 'Edtech', 'Product Strategy'].map(
            (tag) => (
              <span
                key={tag}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '9px',
                  letterSpacing: '.12em',
                  textTransform: 'uppercase',
                  color: 'var(--sage)',
                  padding: '4px 10px',
                  border: '1px solid var(--sage-light)',
                  background: 'var(--sage-faint)',
                }}
              >
                {tag}
              </span>
            )
          )}
        </motion.div>

        <motion.div
          variants={itemVariants}
          style={{ marginTop: '56px' }}
        >
          <NextLink href="/work" className="cta-btn">
            <span>View Work</span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path
                d="M1 7h12M8 3l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </NextLink>
        </motion.div>

      </motion.div>
    </section>
  )
}
