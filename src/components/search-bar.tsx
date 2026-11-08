"use client";

import { Search } from "lucide-react";

type SearchBarProps = {
    query?: string;
    onQueryChange?: (query: string) => void;
};

export function SearchBar({ query, onQueryChange }: SearchBarProps) {
    return (
        <form
            action="/search"
            role="search"
            aria-label="Portfolio search"
            onSubmit={onQueryChange ? (event) => event.preventDefault() : undefined}
            className="flex min-h-12 items-center gap-3 border border-rule bg-paper px-4 text-ink transition-colors focus-within:border-ink"
        >
            <Search aria-hidden="true" className="h-4 w-4 shrink-0 text-ink-muted" strokeWidth={1.75} />
            <input
                type="search"
                name="q"
                aria-label="Search the portfolio"
                placeholder="Search"
                maxLength={200}
                value={query}
                onChange={onQueryChange ? (event) => onQueryChange(event.target.value) : undefined}
                className="min-h-11 min-w-0 flex-1 bg-transparent text-[17px] text-ink outline-none"
            />
            <button
                type="submit"
                className="font-display min-h-11 shrink-0 text-[11px] uppercase tracking-[0.2em] text-ink transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
                Search
            </button>
        </form>
    );
}
