"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { siteNavLinks } from "@/lib/nav-links";

export function SiteNav() {
    const pathname = usePathname();
    const isCurrent = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

    return (
        <>
            <nav aria-label="Main navigation" className="hidden items-center gap-x-5 md:flex lg:gap-x-6">
                {siteNavLinks.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        aria-current={isCurrent(link.href) ? "page" : undefined}
                        className="inline-flex min-h-11 items-center text-[17px] text-ink underline-offset-[6px] transition-colors hover:underline aria-[current=page]:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    >
                        {link.label}
                    </Link>
                ))}
            </nav>

            <details className="group relative md:hidden">
                <summary
                    aria-label="Menu"
                    className="flex h-11 w-11 cursor-pointer list-none items-center justify-center text-ink transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent [&::-webkit-details-marker]:hidden"
                >
                    <Menu aria-hidden="true" className="h-6 w-6 group-open:hidden" strokeWidth={1.5} />
                    <X aria-hidden="true" className="hidden h-6 w-6 group-open:block" strokeWidth={1.5} />
                </summary>
                <nav
                    aria-label="Mobile navigation"
                    className="absolute right-0 top-full z-30 mt-3 w-[min(20rem,calc(100vw-3rem))] border border-rule bg-paper py-2"
                >
                    {siteNavLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            aria-current={isCurrent(link.href) ? "page" : undefined}
                            className="flex min-h-12 items-center px-5 text-[17px] text-ink transition-colors hover:bg-paper-raised aria-[current=page]:underline aria-[current=page]:underline-offset-[6px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>
            </details>
        </>
    );
}
