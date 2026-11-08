import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink } from 'lucide-react'
import { CollapsibleSection } from '@/components/collapsible-section'
import { SectionPage } from '@/components/section-page'
import { portfolioProjects, type PortfolioProject } from '@/lib/projects'
import { getWorkItem, type WorkItem } from '@/lib/work'
import { pageMetadata, jsonLd } from '@/lib/seo'
import { projectsJsonLd } from '@/lib/projects-seo'

export const metadata: Metadata = pageMetadata({
    title: 'Projects',
    description: 'Software, web, mobile and design projects by Desmond Kwame Nunoo, including Mining Reports, InnoCode, InnoML, Abakosem Puzzle and Zomo Delivery Marketplace.',
    path: '/projects',
})

const designWorkSlugs = [
    'mtn-stands-in-worship',
    'mtn-afcon',
    'mtn-outdoor-activations',
    'closeup-covid-19-campaign',
    'visit-ghana-mini-map',
    'gnpc-chocolate-packaging',
    'lordship-certificate',
    'joos-bon-appetit',
]

const designWork = designWorkSlugs
    .map((slug) => getWorkItem(slug))
    .filter((item): item is WorkItem => Boolean(item))

export default function ProjectsPage() {
    return (
        <SectionPage
            title="Projects"
            description="Selected work I have built, contributed to, or collaborated on."
        >
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(projectsJsonLd()) }} />
            <div>
                {portfolioProjects.map((project) => <div key={project.title} id={project.id} className="scroll-mt-8"><ProjectEntry project={project} /></div>)}
            </div>
            <DesignWork />
        </SectionPage>
    )
}

function ProjectEntry({ project }: { project: PortfolioProject }) {
    return (
                    <CollapsibleSection
                        key={project.title}
                        title={project.title}
                        className="border-b border-zinc-800 py-8"
                        summaryClassName="py-0"
                        titleClassName="text-2xl font-semibold text-zinc-100"
                        contentClassName="mt-6 grid gap-6 pb-0 md:grid-cols-[minmax(0,1fr)_minmax(18rem,0.8fr)] md:items-center md:gap-12"
                    >
                        <div className="relative aspect-video overflow-hidden bg-zinc-900">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                sizes="(max-width: 768px) 100vw, 40vw"
                                className={project.imageFit === 'contain' ? 'object-contain p-10' : 'object-cover'}
                            />
                        </div>
                        <div>
                            <p className="text-sm text-zinc-400">{project.tags}</p>
                            <p className="mt-3 text-sm font-medium text-zinc-200">{[project.role, project.date ?? "Date unavailable"].filter(Boolean).join(" · ")}</p>
                            <p className="mt-3 leading-7 text-zinc-300">{project.description}</p>
                            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3">
                                {project.links.map((item) => (
                                    <Link
                                        key={item.label}
                                        href={item.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-zinc-100 underline decoration-zinc-600 underline-offset-4 hover:decoration-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-300"
                                    >
                                        {item.label}<ExternalLink className="h-4 w-4" />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </CollapsibleSection>

    )
}

function DesignWork() {
    return (
        <CollapsibleSection
            id="design-work"
            title="Design Work"
            className="py-12"
            summaryClassName="py-0"
            titleClassName="text-3xl font-semibold tracking-tight text-zinc-100"
            summaryDescription="3D event design, print, packaging, and presentation work."
            contentClassName="mt-8 pb-0"
        >
            <ul className="grid grid-cols-2 gap-x-4 gap-y-8 md:gap-x-6 lg:grid-cols-4">
                {designWork.map((item) => (
                    <li key={item.slug}>
                        <Link
                            href={`/work/${item.slug}`}
                            className="group/tile block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-300 focus-visible:ring-offset-4 focus-visible:ring-offset-zinc-950"
                        >
                            <div className="relative aspect-video overflow-hidden bg-zinc-900">
                                <Image
                                    src={item.thumbnail}
                                    alt=""
                                    fill
                                    sizes="(max-width: 1024px) 50vw, 22vw"
                                    className="object-cover transition-opacity duration-300 group-hover/tile:opacity-80"
                                />
                            </div>
                            <h3 className="mt-3 text-base font-semibold leading-snug text-zinc-100 underline decoration-transparent underline-offset-4 transition-colors group-hover/tile:decoration-zinc-400">
                                {item.title}
                            </h3>
                            <p className="mt-1 text-sm leading-6 text-zinc-400">
                                {[item.category, item.date].filter(Boolean).join(' · ')}
                            </p>
                        </Link>
                    </li>
                ))}
            </ul>
        </CollapsibleSection>
    )
}
