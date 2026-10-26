import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Footer } from "@/components/footer";
import { LightboxGallery } from "@/components/lightbox-gallery";
import { SiteNav } from "@/components/site-nav";

export const metadata: Metadata = {
    title: "Social Media | Desmond Kwame Nunoo",
    description:
        "Stories and updates from Desmond Kwame Nunoo's work in technology and STEM education.",
};

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
        <main className="min-h-screen bg-zinc-950 text-zinc-100">
            <div className="mx-auto max-w-7xl px-6 pt-8 md:px-12 md:pt-10">
                <header className="flex items-center justify-between gap-5">
                    <Link href="/" className="text-sm font-semibold tracking-wide text-zinc-200">
                        DKN
                    </Link>
                    <SiteNav />
                </header>

                <Link
                    href="/about"
                    className="mt-16 inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-white"
                >
                    <ArrowLeft className="h-4 w-4" />
                    About
                </Link>

                <section className="border-b border-zinc-800 py-12 md:py-16">
                    <h1 className="max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl">
                        Social Media
                    </h1>
                    <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-300">
                        Notes and stories from my work introducing young people
                        to emerging technologies.
                    </p>
                </section>

                <article className="grid gap-10 py-10 md:grid-cols-[minmax(0,1fr)_18rem] md:gap-16 md:py-14">
                    <div>
                        <p className="text-sm text-zinc-400">STEM Education · Accra, Ghana</p>
                        <h2 className="mt-3 max-w-3xl text-2xl font-semibold leading-tight md:text-4xl">
                            From emerging technologies bootcamp to the Google Accra AI Community Centre
                        </h2>
                        <p className="mt-5 max-w-3xl leading-7 text-zinc-300">
                            Two months after the Emerging Technologies Bootcamp at
                            Lancaster University Ghana, the cohort and their
                            school facilitators visited the Google Accra AI
                            Community Centre. The bootcamp was sponsored by the
                            KGL Foundation.
                        </p>
                        <p className="mt-4 max-w-3xl leading-7 text-zinc-300">
                            During the program, I introduced high school students
                            to machine learning, microcontroller programming, 3D
                            modelling for printing, and agentic coding for
                            functional wrappers around their machine-learning
                            models. The visit brought those ideas closer to
                            real-world applications.
                        </p>
                        <p className="mt-4 max-w-3xl leading-7 text-zinc-300">
                            At the centre, students explored KODE VR with
                            InovTech STEM Center, learned about Google Open
                            Buildings, an open-access building-outline dataset
                            made with AI and satellite imagery, and heard from
                            STEMAIDE about using AI tools to make work easier.
                        </p>
                        <p className="mt-4 max-w-3xl leading-7 text-zinc-300">
                            The visit was coordinated by{" "}
                            <Link
                                href="https://www.linkedin.com/in/frederick-jojo-kwofie-839a2b57/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-zinc-100 underline decoration-zinc-600 underline-offset-4 hover:decoration-white"
                            >
                                Frederick Jojo Kwofie
                            </Link>
                            .
                        </p>
                        <Link
                            href={postUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-7 inline-flex items-center gap-2 rounded-full bg-zinc-100 px-5 py-3 text-sm font-medium text-zinc-950 transition-colors hover:bg-white"
                        >
                            Read the original LinkedIn post
                            <ArrowUpRight className="h-4 w-4" />
                        </Link>
                    </div>

                    <aside className="border-t border-zinc-800 pt-6 md:border-l md:border-t-0 md:pl-7 md:pt-0">
                        <h3 className="text-sm font-medium text-zinc-200">With</h3>
                        <ul className="mt-4 space-y-3">
                            {partners.map((partner) => (
                                <li key={partner.label}>
                                    <Link
                                        href={partner.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-white"
                                    >
                                        {partner.label}
                                        <ArrowUpRight className="h-3.5 w-3.5" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </aside>
                </article>

                <section className="border-t border-zinc-800 py-10 md:py-12">
                    <div className="mb-6 flex items-end justify-between gap-6">
                        <div>
                            <h3 className="text-xl font-semibold">Photos from the bootcamp and visit</h3>
                            <p className="mt-2 text-sm text-zinc-400">
                                Shared with the original LinkedIn post.
                            </p>
                        </div>
                        <Link
                            href={postUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden items-center gap-2 text-sm text-zinc-300 underline decoration-zinc-700 underline-offset-4 hover:decoration-white sm:inline-flex"
                        >
                            View post
                            <ArrowUpRight className="h-4 w-4" />
                        </Link>
                    </div>
                    <LightboxGallery images={images} postUrl={postUrl} />
                </section>

                <article className="border-t border-zinc-800 py-10 md:py-14">
                    <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_18rem] md:gap-16">
                        <div>
                            <p className="text-sm text-zinc-400">Engineering · Electronics · Education</p>
                            <h2 className="mt-3 max-w-3xl text-2xl font-semibold leading-tight md:text-4xl">
                                No hardware? No problem!
                            </h2>
                            <p className="mt-5 max-w-3xl leading-7 text-zinc-300">
                                Testing circuits and code no longer needs a desk
                                cluttered with wires and burned-out components.
                                Browser-based simulators let engineers,
                                hobbyists, and educators prototype in the cloud
                                without installing software.
                            </p>
                            <p className="mt-4 max-w-3xl leading-7 text-zinc-300">
                                From 3D breadboards to SPICE simulation, these
                                tools can help with teaching, debugging on the
                                go, and testing a circuit before ordering PCBs.
                            </p>
                            <Link
                                href="https://www.linkedin.com/feed/update/urn:li:activity:7470387419230527488/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-6 inline-flex items-center gap-2 rounded-full bg-zinc-100 px-5 py-3 text-sm font-medium text-zinc-950 transition-colors hover:bg-white"
                            >
                                Read the original LinkedIn post
                                <ArrowUpRight className="h-4 w-4" />
                            </Link>
                        </div>
                        <p className="max-w-xs text-sm leading-6 text-zinc-400">
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
                            layout="featured"
                        />
                    </div>
                    <div className="mt-10 grid gap-10 border-t border-zinc-800 pt-8 md:grid-cols-2 md:gap-12">
                        {simulatorGroups.map((group) => (
                            <section key={group.title}>
                                <h3 className="text-lg font-medium">{group.title}</h3>
                                <ul className="mt-4 divide-y divide-zinc-800">
                                    {group.tools.map((tool) => (
                                        <li key={tool.name} className="py-4 first:pt-0">
                                            <h4 className="font-medium text-zinc-200">{tool.name}</h4>
                                            <p className="mt-2 text-sm leading-6 text-zinc-400">
                                                {tool.description}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        ))}
                    </div>
                </article>

                <article className="border-t border-zinc-800 py-10 md:py-14">
                    <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_18rem] md:gap-16">
                        <div>
                            <p className="text-sm text-zinc-400">STEAM · Judging · Youth innovation</p>
                            <h2 className="mt-3 max-w-3xl text-2xl font-semibold leading-tight md:text-4xl">
                                Celebrating the next generation of changemakers
                            </h2>
                            <p className="mt-5 max-w-3xl leading-7 text-zinc-300">
                                I had the pleasure of serving as a judge,
                                representing Lancaster University Ghana, at the
                                20th edition of Galaxy International School
                                Ltd.&apos;s Science &amp; Makers&apos; Fair and
                                STEAM Competition 2025.
                            </p>
                            <p className="mt-4 max-w-3xl leading-7 text-zinc-300">
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
                                    className="inline-flex items-center gap-1 text-zinc-300 underline decoration-zinc-700 underline-offset-4 hover:decoration-white"
                                >
                                    Lancaster University Ghana
                                    <ArrowUpRight className="h-3.5 w-3.5" />
                                </Link>
                                <Link
                                    href="https://www.linkedin.com/company/galaxyintschool/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 text-zinc-300 underline decoration-zinc-700 underline-offset-4 hover:decoration-white"
                                >
                                    Galaxy International School
                                    <ArrowUpRight className="h-3.5 w-3.5" />
                                </Link>
                            </div>
                            <Link
                                href="https://www.linkedin.com/feed/update/urn:li:activity:7330606104315314178/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-7 inline-flex items-center gap-2 rounded-full bg-zinc-100 px-5 py-3 text-sm font-medium text-zinc-950 transition-colors hover:bg-white"
                            >
                                Read the original LinkedIn post
                                <ArrowUpRight className="h-4 w-4" />
                            </Link>
                        </div>
                        <p className="max-w-xs text-sm leading-6 text-zinc-400">
                            Serving as a judge at a milestone celebration of
                            student creativity, science, and making.
                        </p>
                    </div>
                    <div className="mt-10 border-t border-zinc-800 pt-8">
                        <LightboxGallery
                            images={galaxyImages}
                            postUrl="https://www.linkedin.com/feed/update/urn:li:activity:7330606104315314178/"
                        />
                    </div>
                </article>

                <article className="border-t border-zinc-800 py-10 md:py-14">
                    <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_18rem] md:gap-16">
                        <div>
                            <p className="text-sm text-zinc-400">AI · Robotics · Design thinking</p>
                            <h2 className="mt-3 max-w-3xl text-2xl font-semibold leading-tight md:text-4xl">
                                Mentoring young innovators at the Teens in AI Hackathon
                            </h2>
                            <p className="mt-5 max-w-3xl leading-7 text-zinc-300">
                                As a passionate advocate for AI, robotics, and
                                STEM education, I had the pleasure of mentoring
                                young innovators in Eclectic Love for the Teens
                                in AI Hackathon 2024.
                            </p>
                            <p className="mt-4 max-w-3xl leading-7 text-zinc-300">
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
                                    className="inline-flex items-center gap-1 text-zinc-300 underline decoration-zinc-700 underline-offset-4 hover:decoration-white"
                                >
                                    Eclectic Love
                                    <ArrowUpRight className="h-3.5 w-3.5" />
                                </Link>
                                <Link
                                    href="https://www.linkedin.com/company/teensinai/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 text-zinc-300 underline decoration-zinc-700 underline-offset-4 hover:decoration-white"
                                >
                                    Teens in AI
                                    <ArrowUpRight className="h-3.5 w-3.5" />
                                </Link>
                            </div>
                            <Link
                                href="https://www.linkedin.com/feed/update/urn:li:activity:7265714415256104960/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-7 inline-flex items-center gap-2 rounded-full bg-zinc-100 px-5 py-3 text-sm font-medium text-zinc-950 transition-colors hover:bg-white"
                            >
                                Read the original LinkedIn post
                                <ArrowUpRight className="h-4 w-4" />
                            </Link>
                        </div>
                        <p className="max-w-xs text-sm leading-6 text-zinc-400">
                            Helping young people build human-centered AI and
                            robotics ideas into practical prototypes.
                        </p>
                    </div>
                    <div className="mt-10 border-t border-zinc-800 pt-8">
                        <LightboxGallery
                            images={eclecticLoveImages}
                            postUrl="https://www.linkedin.com/feed/update/urn:li:activity:7265714415256104960/"
                            layout="pair"
                        />
                    </div>
                </article>

            </div>
            <Footer />
        </main>
    );
}
