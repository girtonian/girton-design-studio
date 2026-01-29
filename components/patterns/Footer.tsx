import { Container } from '@/components/primitives/Container'
import { Link } from '@/components/primitives/Link'
import { Text } from '@/components/primitives/Text'
import { Github, Linkedin, Mail } from 'lucide-react'

/**
 * Global footer
 * Site map, social links, copyright
 */

const footerLinks = [
  {
    title: 'Navigation',
    links: [
      { label: 'Home', href: '/' },
      { label: 'Work', href: '/work' },
      { label: 'About', href: '/about' },
      { label: 'Writing', href: '/writing' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { label: 'Email', href: 'mailto:hello@girtonian.com' },
      { label: 'LinkedIn', href: 'https://linkedin.com/in/girtonian' },
      { label: 'GitHub', href: 'https://github.com/girtonian' },
    ],
  },
]

const socialLinks = [
  {
    platform: 'GitHub',
    url: 'https://github.com/girtonian',
    icon: Github,
    label: 'View GitHub profile',
  },
  {
    platform: 'LinkedIn',
    url: 'https://linkedin.com/in/girtonian',
    icon: Linkedin,
    label: 'Connect on LinkedIn',
  },
  {
    platform: 'Email',
    url: 'mailto:hello@girtonian.com',
    icon: Mail,
    label: 'Send an email',
  },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[rgb(var(--color-bg-sunken))] border-t border-[rgb(var(--color-border-subtle))] mt-20">
      <Container className="py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="md:col-span-4">
            <Text variant="h4" className="mb-4">
              Girtonian
            </Text>
            <Text variant="body" color="secondary" className="mb-6">
              Design systems that scale. Products that feel human.
            </Text>

            {/* Social links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <Link
                    key={social.platform}
                    href={social.url}
                    variant="subtle"
                    external
                    showExternalIcon={false}
                    aria-label={social.label}
                    className="p-2 hover:bg-[rgb(var(--color-bg-surface))] rounded-lg transition-colors"
                  >
                    <Icon size={20} />
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-8 grid grid-cols-2 gap-8 md:gap-12">
            {footerLinks.map((group) => (
              <div key={group.title}>
                <Text variant="small" className="font-semibold mb-4 block">
                  {group.title}
                </Text>
                <ul className="space-y-3">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} variant="subtle">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-[rgb(var(--color-border-subtle))]">
          <Text variant="small" color="tertiary" className="text-center">
            © {currentYear} Girtonian LLC. All rights reserved.
          </Text>
        </div>
      </Container>
    </footer>
  )
}
