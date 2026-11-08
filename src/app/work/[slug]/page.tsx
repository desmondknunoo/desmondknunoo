import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { CollapsibleSection } from "@/components/collapsible-section";
import { PortfolioHeader } from "@/components/portfolio-header";
import { LightboxGallery } from "@/components/lightbox-gallery";
import { workItems, getWorkItem } from "@/lib/work";
import { jsonLd } from "@/lib/seo";
import { workJsonLd, workMetadata } from "@/lib/work-seo";

export function generateStaticParams() {
    return workItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const item = getWorkItem(slug);
    return item ? workMetadata(item) : { title: "Not found", robots: { index: false } };
}

export default async function WorkDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const item = getWorkItem(slug);

    if (!item) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-paper">
            <PortfolioHeader />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(workJsonLd(item)) }} />
            <div className="mx-auto max-w-4xl px-6 pt-8 lg:px-12">
                <Link
                    href="/projects#design-work"
                    className="inline-flex min-h-11 items-center gap-2 text-sm text-ink-muted transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                    <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
                    Projects
                </Link>
                <p className="font-display mt-8 text-[12px] uppercase tracking-[0.22em] text-ink-muted">
                    {item.category} · {item.date ?? "Date unavailable"}
                </p>
                <h1 className="font-display mt-3 max-w-3xl text-2xl uppercase leading-tight tracking-[0.1em] text-ink md:text-[2.25rem]">
                    {item.title}
                </h1>
                <div data-scroll-reveal className="relative mt-8 aspect-[16/9] overflow-hidden border border-rule bg-paper-raised">
                    <Image
                        src={item.thumbnail}
                        alt={item.title}
                        fill
                        priority
                        sizes="(max-width: 1024px) 100vw, 896px"
                        className="object-cover"
                    />
                </div>
            </div>

            <div className="mx-auto max-w-4xl px-6 py-12 lg:px-12">
                <p className="text-[1.15rem] leading-[1.6] text-ink">{item.summary}</p>

                {item.body.length > 0 && (
                    <div className="mt-8 space-y-4 text-ink">
                        {item.body.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                )}

                {item.eventDesignImages && (
                    <CollapsibleSection
                        id="event-design"
                        title={item.eventDesignTitle ?? "3D Venue Design and Event Branding"}
                        className="mt-8"
                        contentClassName="pt-4"
                    >
                        {item.eventDesignMockups && (
                            <div className="mb-6">
                                <p className="mb-4 text-sm text-ink-muted">
                                    {item.daytimeMockups ? "Blue-hour views · AI-assisted mockups" : "AI-assisted mockups based on the original event designs."}
                                </p>
                                <LightboxGallery images={item.eventDesignMockups} />
                            </div>
                        )}
                        {item.daytimeMockups && (
                            <CollapsibleSection title="Daytime views" summaryDescription="AI-assisted mockups" className="mb-6">
                                <LightboxGallery images={item.daytimeMockups} />
                            </CollapsibleSection>
                        )}
                        <CollapsibleSection title="Original renders and artwork" initiallyOpen={!item.eventDesignMockups}>
                            <LightboxGallery images={item.eventDesignImages} />
                        </CollapsibleSection>
                    </CollapsibleSection>
                )}

                {item.instagramReel && (
                    <CollapsibleSection title="Promo reel" className="mt-8" contentClassName="pt-4">
                        <iframe
                            title={`${item.title} on Instagram`}
                            src={`${item.instagramReel}embed/`}
                            loading="lazy"
                            allow="fullscreen"
                            className="h-[560px] w-full max-w-sm border border-rule"
                        />
                        <Link
                            href={item.instagramReel}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-3 inline-flex min-h-11 items-center gap-2 text-sm text-ink underline underline-offset-4"
                        >
                            Watch on Instagram <ExternalLink aria-hidden="true" className="h-4 w-4" />
                        </Link>
                    </CollapsibleSection>
                )}

                {item.images && (
                    <CollapsibleSection title={item.imageGalleryTitle ?? "Campaign artwork"} className="mt-8" contentClassName="pt-4">
                        <LightboxGallery images={item.images} />
                    </CollapsibleSection>
                )}

                {item.externalLinks && item.externalLinks.length > 0 && (
                    <div className="mt-8 flex flex-wrap gap-2">
                        {item.externalLinks.map((link, index) => (
                            <Link
                                key={index}
                                href={link.url}
                                target={link.url.startsWith("/") ? undefined : "_blank"}
                                rel={link.url.startsWith("/") ? undefined : "noopener noreferrer"}
                                className="inline-flex min-h-11 items-center gap-2 border border-ink px-4 text-sm text-ink transition-colors hover:bg-ink hover:text-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                            >
                                {link.label}
                                <ExternalLink className="h-3 w-3" />
                            </Link>
                        ))}
                    </div>
                )}

                <hr className="mt-12 border-rule" />

                <p className="mt-6 text-ink-faint">
                    <Link href="/projects#design-work" className="text-ink underline-offset-[5px] hover:underline">
                        ← Back to all work
                    </Link>
                </p>
            </div>
        </main>
    );
}
