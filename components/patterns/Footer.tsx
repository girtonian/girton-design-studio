'use client'

/**
 * Minimal footer — mono font, ink-60 text, matches portfolio.html footer.
 */
export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <>
      <hr className="ink-divider" />
      <footer
        style={{
          maxWidth: '900px',
          margin: '0 auto',
          padding: '32px 48px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <style>{`
          @media (max-width: 768px) {
            .footer-inner {
              flex-direction: column !important;
              gap: 12px !important;
              text-align: center !important;
            }
          }
        `}</style>
        <div
          className="footer-inner"
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
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
            Jonathan Girton
          </span>

          <div
            style={{
              display: 'flex',
              gap: '24px',
              alignItems: 'center',
            }}
          >
            {[
              { label: 'Email',    href: 'mailto:hello@girtonian.com' },
              { label: 'LinkedIn', href: 'https://linkedin.com/in/girtonian' },
              { label: 'GitHub',   href: 'https://github.com/girtonian' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '9px',
                  letterSpacing: '.15em',
                  textTransform: 'uppercase',
                  color: 'var(--ink-60)',
                  textDecoration: 'none',
                  transition: 'color 180ms',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--sage)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--ink-60)')}
              >
                {link.label}
              </a>
            ))}
          </div>

          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '9px',
              letterSpacing: '.1em',
              color: 'var(--ink-60)',
              opacity: 0.5,
            }}
          >
            © {currentYear} Girtonian LLC
          </span>
        </div>
      </footer>
    </>
  )
}
