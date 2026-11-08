import type { MetadataRoute } from 'next'
import { absoluteUrl } from '@/lib/seo'
import { isPlaceholderWork, workItems } from '@/lib/work-seo'

const pages: { path: string; priority: number; changeFrequency: 'weekly' | 'monthly' | 'yearly' }[] = [
    { path: '/', priority: 1, changeFrequency: 'weekly' },
    { path: '/projects', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/about', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/trainings', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/featured', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/publications', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/social-media', priority: 0.6, changeFrequency: 'weekly' },
    { path: '/contact', priority: 0.6, changeFrequency: 'yearly' },
]

export default function sitemap(): MetadataRoute.Sitemap {
    const lastModified = new Date()
    return [
        ...pages.map(({ path, priority, changeFrequency }) => ({ url: absoluteUrl(path), lastModified, changeFrequency, priority })),
        ...workItems
            .filter((item) => !isPlaceholderWork(item))
            .map((item) => ({
                url: absoluteUrl(`/work/${item.slug}`),
                lastModified,
                changeFrequency: 'monthly' as const,
                priority: 0.7,
                images: [absoluteUrl(item.thumbnail)],
            })),
    ]
}
