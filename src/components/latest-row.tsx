"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { landingHighlights } from "@/lib/landing-highlights";

export function LatestRow() {
    const rowRef = useRef<HTMLUListElement>(null);
    const [canScroll, setCanScroll] = useState({ left: false, right: true });

    useEffect(() => {
        const row = rowRef.current;
        if (!row) return;

        function update() {
            if (!row) return;
            setCanScroll({
                left: row.scrollLeft > 1,
                right: row.scrollLeft + row.clientWidth < row.scrollWidth - 1,
            });
        }

        update();
        const observer = new ResizeObserver(update);
        observer.observe(row);
        row.addEventListener("scroll", update, { passive: true });
        return () => {
            observer.disconnect();
            row.removeEventListener("scroll", update);
        };
    }, []);

    function scroll(direction: -1 | 1) {
        const row = rowRef.current;
        const first = row?.firstElementChild;
        if (!row || !first) return;
        const gap = parseFloat(getComputedStyle(row).columnGap) || 0;
        const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth";
        row.scrollBy({ left: direction * (first.clientWidth + gap), behavior });
    }

    const buttonClass =
        "inline-flex h-10 w-10 items-center justify-center border border-rule text-ink transition-colors hover:border-ink disabled:cursor-default disabled:opacity-30 disabled:hover:border-rule focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent";

    return (
        <section aria-labelledby="latest-heading" className="mx-auto max-w-7xl px-6 pt-14 md:px-12 md:pt-20">
            <div className="flex items-end justify-between border-t border-rule pt-5">
                <h2 id="latest-heading" className="font-display text-[12px] uppercase tracking-[0.22em] text-ink">
                    The latest
                </h2>
                <div className="flex gap-2">
                    <button type="button" aria-label="Scroll to earlier items" disabled={!canScroll.left} onClick={() => scroll(-1)} className={buttonClass}>
                        <ChevronLeft aria-hidden="true" className="h-4 w-4" strokeWidth={1.5} />
                    </button>
                    <button type="button" aria-label="Scroll to later items" disabled={!canScroll.right} onClick={() => scroll(1)} className={buttonClass}>
                        <ChevronRight aria-hidden="true" className="h-4 w-4" strokeWidth={1.5} />
                    </button>
                </div>
            </div>

            <ul
                ref={rowRef}
                className="mt-6 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
                {landingHighlights.map((item) => (
                    <li key={`${item.link}-${item.title}`} className="w-[78%] shrink-0 snap-start sm:w-[46%] lg:w-[30%]">
                        <Link
                            href={item.link}
                            className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-paper"
                        >
                            <div className="relative aspect-[4/3] overflow-hidden border border-rule bg-paper-raised transition-colors group-hover:border-ink">
                                <Image
                                    src={item.thumbnail}
                                    alt=""
                                    fill
                                    sizes="(max-width: 640px) 78vw, (max-width: 1024px) 46vw, 30vw"
                                    style={{ objectPosition: item.position ?? "center" }}
                                    className="object-cover"
                                />
                            </div>
                            <p className="mt-3 text-[17px] leading-snug text-ink underline decoration-transparent underline-offset-[5px] transition-colors group-hover:decoration-accent">
                                {item.title}
                            </p>
                            {item.date && (
                                <p className="font-display mt-1 text-[11px] uppercase tracking-[0.18em] text-ink-muted">{item.date}</p>
                            )}
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
}
