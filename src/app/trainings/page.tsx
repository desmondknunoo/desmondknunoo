import type { Metadata } from 'next'
import { LightboxGallery } from '@/components/lightbox-gallery'
import { designThinkingSlides, emergingWeekendPhotos, roboticsTrainingPhotos } from '@/lib/story-images'
import { CollapsibleSection } from '@/components/collapsible-section'
import { SectionPage } from '@/components/section-page'
import { coveredTrainings } from '@/lib/programme-coverage'
import { ProgrammeCoverageLinks } from '@/components/programme-coverage-links'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
    title: 'Trainings',
    description: "Robotics, AI, IoT, coding and 3D printing training programmes taught, facilitated or coordinated by Desmond Kwame Nunoo in Ghana.",
    path: '/trainings',
})

const trainings = [
    {
        title: 'Robotics and technology sessions',
        date: 'Aug 2022 – Present',
        organization: 'THE STEMR TECH LABS',
        details:
            'Facilitated projects and lessons in Scratch, PictoBlox, web design, AI and IoT, basic electronics, and C++ for teens.',
    },
    {
        title: 'STEM facilitator training',
        date: 'Nov 2025 – Present',
        organization: 'Infinity STEM & The Infinity STEM Foundation',
        details:
            'Train STEM facilitators, organize robotics competitions, and deliver STEM education in schools.',
    },
    {
        title: 'Sensel School STEM programme',
        date: 'Nov 2025 – Mar 2026',
        organization: 'The Juste Foundation',
        details:
            'Facilitated and coordinated student training sessions, connecting the facilitators, foundation, and school.',
    },
]

export default function TrainingsPage() {
    return (
        <SectionPage
            title="Trainings"
            description="Training programmes I have taught, facilitated, or coordinated."
        >
            <div>
                {coveredTrainings.map((training) => (
                    <div key={training.id} id={training.id} className="scroll-mt-8">
                        <CollapsibleSection
                            title={training.title}
                            className="py-8"
                            summaryClassName="py-0"
                            titleClassName="text-xl font-semibold text-ink"
                            contentClassName="mt-4 grid gap-3 pb-0 md:grid-cols-[minmax(0,1fr)_16rem] md:gap-x-12"
                        >
                            <div className="max-w-3xl">
                                <p className="leading-7 text-ink">{training.details}</p>
                                <ProgrammeCoverageLinks articles={training.coverage} />
                            </div>
                            <p className="text-sm leading-6 text-ink-muted">{training.organization}</p>
                            <div className="mt-5 md:col-span-2">
                                <LightboxGallery images={training.images} postUrl={training.coverage[0].href} sourceLabel="Read programme coverage" />
                            </div>
                        </CollapsibleSection>
                    </div>
                ))}
                <div id="eclectic-love-design-thinking" className="scroll-mt-8">
                    <CollapsibleSection title="Design Thinking — Eclectic Love" summaryDescription="TechSpark Summer Innovation Challenge 2026" className="py-8" contentClassName="mt-4 pb-0">
                        <p className="mb-6 max-w-3xl leading-7 text-ink">I facilitated Design Thinking at Eclectic Love’s TechSpark Summer Innovation Challenge. The 26 slides below cover how to understand the people affected by a problem, define the problem, and decide what to learn next.</p>
                        <LightboxGallery images={designThinkingSlides} />
                    </CollapsibleSection>
                </div>
                <div id="emerging-technologies-weekend-2026" className="scroll-mt-8">
                    <CollapsibleSection title="Emerging Technology Weekend Programme — June 2026" summaryDescription="Automation" className="py-8" contentClassName="mt-4 pb-0">
                        <p className="mb-6 max-w-3xl leading-7 text-ink">I taught Automation during the June 2026 Emerging Technology Weekend Programme.</p>
                        <LightboxGallery images={emergingWeekendPhotos} />
                    </CollapsibleSection>
                </div>
                <CollapsibleSection id="robotics-coaching" title="Robotics coaching and competition preparation" summaryDescription="Date unavailable" className="py-8" contentClassName="mt-4 pb-0">
                    <p className="mb-6 max-w-3xl leading-7 text-ink">Hands-on guidance and learning through robotics competitions.</p>
                    <LightboxGallery images={roboticsTrainingPhotos} />
                </CollapsibleSection>
                {trainings.map((training) => (
                    <CollapsibleSection
                        key={training.title}
                        title={training.title}
                        summaryDescription={training.date}
                        className="py-8"
                        summaryClassName="py-0"
                        titleClassName="text-xl font-semibold text-ink"
                        contentClassName="mt-4 grid gap-3 pb-0 md:grid-cols-[minmax(0,1fr)_16rem] md:gap-12"
                    >
                        <p className="leading-7 text-ink">{training.details}</p>
                        <p className="text-sm leading-6 text-ink-muted">{training.organization}</p>
                    </CollapsibleSection>
                ))}
            </div>
        </SectionPage>
    )
}
