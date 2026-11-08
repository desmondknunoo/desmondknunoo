type WorkImage = { src: string; alt: string; fit?: "contain" };

export type WorkItem = {
    slug: string;
    title: string;
    category: string;
    date: string | null;
    thumbnail: string;
    summary: string;
    body: string[];
    images?: WorkImage[];
    imageGalleryTitle?: string;
    eventDesignImages?: WorkImage[];
    eventDesignMockups?: WorkImage[];
    daytimeMockups?: WorkImage[];
    eventDesignTitle?: string;
    instagramReel?: string;
    externalLinks?: { label: string; url: string }[];
};

const mtnEventDesignImages: WorkImage[] = [
    { src: "/images/projects/mtn-stands-in-worship/venue-render.webp", alt: "3D overview of the MTN Stands in Worship venue setup", fit: "contain" },
    { src: "/images/projects/mtn-stands-in-worship/photo-booth-render.webp", alt: "3D render of the MTN Stands in Worship photo booths", fit: "contain" },
    { src: "/images/projects/mtn-stands-in-worship/lounge-render.webp", alt: "3D render of the backstage lounge and buffet", fit: "contain" },
    { src: "/images/projects/mtn-stands-in-worship/backdrop-render.webp", alt: "3D render of the branded backdrop and event signage", fit: "contain" },
    { src: "/images/projects/mtn-stands-in-worship/vip-parking.webp", alt: "VIP parking sign displayed on a wooden easel", fit: "contain" },
    { src: "/images/projects/mtn-stands-in-worship/event-credentials.webp", alt: "MTN Stands in Worship media and crew credentials", fit: "contain" },
    { src: "/images/projects/mtn-stands-in-worship/vip-car-pass.webp", alt: "Yellow and black VIP car pass", fit: "contain" },
    { src: "/images/projects/mtn-stands-in-worship/event-branding.webp", alt: "MTN Stands in Worship repeating backdrop artwork", fit: "contain" },
];

const afconScenes = [
    [1, "Overhead view of the full AFCON fan venue"],
    [11, "View across the seating from behind the stage"],
    [2, "Main stage, screen, and audience seating"],
    [3, "Production station beside the stage"],
    [10, "Yellow event entry arch"],
    [6, "Branded tents behind the seating"],
    [4, "Mini football pitch and activity tent"],
    [5, "Two food trucks along the venue boundary"],
    [7, "Sponsor display with branded seating"],
    [8, "MTN AFCON display and fan area"],
    [9, "Entry desks and queue barriers"],
    [0, "Artwork displays at the venue entrance"],
    [13, "Outdoor screen and lounge seating"],
    [14, "Lounge and covered seating area"],
    [12, "Ambulance and event support area"],
] as const;

function afconImage([scene, title]: typeof afconScenes[number], variant = ""): WorkImage {
    return {
        src: `/images/projects/mtn-afcon/scene-${scene}${variant}.webp`,
        alt: title,
        fit: "contain",
    };
}

export const workItems: WorkItem[] = [
    {
        slug: "emerging-technologies-centre",
        date: "2025",
        title: "Emerging Technologies Centre",
        category: "STEM Education",
        thumbnail: "/images/stories/etc-1.webp",
        summary: "Content coming soon.",
        body: [],
    },
    {
        slug: "etc-weekend-program",
        date: "2025–2026",
        title: "ETC Weekend Program",
        category: "STEM Education",
        thumbnail: "/images/stories/weekend-robotics-teaching.webp",
        summary: "Content coming soon.",
        body: [],
    },
    {
        slug: "emerging-technologies-bootcamp",
        date: "2026",
        title: "Emerging Technologies Bootcamp",
        category: "STEM Education",
        thumbnail: "/images/stories/pictures-4.webp",
        summary: "Content coming soon.",
        body: [],
    },
    {
        slug: "ghana-robotics-competition",
        date: "2024–2025",
        title: "Ghana Robotics Competition",
        category: "Robotics",
        thumbnail: "/images/stories/etc-robot-demonstration.webp",
        summary: "Content coming soon.",
        body: [],
    },
    {
        slug: "teens-in-ai",
        date: "Feb 2024 – Jan 2026",
        title: "Teens In AI Mentorship",
        category: "Mentorship",
        thumbnail: "/images/stories/problem_pitch.webp",
        summary: "Content coming soon.",
        body: [],
    },
    {
        slug: "infinity-stem",
        date: "Nov 2025 – Present",
        title: "Infinity STEM Facilitator Training",
        category: "STEM Education",
        thumbnail: "/images/stories/pictures-1.webp",
        summary: "Content coming soon.",
        body: [],
    },
    {
        slug: "juste-foundation",
        date: "Nov 2025 – Mar 2026",
        title: "Sensel School STEM Program",
        category: "STEM Education",
        thumbnail: "/images/stories/pictures-2.webp",
        summary: "Content coming soon.",
        body: [],
    },
    {
        slug: "stemr-tech-labs",
        date: "Aug 2022 – Present",
        title: "Saturday Robotics Club",
        category: "Robotics",
        thumbnail: "/images/stories/weekend-robotics-explanation.webp",
        summary: "Content coming soon.",
        body: [],
    },
    {
        slug: "generative-ai-training",
        date: null,
        title: "Generative AI Training",
        category: "AI",
        thumbnail: "/images/stories/pictures-3.webp",
        summary: "Content coming soon.",
        body: [],
    },
    {
        slug: "robotics-competitions",
        date: null,
        title: "Robotics Competitions I Run",
        category: "Robotics",
        thumbnail: "/images/stories/galaxy-judges.webp",
        summary: "Content coming soon.",
        body: [],
    },
    {
        slug: "lab-engineering",
        date: null,
        title: "Robotics Lab Engineering",
        category: "Infrastructure",
        thumbnail: "/images/stories/etc-equipment-demonstration.webp",
        summary: "Content coming soon.",
        body: [],
    },
    {
        slug: "ai-iot-capstones",
        date: null,
        title: "AI & IoT Capstone Supervision",
        category: "AI",
        thumbnail: "/images/stories/pictures-5.webp",
        summary: "Content coming soon.",
        body: [],
    },
    {
        slug: "3d-design",
        date: null,
        title: "3D Product & Event Visualization",
        category: "Design",
        thumbnail: "/images/ranxbrandImage.jpg",
        summary: "Content coming soon.",
        body: [],
    },
    {
        slug: "achendo",
        date: "Jun 2024 – Present",
        title: "Achendo — Brand & Motion",
        category: "Design",
        thumbnail: "/images/logofolioImage.jpg",
        summary: "Content coming soon.",
        body: [],
    },
    {
        slug: "digital-products",
        date: null,
        title: "Digital Products & UI/UX",
        category: "Product",
        thumbnail: "/images/sserpImage.jpg",
        summary: "Content coming soon.",
        body: [],
    },
    {
        slug: "closeup-covid-19-campaign",
        title: "Closeup COVID-19 Social Media Campaign",
        date: "2021",
        category: "Graphic Design · Advertising · Animation",
        thumbnail: "/images/projects/closeup/01.webp",
        summary: "Social media artwork and animation for Closeup’s COVID-19 campaign, created with Photoshop and After Effects.",
        body: ["Published on Behance on 12 July 2022."],
        images: ["01", "02", "03", "04", "05", "06"].map((file, index) => ({
            src: `/images/projects/closeup/${file}.webp`,
            alt: file === "02" ? "Closeup COVID-19 campaign animation" : `Closeup COVID-19 campaign artwork ${index + 1}`,
            fit: "contain",
        })),
        externalLinks: [{
            label: "View campaign on Behance",
            url: "https://www.behance.net/gallery/148023581/Closeup-COVID-19-Social-Media-Campaign",
        }],
    },
    {
        slug: "mtn-stands-in-worship",
        title: "MTN Stands in Worship",
        date: "2023",
        category: "3D Event Design · Event Promotion · Motion Graphics",
        thumbnail: "/images/projects/mtn-stands-in-worship/venue-render.webp",
        summary: "3D venue renders, promotional artwork, and a motion graphics reel for the 2023 MTN Stands in Worship event.",
        body: [],
        eventDesignImages: mtnEventDesignImages,
        eventDesignMockups: mtnEventDesignImages.map((image) => ({
            ...image,
            src: image.src.replace(".webp", "-mockup.webp"),
            alt: `AI-assisted mockup: ${image.alt}`,
        })),
        images: [
            { src: "/images/projects/mtn-stands-in-worship/countdown-seven.webp", alt: "Seven days to go with Nshroma Music", fit: "contain" },
            { src: "/images/projects/mtn-stands-in-worship/countdown-four.webp", alt: "Four days to go with Ps Edwin Dadson", fit: "contain" },
            { src: "/images/projects/mtn-stands-in-worship/countdown-three.webp", alt: "Three days to go with MOG Music", fit: "contain" },
            { src: "/images/projects/mtn-stands-in-worship/countdown-two.webp", alt: "Two days to go with Nacee", fit: "contain" },
            { src: "/images/projects/mtn-stands-in-worship/countdown-tomorrow.webp", alt: "MTN Stands in Worship is tomorrow", fit: "contain" },
        ],
        instagramReel: "https://www.instagram.com/reel/CzYuX72MbXK/",
        externalLinks: [
            { label: "View MTN AFCON", url: "/work/mtn-afcon" },
            { label: "View MTN Outdoor Activations", url: "/work/mtn-outdoor-activations" },
        ],
    },
    {
        slug: "mtn-afcon",
        title: "MTN AFCON",
        date: "2023",
        category: "3D Event Design",
        thumbnail: "/images/projects/mtn-afcon/scene-1-mockup.webp",
        summary: "A 3D venue concept for MTN’s Africa Cup of Nations fan event.",
        body: ["The renders show the main stage and audience seating, along with the entry arch, fan activities, sponsor displays, food trucks, and event support areas."],
        eventDesignTitle: "3D Venue Renders",
        eventDesignMockups: afconScenes
            .filter(([scene]) => [0, 1, 2, 3, 4, 5, 6, 10, 11].includes(scene))
            .map((scene) => afconImage(scene, "-mockup")),
        daytimeMockups: afconScenes
            .filter(([scene]) => [0, 1, 2, 3, 4, 5, 7, 10, 11].includes(scene))
            .map((scene) => afconImage(scene, "-daytime")),
        eventDesignImages: afconScenes.map((scene) => afconImage(scene)),
    },

    {
        slug: "mtn-outdoor-activations",
        title: "MTN Outdoor Activations: Hogbetsotso",
        date: "2024",
        category: "3D Event Design · Outdoor Branding",
        thumbnail: "/images/projects/mtn-outdoor-activations/hogbetsotso-pavilion-festival.webp",
        summary: "A 3D concept for MTN’s outdoor activation at Hogbetsotso, with a branded pavilion, feather flags, seating, and a presentation area.",
        body: ["AI-assisted mockups place the Hogbetsotso setup, Asogli variant, and earlier MTN concept beside a town market during a festival."],
        imageGalleryTitle: "Festival Street Mockups",
        images: [
            { src: "/images/projects/mtn-outdoor-activations/hogbetsotso-pavilion-festival.webp", alt: "Hogbetsotso pavilion with yellow MTN canopy and guest seating", fit: "contain" },
            { src: "/images/projects/mtn-outdoor-activations/hogbetsotso-flag-festival.webp", alt: "Hogbetsotso welcome flag beside the MTN pavilion", fit: "contain" },
            { src: "/images/projects/mtn-outdoor-activations/asogli-pavilion-festival.webp", alt: "Front view of the separate Asogli pavilion variant", fit: "contain" },
            { src: "/images/projects/mtn-outdoor-activations/setup-concept-festival.webp", alt: "Earlier MTN outdoor setup concept with a white canopy and presenter", fit: "contain" },
        ],
    },
    {
        slug: "sanlam-launch",
        title: "Sanlam Life Product Launch",
        date: "2023",
        category: "3D Event Design · Launch Setup",
        thumbnail: "/images/projects/sanlam-launch/rear-left.webp",
        summary: "A 3D setup for the Sanlam Life product launch, with a branded stage, panel seating, a lectern, and two presentation screens.",
        body: [],
        eventDesignTitle: "3D Launch Setup",
        eventDesignMockups: [
            { src: "/images/projects/sanlam-launch/rear-left.webp", alt: "Wide view of the launch stage and seating from the rear left", fit: "contain" },
            { src: "/images/projects/sanlam-launch/stage-right.webp", alt: "Three-quarter view of the panel stage and lectern", fit: "contain" },
            { src: "/images/projects/sanlam-launch/left-aisle.webp", alt: "View from the left aisle with the AV station and stage", fit: "contain" },
        ],
        eventDesignImages: [
            { src: "/images/projects/sanlam-launch/original.webp", alt: "Original Sanlam Life launch render from the center aisle", fit: "contain" },
        ],
    },
    {
        slug: "visit-ghana-mini-map",
        title: "Visit Ghana Mini Tourist Map",
        date: "2023",
        category: "Print Design · Tourism",
        thumbnail: "/images/projects/visit-ghana-mini-map/mockup.webp",
        summary: "Front and back artwork for a pocket-sized Visit Ghana tourist map, prepared for print at 8 × 10.5 cm.",
        body: [],
        imageGalleryTitle: "Tourist Map Mockup and Artwork",
        images: [
            { src: "/images/projects/visit-ghana-mini-map/mockup.webp", alt: "AI-assisted mockup: Front and back of the Visit Ghana mini map on a wood surface", fit: "contain" },
            { src: "/images/projects/visit-ghana-mini-map/front.webp", alt: "Visit Ghana mini tourist map front artwork", fit: "contain" },
            { src: "/images/projects/visit-ghana-mini-map/back.webp", alt: "Orange Visit Ghana mini tourist map back artwork", fit: "contain" },
        ],
    },
    {
        slug: "gnpc-chocolate-packaging",
        title: "GNPC Chocolate Packaging",
        date: "2023",
        category: "Packaging · Print Design",
        thumbnail: "/images/projects/gnpc-chocolate-packaging/mockup.webp",
        summary: "Chocolate wrapper artwork for Ghana National Petroleum Corporation, using a repeating yellow and black pattern.",
        body: [],
        imageGalleryTitle: "Packaging Mockup and Artwork",
        images: [
            { src: "/images/projects/gnpc-chocolate-packaging/mockup.webp", alt: "AI-assisted mockup: Folded GNPC chocolate wrapper on a charcoal tabletop", fit: "contain" },
            { src: "/images/projects/gnpc-chocolate-packaging/wrapper.webp", alt: "GNPC chocolate wrapper print artwork", fit: "contain" },
        ],
    },
    {
        slug: "lordship-certificate",
        title: "Lordship Certificate of Merit",
        date: "2023",
        category: "Print Design",
        thumbnail: "/images/projects/lordship-certificate/mockup.webp",
        summary: "A blue and gold certificate of merit for Lordship Insurance Brokers & Consultancy.",
        body: ["The sample uses placeholder recipient details and blank signature lines."],
        imageGalleryTitle: "Certificate Mockup and Artwork",
        images: [
            { src: "/images/projects/lordship-certificate/mockup.webp", alt: "AI-assisted mockup: Framed Lordship certificate with a sample recipient", fit: "contain" },
            { src: "/images/projects/lordship-certificate/sample.webp", alt: "Lordship Certificate of Merit with a sample recipient and blank signature lines", fit: "contain" },
        ],
    },
    {
        slug: "joos-bon-appetit",
        title: "Joos Complimentary Charging: Bon Appetit",
        date: "2024",
        category: "Presentation Design",
        thumbnail: "/images/projects/joos-bon-appetit/mockup.webp",
        summary: "A Joos presentation for Bon Appetit introducing complimentary portable charging and showing how to borrow a power bank.",
        body: [],
        imageGalleryTitle: "Presentation Mockup and Selected Slides",
        images: [
            { src: "/images/projects/joos-bon-appetit/mockup.webp", alt: "AI-assisted mockup: Joos Bon Appetit presentation cover displayed on a laptop", fit: "contain" },
            { src: "/images/projects/joos-bon-appetit/cover.webp", alt: "Joos presentation cover for Bon Appetit", fit: "contain" },
            { src: "/images/projects/joos-bon-appetit/charging-walkthrough.webp", alt: "Joos slide showing how to scan, charge, and return a power bank", fit: "contain" },
        ],
    },
];

export function getWorkItem(slug: string) {
    return workItems.find((item) => item.slug === slug);
}
