import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { SectionPage } from '@/components/section-page'

export const metadata: Metadata = {
    title: 'Contact | Desmond Kwame Nunoo',
    description: 'Contact Desmond Kwame Nunoo by email or through his public profiles.',
}

const contactLinks = [
    { label: 'Email', value: 'desmondknunoo@gmail.com', href: 'mailto:desmondknunoo@gmail.com' },
    { label: 'LinkedIn', value: 'linkedin.com/in/desmondknunoo', href: 'https://linkedin.com/in/desmondknunoo' },
    { label: 'X', value: 'x.com/desmondknunoo', href: 'https://x.com/desmondknunoo' },
    { label: 'GitHub', value: 'github.com/desmondknunoo', href: 'https://github.com/desmondknunoo' },
]

export default function ContactPage() {
    return (
        <SectionPage
            title="Contact"
            description="Reach me by email or through my public profiles. I am based in Accra, Ghana."
            collapsible={false}
        >
            <dl className="divide-y divide-zinc-800">
                {contactLinks.map((contact) => (
                    <div
                        key={contact.label}
                        className="grid gap-2 py-6 sm:grid-cols-[12rem_minmax(0,1fr)] sm:items-center"
                    >
                        <dt className="text-sm text-zinc-400">{contact.label}</dt>
                        <dd>
                            <Link
                                href={contact.href}
                                target={contact.label === 'Email' ? undefined : '_blank'}
                                rel={contact.label === 'Email' ? undefined : 'noopener noreferrer'}
                                className="inline-flex min-h-11 items-center gap-2 text-lg font-medium text-zinc-100 underline decoration-zinc-600 underline-offset-4 hover:decoration-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-300"
                            >
                                {contact.value}<ArrowUpRight className="h-4 w-4" />
                            </Link>
                        </dd>
                    </div>
                ))}
                <div className="grid gap-2 py-6 sm:grid-cols-[12rem_minmax(0,1fr)] sm:items-center">
                    <dt className="text-sm text-zinc-400">Location</dt>
                    <dd className="text-lg text-zinc-100">Accra, Ghana</dd>
                </div>
            </dl>
        </SectionPage>
    )
}