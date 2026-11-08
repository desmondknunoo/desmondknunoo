import type { MetadataRoute } from 'next'
import { siteDescription, siteName } from '@/lib/seo'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: siteName,
        short_name: 'Desmond Nunoo',
        description: siteDescription,
        start_url: '/',
        display: 'standalone',
        background_color: '#faf8f3',
        theme_color: '#faf8f3',
        icons: [
            { src: '/icons/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
            { src: '/icons/android-chrome-256x256.png', sizes: '256x256', type: 'image/png' },
        ],
    }
}
