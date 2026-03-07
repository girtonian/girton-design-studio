'use client'

import { useRef, ReactNode } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useReducedMotion } from '@/lib/motion'

interface MagneticButtonProps {
  children: ReactNode
  className?: string
  /** How far the magnet pulls (in px). Default: 12 */
  strength?: number
}

/**
 * MagneticButton — Jhey-style cursor-attraction wrapper.
 * Subtly pulls its children toward the mouse as it hovers near.
 * Uses useMotionValue + useSpring for natural, interruptible motion.
 * Disables automatically when prefers-reduced-motion is set.
 */
export function MagneticButton({
  children,
  className,
  strength = 12,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null)
  const shouldReduceMotion = useReducedMotion()

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springConfig = { stiffness: 300, damping: 30, mass: 0.5 }
  const springX = useSpring(x, springConfig)
  const springY = useSpring(y, springConfig)

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (shouldReduceMotion || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const deltaX = e.clientX - centerX
    const deltaY = e.clientY - centerY
    // Scale down the pull by the strength factor
    x.set((deltaX / rect.width) * strength * 2)
    y.set((deltaY / rect.height) * strength * 2)
  }

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
  }

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  )
}
