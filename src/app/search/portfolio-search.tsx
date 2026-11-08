"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { SearchBar } from "@/components/search-bar";
import { SectionPage } from "@/components/section-page";
import { CollapsibleSection } from "@/components/collapsible-section";

type Page = { href: string; label: string };
type Passage = { href: string; title: string; text: string };
type IndexedPage = Page & { passages: Passage[]; text: string };

function normalize(value: string) {
    return value.toLowerCase().normalize("NFKD").replace(/\p{M}/gu, "").replace(/[^\p{L}\p{N}]+/gu, " ").trim();
}

async function indexPage(page: Page, signal: AbortSignal): Promise<IndexedPage> {
    const response = await fetch(page.href, { signal });
    if (!response.ok) throw new Error(`Could not load ${page.href}`);

    const template = document.createElement("template");
    template.innerHTML = await response.text();
    const main = template.content.querySelector("main");
    if (!main) throw new Error(`Missing content on ${page.href}`);

    main.querySelectorAll("nav, footer, [role=search], script, style, template, [hidden], [aria-hidden='true']").forEach((element) => element.remove());
    const passages = Array.from(main.querySelectorAll("h1, h2, h3, h4, p, li, img[alt]")).flatMap((element) => {
        const text = (element.getAttribute("alt") ?? element.textContent ?? "").replace(/\s+/g, " ").trim();
        if (!text) return [];

        const section = element.closest("details, section, article");
        const title = section?.querySelector("h2, h3, h4")?.textContent?.trim() || page.label;
        const anchor = element.closest("[id]")?.id;
        const href = anchor ? `${page.href}#${encodeURIComponent(anchor)}` : page.href;
        return [{ href, title, text }];
    });

    return {
        ...page,
        passages,
        text: normalize([page.label, main.textContent, ...passages.map((passage) => passage.text)].join(" ")),
    };
}

function score(text: string, terms: string[]) {
    return terms.filter((term) => text.includes(term)).length;
}

export function PortfolioSearch({ pages, initialQuery }: { pages: Page[]; initialQuery: string }) {
    const [query, setQuery] = useState(initialQuery);
    const [index, setIndex] = useState<IndexedPage[] | null>(null);
    const [missing, setMissing] = useState(0);
    const normalizedQuery = normalize(query);
    const hasQuery = normalizedQuery.length > 0;

    useEffect(() => {
        if (!hasQuery || index) return;

        const controller = new AbortController();
        void Promise.allSettled(pages.map((page) => indexPage(page, controller.signal))).then((outcomes) => {
            if (controller.signal.aborted) return;
            const loaded = outcomes.flatMap((outcome) => outcome.status === "fulfilled" ? [outcome.value] : []);
            setMissing(pages.length - loaded.length);
            setIndex(loaded);
        });

        return () => controller.abort();
    }, [hasQuery, index, pages]);

    const terms = normalizedQuery.split(" ");
    const matches = hasQuery && index ? index.flatMap((page) => {
        if (score(page.text, terms) !== terms.length) return [];

        const passages = page.passages.map((passage) => ({
            ...passage,
            score: score(normalize(passage.text), terms) * 2 + score(normalize(passage.title), terms),
        }));
        const best = passages.sort((a, b) => b.score - a.score)[0];
        return [{ page, best, rank: score(normalize(page.label), terms) * 5 + (best?.score ?? 0) }];
    }).sort((a, b) => b.rank - a.rank) : [];

    return (
        <SectionPage
            title="Search"
            description="Find projects, posts, publications, and more across the portfolio."
            search={<SearchBar query={query} onQueryChange={setQuery} />}
        >
            <CollapsibleSection title="Search results" className="max-w-3xl py-8" contentClassName="pt-2">
                <p role="status" className="mt-4 text-sm text-ink-muted">
                    {hasQuery ? (index ? `${matches.length} ${matches.length === 1 ? "result" : "results"}` : "Loading portfolio content…") : "Enter a keyword to search."}
                    {hasQuery && missing > 0 && ` · ${missing} ${missing === 1 ? "page was" : "pages were"} unavailable.`}
                </p>
                {matches.length > 0 && (
                    <ul className="mt-2 divide-y divide-rule">
                        {matches.map(({ page, best }) => (
                            <li key={page.href} className="py-4">
                                <Link href={best?.href ?? page.href} className="font-semibold text-ink underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
                                    {best?.title ?? page.label}
                                </Link>
                                {best?.title && best.title !== page.label && <p className="mt-1 text-xs text-ink-muted">{page.label}</p>}
                                {best?.text && <p className="mt-2 line-clamp-2 text-sm leading-6 text-ink">{best.text}</p>}
                            </li>
                        ))}
                    </ul>
                )}
            </CollapsibleSection>
        </SectionPage>
    );
}
