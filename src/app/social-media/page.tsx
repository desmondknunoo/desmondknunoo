import { googleVisitPhotos, galaxyPhotos, workshopPhotos, labVisitPhotos, bootcampVisitPhotos, etcVisitPhotos } from '@/lib/story-images';
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Footer } from "@/components/footer";
import { CollapsibleSection } from "@/components/collapsible-section";
import { LightboxGallery } from "@/components/lightbox-gallery";
import { PortfolioHeader } from "@/components/portfolio-header";
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
    title: 'Posts',
    description: "Stories and updates from Desmond Kwame Nunoo's work in technology, robotics and STEM education in Ghana.",
    path: '/social-media',
})

const postUrl =
    "https://www.linkedin.com/feed/update/urn:li:activity:7439581439316234241/";

const images = [
    {
        src: "https://media.licdn.com/dms/image/v2/D4D22AQH1nePEU5zd5Q/feedshare-shrink_800/B4DZz6xPGRJQAc-/0/1773733737604?e=1794441600&v=beta&t=RYgDl-vQ-tyNC8tAIjm8YXn--Msk_Ckj9jwu0_wKhvA",
        alt: "Emerging Technologies Bootcamp at Lancaster University Ghana",
    },
    {
        src: "https://media.licdn.com/dms/image/v2/D4D22AQH9-ZGKu-bq6Q/feedshare-shrink_800/B4DZz6xSASGQAg-/0/1773733749727?e=1794441600&v=beta&t=S8wk85WuYbq81Xoghi_NbAiLII3_utNSrfpWhKStKA8",
        alt: "Bootcamp students working on emerging technology",
    },
    {
        src: "https://media.licdn.com/dms/image/v2/D4D22AQEnRE2S7jjVNQ/feedshare-shrink_800/B4DZz6xSeMI4Ag-/0/1773733751852?e=1794441600&v=beta&t=EQgYqnbKbLO8YdtvCGx08aoIMKxsB04xeKbo5mUiUac",
        alt: "Students learning microcontroller programming",
    },
    {
        src: "https://media.licdn.com/dms/image/v2/D4D22AQFIyHqpLPbITg/feedshare-shrink_800/B4DZz6xXpfIwAg-/0/1773733773094?e=1794441600&v=beta&t=jT27V1DPSkhpQzFIjSe99zU1gOjCxAThzdRD-wV9in4",
        alt: "Student projects from the Emerging Technologies Bootcamp",
    },
    {
        src: "https://media.licdn.com/dms/image/v2/D4D22AQE8rSRS1kwWmA/feedshare-shrink_800/B4DZz6xR34IkAc-/0/1773733749361?e=1794441600&v=beta&t=Ix1p_OnOVu4-wqOPBp6WFynZJP1wyKzhl-Js6vCpAF8",
        alt: "Bootcamp cohort during the Google Accra AI Community Centre visit",
    },
    {
        src: "https://media.licdn.com/dms/image/v2/D4D22AQFPUHupV9uqzA/feedshare-shrink_800/B4DZz6xR5WJsAg-/0/1773733749119?e=1794441600&v=beta&t=YmBB3W2-_V6wFp52N9njE49zgV5hWxXz8BXaTQpTxx4",
        alt: "Students at the Google Accra AI Community Centre",
    },
];

const simulatorPostImage =
    "https://media.licdn.com/dms/image/v2/D4D22AQHVI5bG0do5CA/feedshare-shrink_800/B4DZ6wlxIaKEAc-/0/1781079151761?e=2147483647&v=beta&t=moGyTxiE1BtBlX2HcmZjw1IX73SBaryIIq5G3VGk-4Q";

const galaxyImages = [
    {
        src: "https://media.licdn.com/dms/image/v2/D4E22AQHIoN7RrIFBVg/feedshare-shrink_480/B4EZbuLY8HHkAc-/0/1747752686771?e=1794441600&v=beta&t=yv23d8zHDBXGgS7fy8Iln-JgSBSZ6aT9bWYxEhUoVzM",
        alt: "Students presenting a project at the Galaxy International School STEAM Competition",
    },
    {
        src: "https://media.licdn.com/dms/image/v2/D4E22AQHFOuDO1xxu3w/feedshare-shrink_480/B4EZbuLY8CHYAY-/0/1747752686758?e=1794441600&v=beta&t=6JvmQPttohNvpkPDycAMMp5WjvFU-jZ17CKJ87UNR08",
        alt: "A student project at the Galaxy International School Science and Makers' Fair",
    },
    {
        src: "https://media.licdn.com/dms/image/v2/D4E22AQGiUFPTfn1jWg/feedshare-shrink_480/B4EZbuLY8fHYAY-/0/1747752688173?e=1794441600&v=beta&t=VkmLQ_hNKdlGOXZWdYkeUlckUpnez-PpWWMd2Cj_iTA",
        alt: "Young makers showcasing their work at the STEAM Competition",
    },
    {
        src: "https://media.licdn.com/dms/image/v2/D4E22AQFCDLu3Xaf_Lg/feedshare-shrink_480/B4EZbuLY8dGcAg-/0/1747752687074?e=1794441600&v=beta&t=PED22JWZ2_FLxQjojyLjKOes8i1HosQ7Cqj55JBsAlk",
        alt: "Science and engineering displays at the 2025 Makers' Fair",
    },
    {
        src: "https://media.licdn.com/dms/image/v2/D4E22AQG_akJOO2O30Q/feedshare-shrink_480/B4EZbuLY81HYAc-/0/1747752687003?e=1794441600&v=beta&t=omMqy7wPuFhAyyPTs8Wc-P-0zfuNnU4yeQdShZCBqnA",
        alt: "Participants and projects at Galaxy International School's STEAM fair",
    },
    {
        src: "https://media.licdn.com/dms/image/v2/D4E22AQG2PYecBmFzzA/feedshare-shrink_480/B4EZbuLY8VGQAk-/0/1747752687885?e=1794441600&v=beta&t=lI6rrV-LMyC8dNCilrnV_PjvYswi1bCbCOJDGJTXaJ0",
        alt: "A student explaining an innovation project at the competition",
    },
    {
        src: "https://media.licdn.com/dms/image/v2/D4E22AQFuRIY-2D_w-w/feedshare-shrink_480/B4EZbuLY8SHMAc-/0/1747752686806?e=1794441600&v=beta&t=JYoneCFGg-e91IMo6jD5rbMoTG0Rdgf7WFlfHVy4NN4",
        alt: "Project presentations at the 20th Galaxy International School Science and Makers' Fair",
    },
    {
        src: "https://media.licdn.com/dms/image/v2/D4E22AQF09C-qbGXt0w/feedshare-shrink_480/B4EZbuLY8IHMAY-/0/1747752687541?e=1794441600&v=beta&t=NPFZ7UoE6hZiBF_krNWUsAb4dtc5pQYkydFIEHj3eWA",
        alt: "Young innovators at the Galaxy International School STEAM Competition 2025",
    },
];

const eclecticLoveImages = [
    {
        src: "https://media.licdn.com/dms/image/v2/D5622AQF_gzo1JQaByg/feedshare-shrink_480/feedshare-shrink_480/0/1732281305360?e=1794441600&v=beta&t=k3SY1GpNpTMOWD1b6hFbovg-owojv-nRF9kPm3nfEJQ",
        alt: "Young innovators working on solutions during the Teens in AI Hackathon",
    },
    {
        src: "https://media.licdn.com/dms/image/v2/D5622AQFJFIAEORyRvw/feedshare-shrink_480/feedshare-shrink_480/0/1732281305153?e=1794441600&v=beta&t=coTdBVj1nM8g9ZMPZtJmTOGQzgg1F3qwPe1KCtk6v4Q",
        alt: "Participants presenting a project at the Teens in AI Hackathon 2024",
    },
];

const romanTelescopeImages = [
    {
        src: "https://media.licdn.com/dms/image/v2/D4D22AQFV1uihqlS-Mg/feedshare-shrink_800/B4DZ9RurP0HQAc-/0/1783782618328?e=1794441600&v=beta&t=2JQ-Zc0R6eGRfCC5t1nO38ApxDg0LcggrT67WUdpMlM",
        alt: "Nancy Grace Roman Space Telescope announcement shared on LinkedIn",
    },
];

const partners = [
    { label: "Lancaster University Ghana", href: "https://www.linkedin.com/school/lancasterghana/" },
    { label: "KGL Foundation", href: "https://www.linkedin.com/company/kglfoundation/" },
    { label: "Google", href: "https://www.linkedin.com/company/google/" },
    { label: "InovTech STEM Center", href: "https://www.linkedin.com/company/inovtechsc/" },
    { label: "STEMAIDE", href: "https://www.linkedin.com/company/stemaide-africa/" },
];

const simulatorGroups = [
    {
        title: "Microcontroller & 3D breadboard simulators",
        tools: [
            {
                name: "Wokwi",
                description:
                    "Browser-based firmware development for Arduino, ESP32, and Raspberry Pi Pico, including support for complex libraries.",
            },
            {
                name: "Schematik, Withdiode, and Tinkered",
                description:
                    "Modern platforms combining interactive 3D breadboards and physical simulation. Withdiode was noted as currently down in the original post.",
            },
            {
                name: "Autodesk Tinkercad Circuits",
                description:
                    "A beginner-friendly drag-and-drop environment for block coding, C++, and basic sensor wiring.",
            },
        ],
    },
    {
        title: "Schematic & advanced circuit simulators",
        tools: [
            {
                name: "EasyEDA",
                description:
                    "A cloud-based ecosystem for schematic capture, mixed-mode simulation, and PCB layout.",
            },
            {
                name: "Falstad",
                description:
                    "A lightweight tool for visualizing wave patterns, current flows, and logic states.",
            },
            {
                name: "CircuitLab and NI Multisim Live",
                description:
                    "In-browser SPICE simulators for analog and digital circuit analysis.",
            },
        ],
    },
];

export default function SocialMediaPage() {
    return (
        <main className="min-h-screen bg-paper text-ink">
            <PortfolioHeader />
            <div className="mx-auto max-w-7xl px-6 md:px-12">

                <Link
                    href="/"
                    className="mt-8 inline-flex min-h-11 items-center gap-2 text-sm text-ink-muted transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                    <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
                    Home
                </Link>

                <CollapsibleSection
                    title="Posts"
                    headingLevel="h1"
                    className="border-b border-rule py-10 md:py-14"
                    summaryClassName="py-0"
                    titleClassName="font-display max-w-4xl text-2xl uppercase leading-tight tracking-[0.12em] text-ink md:text-[2.5rem]"
                    contentClassName="pb-0"
                >
                    <p className="mt-5 max-w-2xl text-lg leading-8 text-ink">
                        Notes and stories from my work introducing young people to emerging technologies.
                    </p>
                </CollapsibleSection>

                {[
                    { id: 'workshops', title: 'Workshops and presentations', photos: workshopPhotos },
                    { id: 'lab-visits', title: 'Technology lab visits', photos: labVisitPhotos },
                    { id: 'bootcamp-visits', title: 'Bootcamp visits', photos: bootcampVisitPhotos },
                    { id: 'etc-visits', title: 'School visits and demonstrations at the ETC', photos: etcVisitPhotos },
                ].map((story) => (
                    <div key={story.id} id={story.id} className="scroll-mt-8">
                        <CollapsibleSection title={story.title} summaryDescription="Dates unavailable" className="py-10" contentClassName="mt-6 pb-0">
                            <LightboxGallery images={story.photos} />
                        </CollapsibleSection>
                    </div>
                ))}

                <CollapsibleSection
                    title="My name is heading to space with the Roman Space Telescope"
                    summaryDescription="NASA · Space exploration · Jul 2026"
                    className="py-10 md:py-14"
                    summaryClassName="py-0"
                    titleClassName="max-w-3xl text-2xl font-medium leading-tight text-ink md:text-[2rem]"
                    contentClassName="grid gap-8 pt-6 md:grid-cols-[minmax(0,1fr)_18rem] md:gap-16"
                >
                    <div>
                        <p className="mt-5 max-w-3xl leading-7 text-ink">
                            I just added my name to NASA&apos;s Nancy Grace Roman
                            Space Telescope. A digital copy of my name will be
                            stored on an SD card attached to the observatory,
                            launching next month aboard a SpaceX Falcon Heavy
                            rocket.
                        </p>
                        <Link
                            href="https://lnkd.in/p/ddrJjrb6"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-7 inline-flex min-h-11 items-center gap-2 border border-ink px-5 py-3 text-sm text-ink transition-colors hover:bg-ink hover:text-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                        >
                            View the LinkedIn post
                            <ArrowUpRight className="h-4 w-4" />
                        </Link>
                    </div>
                    <p className="max-w-xs text-sm leading-6 text-ink-muted">
                        A small piece of my story will travel with a mission
                        exploring the universe.
                    </p>
                    <div className="md:col-span-2">
                        <LightboxGallery
                            images={romanTelescopeImages}
                            postUrl="https://lnkd.in/p/ddrJjrb6"
                        />
                    </div>
                </CollapsibleSection>

                <CollapsibleSection
                    id="google-visit"
                    title="From emerging technologies bootcamp to the Google Accra AI Community Centre"
                    summaryDescription="STEM Education · Accra, Ghana · Posted 17 Mar 2026"
                    className="py-10 md:py-14"
                    summaryClassName="py-0"
                    titleClassName="max-w-3xl text-2xl font-medium leading-tight text-ink md:text-[2rem]"
                    contentClassName="grid gap-10 pt-6 md:grid-cols-[minmax(0,1fr)_18rem] md:gap-16"
                >
                    <div>
                        <p className="mt-5 max-w-3xl leading-7 text-ink">
                            Two months after the Emerging Technologies Bootcamp at
                            Lancaster University Ghana, the cohort and their
                            school facilitators visited the Google Accra AI
                            Community Centre. The bootcamp was sponsored by the
                            KGL Foundation.
                        </p>
                        <p className="mt-4 max-w-3xl leading-7 text-ink">
                            During the program, I introduced high school students
                            to machine learning, microcontroller programming, 3D
                            modelling for printing, and agentic coding for
                            functional wrappers around their machine-learning
                            models. The visit brought those ideas closer to
                            real-world applications.
                        </p>
                        <p className="mt-4 max-w-3xl leading-7 text-ink">
                            At the centre, students explored KODE VR with
                            InovTech STEM Center, learned about Google Open
                            Buildings, an open-access building-outline dataset
                            made with AI and satellite imagery, and heard from
                            STEMAIDE about using AI tools to make work easier.
                        </p>
                        <p className="mt-4 max-w-3xl leading-7 text-ink">
                            The visit was coordinated by{" "}
                            <Link
                                href="https://www.linkedin.com/in/frederick-jojo-kwofie-839a2b57/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-ink underline decoration-ink/40 underline-offset-4 hover:decoration-accent"
                            >
                                Frederick Jojo Kwofie
                            </Link>
                            .
                        </p>
                        <Link
                            href={postUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-7 inline-flex items-center gap-2 border border-ink px-5 py-3 text-sm text-ink transition-colors hover:bg-ink hover:text-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                        >
                            Read the original LinkedIn post
                            <ArrowUpRight className="h-4 w-4" />
                        </Link>
                    </div>

                    <aside className="border-t border-rule pt-6 md:border-l md:border-t-0 md:pl-7 md:pt-0">
                        <h3 className="text-sm font-medium text-ink">With</h3>
                        <ul className="mt-4 space-y-3">
                            {partners.map((partner) => (
                                <li key={partner.label}>
                                    <Link
                                        href={partner.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sm text-ink-muted transition-colors hover:text-accent"
                                    >
                                        {partner.label}
                                        <ArrowUpRight className="h-3.5 w-3.5" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </aside>
                </CollapsibleSection>

                <CollapsibleSection
                    title="Photos from the bootcamp and visit"
                    summaryDescription="Shared on LinkedIn · 17 Mar 2026"
                    className="border-t border-rule py-10 md:py-12"
                    summaryClassName="py-0"
                    titleClassName="text-xl font-semibold text-ink"
                    summaryDescriptionClassName="text-sm"
                    contentClassName="pt-6 pb-0"
                >
                    <div className="mb-6 flex justify-end">
                        <Link
                            href={postUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden items-center gap-2 text-sm text-ink underline decoration-ink/40 underline-offset-4 hover:decoration-accent sm:inline-flex"
                        >
                            View post
                            <ArrowUpRight className="h-4 w-4" />
                        </Link>
                    </div>
                    <LightboxGallery images={[...googleVisitPhotos, ...images]} postUrl={postUrl} />
                </CollapsibleSection>

                <CollapsibleSection
                    title="No hardware? No problem!"
                    summaryDescription="Engineering · Electronics · Education · Posted 10 Jun 2026"
                    className="border-t border-rule py-10 md:py-14"
                    summaryClassName="py-0"
                    titleClassName="max-w-3xl text-2xl font-medium leading-tight text-ink md:text-[2rem]"
                    contentClassName="pt-6 pb-0"
                >
                    <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_18rem] md:gap-16">
                        <div>
                            <p className="mt-5 max-w-3xl leading-7 text-ink">
                                Testing circuits and code no longer needs a desk
                                cluttered with wires and burned-out components.
                                Browser-based simulators let engineers,
                                hobbyists, and educators prototype in the cloud
                                without installing software.
                            </p>
                            <p className="mt-4 max-w-3xl leading-7 text-ink">
                                From 3D breadboards to SPICE simulation, these
                                tools can help with teaching, debugging on the
                                go, and testing a circuit before ordering PCBs.
                            </p>
                            <Link
                                href="https://www.linkedin.com/feed/update/urn:li:activity:7470387419230527488/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-6 inline-flex items-center gap-2 border border-ink px-5 py-3 text-sm text-ink transition-colors hover:bg-ink hover:text-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                            >
                                Read the original LinkedIn post
                                <ArrowUpRight className="h-4 w-4" />
                            </Link>
                        </div>
                        <p className="max-w-xs text-sm leading-6 text-ink-muted">
                            A field guide to browser-based prototyping, from
                            microcontroller firmware to advanced circuit
                            analysis.
                        </p>
                    </div>
                    <div className="mt-8 max-w-4xl">
                        <LightboxGallery
                            images={[
                                {
                                    src: simulatorPostImage,
                                    alt: "Circuit prototyping setup featured in the No hardware? No problem! LinkedIn post",
                                },
                            ]}
                            postUrl="https://www.linkedin.com/feed/update/urn:li:activity:7470387419230527488/"
                        />
                    </div>
                    <div className="mt-10 grid gap-10 border-t border-rule pt-8 md:grid-cols-2 md:gap-12">
                        {simulatorGroups.map((group) => (
                            <CollapsibleSection key={group.title} title={group.title} titleClassName="text-lg font-medium text-ink">
                                <ul className="mt-4 divide-y divide-rule">
                                    {group.tools.map((tool) => (
                                        <li key={tool.name} className="py-4 first:pt-0">
                                            <h4 className="font-medium text-ink">{tool.name}</h4>
                                            <p className="mt-2 text-sm leading-6 text-ink-muted">
                                                {tool.description}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            </CollapsibleSection>
                        ))}
                    </div>
                </CollapsibleSection>

                <CollapsibleSection
                    id="galaxy-fair"
                    title="Celebrating the next generation of changemakers"
                    summaryDescription="STEAM · Judging · Youth innovation · Posted 20 May 2025"
                    className="border-t border-rule py-10 md:py-14"
                    summaryClassName="py-0"
                    titleClassName="max-w-3xl text-2xl font-medium leading-tight text-ink md:text-[2rem]"
                    contentClassName="pt-6 pb-0"
                >
                    <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_18rem] md:gap-16">
                        <div>
                            <p className="mt-5 max-w-3xl leading-7 text-ink">
                                I had the pleasure of serving as a judge,
                                representing Lancaster University Ghana, at the
                                20th edition of Galaxy International School
                                Ltd.&apos;s Science &amp; Makers&apos; Fair and
                                STEAM Competition 2025.
                            </p>
                            <p className="mt-4 max-w-3xl leading-7 text-ink">
                                It was inspiring to see young minds engaging
                                with innovation and technology to create
                                real-world solutions. Their creativity,
                                curiosity, and confidence give me great hope
                                for the future. The next generation of
                                changemakers is already on the rise.
                            </p>
                            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm">
                                <Link
                                    href="https://www.linkedin.com/school/lancasterghana/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 text-ink underline decoration-ink/40 underline-offset-4 hover:decoration-accent"
                                >
                                    Lancaster University Ghana
                                    <ArrowUpRight className="h-3.5 w-3.5" />
                                </Link>
                                <Link
                                    href="https://www.linkedin.com/company/galaxyintschool/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 text-ink underline decoration-ink/40 underline-offset-4 hover:decoration-accent"
                                >
                                    Galaxy International School
                                    <ArrowUpRight className="h-3.5 w-3.5" />
                                </Link>
                            </div>
                            <Link
                                href="https://www.linkedin.com/feed/update/urn:li:activity:7330606104315314178/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-7 inline-flex items-center gap-2 border border-ink px-5 py-3 text-sm text-ink transition-colors hover:bg-ink hover:text-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                            >
                                Read the original LinkedIn post
                                <ArrowUpRight className="h-4 w-4" />
                            </Link>
                        </div>
                        <p className="max-w-xs text-sm leading-6 text-ink-muted">
                            Serving as a judge at a milestone celebration of
                            student creativity, science, and making.
                        </p>
                    </div>
                    <div className="mt-10 border-t border-rule pt-8">
                        <LightboxGallery
                            images={[...galaxyPhotos, ...galaxyImages]}
                            postUrl="https://www.linkedin.com/feed/update/urn:li:activity:7330606104315314178/"
                        />
                    </div>
                </CollapsibleSection>

                <CollapsibleSection
                    title="Mentoring young innovators at the Teens in AI Hackathon"
                    summaryDescription="AI · Robotics · Design thinking · Posted 22 Nov 2024"
                    className="border-t border-rule py-10 md:py-14"
                    summaryClassName="py-0"
                    titleClassName="max-w-3xl text-2xl font-medium leading-tight text-ink md:text-[2rem]"
                    contentClassName="pt-6 pb-0"
                >
                    <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_18rem] md:gap-16">
                        <div>
                            <p className="mt-5 max-w-3xl leading-7 text-ink">
                                As a passionate advocate for AI, robotics, and
                                STEM education, I had the pleasure of mentoring
                                young innovators in Eclectic Love for the Teens
                                in AI Hackathon 2024.
                            </p>
                            <p className="mt-4 max-w-3xl leading-7 text-ink">
                                I guided participants through design thinking
                                as they developed AI and robotics solutions for
                                gender equality challenges. Together, we
                                defined their chosen problems, kept the end
                                user at the center rather than the technology,
                                and shaped their ideas into prototypes and
                                minimum viable products with thoughtful user
                                experiences.
                            </p>
                            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm">
                                <Link
                                    href="https://www.linkedin.com/company/eclectic-love/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 text-ink underline decoration-ink/40 underline-offset-4 hover:decoration-accent"
                                >
                                    Eclectic Love
                                    <ArrowUpRight className="h-3.5 w-3.5" />
                                </Link>
                                <Link
                                    href="https://www.linkedin.com/company/teensinai/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 text-ink underline decoration-ink/40 underline-offset-4 hover:decoration-accent"
                                >
                                    Teens in AI
                                    <ArrowUpRight className="h-3.5 w-3.5" />
                                </Link>
                            </div>
                            <Link
                                href="https://www.linkedin.com/feed/update/urn:li:activity:7265714415256104960/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-7 inline-flex items-center gap-2 border border-ink px-5 py-3 text-sm text-ink transition-colors hover:bg-ink hover:text-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                            >
                                Read the original LinkedIn post
                                <ArrowUpRight className="h-4 w-4" />
                            </Link>
                        </div>
                        <p className="max-w-xs text-sm leading-6 text-ink-muted">
                            Helping young people build human-centered AI and
                            robotics ideas into practical prototypes.
                        </p>
                    </div>
                    <div className="mt-10 border-t border-rule pt-8">
                        <LightboxGallery
                            images={eclecticLoveImages}
                            postUrl="https://www.linkedin.com/feed/update/urn:li:activity:7265714415256104960/"
                        />
                    </div>
                </CollapsibleSection>

                <CollapsibleSection
                    title="Batch Logo Animation"
                    summaryDescription="Motion graphics · 9 June 2022"
                    className="border-t border-rule py-10 md:py-14"
                    contentClassName="pt-6"
                >
                    <p className="max-w-2xl text-ink">
                        Tried something for the #batchlogochallenge @BatchMotion @rowlandolamide @jobosonchisa
                    </p>
                    <iframe
                        title="Batch Logo Animation video and original post on X"
                        src="https://platform.twitter.com/embed/Tweet.html?id=1534801453981782016&theme=light&dnt=true"
                        loading="lazy"
                        allow="fullscreen"
                        className="mt-5 h-[600px] w-full max-w-[550px] border border-rule"
                    />
                    <Link
                        href="https://x.com/desmondknunoo/status/1534801453981782016"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm text-ink underline underline-offset-4"
                    >
                        View original post on X <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                    </Link>
                </CollapsibleSection>

                <div data-scroll-reveal className="border-t border-rule py-8">
                    <Link
                        href="https://linktr.ee/desmondknunoo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-ink underline underline-offset-4"
                    >
                        Find me on Linktree <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                    </Link>
                </div>
            </div>
            <Footer />
        </main>
    );
}
