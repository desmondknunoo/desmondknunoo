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
        <main className="min-h-screen bg-paper text-ink">
            <PortfolioHeader search={search} />
            <div className="mx-auto max-w-7xl px-6 md:px-12">
                <Link
                    href="/"
                    className="mt-8 inline-flex min-h-11 items-center gap-2 text-sm text-ink-muted transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                    <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
                    Home
                </Link>

                <CollapsibleSection
                    title={title}
                    headingLevel="h1"
                    collapsible={collapsible}
                    className="border-b border-rule py-10 md:py-14"
                    summaryClassName="py-0"
                    titleClassName="font-display max-w-4xl text-2xl uppercase leading-tight tracking-[0.12em] text-ink md:text-[2.5rem]"
                    contentClassName="mt-6 pb-0"
                >
                    <p className="max-w-2xl text-[1.15rem] leading-[1.6] text-ink">
                        {description}
                    </p>
                </CollapsibleSection>

                <div className="pb-16">{children}</div>
            </div>
            <Footer />
        </main>
    )
}
