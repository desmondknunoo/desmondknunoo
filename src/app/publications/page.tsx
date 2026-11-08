import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { CollapsibleSection } from '@/components/collapsible-section'
import { SectionPage } from '@/components/section-page'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
    title: 'Publications',
    description: "Articles, papers and research by Desmond Kwame Nunoo, including a study of the Emerging Technologies Centre at Lancaster University Ghana.",
    path: '/publications',
})

const abstract = [
    'The Emerging Technologies Centre (ETC) at Lancaster University Ghana (LUG) is a shared technological hub designed to provide students across disciplines, community members and corporate partners with access to emerging technologies while promoting collaborative learning, partnership and a sense of belonging. This study explores how the ETC promotes inclusion, skill development and collaboration beyond the provision of technological infrastructure.',
    'Using a qualitative case-study approach, data were obtained through observations, semi-structured interviews with students, corporate professionals and community participants, and programme records. Guided by the Community of Practice framework, the findings indicate that the ETC functions not only as a technological facility but also as an interactive learning ecosystem where academia, industry and the wider community participate in shared learning and innovation. Such participation contributes to skill development, inclusion, belonging and partnership across diverse groups.',
    'The study demonstrates how universities can leverage emerging-technology infrastructure not merely as a technological investment, but as a strategic platform for inclusive learning, community engagement and partnership. Drawing on the experience of the ETC at Lancaster University Ghana, the paper offers lessons that may inform the design and use of emerging-technology spaces across higher education institutions in diverse contexts.',
]

const contributors = [
    {
        name: 'Pius Kwao Gadosey',
        department: 'Computer Science Department',
        orcid: 'https://orcid.org/0000-0003-0454-274X',
    },
    {
        name: 'Fredrick Boafo',
        department: 'Computer Science Department',
        orcid: 'https://orcid.org/0000-0002-8754-9922',
    },
    {
        name: 'Irene Tiwaa Asare-Yeboa',
        department: 'Business Studies Department',
        orcid: 'https://orcid.org/0009-0000-2636-0029',
    },
    {
        name: 'Frederick Jojo Kwofie',
        department: 'Sponsorship & Development Department',
    },
    {
        name: 'Desmond Nunoo',
        department: 'Computer Science Department',
        orcid: 'https://orcid.org/0009-0009-0759-5944',
    },
]

const references = [
    {
        citation: 'Atiase, V. Y., Kolade, O., & Liedong, T. A. (2020). The emergence and strategy of tech hubs in Africa: Implications for knowledge production and value creation. Technological Forecasting and Social Change, 161, 120307.',
        doi: 'https://doi.org/10.1016/j.techfore.2020.120307',
    },
    {
        citation: 'Etzkowitz, H., & Leydesdorff, L. (2000). The dynamics of innovation: From national systems and “Mode 2” to a triple helix of university–industry–government relations. Research Policy, 29(2), 109–123.',
        doi: 'https://doi.org/10.1016/S0048-7333(99)00055-4',
    },
    {
        citation: 'Lave, J., & Wenger, E. (1991). Situated learning: Legitimate peripheral participation. Cambridge: Cambridge University Press.',
        doi: 'https://doi.org/10.1017/CBO9780511815355',
    },
    {
        citation: 'Strayhorn, T. L. (2018). College Students’ Sense of Belonging: A Key to Educational Success for All Students (2nd ed.). Routledge.',
        doi: 'https://doi.org/10.4324/9781315297293',
    },
    {
        citation: 'Wenger, E. (1998). Communities of Practice: Learning, Meaning, and Identity. Cambridge: Cambridge University Press.',
        doi: 'https://doi.org/10.1017/CBO9780511803932',
    },
    {
        citation: 'Wenger, E., McDermott, R., & Snyder, W. M. (2002). Cultivating communities of practice: A guide to managing knowledge. Boston, MA: Harvard Business School Press.',
    },
]

export default function PublicationsPage() {
    return (
        <SectionPage
            title="Publications"
            description="Articles, papers, and research I have authored or co-authored."
        >
            <CollapsibleSection
                title="Technology, belonging and partnership: The Emerging Technologies Centre at Lancaster University Ghana as a community of practice"
                summaryDescription="Proceedings of the Lancaster University Education Conference · Vol. 3 (2026) · Published 5 October 2026"
                summaryDescriptionClassName="text-sm"
                className="py-8 md:py-10"
                summaryClassName="py-0"
                titleClassName="max-w-4xl text-2xl font-medium leading-tight text-ink md:text-[2rem]"
                contentClassName="pt-5 pb-0"
            >
                <div className="flex flex-wrap gap-x-7 gap-y-2">
                    <Link
                        href="https://ojs.library.lancs.ac.uk/lue/article/view/03-gadosey-etal"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-ink underline decoration-ink/40 underline-offset-4 hover:decoration-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    >
                        Read the paper <ArrowUpRight className="h-4 w-4" />
                    </Link>
                    <Link
                        href="https://doi.org/10.71957/sj3djh81"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-ink underline decoration-ink/40 underline-offset-4 hover:decoration-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    >
                        DOI <ArrowUpRight className="h-4 w-4" />
                    </Link>
                    <Link
                        href="https://orcid.org/0009-0009-0759-5944"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-ink underline decoration-ink/40 underline-offset-4 hover:decoration-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    >
                        ORCID <ArrowUpRight className="h-4 w-4" />
                    </Link>
                </div>

                <CollapsibleSection title="Contributors" className="mt-8 border-t border-rule">
                    <ul className="mt-3 divide-y divide-rule">
                        {contributors.map((contributor) => (
                            <li
                                key={contributor.name}
                                className="flex flex-col justify-between gap-2 py-4 sm:flex-row sm:items-center"
                            >
                                <div>
                                    <p className="font-medium text-ink">{contributor.name}</p>
                                    <p className="mt-1 text-sm leading-6 text-ink-muted">
                                        {contributor.department} · Lancaster University Ghana · Author
                                    </p>
                                </div>
                                {contributor.orcid && (
                                    <Link
                                        href={contributor.orcid}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex min-h-11 w-fit items-center gap-2 text-sm text-ink underline decoration-ink/40 underline-offset-4 hover:decoration-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                                    >
                                        ORCID <ArrowUpRight className="h-4 w-4" />
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </CollapsibleSection>

                <CollapsibleSection title="Abstract" className="mt-10 border-t border-rule">
                    <div className="mt-4 max-w-4xl space-y-4 text-base leading-7 text-ink">
                        {abstract.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                    </div>
                </CollapsibleSection>

                <CollapsibleSection title="References" className="mt-10 border-t border-rule">
                    <ol className="mt-4 max-w-4xl list-decimal space-y-4 pl-5 text-sm leading-6 text-ink marker:text-ink-faint">
                        {references.map((reference) => (
                            <li key={reference.citation}>
                                {reference.citation}{' '}
                                {reference.doi && (
                                    <Link
                                        href={reference.doi}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex min-h-11 items-center gap-1 text-ink underline decoration-ink/40 underline-offset-4 hover:decoration-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                                    >
                                        DOI <ArrowUpRight className="h-3.5 w-3.5" />
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ol>
                </CollapsibleSection>
            </CollapsibleSection>
        </SectionPage>
    )
}