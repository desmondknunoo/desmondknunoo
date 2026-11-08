import type { ReactNode } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Footer } from '@/components/footer'
import { CollapsibleSection } from '@/components/collapsible-section'
import { PortfolioHeader } from '@/components/portfolio-header'

type SectionPageProps = {
    title: string
    description: string
    children: ReactNode
    collapsible?: boolean
    search?: ReactNode
}

export function SectionPage({ title, description, children, collapsible = true, search }: SectionPageProps) {
    return (
        <main className="min-h-screen bg-zinc-950 text-zinc-100">
            <PortfolioHeader search={search} />
            <div className="mx-auto max-w-7xl px-6 md:px-12">
                <Link
                    href="/"
                    className="mt-16 inline-flex min-h-11 items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-300"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Home
                </Link>

                <CollapsibleSection
                    title={title}
                    headingLevel="h1"
                    collapsible={collapsible}
                    className="border-b border-zinc-800 py-12 md:py-16"
                    summaryClassName="py-0"
                    titleClassName="max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl"
                    contentClassName="mt-5 pb-0"
                >
                    <p className="max-w-2xl text-lg leading-8 text-zinc-300">
                        {description}
                    </p>
                </CollapsibleSection>

                <div className="pb-16">{children}</div>
            </div>
            <Footer />
        </main>
    )
}