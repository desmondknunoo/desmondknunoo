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
            className="relative z-10 mt-2 flex min-h-14 items-center gap-3 rounded-lg border border-zinc-600 bg-zinc-900 p-2 pl-4 text-zinc-100 focus-within:border-zinc-300 sm:min-h-16"
        >
            <Search aria-hidden="true" className="h-5 w-5 shrink-0 text-zinc-400" />
            <input
                type="search"
                name="q"
                aria-label="Search the portfolio"
                placeholder="Search the portfolio…"
                maxLength={200}
                value={query}
                onChange={onQueryChange ? (event) => onQueryChange(event.target.value) : undefined}
                className="min-h-11 min-w-0 flex-1 bg-transparent text-base text-zinc-100 outline-none placeholder:text-zinc-400 sm:text-lg"
            />
            <button
                type="submit"
                className="min-h-11 shrink-0 rounded-md bg-zinc-100 px-4 text-sm font-semibold text-zinc-950 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900 sm:px-6"
            >
                Search
            </button>
        </form>
    );
}
