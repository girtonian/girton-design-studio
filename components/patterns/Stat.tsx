'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'
import { Text } from '@/components/primitives/Text'
import { useReducedMotion } from '@/lib/motion'

/**
 * Animated stat counter
 * Counts up when in viewport (storytelling category)
 */

export interface StatProps {
  value: number
  label: string
  suffix?: string
  prefix?: string
  animateOnView?: boolean
  duration?: number
}

export function Stat({
  value,
  label,
  suffix = '',
  prefix = '',
  animateOnView = true,
  duration = 2,
}: StatProps) {
  const shouldReduceMotion = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [hasAnimated, setHasAnimated] = useState(false)

  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, {
    damping: 24,
    stiffness: 120,
    bounce: 0,
  })

  const [displayValue, setDisplayValue] = useState('0')

  useEffect(() => {
    if (!animateOnView || shouldReduceMotion) {
      setDisplayValue(value.toString())
      return
    }

    if (isInView && !hasAnimated) {
      setHasAnimated(true)
      motionValue.set(value)
    }
  }, [isInView, hasAnimated, animateOnView, shouldReduceMotion, value, motionValue])

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      setDisplayValue(Math.floor(latest).toString())
    })

    return () => unsubscribe()
  }, [springValue])

  if (shouldReduceMotion || !animateOnView) {
    return (
      <div ref={ref} className="text-center">
        <Text variant="h2" className="mb-2">
          {prefix}
          {value}
          {suffix}
        </Text>
        <Text variant="body" color="secondary">
          {label}
        </Text>
      </div>
    )
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 8 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ type: 'spring', stiffness: 120, damping: 24, bounce: 0, duration: 0.45 }}
      className="text-center"
    >
      <Text variant="h2" className="mb-2" aria-live="polite">
        {prefix}
        {displayValue}
        {suffix}
      </Text>
      <Text variant="body" color="secondary">
        {label}
      </Text>
    </motion.div>
  )
}
