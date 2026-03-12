'use client'

import { motion } from 'motion/react'
import { pageTransition, useReducedMotion } from '@/lib/motion'

/**
 * Next.js template.tsx — re-mounts on every route change.
 * Provides page-level enter/exit transitions via Framer Motion.
 * Unlike layout.tsx (which persists), template wraps fresh on each navigation.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  const shouldReduceMotion = useReducedMotion()
  const variants = pageTransition(shouldReduceMotion)

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  )
}
