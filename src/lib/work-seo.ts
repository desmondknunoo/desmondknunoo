import type { Metadata } from 'next'
import { absoluteUrl, pageMetadata, siteUrl } from '@/lib/seo'
import { workItems, type WorkItem } from '@/lib/work'

export { workItems }

/** Work pages that only say "Content coming soon." stay out of search results until they have content. */
export function isPlaceholderWork(item: WorkItem) {
    return item.body.length === 0 && /coming soon/i.test(item.summary)
}

function workDescription(item: WorkItem) {
    if (isPlaceholderWork(item)) return `${item.title}: ${item.category} work by Desmond Kwame Nunoo.`
    const text = [item.summary, ...item.body].join(' ').replace(/\s+/g, ' ').trim()
    return text.length > 160 ? `${text.slice(0, 157).replace(/\s+\S*$/, '')}…` : text
}

export function workMetadata(item: WorkItem): Metadata {
    return pageMetadata({
        title: item.title,
        description: workDescription(item),
        path: `/work/${item.slug}`,
        image: { url: item.thumbnail, alt: item.title },
        type: 'article',
        noIndex: isPlaceholderWork(item),
    })
}

export function workJsonLd(item: WorkItem) {
    return {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'CreativeWork',
                '@id': absoluteUrl(`/work/${item.slug}#work`),
                name: item.title,
                headline: item.title,
                description: workDescription(item),
                url: absoluteUrl(`/work/${item.slug}`),
                image: absoluteUrl(item.thumbnail),
                genre: item.category,
                ...(item.date && { dateCreated: item.date }),
                creator: { '@id': `${siteUrl}/#person` },
                author: { '@id': `${siteUrl}/#person` },
            },
            {
                '@type': 'BreadcrumbList',
                itemListElement: [
                    { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
                    { '@type': 'ListItem', position: 2, name: item.title, item: absoluteUrl(`/work/${item.slug}`) },
                ],
            },
        ],
    }
}
