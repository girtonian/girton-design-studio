import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { projects } from '@/lib/data'
import { caseStudyBySlug } from '@/lib/case-studies'
import { CaseStudyContent } from '@/components/sections/CaseStudyContent'

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  return {
    title: project.title,
    description: project.description,
  }
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    notFound()
  }

  const currentIndex = projects.findIndex((p) => p.slug === slug)
  const nextProject = projects[(currentIndex + 1) % projects.length]
  const caseStudy = caseStudyBySlug[project.slug]

  return (
    <CaseStudyContent
      project={project}
      caseStudy={caseStudy}
      nextProject={nextProject}
      projectIndex={currentIndex + 1}
    />
  )
}
