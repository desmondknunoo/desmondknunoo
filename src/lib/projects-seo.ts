import { absoluteUrl, siteUrl } from '@/lib/seo'
import { portfolioProjects } from '@/lib/projects'

/** The projects page as an ordered list of creative works by the site's owner. */
export function projectsJsonLd() {
    return {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        '@id': absoluteUrl('/projects#page'),
        url: absoluteUrl('/projects'),
        name: 'Projects by Desmond Kwame Nunoo',
        author: { '@id': `${siteUrl}/#person` },
        mainEntity: {
            '@type': 'ItemList',
            numberOfItems: portfolioProjects.length,
            itemListElement: portfolioProjects.map((project, index) => ({
                '@type': 'ListItem',
                position: index + 1,
                item: {
                    '@type': 'CreativeWork',
                    name: project.title,
                    description: project.description,
                    image: absoluteUrl(project.image),
                    url: absoluteUrl(`/projects${project.id ? `#${project.id}` : ''}`),
                    keywords: project.tags.split('•').map((tag) => tag.trim()).filter(Boolean).join(', '),
                    creator: { '@id': `${siteUrl}/#person` },
                    ...(project.links[0] && { sameAs: project.links.map((link) => link.url) }),
                },
            })),
        },
    }
}
