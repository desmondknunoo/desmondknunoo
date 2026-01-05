import Link from 'next/link'
import { ExternalLink } from 'lucide-react'

const projects = [
    {
        title: 'SmartSale ERP Website - Redesign',
        description: 'Integrated technology for managing your business.',
        tags: 'UI/UX • WEB • PRODUCT',
        image: '/images/sserpImage.jpg',
        links: [
            { label: 'Figma Prototype', url: 'https://www.figma.com/proto/HdGJI0rx0r2xWJodWBqXvC/SmartSale-Website---Redesign' },
            { label: 'Website', url: 'https://smartsaleerp.com' }
        ]
    },
    {
        title: 'Kampuze',
        description: 'Buy and sell music on Kampuze on your smartphone.',
        tags: 'UI/UX • PRODUCT • MOBILE • iOS',
        image: '/images/kampuzeImage.jpg',
        links: [
            { label: 'Figma Prototype', url: 'https://www.figma.com/proto/oiJYt62X4b2nbWeCQdVVat/Kampuze-Music' }
        ]
    },
    {
        title: 'U4nor',
        description: 'Relevant and reliable campus news curated for tertiary students in Ghana.',
        tags: 'UI/UX • PRODUCT • MOBILE • ANDROID',
        image: '/images/u4norImage.jpg',
        links: [
            { label: 'Behance', url: 'https://www.behance.net/gallery/91548529/U4nor-Android-App-UIUX' },
            { label: 'Google Play Store', url: 'https://play.google.com/store/apps/details?id=com.u4nor.android' }
        ]
    }
]

export function PortfolioSection() {
    return (
        <section className="bg-zinc-950 py-16 px-6 lg:px-12">
            <div className="mx-auto max-w-7xl">
                <div className="mb-8">
                    <h2 className="text-4xl font-bold text-zinc-200">Selected Work</h2>
                    <p className="mt-2 text-xl font-light text-zinc-400">
                        Developing digital products & designing solutions.
                    </p>
                </div>

                <hr className="border-zinc-800 mb-8" />

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group overflow-hidden rounded-3xl bg-zinc-900 transition-transform hover:scale-[1.02]"
                        >
                            <div className="aspect-video overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-6">
                                <p className="text-sm font-light text-zinc-500">{project.tags}</p>
                                <hr className="my-3 border-zinc-800" />
                                <h3 className="text-xl font-bold text-zinc-200">{project.title}</h3>
                                <p className="mt-2 font-light text-zinc-400">{project.description}</p>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {project.links.map((link, linkIndex) => (
                                        <Link
                                            key={linkIndex}
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1 rounded-full bg-zinc-200 px-4 py-2 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-300"
                                        >
                                            {link.label}
                                            <ExternalLink className="h-3 w-3" />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <hr className="mt-8 border-zinc-800" />

                <p className="mt-6 text-xl font-light text-zinc-400">
                    View more work{' '}
                    <Link href="/work" className="font-medium text-zinc-200 hover:underline">
                        here
                    </Link>
                    .
                </p>
            </div>
        </section>
    )
}
