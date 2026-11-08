export type PortfolioProject = {
    id?: string
    title: string
    role?: string
    date: string | null
    description: string
    tags: string
    image: string
    imageFit?: 'contain' | 'cover'
    links: { label: string; url: string }[]
}

export const portfolioProjects: PortfolioProject[] = [
    {
        "id": "mining-reports",
        "title": "Mining Reports",
        "date": "2026",
        "role": "Software development",
        "description": "Daily production, fleet and safety reporting for open-pit mining contracts. Engineers record each shift on a tablet at the pit, and the app works out every figure, rolls days up into weeks, months, quarters and years, and sends each report for manager approval. It works offline and backs up when there is signal.",
        "tags": "Software Development • UI Design • Data",
        "image": "/images/projects/mining-reports-mockup.webp",
        "links": []
    },
    {
        "id": "innocode",
        "title": "InnoCode",
        "date": "2026",
        "role": "Software development",
        "description": "Developed cross-platform block-based coding software for programming local microcontrollers.",
        "tags": "SOFTWARE • EDUCATION • MICROCONTROLLERS",
        "image": "/logos/innocode.png",
        "imageFit": "contain",
        "links": []
    },
    {
        "id": "innoml",
        "title": "InnoML",
        "date": "2026",
        "role": "Software development",
        "description": "Trains image, pose and sound models in the browser so students can teach a computer to recognise things and use the result in their InnoCode projects. An advanced section builds models from text and numbers and explains each result. Everything runs on the student's laptop with TensorFlow.js.",
        "tags": "Software Development • Machine Learning • Education",
        "image": "/images/projects/innoml-mockup.webp",
        "links": []
    },
    {
        "id": "innocode-simulator",
        "title": "InnoCode Simulator",
        "date": "2026",
        "role": "Software development",
        "description": "Runs the programs students build in InnoCode on a simulated Arduino Uno, with InnoKit's motors, sensors, servo and Bluetooth module and a serial monitor, so a lesson works without the hardware.",
        "tags": "Software Development • Education • Microcontrollers",
        "image": "/images/projects/innocode-simulator-mockup.webp",
        "links": []
    },
    {
        "id": "innocontrol",
        "title": "InnoControl",
        "date": "2026",
        "role": "Software development",
        "description": "A Flutter app for Android and iOS that controls Arduino, ESP32 and Raspberry Pi Pico projects over Bluetooth: switches, an RGB colour wheel, a gamepad, a car controller, a keypad, a terminal, voice commands and the phone's sensors. It is built for students who program their boards with block code.",
        "tags": "Mobile • Robotics • Education",
        "image": "/images/projects/innocontrol-mockup.webp",
        "links": []
    },
    {
        "id": "innokit",
        "title": "InnoKit",
        "date": "2025",
        "role": "Contributor",
        "description": "Contributed to InnoKit, a robotics learning kit.",
        "tags": "ROBOTICS • EDUCATION • COLLABORATION",
        "image": "/logos/innokit.png",
        "imageFit": "contain",
        "links": []
    },
    {
        "id": "abakosem-puzzle",
        "title": "Abakosem Puzzle",
        "date": "2022, rebuilt in 2026",
        "role": "Own project",
        "description": "My Ghana history picture-puzzle game, rebuilt in Flutter from the original Android app for iOS, Android, web, and desktop: slide the tiles back into place while timed history questions pop up. Its admin platform, built with React and Supabase, manages stages, questions, live classroom quizzes, and leaderboards without an app update.",
        "tags": "Software Development • UI Design",
        "image": "/images/projects/abakosem-puzzle.webp",
        "links": []
    },
    {
        "id": "u4nor",
        "title": "U4nor",
        "date": "2019–2021",
        "role": "UI/UX design and Android development",
        "description": "An Android app with campus news curated for tertiary students in Ghana: news, trending stories, rumours, events, and entertainment.",
        "tags": "UI/UX Design • Android",
        "image": "/images/u4norImage.jpg",
        "links": [
            {
                "label": "Behance",
                "url": "https://www.behance.net/gallery/91548529/U4nor-Android-App-UIUX"
            },
            {
                "label": "Google Play Store",
                "url": "https://play.google.com/store/apps/details?id=com.u4nor.android"
            }
        ]
    },
    {
        "id": "el-balakk",
        "title": "El-Balakk",
        "date": "2026",
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
        "date": "2026",
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
        "date": "2026",
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
        "date": "2026",
        "role": "Software work through Achendo",
        "description": "A rebuild of the website for WAAF Agro, an agro-inputs importer and distributor in Ghana: a product catalogue, six branch pages, news, a photo gallery, and a contact form.",
        "tags": "Website Design • Web Development",
        "image": "/images/projects/waaf-agro.webp",
        "links": []
    },
    {
        "id": "keyring",
        "title": "Keyring",
        "date": "2026",
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
        "date": "2026",
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
    },
    {
        "id": "antrak",
        "title": "Antrak Express Delivery Management Software Suite",
        "date": "2026",
        "role": "Contributor",
        "description": "Contributed to Antrak Express’s delivery management suite, which includes the customer-facing website and portal, an admin dashboard, a mobile driver app, and a web app for the user guide.",
        "tags": "Software Development • Web Development • Mobile",
        "image": "/images/projects/antrak-express-mockup.webp",
        "links": []
    },
    {
        "id": "zomo-delivery-marketplace",
        "title": "Zomo Delivery Marketplace",
        "date": "2026",
        "role": "Software development",
        "description": "A courier marketplace in Ghana: customers compare local couriers, see the price before booking, and track parcels to the door, with no app or account needed. It has a React customer portal and admin dashboard, a Flutter driver app for Android and iOS, and a Firebase backend.",
        "tags": "Software Development • Web Development • Mobile",
        "image": "/images/projects/zomo-delivery-marketplace-mockup.webp",
        "links": []
    }
]

export const earlierProjects: PortfolioProject[] = [
    {
        title: 'SmartSale ERP Website - Redesign',
        date: '2022–2023',
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
        date: null,
        description: 'Buy and sell music on Kampuze on your smartphone.',
        tags: 'UI/UX • PRODUCT • MOBILE • iOS',
        image: '/images/kampuzeImage.jpg',
        links: [
            { label: 'Figma Prototype', url: 'https://www.figma.com/proto/oiJYt62X4b2nbWeCQdVVat/Kampuze-Music' }
        ]
    },
    {
        title: 'U4nor',
        date: '2019–2021',
        description: 'Relevant and reliable campus news curated for tertiary students in Ghana.',
        tags: 'UI/UX • PRODUCT • MOBILE • ANDROID',
        image: '/images/u4norImage.jpg',
        links: [
            { label: 'Behance', url: 'https://www.behance.net/gallery/91548529/U4nor-Android-App-UIUX' },
            { label: 'Google Play Store', url: 'https://play.google.com/store/apps/details?id=com.u4nor.android' }
        ]
    }
]