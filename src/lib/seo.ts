import type { Metadata } from 'next'

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://desmondknunoo.vercel.app').replace(/\/$/, '')

export const siteName = 'Desmond Kwame Nunoo'

export const siteDescription =
    'Desmond Kwame Nunoo is a software engineer, designer and STEM educator in Accra, Ghana. See his software projects, robotics and AI trainings, publications and design work.'

export const siteKeywords = [
    'Desmond Kwame Nunoo',
    'Desmond Nunoo',
    'software engineer Ghana',
    'STEM educator Ghana',
    'robotics education Ghana',
    'AI and IoT training',
    'React developer Accra',
    'Flutter developer Ghana',
    'UI/UX designer Ghana',
    'Emerging Technologies Centre',
    'Lancaster University Ghana',
    'Innova Labs Ghana',
    'InnoCode',
]

export const socialProfiles = [
    'https://linkedin.com/in/desmondknunoo',
    'https://x.com/desmondknunoo',
    'https://github.com/desmondknunoo',
]

export const twitterHandle = '@desmondknunoo'

/** The generated card from src/app/opengraph-image.tsx, used when a page has no image of its own. */
export const defaultShareImage = {
    url: '/opengraph-image',
    alt: 'Desmond Kwame Nunoo: software engineer, designer and STEM educator in Accra, Ghana',
}

export function absoluteUrl(path = '/') {
    return `${siteUrl}${path.startsWith('/') ? path : `/${path}`}`
}

type PageMetadataInput = {
    title: string
    description: string
    path: string
    image?: { url: string; alt: string }
    type?: 'website' | 'article' | 'profile'
    noIndex?: boolean
}

/** Title, description, canonical URL and social cards for one page. */
export function pageMetadata({ title, description, path, image, type = 'website', noIndex }: PageMetadataInput): Metadata {
    const fullTitle = title === siteName ? title : `${title} | ${siteName}`
    const images = [image ?? defaultShareImage]
    return {
        title: { absolute: fullTitle },
        description,
        alternates: { canonical: path },
        openGraph: {
            title: fullTitle,
            description,
            url: path,
            siteName,
            locale: 'en_GB',
            type,
            images,
        },
        twitter: {
            card: 'summary_large_image',
            title: fullTitle,
            description,
            creator: twitterHandle,
            images: images.map((item) => item.url),
        },
        ...(noIndex && { robots: { index: false, follow: true } }),
    }
}

export const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${siteUrl}/#person`,
    name: siteName,
    alternateName: 'Desmond Nunoo',
    url: siteUrl,
    image: absoluteUrl('/opengraph-image'),
    description: siteDescription,
    jobTitle: 'Senior Software Engineer',
    worksFor: [
        { '@type': 'Organization', name: 'Innova Labs Ghana' },
        { '@type': 'CollegeOrUniversity', name: 'Lancaster University Ghana' },
    ],
    alumniOf: { '@type': 'CollegeOrUniversity', name: 'Kwame Nkrumah University of Science and Technology' },
    address: { '@type': 'PostalAddress', addressLocality: 'Accra', addressCountry: 'GH' },
    email: 'mailto:desmondknunoo@gmail.com',
    knowsAbout: [
        'Software engineering',
        'React',
        'Flutter',
        'STEM education',
        'Robotics',
        'Artificial intelligence',
        'Internet of Things',
        '3D design and printing',
        'UI/UX design',
    ],
    sameAs: socialProfiles,
}

export const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteUrl}/#website`,
    name: siteName,
    url: siteUrl,
    inLanguage: 'en',
    author: { '@id': `${siteUrl}/#person` },
    potentialAction: {
        '@type': 'SearchAction',
        target: { '@type': 'EntryPoint', urlTemplate: `${siteUrl}/search?q={search_term_string}` },
        'query-input': 'required name=search_term_string',
    },
}

/** Serialise JSON-LD for a <script> tag without letting "</script>" break out. */
export function jsonLd(data: unknown) {
    return JSON.stringify(data).replace(/</g, '\\u003c')
}
