'use client'

import { useRef, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Text } from '@/components/primitives/Text'
import { Container } from '@/components/primitives/Container'
import { LinkButton } from '@/components/primitives/LinkButton'
import { SectionHeader } from '@/components/patterns/SectionHeader'
import { useReducedMotion } from '@/lib/motion'
import { Project } from '@/lib/types'

/**
 * Horizontal parallax gallery
 * Smooth lerp-based horizontal scroll with per-image parallax effect.
 * Mouse wheel on the gallery strip converts vertical scroll to horizontal.
 * Parallax: each image inner is 125% wide (centered at -12.5%) and shifts
 * based on its position relative to the viewport center.
 */

function lerp(start: number, end: number, factor: number) {
  return start * (1 - factor) + end * factor
}

function clamp(min: number, max: number, value: number) {
  return Math.max(min, Math.min(max, value))
}

export interface ParallaxGalleryProps {
  projects: Project[]
}

export function ParallaxGallery({ projects }: ParallaxGalleryProps) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const imageInnerRefs = useRef<(HTMLDivElement | null)[]>([])
  const scrollState = useRef({ current: 0, target: 0, ease: 0.07, limit: 0 })
  const rafRef = useRef<number>(0)
  const shouldReduceMotion = useReducedMotion()
  // Keep a ref so the RAF loop always reads the latest value without re-creating callbacks
  const reduceRef = useRef(shouldReduceMotion)

  useEffect(() => {
    reduceRef.current = shouldReduceMotion
  }, [shouldReduceMotion])

  const setLimit = useCallback(() => {
    if (!containerRef.current || !wrapperRef.current) return
    scrollState.current.limit =
      containerRef.current.scrollWidth - wrapperRef.current.clientWidth
  }, [])

  const applyParallax = useCallback(() => {
    if (reduceRef.current) return
    const vw = window.innerWidth
    const viewportCenter = vw * 0.5
    // MAX_SHIFT matches the CSS buffer: image is 125% wide → 25% extra → 12.5% per side.
    // translateX(%) is relative to the image width (125%), so safe max = 12.5/125 = 10%.
    const MAX_SHIFT = 10

    imageInnerRefs.current.forEach((imageInner) => {
      if (!imageInner) return
      const parent = imageInner.parentElement
      if (!parent) return
      const rect = parent.getBoundingClientRect()
      const elementCenter = rect.left + rect.width * 0.5
      // Normalize: -1 (far left) → 0 (centered) → 1 (far right)
      const t = clamp(-1, 1, (elementCenter - viewportCenter) / viewportCenter)
      // Counter-motion: element right → image shifts left, creating depth
      const shift = -t * MAX_SHIFT
      imageInner.style.transform = `translate3d(${shift}%, 0, 0)`
    })
  }, [])

  const renderLoop = useCallback(() => {
    const scroll = scrollState.current
    scroll.target = clamp(0, scroll.limit, scroll.target)
    scroll.current = reduceRef.current
      ? scroll.target
      : lerp(scroll.current, scroll.target, scroll.ease)

    if (containerRef.current) {
      containerRef.current.style.transform = `translateX(${-scroll.current}px)`
    }

    applyParallax()
    rafRef.current = requestAnimationFrame(renderLoop)
  }, [applyParallax])

  useEffect(() => {
    const wrapper = wrapperRef.current
    if (!wrapper) return

    setLimit()

    const onResize = () => {
      setLimit()
    }
    window.addEventListener('resize', onResize, { passive: true })

    // Use non-passive listener so we can call preventDefault() to stop page
    // scroll while there is still horizontal room to scroll the gallery.
    const onWheel = (e: WheelEvent) => {
      const scroll = scrollState.current
      const atStart = scroll.target <= 0
      const atEnd = scroll.target >= scroll.limit
      if ((!atStart || e.deltaY > 0) && (!atEnd || e.deltaY < 0)) {
        e.preventDefault()
      }
      scroll.target += e.deltaY
    }
    wrapper.addEventListener('wheel', onWheel, { passive: false })

    rafRef.current = requestAnimationFrame(renderLoop)

    return () => {
      window.removeEventListener('resize', onResize)
      wrapper.removeEventListener('wheel', onWheel)
      cancelAnimationFrame(rafRef.current)
    }
  }, [setLimit, renderLoop])

  return (
    <section className="bg-[rgb(var(--color-bg-sunken))]">
      {/* Section header */}
      <Container className="pt-20 md:pt-32 pb-12 md:pb-16">
        <SectionHeader
          eyebrow="Selected projects"
          title="Recent work"
          description="Enterprise design systems, Web3 platforms, and mobile experiences that drive results."
        />
      </Container>

      {/* Full-width gallery strip — overflow:hidden clips oversize parallax images */}
      <div
        ref={wrapperRef}
        className="w-full overflow-hidden relative"
        style={{ height: '72vh', cursor: 'ew-resize' }}
      >
        <div
          ref={containerRef}
          className="flex gap-8 h-full px-8"
          style={{ width: 'max-content', willChange: 'transform' }}
        >
          {projects.map((project, i) => (
            <Link
              key={project.slug}
              href={project.href}
              className="flex-shrink-0 group flex flex-col gap-4"
              draggable={false}
            >
              {/* Clipping container — acts as the visible window for the parallax image */}
              <div
                className="relative overflow-hidden rounded-lg"
                style={{ height: '58vh', aspectRatio: '4/3' }}
              >
                {/*
                 * Parallax inner — 125% wide, offset -12.5% to center the buffer.
                 * JS shifts this via translate3d based on viewport position.
                 * next/image fill fills this element, so it stays sharp at any shift.
                 */}
                <div
                  ref={(el) => { imageInnerRefs.current[i] = el }}
                  className="absolute top-0 h-full"
                  style={{ left: '-12.5%', width: '125%', willChange: 'transform' }}
                >
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    className="object-cover"
                    draggable={false}
                    sizes="80vw"
                    priority={i < 3}
                  />
                </div>

                {/* Hover tint overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-lg pointer-events-none" />
              </div>

              {/* Caption */}
              <div className="max-w-[300px]">
                <Text variant="caption" color="accent" className="mb-1 block">
                  {project.client ? `${project.client} · ${project.year}` : project.year}
                </Text>
                <Text
                  variant="h4"
                  className="group-hover:text-[rgb(var(--color-accent-primary))] transition-colors duration-200"
                >
                  {project.title}
                </Text>
                <div className="flex flex-wrap gap-1 mt-2">
                  {project.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-xs bg-[rgb(var(--color-bg-default))] text-[rgb(var(--color-fg-secondary))] rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Scroll hint + CTA */}
      <Container className="py-10 md:py-14">
        <div className="flex items-center justify-between">
          <Text variant="small" color="tertiary">
            Scroll to explore →
          </Text>
          <LinkButton href="/work" variant="secondary" size="lg">
            View all projects
          </LinkButton>
        </div>
      </Container>
    </section>
  )
}
