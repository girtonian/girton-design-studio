'use client'

import { useEffect, useState } from 'react'
import { Variants } from 'framer-motion'

/**
 * Motion configuration system
 * Implements progressive disclosure through motion with reduced-motion support
 */

export type MotionCategory = 'feedback' | 'navigation' | 'storytelling' | 'signature'

export interface MotionConfig {
  feedback: boolean // Always on - instant hover/focus states
  navigation: 'slide' | 'fade' // Simplified to fade if reduced motion
  storytelling: boolean // Off if reduced motion
  signature: boolean // Off if reduced motion
}

/**
 * Hook to get motion configuration based on user preferences
 */
export function useMotionConfig(): MotionConfig {
  const [shouldReduceMotion, setShouldReduceMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setShouldReduceMotion(mediaQuery.matches)

    const handleChange = (e: MediaQueryListEvent) => {
      setShouldReduceMotion(e.matches)
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  return {
    feedback: true,
    navigation: shouldReduceMotion ? 'fade' : 'slide',
    storytelling: !shouldReduceMotion,
    signature: !shouldReduceMotion,
  }
}

/**
 * Check if motion should be reduced (for conditional rendering)
 */
export function useReducedMotion(): boolean {
  const [shouldReduce, setShouldReduce] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setShouldReduce(mediaQuery.matches)

    const handleChange = (e: MediaQueryListEvent) => {
      setShouldReduce(e.matches)
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  return shouldReduce
}

/**
 * Framer Motion variant presets
 */

// Basic fade in/out
export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
}

export const fadeInWithDuration = (duration: number = 0.3): Variants => ({
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration } },
  exit: { opacity: 0, transition: { duration } },
})

// Slide up (storytelling category)
export const slideUp = (shouldReduce: boolean = false): Variants => ({
  initial: { opacity: 0, y: shouldReduce ? 0 : 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0, 0, 0.2, 1], // motion-easing-enter
    },
  },
  exit: {
    opacity: 0,
    y: shouldReduce ? 0 : 20,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 1, 1], // motion-easing-exit
    },
  },
})

// Slide down (for dropdowns, modals)
export const slideDown = (shouldReduce: boolean = false): Variants => ({
  initial: { opacity: 0, y: shouldReduce ? 0 : -20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0, 0, 0.2, 1],
    },
  },
  exit: {
    opacity: 0,
    y: shouldReduce ? 0 : -20,
    transition: {
      duration: 0.2,
      ease: [0.4, 0, 1, 1],
    },
  },
})

// Scale (for cards, hover states)
export const scaleIn = (shouldReduce: boolean = false): Variants => ({
  initial: { opacity: 0, scale: shouldReduce ? 1 : 0.95 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: [0, 0, 0.2, 1],
    },
  },
  exit: {
    opacity: 0,
    scale: shouldReduce ? 1 : 0.95,
    transition: {
      duration: 0.2,
      ease: [0.4, 0, 1, 1],
    },
  },
})

// Stagger container (for lists, grids)
export const staggerContainer = (staggerDelay: number = 0.05): Variants => ({
  initial: {},
  animate: {
    transition: {
      staggerChildren: staggerDelay,
    },
  },
  exit: {
    transition: {
      staggerChildren: staggerDelay,
      staggerDirection: -1,
    },
  },
})

// Stagger item (use with staggerContainer)
export const staggerItem = (shouldReduce: boolean = false): Variants => ({
  initial: { opacity: 0, y: shouldReduce ? 0 : 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0, 0, 0.2, 1],
    },
  },
  exit: {
    opacity: 0,
    y: shouldReduce ? 0 : 20,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 1, 1],
    },
  },
})

// Page transition (navigation category)
export const pageTransition = (shouldReduce: boolean = false): Variants => {
  if (shouldReduce) {
    return fadeIn
  }

  return {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0, 0, 0.2, 1],
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 1, 1],
      },
    },
  }
}

// Modal/Dialog animations
export const modalBackdrop: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.2 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2 },
  },
}

export const modalContent = (shouldReduce: boolean = false): Variants => ({
  initial: {
    opacity: 0,
    scale: shouldReduce ? 1 : 0.95,
    y: shouldReduce ? 0 : 20,
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0, 0, 0.2, 1],
    },
  },
  exit: {
    opacity: 0,
    scale: shouldReduce ? 1 : 0.95,
    y: shouldReduce ? 0 : 20,
    transition: {
      duration: 0.2,
      ease: [0.4, 0, 1, 1],
    },
  },
})

/**
 * Viewport animation options for whileInView
 * Optimized for scroll-triggered animations (storytelling category)
 */
export const viewportOptions = {
  once: true, // Only animate once
  margin: '-100px', // Trigger 100px before element enters viewport
  amount: 0.3, // Trigger when 30% of element is visible
}

/**
 * Spring presets for natural motion
 */
export const spring = {
  gentle: {
    type: 'spring' as const,
    stiffness: 100,
    damping: 20,
  },
  bouncy: {
    type: 'spring' as const,
    stiffness: 300,
    damping: 20,
  },
  snappy: {
    type: 'spring' as const,
    stiffness: 400,
    damping: 30,
  },
}
