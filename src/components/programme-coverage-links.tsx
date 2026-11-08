import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import type { ProgrammeArticle } from '@/lib/programme-coverage'

export function ProgrammeCoverageLinks({ articles }: { articles: ProgrammeArticle[] }) {
    return (
        <ul aria-label="Programme coverage" className="mt-4 max-w-3xl space-y-4">
            {articles.map((article) => (
                <li key={article.href}>
                    <Link
                        href={article.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-11 items-center gap-2 text-sm leading-6 text-ink underline decoration-ink/40 underline-offset-4 hover:decoration-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    >
                        {article.title}
                        <ArrowUpRight aria-hidden="true" className="h-4 w-4 shrink-0" />
                    </Link>
                    <p className="text-sm leading-6 text-ink-muted">
                        {article.publisher}
                        {article.date && (
                            <> · <time dateTime={article.dateTime}>{article.date}</time></>
                        )}
                    </p>
                </li>
            ))}
        </ul>
    )
}
