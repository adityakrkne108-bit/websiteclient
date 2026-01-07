import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'PowerLink Solutions',
        short_name: 'PowerLink',
        description: 'Bihar\'s #1 Solar Installation Company',
        start_url: '/',
        display: 'standalone',
        background_color: '#0B1120',
        theme_color: '#0056D2',
        icons: [
            {
                src: '/assets/favicon.svg',
                sizes: 'any',
                type: 'image/svg+xml',
            },
        ],
    }
}
