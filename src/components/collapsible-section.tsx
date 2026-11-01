import type { ReactNode } from 'react'
import { ChevronDown } from 'lucide-react'

type CollapsibleSectionProps = {
    id?: string
    title: string
    children: ReactNode
    headingLevel?: 'h1' | 'h2' | 'h3'
    summaryDescription?: string
    summaryDescriptionClassName?: string
    className?: string
    summaryClassName?: string
    titleClassName?: string
    contentClassName?: string
    initiallyOpen?: boolean
    collapsible?: boolean
}

export function CollapsibleSection({
    id,
    title,
    children,
    headingLevel = 'h2',
    summaryDescription,
    summaryDescriptionClassName = '',
    className = '',
    summaryClassName = '',
    titleClassName = '',
    contentClassName = '',
    initiallyOpen = true,
    collapsible = true,
}: CollapsibleSectionProps) {
    const Heading = headingLevel
    const titleClasses = titleClassName || 'text-xl font-semibold text-zinc-100'

    if (!collapsible) {
        return (
            <section id={id} data-scroll-reveal className={className}>
                <Heading className={titleClasses}>{title}</Heading>
                {summaryDescription && (
                    <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-300">
                        {summaryDescription}
                    </p>
                )}
                <div className={contentClassName}>{children}</div>
            </section>
        )
    }

    return (
        <details
            id={id}
            open={initiallyOpen}
            data-scroll-reveal
            className={`group border-b border-zinc-800 ${className}`}
        >
            <summary
                className={`flex min-h-11 cursor-pointer list-none items-start justify-between gap-4 py-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-300 [&::-webkit-details-marker]:hidden ${summaryClassName}`}
            >
                <span>
                    <Heading className={titleClasses}>{title}</Heading>
                    {summaryDescription && (
                        <span className={`mt-3 block max-w-3xl text-sm leading-6 text-zinc-400 ${summaryDescriptionClassName}`}>
                            {summaryDescription}
                        </span>
                    )}
                </span>
                <ChevronDown
                    aria-hidden="true"
                    className="mt-1 h-5 w-5 shrink-0 text-zinc-400 transition-transform duration-200 group-open:rotate-180 motion-reduce:transition-none"
                />
            </summary>
            <div className={`min-w-0 pb-8 ${contentClassName}`}>{children}</div>
        </details>
    )
}
