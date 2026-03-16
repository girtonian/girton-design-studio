'use client'

import { motion } from 'framer-motion'
import { Hero } from '@/components/patterns/Hero'
import { projects } from '@/lib/data'

/**
 * Home page — portfolio.html layout:
 * Hero → Work grid → About teaser → Thinking → Contact
 */

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <Hero />

      <hr className="ink-divider" />

      {/* Selected Work — 2-col card grid */}
      <section id="work" style={{ position: 'relative', zIndex: 1 }}>
        <div className="container-custom" style={{ paddingTop: '80px', paddingBottom: '0' }}>
          <p className="section-tag reveal">Work</p>
        </div>

        <div className="container-custom" style={{ paddingBottom: '120px' }}>
          <div className="cards-grid">
            {projects.slice(0, 4).map((project, i) => (
              <WorkCard
                key={project.slug}
                index={i + 1}
                type={project.tags.slice(0, 3).join(' · ')}
                title={project.title}
                description={project.description || ''}
                year={project.year?.toString() || ''}
                href={project.href}
              />
            ))}
          </div>
        </div>
      </section>

      <hr className="ink-divider" />

      {/* About teaser */}
      <section style={{ position: 'relative', zIndex: 1 }}>
        <div className="container-custom" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
          <p className="section-tag reveal">About</p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 300px',
              gap: '80px',
              alignItems: 'start',
            }}
            className="about-grid-responsive"
          >
            <style>{`
              @media (max-width: 768px) {
                .about-grid-responsive { grid-template-columns: 1fr !important; gap: 48px !important; }
              }
            `}</style>

            <div>
              {[
                "I've always been interested in what design can do when it stops looking backward.",
                "I studied graphic design at Harrington College of Design in Chicago, then spent years working in spaces that hadn't fully figured out what design even meant yet — game UX, the creator economy, Web3. The work was harder, more ambiguous, more interesting.",
                "I'm currently founding Curmunchkins — an edtech platform designed from the ground up for neurodivergent kids. It's the most challenging design problem I've worked on.",
              ].map((para, i) => (
                <motion.p
                  key={i}
                  className="reveal"
                  initial={{ opacity: 0, y: 12, filter: 'blur(5px)' }}
                  whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    fontSize: '16px',
                    lineHeight: 1.8,
                    color: 'var(--ink-60)',
                    marginBottom: '24px',
                  }}
                >
                  {para}
                </motion.p>
              ))}

              <a href="/about" className="cta-btn" style={{ display: 'inline-flex', marginTop: '16px' }}>
                <span>Full story</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M1 7h12M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>

            <div>
              <div style={{ marginBottom: '40px' }}>
                <p
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '9px',
                    letterSpacing: '.18em',
                    textTransform: 'uppercase',
                    color: 'var(--sage)',
                    marginBottom: '16px',
                  }}
                >
                  Differentiators
                </p>
                {[
                  { title: 'Futures-oriented', note: 'Drawn to where design is heading, not where it\'s been.' },
                  { title: 'Systems thinker', note: 'Constraints reveal structure. MIT additive mfg. certified.' },
                  { title: 'Ship-ready', note: '14+ years moving from concept to production across industries.' },
                ].map((item, i) => (
                  <div
                    key={i}
                    style={{
                      padding: '16px 0',
                      borderBottom: '1px solid var(--ink-20)',
                      ...(i === 0 ? { borderTop: '1px solid var(--ink-20)' } : {}),
                    }}
                  >
                    <p style={{ fontSize: '13px', fontWeight: 400, marginBottom: '4px' }}>{item.title}</p>
                    <p style={{ fontSize: '12px', color: 'var(--ink-60)', lineHeight: 1.5 }}>{item.note}</p>
                  </div>
                ))}
              </div>

              <div>
                <p
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '9px',
                    letterSpacing: '.18em',
                    textTransform: 'uppercase',
                    color: 'var(--sage)',
                    marginBottom: '16px',
                  }}
                >
                  Beliefs
                </p>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {[
                    'Design is a hypothesis.',
                    'Accessibility is not a constraint.',
                    'The best work happens at edges.',
                    'Taste is a learnable skill.',
                    'Ship. Learn. Iterate.',
                  ].map((belief, i) => (
                    <li
                      key={i}
                      style={{
                        fontSize: '14px',
                        color: 'var(--ink-60)',
                        lineHeight: 1.6,
                        padding: '10px 0 10px 16px',
                        borderBottom: '1px solid var(--ink-20)',
                        position: 'relative',
                        ...(i === 0 ? { borderTop: '1px solid var(--ink-20)' } : {}),
                      }}
                    >
                      <span
                        style={{
                          position: 'absolute',
                          left: 0,
                          top: '50%',
                          width: '5px',
                          height: '1px',
                          background: 'var(--sage)',
                          transform: 'translateY(-50%)',
                        }}
                      />
                      {belief}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="ink-divider" />

      {/* Thinking section */}
      <section style={{ position: 'relative', zIndex: 1 }}>
        <div className="container-custom" style={{ paddingTop: '80px', paddingBottom: '0' }}>
          <p className="section-tag reveal">Thinking</p>
        </div>
        <div className="container-custom" style={{ paddingBottom: '120px' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '1px',
              background: 'var(--ink-20)',
              border: '1px solid var(--ink-20)',
            }}
          >
            {thoughts.map((thought, i) => (
              <div
                key={i}
                className="reveal"
                style={{
                  background: 'var(--white)',
                  padding: '36px 40px',
                  display: 'grid',
                  gridTemplateColumns: '48px 1fr',
                  gap: '24px',
                  alignItems: 'start',
                  transition: 'background 380ms cubic-bezier(.22,1,.36,1)',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--sage-faint)')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--white)')}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '10px',
                    letterSpacing: '.12em',
                    color: 'var(--sage)',
                    paddingTop: '3px',
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <p
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '18px',
                      fontWeight: 400,
                      lineHeight: 1.45,
                      letterSpacing: '-.01em',
                      marginBottom: '8px',
                    }}
                  >
                    {thought.text}
                  </p>
                  {thought.sub && (
                    <p
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '13px',
                        color: 'var(--ink-60)',
                        lineHeight: 1.6,
                      }}
                    >
                      {thought.sub}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="ink-divider" />

      {/* Contact section */}
      <section
        id="contact"
        style={{
          minHeight: '60vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div className="container-custom" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(36px, 6vw, 68px)',
              fontWeight: 400,
              lineHeight: 1.05,
              letterSpacing: '-1.36px',
              marginBottom: '48px',
              color: 'var(--ink)',
            }}
          >
            Let&apos;s build something <span style={{ color: 'var(--sage)' }}>together.</span>
          </h2>

          <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
            {[
              { label: 'Email',    value: 'hello@girtonian.com',          href: 'mailto:hello@girtonian.com' },
              { label: 'LinkedIn', value: 'linkedin.com/in/girtonian',     href: 'https://linkedin.com/in/girtonian' },
              { label: 'GitHub',   value: 'github.com/girtonian',          href: 'https://github.com/girtonian' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                style={{ display: 'flex', flexDirection: 'column', gap: '6px', textDecoration: 'none', color: 'inherit' }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '9px',
                    letterSpacing: '.2em',
                    textTransform: 'uppercase',
                    color: 'var(--sage)',
                  }}
                >
                  {link.label}
                </span>
                <span className="contact-link-value" style={{ fontSize: '15px' }}>
                  {link.value}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

/* ── Work card component ────────────────────────────────────────── */
function WorkCard({
  index,
  type,
  title,
  description,
  year,
  href,
}: {
  index: number
  type: string
  title: string
  description: string
  year: string
  href?: string
}) {
  const inner = (
    <div className="card-portfolio">
      <p
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '10px',
          letterSpacing: '.15em',
          color: 'var(--sage)',
          marginBottom: '28px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {String(index).padStart(2, '0')}
      </p>

      <p
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '9px',
          letterSpacing: '.12em',
          textTransform: 'uppercase',
          color: 'var(--ink-60)',
          marginBottom: '16px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {type}
      </p>

      <h2
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '36px',
          fontWeight: 700,
          letterSpacing: '-.01em',
          lineHeight: 1.05,
          marginBottom: '16px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {title}
      </h2>

      <p
        style={{
          fontSize: '13.5px',
          color: 'var(--ink-60)',
          lineHeight: 1.65,
          position: 'relative',
          zIndex: 1,
          maxWidth: '320px',
        }}
      >
        {description}
      </p>

      <div
        style={{
          marginTop: '36px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '10px',
            letterSpacing: '.12em',
            color: 'var(--ink-60)',
          }}
        >
          {year}
        </span>

        {href && (
          <span
            className="card-arrow-indicator"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontFamily: 'var(--font-mono)',
              fontSize: '9px',
              letterSpacing: '.15em',
              textTransform: 'uppercase',
              color: 'var(--sage)',
              opacity: 0,
              transform: 'translateX(-8px)',
              transition: 'opacity 380ms cubic-bezier(.22,1,.36,1), transform 380ms cubic-bezier(.22,1,.36,1)',
            }}
          >
            View
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        )}
      </div>

      <style>{`
        .card-portfolio:hover .card-arrow-indicator {
          opacity: 1 !important;
          transform: translateX(0) !important;
        }
      `}</style>
    </div>
  )

  if (!href) return inner

  const isExternal = href.startsWith('http')
  return isExternal ? (
    <a href={href} target="_blank" rel="noopener noreferrer" style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
      {inner}
    </a>
  ) : (
    <a href={href} style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
      {inner}
    </a>
  )
}

const thoughts = [
  {
    text: 'The best design work happens at the edges of disciplines.',
    sub: 'Game UX taught me interaction under constraint. Web3 taught me designing around irreversibility. Edtech is teaching me what real accessibility means.',
  },
  {
    text: 'Design is a hypothesis, not a deliverable.',
    sub: 'Every screen is a prediction about human behavior. Ship it. Test the prediction. Update the model.',
  },
  {
    text: 'Systems thinking is the most undervalued design skill.',
    sub: 'Anyone can make a beautiful screen. Fewer can make a beautiful system that scales, that survives contact with engineers, that outlasts the hype cycle.',
  },
  {
    text: 'Accessibility is not a constraint — it\'s a quality signal.',
    sub: 'If your design breaks for someone with ADHD, it was already fragile. Designing for the edges makes the center stronger.',
  },
]
