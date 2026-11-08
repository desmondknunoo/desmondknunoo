import type { ReactNode } from "react";
import Link from "next/link";
import { SearchBar } from "@/components/search-bar";
import { SiteNav } from "@/components/site-nav";
import { ThemeToggle } from "@/components/theme-toggle";

export function PortfolioHeader({ search = <SearchBar /> }: { search?: ReactNode }) {
    return (
        <header className="bg-paper">
            <div className="mx-auto max-w-7xl px-6 pb-6 pt-7 md:px-12 md:pt-9">
                <div className="flex items-start justify-between gap-6 md:items-center">
                    <Link
                        href="/"
                        className="font-display block max-w-[12rem] text-[1.45rem] uppercase leading-[1.3] tracking-[0.1em] text-ink transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-paper md:max-w-none md:text-[1.9rem] md:leading-none"
                    >
                        Desmond Kwame Nunoo
                    </Link>
                    <div className="flex items-center gap-1 md:gap-3">
                        <SiteNav />
                        <ThemeToggle />
                    </div>
                </div>
                {search && <div className="mt-7 md:mt-9">{search}</div>}
            </div>
        </header>
    );
}
