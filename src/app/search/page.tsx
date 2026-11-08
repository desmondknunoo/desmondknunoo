import type { Metadata } from "next";
import { portfolioNavLinks } from "@/components/site-nav";
import { workItems } from "@/lib/work";
import { PortfolioSearch } from "./portfolio-search";
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
    title: 'Search',
    description: "Search projects, posts, trainings, publications and other pages on Desmond Kwame Nunoo's portfolio.",
    path: '/search', noIndex: true,
})

export default async function SearchPage({ searchParams }: {
    searchParams: Promise<{ q?: string | string[] }>;
}) {
    const { q } = await searchParams;
    const query = (typeof q === "string" ? q : q?.[0] ?? "").slice(0, 200);
    const pages = [
        { href: "/", label: "Home" },
        ...portfolioNavLinks,
        ...workItems.map((item) => ({ href: `/work/${item.slug}`, label: item.title })),
    ];

    return <PortfolioSearch key={query} pages={pages} initialQuery={query} />;
}
