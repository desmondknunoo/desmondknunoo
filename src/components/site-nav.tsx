import Link from "next/link";

const links = [
    { href: "/about", label: "About" },
    { href: "/social-media", label: "Posts" },
    { href: "/publications", label: "Publications" },
    { href: "/featured", label: "Featured" },
    { href: "/trainings", label: "Trainings" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
];

export function SiteNav() {
    return (
        <nav aria-label="Main navigation" className="flex flex-wrap items-center justify-end gap-x-1 text-xs text-zinc-400 sm:gap-x-4 sm:text-sm">
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
    );
}
