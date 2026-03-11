'use client'

import { useEffect } from 'react'

/**
 * Client-side global effects:
 * - Custom square cursor tracking
 * - Scroll progress line
 * - Reveal-on-scroll for .reveal elements
 */
export function GlobalEffects() {
  useEffect(() => {
    // ── Cursor ──────────────────────────────────────────────────────
    const cursor = document.getElementById('cursor')
    const follower = document.getElementById('follower')
    let followerX = 0, followerY = 0
    let mouseX = 0, mouseY = 0
    let rafId: number

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      if (cursor) {
        cursor.style.left = `${mouseX}px`
        cursor.style.top  = `${mouseY}px`
      }
    }

    const animateFollower = () => {
      followerX += (mouseX - followerX) * 0.12
      followerY += (mouseY - followerY) * 0.12
      if (follower) {
        follower.style.left = `${followerX}px`
        follower.style.top  = `${followerY}px`
      }
      rafId = requestAnimationFrame(animateFollower)
    }

    const onMouseEnterLink = () => document.body.classList.add('hovering')
    const onMouseLeaveLink = () => document.body.classList.remove('hovering')

    document.addEventListener('mousemove', onMouseMove)
    rafId = requestAnimationFrame(animateFollower)

    const attachLinkListeners = () => {
      const interactables = document.querySelectorAll('a, button, [role="button"]')
      interactables.forEach((el) => {
        el.addEventListener('mouseenter', onMouseEnterLink)
        el.addEventListener('mouseleave', onMouseLeaveLink)
      })
    }
    attachLinkListeners()

    // ── Scroll line ──────────────────────────────────────────────────

    // Directly set ::after height via a <style> tag approach
    let scrollStyle: HTMLStyleElement | null = null

    // ── Video fade — only on home page, fades out over hero scroll distance ──
    const videoBgs = document.querySelectorAll('.video-bg-wrap') as NodeListOf<HTMLElement>

    const updateScrollStyle = () => {
      const scrolled = window.scrollY
      const total    = document.body.scrollHeight - window.innerHeight
      const pct      = total > 0 ? (scrolled / total) * 100 : 0

      if (!scrollStyle) {
        scrollStyle = document.createElement('style')
        scrollStyle.id = 'scroll-line-style'
        document.head.appendChild(scrollStyle)
      }
      scrollStyle.textContent = `#scrollLine::after { height: ${pct.toFixed(2)}%; }`

      // Fade video out so it's fully transparent by the time the Work section arrives.
      if (videoBgs.length > 0) {
        const isHome = window.location.pathname === '/'
        const opacity = (() => {
          if (!isHome) return 0
          const isMobile = window.innerWidth <= 768
          const maxOpacity = isMobile ? 0.7 : 1
          const workSection = document.getElementById('work')
          const workAbsTop = workSection
            ? workSection.getBoundingClientRect().top + scrolled
            : window.innerHeight * 2
          const fadeStart = workAbsTop - window.innerHeight
          const fadeEnd   = workAbsTop - window.innerHeight * 0.5
          return scrolled <= fadeStart
            ? maxOpacity
            : Math.max(0, maxOpacity * (1 - (scrolled - fadeStart) / (fadeEnd - fadeStart)))
        })()
        videoBgs.forEach(el => { el.style.opacity = String(opacity.toFixed(3)) })
      }
    }

    window.addEventListener('scroll', updateScrollStyle, { passive: true })
    updateScrollStyle()

    // ── Reveal on scroll ─────────────────────────────────────────────
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    const attachReveal = () => {
      document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el))
    }
    attachReveal()

    // Re-attach after DOM mutations (for client-side navigation)
    const mutationObserver = new MutationObserver(() => {
      attachReveal()
      attachLinkListeners()
    })
    mutationObserver.observe(document.body, { childList: true, subtree: true })

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('scroll', updateScrollStyle)
      cancelAnimationFrame(rafId)
      revealObserver.disconnect()
      mutationObserver.disconnect()
      scrollStyle?.remove()
    }
  }, [])

  return null
}
