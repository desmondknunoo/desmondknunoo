import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { workItems, getWorkItem } from "@/lib/work";

export function generateStaticParams() {
    return workItems.map((item) => ({ slug: item.slug }));
}

export default async function WorkDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const item = getWorkItem(slug);

    if (!item) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-zinc-950">
            <div className="relative h-[45vh] min-h-[320px] w-full overflow-hidden">
                <Image
                    src={item.thumbnail}
                    alt={item.title}
                    fill
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-zinc-950/10" />
                <div className="absolute inset-0 flex flex-col justify-end px-6 pb-10 lg:px-12">
                    <div className="mx-auto w-full max-w-4xl">
                        <Link
                            href="/"
                            className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-zinc-300 hover:text-white"
                        >
                            <ArrowLeft className="h-4 w-4" />
                            Back to portfolio
                        </Link>
                        <p className="text-sm font-medium uppercase tracking-wide text-zinc-400">
                            {item.category}
                        </p>
                        <h1 className="mt-2 text-3xl font-bold text-zinc-100 md:text-5xl">
                            {item.title}
                        </h1>
                    </div>
                </div>
            </div>

            <div className="mx-auto max-w-4xl px-6 py-12 lg:px-12">
                <p className="text-xl font-light text-zinc-400">{item.summary}</p>

                {item.body.length > 0 && (
                    <div className="mt-8 space-y-4 text-zinc-300">
                        {item.body.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                )}

                {item.externalLinks && item.externalLinks.length > 0 && (
                    <div className="mt-8 flex flex-wrap gap-2">
                        {item.externalLinks.map((link, index) => (
                            <Link
                                key={index}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 rounded-full bg-zinc-200 px-4 py-2 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-300"
                            >
                                {link.label}
                                <ExternalLink className="h-3 w-3" />
                            </Link>
                        ))}
                    </div>
                )}

                <hr className="mt-12 border-zinc-800" />

                <p className="mt-6 text-zinc-500">
                    <Link href="/" className="font-medium text-zinc-200 hover:underline">
                        ← Back to all work
                    </Link>
                </p>
            </div>
        </main>
    );
}
