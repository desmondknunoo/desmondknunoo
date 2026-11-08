import Link from 'next/link'

export function ContactSection() {
    return (
        <section aria-labelledby="contact-heading" className="mx-auto max-w-7xl px-6 pb-20 pt-16 md:px-12 md:pb-28 md:pt-24">
            <h2 id="contact-heading" className="font-display border-t border-rule pt-5 text-[12px] uppercase tracking-[0.22em] text-ink">
                Contact
            </h2>
            <p className="mt-6 max-w-2xl text-[1.35rem] leading-[1.5] text-ink md:text-[1.6rem]">
                Let&apos;s work together. Send me an email at{' '}
                <Link
                    href="mailto:desmondknunoo@gmail.com"
                    className="underline underline-offset-[6px] transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                    desmondknunoo@gmail.com
                </Link>
                .
            </p>
        </section>
    )
}
