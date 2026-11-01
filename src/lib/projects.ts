export type PortfolioProject = {
    id?: string
    title: string
    role?: string
    description: string
    tags: string
    image: string
    imageFit?: 'contain' | 'cover'
    links: { label: string; url: string }[]
}

export const portfolioProjects: PortfolioProject[] = [
    {
        "id": "antrak",
        "title": "Antrak Express Delivery Management Software Suite",
        "role": "Contributor",
        "description": "Contributed to Antrak Express’s delivery management software suite.",
        "tags": "SOFTWARE • COLLABORATION",
        "image": "/logos/antrak-express.png",
        "imageFit": "contain",
        "links": []
    },
    {
        "id": "innocode",
        "title": "InnoCode",
        "role": "Software development",
        "description": "Developed cross-platform block-based coding software for programming local microcontrollers.",
        "tags": "SOFTWARE • EDUCATION • MICROCONTROLLERS",
        "image": "/logos/innocode.png",
        "imageFit": "contain",
        "links": []
    },
    {
        "id": "innokit",
        "title": "InnoKit",
        "role": "Contributor",
        "description": "Contributed to InnoKit, a robotics learning kit.",
        "tags": "ROBOTICS • EDUCATION • COLLABORATION",
        "image": "/logos/innokit.png",
        "imageFit": "contain",
        "links": []
    },
    {
        "id": "fluid",
        "title": "Fluid",
        "role": "Software work through Achendo",
        "description": "Brand identity and software for Fluid: an investor platform with a web and mobile app and a staff portal for brokers, and Fluid Finance, a public Ghana Stock Exchange market site with prices, FX and fuel rates, articles, and a forum.",
        "tags": "Branding • Software Development • UI Design",
        "image": "/images/projects/fluid.webp",
        "links": []
    },
    {
        "id": "abakosem-puzzle",
        "title": "Abakosem Puzzle",
        "role": "Software work through Achendo",
        "description": "A Ghana history picture-puzzle game for iOS, Android, web, and desktop, built in Flutter: slide the tiles back into place while timed history questions pop up. Its admin platform, built with React and Supabase, manages stages, questions, live classroom quizzes, and leaderboards without an app update.",
        "tags": "Software Development • UI Design",
        "image": "/images/projects/abakosem-puzzle.webp",
        "links": [
            {
                "label": "Source code",
                "url": "https://github.com/desmondknunoo/abakosem-puzzle"
            }
        ]
    },
    {
        "id": "el-balakk",
        "title": "El-Balakk",
        "role": "Software work through Achendo",
        "description": "Website for El-Balakk, a mining support, civil works, and equipment rental company in Oyarifa, Accra: home, about, services, fleet, and contact pages.",
        "tags": "Website Design • Web Development",
        "image": "/images/projects/el-balakk.webp",
        "links": [
            {
                "label": "Website",
                "url": "https://el-balakk.vercel.app"
            }
        ]
    },
    {
        "id": "friends-of-nicu",
        "title": "Friends of NICU",
        "role": "Software work through Achendo",
        "description": "Website for Friends of NICU Global, a charity supporting premature babies and their families in Ghana: an outreach gallery by hospital, volunteer and emotional-support forms, and donations through Paystack.",
        "tags": "Website Design • Web Development",
        "image": "/images/projects/friends-of-nicu.webp",
        "links": [
            {
                "label": "Website",
                "url": "https://www.friendsofnicuglobal.org"
            }
        ]
    },
    {
        "id": "squeeze",
        "title": "Squeeze",
        "role": "Software work through Achendo",
        "description": "A macOS app for local video compression, with drag-and-drop input and compression presets. Videos are processed on the device without uploads or accounts.",
        "tags": "Software Development • UI Design",
        "image": "/images/projects/squeeze.webp",
        "links": [
            {
                "label": "Source code",
                "url": "https://github.com/desmondknunoo/squeeze"
            }
        ]
    },
    {
        "id": "waaf-agro",
        "title": "WAAF Agro",
        "role": "Software work through Achendo",
        "description": "A rebuild of the website for WAAF Agro, an agro-inputs importer and distributor in Ghana: a product catalogue, six branch pages, news, a photo gallery, and a contact form.",
        "tags": "Website Design • Web Development",
        "image": "/images/projects/waaf-agro.webp",
        "links": []
    },
    {
        "id": "keyring",
        "title": "Keyring",
        "role": "Software work through Achendo",
        "description": "An offline two-factor authentication app for macOS: time-based codes, QR code import, and an AES-256 encrypted vault locked behind Touch ID or a PIN.",
        "tags": "Software Development • UI Design",
        "image": "/images/projects/keyring.webp",
        "links": [
            {
                "label": "Source code",
                "url": "https://github.com/desmondknunoo/keyring"
            }
        ]
    },
    {
        "id": "a-chroma",
        "title": "A-Chroma",
        "role": "Software work through Achendo",
        "description": "Brand and website for A-Chroma, a colour tool website: a palette generator and a visual gradient editor that can also build a gradient from an uploaded image.",
        "tags": "Branding • Website Design • Web Development",
        "image": "/images/projects/a-chroma.webp",
        "links": [
            {
                "label": "Website",
                "url": "https://a-chroma.vercel.app"
            }
        ]
    }
]

export const earlierProjects: PortfolioProject[] = [
    {
        title: 'SmartSale ERP Website - Redesign',
        description: 'Integrated technology for managing your business.',
        tags: 'UI/UX • WEB • PRODUCT',
        image: '/images/sserpImage.jpg',
        links: [
            { label: 'Figma Prototype', url: 'https://www.figma.com/proto/HdGJI0rx0r2xWJodWBqXvC/SmartSale-Website---Redesign' },
            { label: 'Website', url: 'https://smartsaleerp.com' }
        ]
    },
    {
        title: 'Kampuze',
        description: 'Buy and sell music on Kampuze on your smartphone.',
        tags: 'UI/UX • PRODUCT • MOBILE • iOS',
        image: '/images/kampuzeImage.jpg',
        links: [
            { label: 'Figma Prototype', url: 'https://www.figma.com/proto/oiJYt62X4b2nbWeCQdVVat/Kampuze-Music' }
        ]
    },
    {
        title: 'U4nor',
        description: 'Relevant and reliable campus news curated for tertiary students in Ghana.',
        tags: 'UI/UX • PRODUCT • MOBILE • ANDROID',
        image: '/images/u4norImage.jpg',
        links: [
            { label: 'Behance', url: 'https://www.behance.net/gallery/91548529/U4nor-Android-App-UIUX' },
            { label: 'Google Play Store', url: 'https://play.google.com/store/apps/details?id=com.u4nor.android' }
        ]
    }
]