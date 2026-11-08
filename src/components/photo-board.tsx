import Image from "next/image";
import Link from "next/link";

const plates = [
    {
        src: "/images/stories/etc-1.webp",
        alt: "Desmond Kwame Nunoo teaching at the Emerging Technologies Centre",
        caption: "Teaching at the ETC",
        href: "/trainings#emerging-technologies-weekend-programme-2025",
        rotate: "-3deg",
        position: "md:left-0 md:top-[2%] md:w-[36%]",
    },
    {
        src: "/images/stories/weekend-robotics-teaching.webp",
        alt: "Students gathered around a robot dog during a weekend robotics session",
        caption: "Weekend robotics",
        href: "/trainings#emerging-technologies-weekend-programme-2025",
        rotate: "2.5deg",
        position: "md:left-[38%] md:top-[8%] md:w-[28%]",
    },
    {
        src: "/images/stories/pictures-10.webp",
        alt: "Cyber Squad, champions of the Stars League at the 2024 Ghana Robotics Competition, holding their trophy",
        caption: "GRC 2024 champions",
        href: "/featured#robotics-competitions",
        rotate: "-1.5deg",
        position: "md:right-0 md:top-0 md:w-[24%]",
    },
    {
        src: "/images/stories/etc-robot-demonstration.webp",
        alt: "Visitors watching a robot arm demonstration at the Emerging Technologies Centre",
        caption: "Robot arm demonstration",
        href: "/featured#etc-opening",
        rotate: "3deg",
        position: "md:right-[4%] md:bottom-0 md:w-[40%]",
    },
];

export function PhotoBoard() {
    return (
        <section aria-label="Photographs from my work" className="mx-auto max-w-7xl px-6 md:px-12">
            <div className="relative border-l border-accent pl-5 md:h-[40rem] md:pl-10 lg:h-[46rem]">
                <div
                    aria-hidden="true"
                    className="absolute bottom-[2%] left-[6%] hidden aspect-square w-[30%] rounded-full border border-dotted border-ink/25 md:block"
                />
                <div className="grid grid-cols-2 gap-x-4 gap-y-6 md:block">
                    {plates.map((plate) => (
                        <Link
                            key={plate.src}
                            href={plate.href}
                            style={{ transform: `rotate(${plate.rotate})` }}
                            className={`group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-paper md:absolute ${plate.position}`}
                        >
                            <figure className="border border-rule bg-paper-raised p-1.5 transition-colors group-hover:border-ink">
                                <div className="relative aspect-[4/3] overflow-hidden">
                                    <Image
                                        src={plate.src}
                                        alt={plate.alt}
                                        fill
                                        priority
                                        sizes="(max-width: 768px) 45vw, 36vw"
                                        className="object-cover"
                                    />
                                </div>
                                <figcaption className="font-display mt-2 px-1 pb-1 text-[11px] uppercase tracking-[0.18em] text-ink-muted">
                                    {plate.caption}
                                </figcaption>
                            </figure>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
