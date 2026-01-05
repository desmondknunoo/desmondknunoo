import Link from 'next/link'

export function ContactSection() {
    return (
        <section
            className="relative bg-cover bg-center bg-fixed py-16 px-6 lg:px-12"
            style={{ backgroundImage: 'url(/images/header.jpg)' }}
        >
            <div className="absolute inset-0 bg-zinc-900/80" />
            <div className="relative mx-auto max-w-7xl">
                <h2 className="text-4xl font-bold text-zinc-200">Contact</h2>
                <p className="mt-4 text-xl font-light text-zinc-400">
                    Let&apos;s work together. Send me an email{' '}
                    <Link
                        href="mailto:desmondknunoo@gmail.com"
                        target="_blank"
                        className="font-medium text-zinc-200 hover:underline"
                    >
                        here
                    </Link>
                    .
                </p>
            </div>
        </section>
    )
}
