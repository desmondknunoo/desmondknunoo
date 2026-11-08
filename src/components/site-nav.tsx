import Link from "next/link";
import { Menu, X } from "lucide-react";

export const portfolioNavLinks = [
    { href: "/about", label: "About" },
    { href: "/social-media", label: "Posts" },
    { href: "/publications", label: "Publications" },
    { href: "/featured", label: "Featured" },
    { href: "/trainings", label: "Trainings" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
];

const links = [...portfolioNavLinks, { href: "/search", label: "Search" }];

export function SiteNav() {
    return (
        <>
            <nav
                aria-label="Main navigation"
                className="hidden items-center gap-x-1 text-sm lg:gap-x-4 text-zinc-400 md:flex"
            >
                {links.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className="inline-flex min-h-11 items-center px-2 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-300"
                    >
                        {link.label}
                    </Link>
                ))}
            </nav>

            <details className="group relative md:hidden">
                <summary
                    aria-label="Menu"
                    className="flex min-h-11 min-w-11 cursor-pointer list-none items-center justify-center text-zinc-300 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-300 [&::-webkit-details-marker]:hidden"
                >
                    <Menu aria-hidden="true" className="h-6 w-6 group-open:hidden" />
                    <X aria-hidden="true" className="hidden h-6 w-6 group-open:block" />
                </summary>
                <nav
                    aria-label="Mobile navigation"
                    className="absolute right-0 top-full z-30 mt-2 w-56 border border-zinc-800 bg-zinc-950 py-2 shadow-xl"
                >
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="flex min-h-11 items-center px-4 text-base text-zinc-300 transition-colors hover:bg-zinc-900 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-zinc-300"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>
            </details>
        </>
    );
}
