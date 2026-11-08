import type { Metadata } from 'next'
import { LightboxGallery } from '@/components/lightbox-gallery'
import { etcOpeningPhotos, roboticsRecognitionPhotos, galaxyPhotos } from '@/lib/story-images'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { CollapsibleSection } from '@/components/collapsible-section'
import { SectionPage } from '@/components/section-page'
import { coveredTrainings, etcOpeningCoverage } from '@/lib/programme-coverage'
import { ProgrammeCoverageLinks } from '@/components/programme-coverage-links'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
    title: 'Featured',
    description: "Programme coverage, event highlights and recognition from Desmond Kwame Nunoo's work in technology and STEM education in Ghana.",
    path: '/featured',
})

export default function FeaturedPage() {
    return (
        <SectionPage
            title="Featured"
            description="Programme coverage, event highlights, and recognition from my work in technology and education."
        >
            {coveredTrainings.map((training) => (
                <CollapsibleSection
                    key={training.id}
                    title={training.title}
                    summaryDescription={training.organization}
                    className="py-8"
                    summaryClassName="py-0"
                    contentClassName="mt-4 pb-0"
                >
                    <p className="max-w-3xl leading-7 text-ink">{training.details}</p>
                    <div className="mt-6"><LightboxGallery images={training.images} postUrl={training.coverage[0].href} sourceLabel="Read programme coverage" /></div>
                    <ProgrammeCoverageLinks articles={training.coverage} />
                    <div className="mt-4">
                        <Link
                            href={`/trainings#${training.id}`}
                            className="inline-flex min-h-11 items-center text-sm text-ink underline decoration-ink/40 underline-offset-4 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                        >
                            View training <span className="sr-only">details for {training.title}</span>
                        </Link>
                    </div>
                </CollapsibleSection>
            ))}
            <div id="etc-opening" className="scroll-mt-8"><CollapsibleSection
                title={etcOpeningCoverage.title}
                summaryDescription={etcOpeningCoverage.coverage.publisher}
                className="py-8"
                summaryClassName="py-0"
                contentClassName="mt-4 pb-0"
            >
                <p className="max-w-3xl leading-7 text-ink">{etcOpeningCoverage.details}</p>
                <div className="mt-6"><LightboxGallery images={etcOpeningPhotos} postUrl={etcOpeningCoverage.coverage.href} sourceLabel="Read the unveiling article" /></div>
                <Link
                    href={etcOpeningCoverage.coverage.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm text-ink underline decoration-ink/40 underline-offset-4 hover:decoration-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                    Read the unveiling article <ArrowUpRight aria-hidden="true" className="h-4 w-4 shrink-0" />
                </Link>
            </CollapsibleSection>
            </div>
            <CollapsibleSection id="robotics-competitions" title="Robotics competitions and recognition" summaryDescription="2024–2025 highlights" className="py-8" contentClassName="mt-6 pb-0">
                <LightboxGallery images={roboticsRecognitionPhotos} />
            </CollapsibleSection>
            <CollapsibleSection id="galaxy-science-fair" title="Science & Makers’ Fair — Galaxy International School (2025)" className="py-8" contentClassName="mt-4 pb-0">
                <p className="mb-6 max-w-3xl leading-7 text-ink">I represented Lancaster University Ghana as a judge at Galaxy International School’s Science &amp; Makers’ Fair and STEAM Competition 2025.</p>
                <LightboxGallery images={galaxyPhotos} postUrl="https://www.linkedin.com/feed/update/urn:li:activity:7330606104315314178/" />
            </CollapsibleSection>
            <CollapsibleSection title="Press and interviews" className="py-8">
                <p className="mt-3 max-w-2xl leading-7 text-ink-muted">
                    For press and interview enquiries, get in touch.
                </p>
                <Link
                    href="/contact"
                    className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-ink underline decoration-ink/40 underline-offset-4 hover:decoration-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                    Contact me <ArrowUpRight className="h-4 w-4" />
                </Link>
            </CollapsibleSection>
        </SectionPage>
    )
}
