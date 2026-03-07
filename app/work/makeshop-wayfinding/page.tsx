import { Metadata } from 'next'
import { Container } from '@/components/primitives/Container'
import { Text } from '@/components/primitives/Text'
import { Image } from '@/components/primitives/Image'
import { Breadcrumbs } from '@/components/patterns/Breadcrumbs'
import { LinkButton } from '@/components/primitives/LinkButton'
import { projects } from '@/lib/data'
import { ArrowLeft } from 'lucide-react'

const WAYFINDING_IMAGES = [
  { src: '/Wayfinding-1.png', alt: 'MakeShop wayfinding — main entry and orientation' },
  { src: '/Wayfinding-2.png', alt: 'Directional signage at decision point' },
  { src: '/Wayfinding-3.png', alt: 'Conference room identification signage' },
  { src: '/Wayfinding-4.jpg', alt: 'Wayfinding in context' },
  { src: '/Wayfinding-5.png', alt: 'Installed wayfinding system detail' },
] as const

/**
 * MakeShop Wayfinding Case Study
 * Accenture Interactive Innovation Space
 */

export const metadata: Metadata = {
  title: 'MakeShop Wayfinding System | Girtonian',
  description:
    'Designed and implemented comprehensive wayfinding system for Accenture Interactive innovation space, improving client navigation and conference room accessibility.',
}

export default function MakeShopWayfindingPage() {
  const project = projects.find((p) => p.slug === 'makeshop-wayfinding')!
  const currentIndex = projects.findIndex((p) => p.slug === 'makeshop-wayfinding')
  const nextProject = projects[(currentIndex + 1) % projects.length]

  return (
    <>
      {/* Hero */}
      <section className="py-12 md:py-16">
        <Container>
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Work', href: '/work' },
              { label: 'MakeShop Wayfinding' },
            ]}
            className="mb-8"
          />

          <div className="max-w-3xl">
            <Text variant="h1" className="mb-4">
              MakeShop Wayfinding System
            </Text>
            <Text variant="lead" color="secondary" className="mb-8">
              Designing a comprehensive wayfinding system for Accenture Interactive&apos;s
              innovation and prototyping facility to improve client navigation and conference
              room accessibility.
            </Text>

            {/* Metadata */}
            <div className="flex flex-wrap gap-6 text-sm">
              <div>
                <Text variant="caption" color="tertiary" className="block mb-1">
                  ROLE
                </Text>
                <Text variant="body">Senior Creative Technologist</Text>
              </div>
              <div>
                <Text variant="caption" color="tertiary" className="block mb-1">
                  TIMELINE
                </Text>
                <Text variant="body">Nov 2018 - Mar 2019</Text>
              </div>
              <div>
                <Text variant="caption" color="tertiary" className="block mb-1">
                  CLIENT
                </Text>
                <Text variant="body">Accenture Interactive</Text>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm bg-[rgb(var(--color-bg-sunken))] text-[rgb(var(--color-fg-secondary))] rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Hero image */}
            <div className="mt-10 rounded-lg overflow-hidden">
              <Image
                src={WAYFINDING_IMAGES[0].src}
                alt={WAYFINDING_IMAGES[0].alt}
                width={1200}
                height={675}
                aspectRatio="16/9"
                className="w-full object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Challenge Section */}
      <section className="py-12 md:py-16 bg-[rgb(var(--color-bg-sunken))]">
        <Container size="md">
          <Text variant="caption" color="tertiary" className="block mb-2">
            THE CHALLENGE
          </Text>
          <Text variant="h2" className="mb-6">
            Balancing Innovation with Navigation
          </Text>
          <Text variant="body" color="secondary" className="mb-6">
            The Accenture Interactive MakeShop served as an innovation and prototyping space
            where enterprise clients visited to experience emerging technologies and collaborate
            on forward-thinking projects. The facility&apos;s dual function as both a working
            prototyping lab and client presentation space created unique wayfinding challenges.
          </Text>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 bg-[rgb(var(--color-bg-surface))] rounded-lg">
              <Text variant="h4" className="mb-2">Navigation Friction</Text>
              <Text variant="body" color="secondary">
                Clients struggled to locate conference rooms during time-sensitive meetings,
                with multiple prototyping areas creating visual complexity that hindered orientation.
              </Text>
            </div>
            <div className="p-6 bg-[rgb(var(--color-bg-surface))] rounded-lg">
              <Text variant="h4" className="mb-2">Staff Dependency</Text>
              <Text variant="body" color="secondary">
                First-time visitors required staff escort, reducing team productivity. Lack of
                consistent directional signage led to interrupted meetings.
              </Text>
            </div>
          </div>

          <Text variant="body" color="secondary" className="mt-8">
            The space needed a wayfinding solution that balanced the informal, creative
            atmosphere of a maker space with the professional polish expected by enterprise clients.
          </Text>
        </Container>
      </section>

      {/* Research Section */}
      <section className="py-12 md:py-16">
        <Container size="md">
          <Text variant="caption" color="tertiary" className="block mb-2">
            RESEARCH & DISCOVERY
          </Text>
          <Text variant="h2" className="mb-6">
            Understanding User Behavior
          </Text>

          <Text variant="h3" className="mb-4 mt-8">
            Observational Studies
          </Text>
          <Text variant="body" color="secondary" className="mb-6">
            Initial research involved tracking client and staff movement patterns through the
            space over multiple weeks. Key activities included:
          </Text>

          <ul className="space-y-3 mb-8">
            {[
              'Decision point mapping identified critical moments where visitors hesitated or backtracked',
              'Pain point documentation revealed conference room entrances as primary confusion zones',
              'Time-to-destination analysis measured impact of navigation difficulties on meeting schedules',
              'Staff intervention frequency quantified how often team members had to redirect visitors',
            ].map((item, index) => (
              <li key={index} className="flex gap-3">
                <span className="text-[rgb(var(--color-accent-primary))] font-bold">—</span>
                <Text variant="body" color="secondary">{item}</Text>
              </li>
            ))}
          </ul>

          <Text variant="body" color="secondary" className="mb-8">
            Testing revealed that clients typically entered with specific conference room
            destinations but lacked clear visual cues to guide them through the prototyping areas.
            The open floor plan, while excellent for collaboration, created sight-line challenges
            for wayfinding.
          </Text>

          <Text variant="h3" className="mb-4">
            User Group Analysis
          </Text>
          <Text variant="body" color="secondary" className="mb-6">
            Three distinct user groups emerged with different navigation needs:
          </Text>

          <div className="grid grid-cols-1 gap-4">
            <div className="p-6 border border-[rgb(var(--color-border-default))] rounded-lg">
              <Text variant="h4" className="mb-2">First-time Enterprise Clients</Text>
              <Text variant="body" color="secondary">
                Required immediate orientation and clear conference room identification
              </Text>
            </div>
            <div className="p-6 border border-[rgb(var(--color-border-default))] rounded-lg">
              <Text variant="h4" className="mb-2">Return Clients</Text>
              <Text variant="body" color="secondary">
                Needed quick confirmation of familiar routes and flexibility for new areas
              </Text>
            </div>
            <div className="p-6 border border-[rgb(var(--color-border-default))] rounded-lg">
              <Text variant="h4" className="mb-2">Internal Staff</Text>
              <Text variant="body" color="secondary">
                Required unobtrusive signage that didn&apos;t disrupt daily workflow in prototyping spaces
              </Text>
            </div>
          </div>
        </Container>
      </section>

      {/* Strategy Section */}
      <section className="py-12 md:py-16 bg-[rgb(var(--color-bg-sunken))]">
        <Container size="md">
          <Text variant="caption" color="tertiary" className="block mb-2">
            STRATEGY DEVELOPMENT
          </Text>
          <Text variant="h2" className="mb-6">
            Strategic Planning
          </Text>
          <Text variant="body" color="secondary" className="mb-8">
            The wayfinding strategy prioritized client experience without compromising the
            MakeShop&apos;s innovative character:
          </Text>

          <div className="space-y-4">
            {[
              {
                title: 'Progressive Disclosure',
                desc: 'Providing information only at decision points rather than overwhelming visitors',
              },
              {
                title: 'Conference Room Priority',
                desc: 'Emphasizing the most commonly requested destinations',
              },
              {
                title: 'Minimal Visual Intervention',
                desc: 'Respecting the space\'s aesthetic while improving functionality',
              },
              {
                title: 'Flexible System Architecture',
                desc: 'Allowing updates as space usage evolved',
              },
              {
                title: 'Brand Alignment',
                desc: 'Maintaining Accenture Interactive\'s visual language',
              },
            ].map((item, index) => (
              <div key={index} className="flex gap-4 items-start">
                <span className="w-8 h-8 flex items-center justify-center bg-[rgb(var(--color-accent-primary))] text-white rounded-full text-sm font-medium flex-shrink-0">
                  {index + 1}
                </span>
                <div>
                  <Text variant="body" className="font-medium">{item.title}</Text>
                  <Text variant="body" color="secondary">{item.desc}</Text>
                </div>
              </div>
            ))}
          </div>

          <Text variant="h3" className="mb-4 mt-12">
            Spatial Analysis & Sign Placement
          </Text>
          <Text variant="body" color="secondary">
            Floor plan analysis identified optimal sign locations based on visitor entry points
            and natural sight lines, major circulation paths through prototyping areas, key
            decision nodes requiring directional guidance, and conference room approaches
            requiring confirmation signage. The placement strategy emphasized catching visitor
            attention at the moment of need rather than sign proliferation throughout the space.
          </Text>
        </Container>
      </section>

      {/* Prototyping Section */}
      <section className="py-12 md:py-16">
        <Container size="md">
          <Text variant="caption" color="tertiary" className="block mb-2">
            DESIGN & PROTOTYPING
          </Text>
          <Text variant="h2" className="mb-6">
            Iterative Testing
          </Text>

          <Text variant="body" color="secondary" className="mb-8">
            Multiple prototype iterations tested design concepts before production. Prototyping
            proved essential for understanding how signage performed in the actual environment.
            Several design directions that looked promising in presentations failed when tested
            at full scale in the space, particularly regarding viewing angles and ambient
            lighting conditions.
          </Text>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Text variant="h4" className="mb-3">Signage System Prototyping</Text>
              <ul className="space-y-2">
                {[
                  'Low-fidelity mockups using foam core and printed graphics to test scale and positioning in situ',
                  'Typography testing ensuring conference room identifiers were readable at various approach distances',
                  'Hierarchy validation confirming information priority was immediately clear',
                  'Material exploration evaluating options that balanced durability with design intent',
                  'Installation method testing determining mounting solutions that respected existing architecture',
                ].map((item, index) => (
                  <li key={index}>
                    <Text variant="small" color="secondary">{item}</Text>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Text variant="h4" className="mb-3">Material & Finish Selection</Text>
              <ul className="space-y-2">
                {[
                  'Substrate comparison evaluating acrylic, aluminum composite, and vinyl applications',
                  'Finish analysis testing matte vs. gloss treatments under varied lighting',
                  'Durability assessment considering high-traffic areas and potential damage',
                  'Maintenance considerations selecting materials easily cleaned or replaced',
                  'Cost-benefit analysis balancing budget constraints with longevity requirements',
                ].map((item, index) => (
                  <li key={index}>
                    <Text variant="small" color="secondary">{item}</Text>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 p-6 bg-[rgb(var(--color-bg-sunken))] rounded-lg">
            <Text variant="body" color="secondary">
              Sample testing revealed that certain finishes created unwanted glare under the
              facility&apos;s track lighting, while others picked up fingerprints too readily
              in high-touch areas near conference room entries.
            </Text>
          </div>
        </Container>
      </section>

      {/* Solution Section */}
      <section className="py-12 md:py-16 bg-[rgb(var(--color-bg-sunken))]">
        <Container size="md">
          <Text variant="caption" color="tertiary" className="block mb-2">
            THE SOLUTION
          </Text>
          <Text variant="h2" className="mb-6">
            Directional Signage System
          </Text>
          <Text variant="body" color="secondary" className="mb-8">
            The implemented system comprised coordinated sign types working together:
          </Text>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="p-6 bg-[rgb(var(--color-bg-surface))] rounded-lg">
              <Text variant="h4" className="mb-3">Entry Orientation</Text>
              <Text variant="small" color="secondary">
                Primary wayfinding at main entry establishing overall space layout. Conference
                room directory with directional indicators. Visual hierarchy prioritizing most
                frequently requested locations.
              </Text>
            </div>
            <div className="p-6 bg-[rgb(var(--color-bg-surface))] rounded-lg">
              <Text variant="h4" className="mb-3">Directional Guidance</Text>
              <Text variant="small" color="secondary">
                Junction signage at key decision points directing to conference room clusters.
                Confirmation markers approaching destination zones. Secondary guidance for
                prototyping areas.
              </Text>
            </div>
            <div className="p-6 bg-[rgb(var(--color-bg-surface))] rounded-lg">
              <Text variant="h4" className="mb-3">Room Identification</Text>
              <Text variant="small" color="secondary">
                Clear room number and name markers at each entrance. Booking/availability
                integration where applicable. Consistent mounting position for immediate recognition.
              </Text>
            </div>
          </div>

          <Text variant="h3" className="mb-4">
            Design Characteristics
          </Text>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Clean typography using sans-serif typeface optimized for distance viewing',
              'Restrained color palette aligning with Accenture Interactive branding',
              'Modular design allowing content updates without full replacement',
              'Consistent information hierarchy across all sign types',
              'Appropriate scale for viewing distances in different zones',
              'Accessible design meeting ADA guidelines for text size and contrast',
            ].map((item, index) => (
              <div key={index} className="flex gap-2 items-start">
                <span className="text-[rgb(var(--color-accent-primary))]">+</span>
                <Text variant="body" color="secondary">{item}</Text>
              </div>
            ))}
          </div>

          <Text variant="body" color="secondary" className="mt-8">
            The system balanced information density with visual clarity. Rather than attempting
            comprehensive wayfinding coverage, signs appeared only where users needed guidance,
            reducing visual clutter while improving effectiveness.
          </Text>

          {/* Implementation gallery */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {WAYFINDING_IMAGES.slice(1).map((img, index) => (
              <div key={index} className="rounded-lg overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={800}
                  height={600}
                  aspectRatio="4/3"
                  className="w-full object-cover"
                />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Technical Specs */}
      <section className="py-12 md:py-16">
        <Container size="md">
          <Text variant="caption" color="tertiary" className="block mb-2">
            SPECIFICATIONS
          </Text>
          <Text variant="h2" className="mb-6">
            Technical Details
          </Text>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <Text variant="h4" className="mb-4">Signage Specifications</Text>
              <dl className="space-y-3">
                {[
                  { label: 'Primary Materials', value: 'Acrylic with vinyl graphics, aluminum composite panels' },
                  { label: 'Typography', value: 'Corporate sans-serif font family optimized for distance legibility' },
                  { label: 'Mounting', value: 'Wall-mounted with concealed hardware, select ceiling-suspended applications' },
                  { label: 'Finish', value: 'Matte coating to minimize glare under track lighting' },
                  { label: 'Size Range', value: '8"x10" room identification to 24"x36" directional signage' },
                ].map((item, index) => (
                  <div key={index}>
                    <dt>
                      <Text variant="small" color="tertiary">{item.label}</Text>
                    </dt>
                    <dd>
                      <Text variant="body">{item.value}</Text>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
            <div>
              <Text variant="h4" className="mb-4">Design System</Text>
              <dl className="space-y-3">
                {[
                  { label: 'Content Structure', value: 'Modular allowing field updates' },
                  { label: 'Information Hierarchy', value: 'Consistent across all sign types' },
                  { label: 'Scalability', value: 'Accommodating various mounting contexts' },
                  { label: 'Brand Compliance', value: 'Approved color palette and typography' },
                  { label: 'Accessibility', value: 'ADA guidelines for text size and contrast' },
                ].map((item, index) => (
                  <div key={index}>
                    <dt>
                      <Text variant="small" color="tertiary">{item.label}</Text>
                    </dt>
                    <dd>
                      <Text variant="body">{item.value}</Text>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Container>
      </section>

      {/* Outcomes Section */}
      <section className="py-12 md:py-16 bg-[rgb(var(--color-bg-sunken))]">
        <Container size="md">
          <Text variant="caption" color="tertiary" className="block mb-2">
            OUTCOMES & IMPACT
          </Text>
          <Text variant="h2" className="mb-6">
            Measurable Improvements
          </Text>
          <Text variant="body" color="secondary" className="mb-8">
            Post-implementation observation revealed significant navigation improvements:
          </Text>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              { metric: 'Reduced staff intervention', detail: 'From frequent redirections to occasional assistance only' },
              { metric: 'Improved meeting efficiency', detail: 'Clients arriving at conference rooms without delay' },
              { metric: 'Enhanced professional impression', detail: 'Contributing to positive client experience' },
              { metric: 'Decreased wayfinding inquiries', detail: 'Freeing staff to focus on project work' },
            ].map((item, index) => (
              <div key={index} className="p-6 bg-[rgb(var(--color-bg-surface))] rounded-lg">
                <Text variant="body" className="font-medium mb-1">{item.metric}</Text>
                <Text variant="small" color="secondary">{item.detail}</Text>
              </div>
            ))}
          </div>

          <Text variant="h3" className="mb-4">
            Lessons Learned
          </Text>
          <Text variant="body" color="secondary" className="mb-6">
            The project reinforced several key principles for wayfinding in innovation spaces:
          </Text>

          <ol className="space-y-4">
            {[
              { title: 'Less is more', desc: 'Strategic sign placement outperformed comprehensive coverage' },
              { title: 'Test in context', desc: 'Full-scale prototyping in actual space was essential' },
              { title: 'User-centered approach', desc: 'Observational research revealed non-obvious pain points' },
              { title: 'Material matters', desc: 'Physical samples prevented costly finish mistakes' },
              { title: 'Document everything', desc: 'Thorough photography aided future system evolution' },
            ].map((item, index) => (
              <li key={index} className="flex gap-4 items-start">
                <span className="w-6 h-6 flex items-center justify-center border border-[rgb(var(--color-border-default))] rounded text-sm flex-shrink-0">
                  {index + 1}
                </span>
                <div>
                  <Text variant="body" className="font-medium">{item.title}</Text>
                  <Text variant="body" color="secondary">{item.desc}</Text>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Role Section */}
      <section className="py-12 md:py-16">
        <Container size="md">
          <Text variant="caption" color="tertiary" className="block mb-2">
            MY CONTRIBUTIONS
          </Text>
          <Text variant="h2" className="mb-6">
            Project Role
          </Text>
          <Text variant="body" color="secondary" className="mb-8">
            As Senior Creative Technologist, my contributions spanned the project lifecycle:
          </Text>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <Text variant="h4" className="mb-3">Research & Strategy</Text>
              <ul className="space-y-2">
                <li><Text variant="small" color="secondary">Led observational studies and user testing sessions</Text></li>
                <li><Text variant="small" color="secondary">Analyzed traffic patterns and identified navigation pain points</Text></li>
                <li><Text variant="small" color="secondary">Developed wayfinding strategy and sign placement recommendations</Text></li>
              </ul>
            </div>
            <div>
              <Text variant="h4" className="mb-3">Design & Prototyping</Text>
              <ul className="space-y-2">
                <li><Text variant="small" color="secondary">Created signage system design concepts</Text></li>
                <li><Text variant="small" color="secondary">Coordinated prototype fabrication and in-situ testing</Text></li>
                <li><Text variant="small" color="secondary">Selected materials and finishes based on testing results</Text></li>
              </ul>
            </div>
            <div>
              <Text variant="h4" className="mb-3">Implementation</Text>
              <ul className="space-y-2">
                <li><Text variant="small" color="secondary">Managed installation coordination with facility operations</Text></li>
                <li><Text variant="small" color="secondary">Documented installation process and final system configuration</Text></li>
                <li><Text variant="small" color="secondary">Captured photography for project archive and knowledge sharing</Text></li>
              </ul>
            </div>
          </div>

          <div className="mt-8 p-6 border border-[rgb(var(--color-border-default))] rounded-lg">
            <Text variant="body" color="secondary">
              This hands-on approach, from research through installation, ensured the wayfinding
              system addressed real user needs rather than assumptions about navigation behavior.
              The modular design enabled ongoing refinement as space usage patterns shifted,
              demonstrating the value of designing for flexibility rather than assuming perfect
              initial placement.
            </Text>
          </div>
        </Container>
      </section>

      {/* Navigation */}
      <section className="py-12 md:py-16 bg-[rgb(var(--color-bg-sunken))]">
        <Container>
          <div className="flex flex-col sm:flex-row justify-between gap-6">
            <LinkButton href="/work" variant="secondary">
              <ArrowLeft size={20} />
              Back to work
            </LinkButton>

            <LinkButton href={`/work/${nextProject.slug}`} variant="ghost">
              Next: {nextProject.title}
            </LinkButton>
          </div>
        </Container>
      </section>
    </>
  )
}
