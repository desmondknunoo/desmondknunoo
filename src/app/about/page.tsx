import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Mail } from "lucide-react";
import { Footer } from "@/components/footer";
import { SiteNav } from "@/components/site-nav";

export const metadata: Metadata = {
    title: "About | Desmond Kwame Nunoo",
    description:
        "Professional experience, education, and certifications for Desmond Kwame Nunoo.",
};

const experience = [
    {
        role: "Senior Software Engineer",
        organization: "Innova Labs Ghana",
        type: "Contract",
        dates: "Jan 2026 – Present",
        location: "Accra, Ghana",
        details: [
            "Co-developed an enterprise React application that streamlined complex corporate workflows.",
            "Developed a cross-platform Google Scratch visual block coding project for local microcontrollers, helping children program locally manufactured robotics kits.",
        ],
    },
    {
        role: "Emerging Technologies Centre Coordinator",
        organization: "Lancaster University Ghana",
        type: "Full-time",
        dates: "Dec 2024 – Present",
        location: "Accra, Ghana · On-site",
        details: [
            "Collaborate with students and faculty on research initiatives, competitions, and practical projects, including robotics and AI.",
            "Support funding and partnerships for lab projects and conduct training on lab equipment use and safety.",
            "Oversee lab safety, records, equipment, inventory, policies, and day-to-day operations.",
            "Prepare operational reports and support Open Days, demonstrations, workshops, and lab marketing.",
        ],
    },
    {
        role: "Robotics Facilitator",
        organization: "THE STEMR TECH LABS",
        type: "Part-time",
        dates: "Aug 2022 – Present",
        location: "Adenta, Ghana · On-site",
        details: [
            "Facilitate robotics projects using microcontrollers, circuits, sensors, and actuators.",
            "Teach Scratch, PictoBlox, web design, AI and IoT introductions, basic electronics, and C++ to teens from public schools in Accra.",
            "Prepared a team that won first place in the Stars League category at the 2024 Ghana Robotics Competition. The team built HoleyBot with Raspberry Pi Pico and programmed with PicoBricks, XPLORE by Firefly, and MicroPython.",
        ],
    },
    {
        role: "Lead Coordinator",
        organization: "Infinity STEM & The Infinity STEM Foundation",
        type: "Seasonal",
        dates: "Nov 2025 – Present",
        location: "Accra, Ghana",
        details: [
            "Train STEM facilitators, organize robotics competitions, and deliver STEM education to children in schools.",
            "Coordinate STEM training collaborations with NGOs.",
        ],
    },
    {
        role: "Chief Executive Officer",
        organization: "Achendo",
        type: "Founder",
        dates: "Jun 2024 – Present",
        location: "Accra, Ghana · Remote",
        details: [
            "Lead design and production consultants and direct the creative team.",
            "Advise on 3D product design, software solutions, and data-driven digital products.",
            "Help businesses scale through software and brand visibility campaigns.",
        ],
    },
    {
        role: "Program Coordinator",
        organization: "The Juste Foundation",
        type: "Part-time",
        dates: "Nov 2025 – Mar 2026",
        location: "Accra, Ghana",
        details: [
            "Facilitated and coordinated training sessions for students in Sensel School, Taifa.",
            "Bridged communication and collaboration between facilitators, The Juste Foundation, and Sensel School.",
        ],
    },
    {
        role: "Volunteer",
        organization: "DataKirk",
        type: "Seasonal",
        dates: "Mar 2023 – Feb 2026",
        location: "Remote",
        details: ["Helped facilitate and navigate projects."],
    },
    {
        role: "Web Development Volunteer",
        organization: "DataKirk",
        type: "Part-time",
        dates: "Mar 2023 – May 2023",
        location: "Remote",
        details: [
            "Redesigned and implemented custom WordPress designs for the DataKirk website, reducing load time by about half through image compression and removal of unused assets and plugins.",
        ],
    },
    {
        role: "AI Mentor",
        organization: "Teens In AI",
        type: "Seasonal",
        dates: "Feb 2024 – Jan 2026",
        location: "Remote",
        details: [
            "Led young participants in Eclectic Love, Ho to apply design thinking to AI and robotics solutions for gender equality challenges.",
            "Helped participants define their challenges, prioritize end-user needs, and craft prototypes and MVPs with thoughtful user experiences.",
        ],
    },
    {
        role: "AI Consulting Volunteer",
        organization: "United Nations Volunteers",
        type: "Seasonal",
        dates: "Jul 2022 – Dec 2025",
        location: "Burundi · Remote",
        details: [
            "Helped NGOs incorporate AI tools into their workflows to maximize efficiency.",
        ],
    },
    {
        role: "Multidisciplinary Designer",
        organization: "Joos",
        type: "Contract",
        dates: "Jan 2024 – Jun 2024",
        location: "London, United Kingdom · Remote",
        details: [
            "Designed decks, brand visibility artwork, templates, and motion graphics for the Joos app, Joos Box, Joos Solar, and other Joos products.",
        ],
    },
    {
        role: "3D Designer",
        organization: "Pageline Concepts",
        type: "Contract",
        dates: "Jan 2024 – Mar 2024",
        location: "Accra, Ghana · On-site",
        details: [
            "Designed 3D event setups and scenes, plus brand visibility artwork for Access Bank, Old Mutual, and Vidya Book Stores.",
        ],
    },
    {
        role: "3D Designer",
        organization: "Sodium Brand Solutions",
        type: "Contract",
        dates: "Jan 2023 – Dec 2023",
        location: "Accra, Ghana · On-site",
        details: [
            "Created 3D product and event setups and other design work for MTN, Enterprise Group, Sanlam, Synlab, DKT, and others.",
        ],
    },
    {
        role: "Senior Web Developer",
        organization: "HarTert Technologies Limited",
        type: "Contract",
        dates: "Aug 2022 – Jul 2023",
        location: "Accra, Ghana · Remote",
        details: [
            "Created custom web platform designs in Figma and redesigned the SmartSale website in WordPress, reducing load time by two-thirds by removing unused assets and plugins.",
            "Created graphic designs for the SmartSale marketing team.",
        ],
    },
    {
        role: "Product Manager",
        organization: "Apex & Over Ltd.",
        type: "Full-time",
        dates: "Nov 2021 – Jan 2023",
        location: "Accra, Ghana · Remote",
        details: [
            "Led design and management of the Zero Schools Under Trees web application, developed with a database to hold over 5,000 schools.",
            "Designed interfaces, wireframes, user flows, prototypes, and information architecture for client digital products.",
            "Managed design and development teams using Asana to coordinate product specifications and user experience.",
        ],
    },
    {
        role: "UX Designer",
        organization: "Layer5",
        type: "Part-time",
        dates: "Aug 2022 – Dec 2022",
        location: "Austin, Texas, United States · Remote",
        details: ["Contributed to the open-source Meshery project."],
    },
    {
        role: "Designer",
        organization: "BlueVyne",
        type: "Contract",
        dates: "Aug 2021 – Oct 2021",
        location: "Accra, Ghana · On-site",
        details: [
            "Designed for British Council, MasterCard, Kimo, mPharma, VW Trucks and Buses, and Scania West Africa.",
        ],
    },
    {
        role: "UX Design Volunteer",
        organization: "United Nations Volunteers",
        type: "Volunteer",
        dates: "Jan 2021 – Jul 2022",
        location: "Burundi · Remote",
        details: [
            "Designed UI/UX for apps and ERP multi-management software used by ASSAS, a non-profit in Burundi.",
        ],
    },
    {
        role: "Publishing Assistant (Supervisor)",
        organization: "EPP Books Services Ltd.",
        type: "Full-time",
        dates: "Sep 2019 – Mar 2021",
        location: "Accra, Ghana · On-site",
        details: [
            "Supervised publication design and development, generated progress reports, and collaborated with the publishing team to complete and redesign publications.",
        ],
    },
    {
        role: "Android Developer",
        organization: "Apex & Over Ltd.",
        type: "Part-time",
        dates: "Sep 2019 – Nov 2021",
        location: "Accra, Ghana",
        details: [
            "Developed and contributed to Android apps including Abakosem, U4nor, NSS Unofficial, iSee/Focal, Fudrin, and Fudrin Business.",
        ],
    },
    {
        role: "Publishing Intern",
        organization: "EPP Books Services Ltd.",
        type: "Internship",
        dates: "Jun 2019 – Sep 2019",
        location: "Accra, Ghana · On-site",
        details: ["Collaborated with the publishing team to redesign publications."],
    },
    {
        role: "Intern",
        organization: "University of Ghana",
        type: "Internship",
        dates: "Feb 2018 – May 2018",
        location: "Legon, Ghana · On-site",
        details: [],
    },
];

const education = [
    {
        school: "Kwame Nkrumah University of Science and Technology, Kumasi",
        qualification: "Bachelor's degree · First class honors",
        details:
            "Final-year project: The Orange Offline Publishing Dictionary, a native Kotlin Android application with a database of more than 5,000 terms.",
    },
    {
        school: "Pope John Senior High School and Minor Seminary",
        qualification:
            "WASSCE, General Science (Biology, Physics, Chemistry and Elective Mathematics)",
        details: "Biology, Physics, Chemistry, and Elective Mathematics.",
    },
];

const expertise = [
    {
        area: "Robotics & AI",
        details:
            "Microcontrollers including Raspberry Pi Pico, C++, MicroPython, Scratch, IoT, and AI/IoT integration.",
    },
    {
        area: "Mobile & Web Development",
        details:
            "Kotlin and Android Studio, cross-platform systems, and custom WebGL-to-Flutter physics engines.",
    },
    {
        area: "3D Design & Motion Graphics",
        details:
            "Product rendering, spatial and event setups, and motion graphics.",
    },
    {
        area: "Product Management",
        details:
            "User-friendly technology products and data-driven software solutions.",
    },
    {
        area: "STEM Education",
        details:
            "Curriculum design, facilitator training, and competitive robotics coaching.",
    },
];

const achievements = [
    "Coached a student team to first place in the Stars League at the 2024 Ghana Robotics Competition with a Raspberry Pi Pico-powered HoleyBot.",
    "Built production Android apps including Abakosem, U4nor, and Fudrin, and led the Zero Schools Under Trees web mapping database.",
    "Developed The Orange Offline Publishing Dictionary, a native Kotlin Android capstone app with more than 5,000 offline terms.",
    "Contributed UI/UX design to cloud-native management software through the Layer5 and Meshery open-source communities.",
];

const collaborators =
    "United Nations, British Council Ghana, MTN Ghana, mPharma, Ghana Tourism Authority, FDA Ghana, Teens In AI, DataKirk, BOST, and Scania West Africa.";

const technicalFocus =
    "I advocate for cloud- and browser-based hardware simulation, including Wokwi and Autodesk Tinkercad Circuits, to streamline prototyping before physical deployment. I also emphasize structured testing across mobile and web architectures.";

const certifications = [
    {
        name: "KNUST Entrepreneurship Clinic Certificate",
        issuer: "Kwame Nkrumah University of Science and Technology, Kumasi",
        issued: "Mar 2019",
        href: "https://drive.google.com/file/d/140KTz17eM-6jPpCICZAXdVuvf_hQaVUt/view",
    },
    {
        name: "IMUN Online Conference 47.0",
        issuer: "International MUN",
        issued: "Mar 2021",
        href: "https://drive.google.com/file/d/14ErTDlyDN_b_vbg7Ki1Qqar9WD3G_D2b/view",
    },
    {
        name: "HarvardX: CS50's Introduction to Artificial Intelligence with Python",
        issuer: "edX",
        issued: "Jun 2021",
    },
    {
        name: "HarvardX: CS50's Introduction to Programming with Python",
        issuer: "edX",
        issued: "May 2021",
    },
    {
        name: "HarvardX: Machine Learning and AI with Python",
        issuer: "edX",
        issued: "Jan 2022",
    },
    {
        name: "HarvardX: CS50's Introduction to Programming with Scratch",
        issuer: "edX",
        issued: "Oct 2022",
    },
    {
        name: "Gemini: Prompt Design in Vertex AI Skill Badge",
        issuer: "Google",
        issued: "Mar 2025",
        href: "https://www.credly.com/badges/689ac5aa-3ced-4e55-a470-bbf3afe3f68d/linked_in_profile",
    },
];

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-zinc-950 text-zinc-100">
            <div className="mx-auto max-w-7xl px-6 pt-8 md:px-12 md:pt-10">
                <header className="flex items-center justify-between gap-5">
                    <Link href="/" className="text-sm font-semibold tracking-wide text-zinc-200">
                        DKN
                    </Link>
                    <SiteNav />
                </header>
                <Link
                    href="/"
                    className="mt-16 inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-white"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Back to portfolio
                </Link>

                <section className="grid gap-8 border-b border-zinc-800 py-12 lg:grid-cols-[1fr_20rem] lg:items-end lg:py-20">
                    <div>
                        <h1 className="max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl">
                            About me
                        </h1>
                        <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
                            I&apos;m Desmond Kwame Nunoo, a technology professional,
                            STEM educator, and designer based in Ghana. I bring
                            together software, robotics, AI, and design to help
                            people turn ideas into useful products and learning
                            experiences.
                        </p>
                    </div>
                    <div className="text-sm leading-6 text-zinc-400 lg:justify-self-end">
                        <p className="font-medium text-zinc-100">Accra, Ghana</p>
                        <p>STEM education · Robotics · AI · Product design</p>
                        <Link
                            href="mailto:desmondknunoo@gmail.com"
                            className="mt-4 inline-flex items-center gap-2 text-zinc-100 underline decoration-zinc-600 underline-offset-4 transition-colors hover:decoration-white"
                        >
                            <Mail className="h-4 w-4" />
                            Get in touch
                        </Link>
                    </div>
                </section>

                <section className="grid gap-8 border-b border-zinc-800 py-12 lg:grid-cols-[14rem_1fr] lg:gap-16 lg:py-16">
                    <div>
                        <h2 className="text-2xl font-semibold">Areas of expertise</h2>
                        <p className="mt-3 text-sm leading-6 text-zinc-400">
                            A multidisciplinary toolkit across technology,
                            product, design, and education.
                        </p>
                    </div>
                    <dl className="divide-y divide-zinc-800">
                        {expertise.map((item) => (
                            <div key={item.area} className="grid gap-2 py-5 first:pt-0 sm:grid-cols-[13rem_1fr] sm:gap-6">
                                <dt className="font-medium text-zinc-100">{item.area}</dt>
                                <dd className="text-sm leading-6 text-zinc-300">{item.details}</dd>
                            </div>
                        ))}
                    </dl>
                </section>

                <section className="grid gap-8 border-b border-zinc-800 py-12 lg:grid-cols-[14rem_1fr] lg:gap-16 lg:py-16">
                    <div>
                        <h2 className="text-2xl font-semibold">Experience</h2>
                        <p className="mt-3 text-sm leading-6 text-zinc-400">
                            Building technology and learning programs across
                            software, robotics, design, and education.
                        </p>
                    </div>
                    <div className="divide-y divide-zinc-800">
                        {experience.map((item) => (
                            <article key={`${item.organization}-${item.role}`} className="py-7 first:pt-0 last:pb-0">
                                <div className="flex flex-col justify-between gap-2 sm:flex-row sm:gap-6">
                                    <div>
                                        <h3 className="text-lg font-medium">{item.role}</h3>
                                        <p className="mt-1 text-zinc-300">
                                            {item.organization}
                                            <span className="text-zinc-500"> · {item.type}</span>
                                        </p>
                                    </div>
                                    <p className="shrink-0 text-sm text-zinc-400 sm:text-right">
                                        {item.dates}
                                        <span className="mt-1 block">{item.location}</span>
                                    </p>
                                </div>
                                {item.details.length > 0 && (
                                    <ul className="mt-4 max-w-3xl space-y-2 text-sm leading-6 text-zinc-300">
                                        {item.details.map((detail) => (
                                            <li key={detail} className="flex gap-3">
                                                <span aria-hidden="true" className="text-zinc-500">—</span>
                                                <span>{detail}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </article>
                        ))}
                    </div>
                </section>

                <section className="grid gap-8 border-b border-zinc-800 py-12 lg:grid-cols-[14rem_1fr] lg:gap-16 lg:py-16">
                    <div>
                        <h2 className="text-2xl font-semibold">Notable achievements</h2>
                        <p className="mt-3 text-sm leading-6 text-zinc-400">
                            Selected outcomes from software, robotics, and
                            open-source work.
                        </p>
                    </div>
                    <ul className="max-w-3xl divide-y divide-zinc-800">
                        {achievements.map((achievement) => (
                            <li key={achievement} className="py-5 first:pt-0">
                                <p className="text-sm leading-6 text-zinc-300">{achievement}</p>
                            </li>
                        ))}
                    </ul>
                </section>

                <section className="grid gap-8 border-b border-zinc-800 py-12 lg:grid-cols-[14rem_1fr] lg:gap-16 lg:py-16">
                    <div>
                        <h2 className="text-2xl font-semibold">Education</h2>
                        <p className="mt-3 text-sm leading-6 text-zinc-400">
                            A foundation in science, programming, and design.
                        </p>
                    </div>
                    <div className="divide-y divide-zinc-800">
                        {education.map((item) => (
                            <article key={item.school} className="py-6 first:pt-0 last:pb-0">
                                <h3 className="text-lg font-medium">{item.school}</h3>
                                <p className="mt-1 text-sm leading-6 text-zinc-300">{item.qualification}</p>
                                <p className="mt-3 text-sm leading-6 text-zinc-400">{item.details}</p>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="grid gap-8 border-b border-zinc-800 py-12 lg:grid-cols-[14rem_1fr] lg:gap-16 lg:py-16">
                    <div>
                        <h2 className="text-2xl font-semibold">Collaborations</h2>
                        <p className="mt-3 text-sm leading-6 text-zinc-400">
                            Organizations and teams I&apos;ve worked with.
                        </p>
                    </div>
                    <p className="max-w-3xl text-sm leading-7 text-zinc-300">
                        {collaborators}
                    </p>
                </section>

                <section className="grid gap-8 border-b border-zinc-800 py-12 lg:grid-cols-[14rem_1fr] lg:gap-16 lg:py-16">
                    <div>
                        <h2 className="text-2xl font-semibold">Technical focus</h2>
                        <p className="mt-3 text-sm leading-6 text-zinc-400">
                            How I approach building and testing technology.
                        </p>
                    </div>
                    <p className="max-w-3xl text-sm leading-7 text-zinc-300">
                        {technicalFocus}
                    </p>
                </section>

                <section className="grid gap-8 py-12 lg:grid-cols-[14rem_1fr] lg:gap-16 lg:py-16">
                    <div>
                        <h2 className="text-2xl font-semibold">Certificates</h2>
                        <p className="mt-3 text-sm leading-6 text-zinc-400">
                            Selected professional development and credentials.
                        </p>
                    </div>
                    <ul className="divide-y divide-zinc-800">
                        {certifications.map((item) => (
                            <li key={item.name} className="flex flex-col justify-between gap-3 py-5 first:pt-0 sm:flex-row sm:items-center">
                                <div>
                                    <h3 className="font-medium">{item.name}</h3>
                                    <p className="mt-1 text-sm text-zinc-400">
                                        {item.issuer} <span aria-hidden="true">·</span> Issued {item.issued}
                                    </p>
                                </div>
                                {item.href && (
                                    <Link
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex w-fit shrink-0 items-center gap-2 text-sm text-zinc-200 underline decoration-zinc-600 underline-offset-4 transition-colors hover:decoration-white"
                                    >
                                        View credential
                                        <ArrowUpRight className="h-4 w-4" />
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </section>

                <section className="mb-16 flex flex-col justify-between gap-6 border-t border-zinc-800 pt-8 md:flex-row md:items-center">
                    <p className="text-lg text-zinc-300">
                        Interested in working together?
                    </p>
                    <Link
                        href="mailto:desmondknunoo@gmail.com"
                        className="inline-flex items-center gap-2 text-sm font-medium text-white underline decoration-zinc-600 underline-offset-4 hover:decoration-white"
                    >
                        Let&apos;s talk
                        <ArrowUpRight className="h-4 w-4" />
                    </Link>
                </section>
            </div>
            <Footer />
        </main>
    );
}
