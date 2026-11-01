import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink } from 'lucide-react'
import { CollapsibleSection } from '@/components/collapsible-section'
import { SectionPage } from '@/components/section-page'
import { portfolioProjects, type PortfolioProject } from '@/lib/projects'

export const metadata: Metadata = {
    title: 'Projects | Desmond Kwame Nunoo',
    description: 'Selected projects and collaborations by Desmond Kwame Nunoo.',
}

const additionalProjects = [
    {
        title: 'HoleyBot',
        details:
            'Coached a student team to first place in the Stars League at the 2024 Ghana Robotics Competition. The team built the robot with a Raspberry Pi Pico.',
    },
    {
        title: 'Zero Schools Under Trees',
        details:
            'Led product design and management for a web application and mapping database covering more than 5,000 schools.',
    },
    {
        title: 'The Orange Offline Publishing Dictionary',
        details:
            'Developed a native Kotlin Android application with an offline database of more than 5,000 terms as a final-year project.',
    },
]

export default function ProjectsPage() {
    return (
        <SectionPage
            title="Projects"
            description="Selected work I have built, contributed to, or collaborated on."
        >
            <div>
                {portfolioProjects.map((project) => <div key={project.title} id={project.id} className="scroll-mt-8"><ProjectEntry project={project} /></div>)}

            </div>

            <CollapsibleSection title="Additional work" className="pt-10" summaryClassName="py-0" contentClassName="mt-4 pb-0">
                <ul className="mt-4 divide-y divide-zinc-800">
                    {additionalProjects.map((project) => (
                        <li key={project.title} id={project.title === 'HoleyBot' ? 'holeybot' : undefined} className="grid gap-2 py-5 md:grid-cols-[16rem_minmax(0,1fr)] md:gap-12">
                            <h3 className="font-medium text-zinc-100">{project.title}</h3>
                            <p className="max-w-3xl leading-7 text-zinc-300">{project.details}</p>
                        </li>
                    ))}
                </ul>
            </CollapsibleSection>
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
                            {project.role && <p className="mt-3 text-sm font-medium text-zinc-200">{project.role}</p>}
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
