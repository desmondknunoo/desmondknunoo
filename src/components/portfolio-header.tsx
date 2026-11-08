import type { ReactNode } from "react";
import Link from "next/link";
import { SearchBar } from "@/components/search-bar";
import { SiteNav } from "@/components/site-nav";

export function PortfolioHeader({ search = <SearchBar /> }: { search?: ReactNode }) {
    return (
        <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950">
            <div className="mx-auto max-w-7xl px-6 pb-3 pt-2 md:px-12">
                <div className="flex items-center justify-between gap-5">
                    <Link href="/" aria-label="Portfolio home" className="shrink-0 text-sm font-semibold tracking-wide text-zinc-200">
                        DKN
                    </Link>
                    <SiteNav />
                </div>
                {search}
            </div>
        </header>
    );
}
