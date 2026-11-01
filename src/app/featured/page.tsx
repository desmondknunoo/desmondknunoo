import type { Metadata } from 'next'
import { LightboxGallery } from '@/components/lightbox-gallery'
import { etcOpeningPhotos, roboticsRecognitionPhotos, galaxyPhotos } from '@/lib/story-images'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { CollapsibleSection } from '@/components/collapsible-section'
import { SectionPage } from '@/components/section-page'
import { coveredTrainings, etcOpeningCoverage } from '@/lib/programme-coverage'
import { ProgrammeCoverageLinks } from '@/components/programme-coverage-links'

export const metadata: Metadata = {
    title: 'Featured | Desmond Kwame Nunoo',
    description: 'Programme coverage, event highlights, and recognition from Desmond Kwame Nunoo’s work in technology and education.',
}

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
                    <p className="max-w-3xl leading-7 text-zinc-300">{training.details}</p>
                    <div className="mt-6"><LightboxGallery images={training.images} postUrl={training.coverage[0].href} sourceLabel="Read programme coverage" layout="grid" /></div>
                    <ProgrammeCoverageLinks articles={training.coverage} />
                    <div className="mt-4">
                        <Link
                            href={`/trainings#${training.id}`}
                            className="inline-flex min-h-11 items-center text-sm text-zinc-300 underline decoration-zinc-600 underline-offset-4 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-300"
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
                <p className="max-w-3xl leading-7 text-zinc-300">{etcOpeningCoverage.details}</p>
                <div className="mt-6"><LightboxGallery images={etcOpeningPhotos} postUrl={etcOpeningCoverage.coverage.href} sourceLabel="Read the unveiling article" layout="grid" /></div>
                <Link
                    href={etcOpeningCoverage.coverage.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm text-zinc-100 underline decoration-zinc-600 underline-offset-4 hover:decoration-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-300"
                >
                    Read the unveiling article <ArrowUpRight aria-hidden="true" className="h-4 w-4 shrink-0" />
                </Link>
            </CollapsibleSection>
            </div>
            <CollapsibleSection id="robotics-competitions" title="Robotics competitions and recognition" className="py-8" contentClassName="mt-6 pb-0">
                <LightboxGallery images={roboticsRecognitionPhotos} layout="grid" />
            </CollapsibleSection>
            <CollapsibleSection id="galaxy-science-fair" title="Science & Makers’ Fair — Galaxy International School (2025)" className="py-8" contentClassName="mt-4 pb-0">
                <p className="mb-6 max-w-3xl leading-7 text-zinc-300">I represented Lancaster University Ghana as a judge at Galaxy International School’s Science &amp; Makers’ Fair and STEAM Competition 2025.</p>
                <LightboxGallery images={galaxyPhotos} postUrl="https://www.linkedin.com/feed/update/urn:li:activity:7330606104315314178/" layout="grid" />
            </CollapsibleSection>
            <CollapsibleSection title="Press and interviews" className="py-8">
                <p className="mt-3 max-w-2xl leading-7 text-zinc-400">
                    For press and interview enquiries, get in touch.
                </p>
                <Link
                    href="/contact"
                    className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-zinc-100 underline decoration-zinc-600 underline-offset-4 hover:decoration-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-300"
                >
                    Contact me <ArrowUpRight className="h-4 w-4" />
                </Link>
            </CollapsibleSection>
        </SectionPage>
    )
}
