import Link from 'next/link'

const socialLinks = [
    { href: 'https://linkedin.com/in/desmondknunoo', label: 'LinkedIn' },
    { href: 'https://x.com/desmondknunoo', label: 'X' },
    { href: 'https://github.com/desmondknunoo', label: 'GitHub' },
]

export function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="border-t border-rule">
            <div className="mx-auto max-w-7xl px-6 py-12 md:px-12 md:py-16">
                <p aria-hidden="true" className="font-display text-center text-xl uppercase tracking-[0.3em] text-ink md:text-3xl">
                    Desmond Kwame Nunoo
                </p>
                <div className="mt-10 flex flex-col items-center gap-6 md:flex-row md:justify-between">
                    <p className="text-sm text-ink-muted">© {currentYear} Desmond Kwame Nunoo</p>
                    <ul className="flex gap-6">
                        {socialLinks.map((social) => (
                            <li key={social.href}>
                                <Link
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex min-h-11 items-center text-sm text-ink underline-offset-[5px] transition-colors hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                                >
                                    {social.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    )
}
