import Link from "next/link";

const links = [
    { href: "/about", label: "About" },
    { href: "/social-media", label: "Social Media" },
];

export function SiteNav() {
    return (
        <nav aria-label="Main navigation" className="flex items-center gap-2 text-sm text-zinc-400 sm:gap-5">
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
