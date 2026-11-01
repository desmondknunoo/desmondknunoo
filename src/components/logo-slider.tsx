'use client';

import Image from 'next/image';
import { useReducedMotion } from 'framer-motion';
import { ScrollableInfiniteSlider } from '@/components/ui/scrollable-infinite-slider';
import { ProgressiveBlur } from '@/components/ui/progressive-blur';

import { organizations } from '@/lib/organizations';

const logoScale = 0.805;

function OrganizationLogos() {
    return organizations.map((organization) => (
        <div key={organization.name} className="flex h-24 shrink-0 items-center justify-center">
            {!organization.logo ? (
                <span className="max-w-40 text-center text-sm text-zinc-200">{organization.name}</span>
            ) : (
                <Image
                    src={organization.logo.src}
                    alt=""
                    width={organization.logo.width}
                    height={organization.logo.height}
                    unoptimized
                    loading="eager"
                    draggable={false}
                    style={{
                        height: logoScale * Math.min(
                            organization.logo.displayHeight,
                            (organization.logo.maxWidth ?? 160) * organization.logo.height / organization.logo.width,
                        ),
                        width: logoScale * Math.min(
                            organization.logo.maxWidth ?? 160,
                            organization.logo.displayHeight * organization.logo.width / organization.logo.height,
                        ),
                    }}
                    className="object-contain"
                />
            )}
        </div>
    ));
}

export function LogoSlider() {
    const reduceMotion = useReducedMotion();

    return (
        <section aria-label="Organizations I've worked with" className="border-t border-zinc-800 bg-black py-8">
            <div className="relative m-auto max-w-7xl px-6">
                <div className="flex flex-col items-center gap-4 md:flex-row md:gap-8">
                    <h2 className="shrink-0 text-center text-sm leading-6 text-zinc-400 md:w-36 md:border-r md:border-zinc-700 md:pr-6 md:text-right">
                        Organizations I&apos;ve worked with
                    </h2>
                    <ul className="sr-only">
                        {organizations.map(({ name }) => <li key={name}>{name}</li>)}
                    </ul>
                    <div className="relative min-w-0 w-full flex-1 overflow-hidden py-4">
                        <ScrollableInfiniteSlider
                            duration={organizations.length * 9.5}
                            gap={128}
                            autoPlay={!reduceMotion}
                            label="Organization logos. Swipe, drag, or use left and right arrow keys to scroll."
                        >
                            <OrganizationLogos />
                        </ScrollableInfiniteSlider>
                        <ProgressiveBlur
                            className="pointer-events-none absolute left-0 top-0 h-full w-8 md:w-12"
                            direction="left"
                            blurIntensity={1}
                        />
                        <ProgressiveBlur
                            className="pointer-events-none absolute right-0 top-0 h-full w-8 md:w-12"
                            direction="right"
                            blurIntensity={1}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
