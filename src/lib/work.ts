export type WorkItem = {
    slug: string;
    title: string;
    category: string;
    thumbnail: string;
    summary: string;
    body: string[];
    externalLinks?: { label: string; url: string }[];
};

export const workItems: WorkItem[] = [
    {
        slug: "emerging-technologies-centre",
        title: "Emerging Technologies Centre",
        category: "STEM Education",
        thumbnail: "/images/header.jpg",
        summary: "Content coming soon.",
        body: [],
    },
    {
        slug: "etc-weekend-program",
        title: "ETC Weekend Program",
        category: "STEM Education",
        thumbnail: "/images/header.jpg",
        summary: "Content coming soon.",
        body: [],
    },
    {
        slug: "emerging-technologies-bootcamp",
        title: "Emerging Technologies Bootcamp",
        category: "STEM Education",
        thumbnail: "/images/header.jpg",
        summary: "Content coming soon.",
        body: [],
    },
    {
        slug: "ghana-robotics-competition",
        title: "Ghana Robotics Competition",
        category: "Robotics",
        thumbnail: "/images/header.jpg",
        summary: "Content coming soon.",
        body: [],
    },
    {
        slug: "teens-in-ai",
        title: "Teens In AI Mentorship",
        category: "Mentorship",
        thumbnail: "/images/header.jpg",
        summary: "Content coming soon.",
        body: [],
    },
    {
        slug: "infinity-stem",
        title: "Infinity STEM Facilitator Training",
        category: "STEM Education",
        thumbnail: "/images/header.jpg",
        summary: "Content coming soon.",
        body: [],
    },
    {
        slug: "juste-foundation",
        title: "Sensel School STEM Program",
        category: "STEM Education",
        thumbnail: "/images/header.jpg",
        summary: "Content coming soon.",
        body: [],
    },
    {
        slug: "stemr-tech-labs",
        title: "Saturday Robotics Club",
        category: "Robotics",
        thumbnail: "/images/header.jpg",
        summary: "Content coming soon.",
        body: [],
    },
    {
        slug: "generative-ai-training",
        title: "Generative AI Training",
        category: "AI",
        thumbnail: "/images/header.jpg",
        summary: "Content coming soon.",
        body: [],
    },
    {
        slug: "robotics-competitions",
        title: "Robotics Competitions I Run",
        category: "Robotics",
        thumbnail: "/images/header.jpg",
        summary: "Content coming soon.",
        body: [],
    },
    {
        slug: "lab-engineering",
        title: "Robotics Lab Engineering",
        category: "Infrastructure",
        thumbnail: "/images/header.jpg",
        summary: "Content coming soon.",
        body: [],
    },
    {
        slug: "ai-iot-capstones",
        title: "AI & IoT Capstone Supervision",
        category: "AI",
        thumbnail: "/images/header.jpg",
        summary: "Content coming soon.",
        body: [],
    },
    {
        slug: "3d-design",
        title: "3D Product & Event Visualization",
        category: "Design",
        thumbnail: "/images/header.jpg",
        summary: "Content coming soon.",
        body: [],
    },
    {
        slug: "achendo",
        title: "Achendo — Brand & Motion",
        category: "Design",
        thumbnail: "/images/logofolioImage.jpg",
        summary: "Content coming soon.",
        body: [],
    },
    {
        slug: "digital-products",
        title: "Digital Products & UI/UX",
        category: "Product",
        thumbnail: "/images/sserpImage.jpg",
        summary: "Content coming soon.",
        body: [],
    },
];

export function getWorkItem(slug: string) {
    return workItems.find((item) => item.slug === slug);
}
