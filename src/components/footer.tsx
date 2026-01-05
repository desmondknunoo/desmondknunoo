import Link from 'next/link'
import { Linkedin, Twitter, Github } from 'lucide-react'

const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com/in/desmondknunoo', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://x.com/desmondknunoo', label: 'Twitter' },
    { icon: Github, href: 'https://github.com/desmondknunoo', label: 'GitHub' },
]

export function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-zinc-950 px-6 py-12 lg:px-12">
            <div className="mx-auto max-w-7xl">
                <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                    <p className="text-zinc-500">
                        © {currentYear} Desmond Kwame Nunoo
                    </p>
                    <div className="flex gap-2">
                        {socialLinks.map((social, index) => (
                            <Link
                                key={index}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.label}
                                className="flex h-11 w-11 items-center justify-center rounded-full text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-zinc-200"
                            >
                                <social.icon className="h-5 w-5" />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}
