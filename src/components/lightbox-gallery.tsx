"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ExternalLink, X } from "lucide-react";

type GalleryImage = {
    src: string;
    alt: string;
};

type LightboxGalleryProps = {
    images: GalleryImage[];
    postUrl: string;
    layout?: "bento" | "pair" | "featured";
};

export function LightboxGallery({
    images,
    postUrl,
    layout = "bento",
}: LightboxGalleryProps) {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;

        if (activeIndex !== null && !dialog.open) {
            dialog.showModal();
        } else if (activeIndex === null && dialog.open) {
            dialog.close();
        }
    }, [activeIndex]);

    const activeImage = activeIndex === null ? null : images[activeIndex];
    const closeLightbox = () => setActiveIndex(null);

    const moveImage = (direction: -1 | 1) => {
        setActiveIndex((index) => {
            if (index === null) return index;
            return (index + direction + images.length) % images.length;
        });
    };

    const gridClass =
        layout === "featured"
            ? "grid grid-cols-1"
            : layout === "pair"
              ? "grid grid-cols-2 gap-3 sm:gap-4"
              : "grid auto-rows-[7rem] grid-cols-2 gap-3 sm:auto-rows-[9rem] sm:gap-4 lg:auto-rows-[12rem] lg:grid-cols-4";

    return (
        <>
            <div className={gridClass}>
                {images.map((image, index) => {
                    const tileClass =
                        layout === "featured"
                            ? "aspect-[4/3] sm:aspect-[16/9]"
                            : layout === "pair"
                              ? "aspect-square sm:aspect-[4/3]"
                              : index === 0
                                ? "col-span-2 row-span-2 h-full min-h-0"
                                : index === 5
                                  ? "col-span-2 h-full min-h-0"
                                  : "h-full min-h-0";

                    return (
                        <button
                            key={image.src}
                            type="button"
                            onClick={() => setActiveIndex(index)}
                            aria-label={`Open image ${index + 1} of ${images.length}: ${image.alt}`}
                            className={`group relative block w-full cursor-zoom-in overflow-hidden bg-zinc-900 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-300 ${tileClass}`}
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                quality={25}
                                sizes={
                                    layout === "featured"
                                        ? "(max-width: 896px) 100vw, 896px"
                                        : "(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                                }
                                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                            />
                            <span className="sr-only">Open in lightbox</span>
                        </button>
                    );
                })}
            </div>

            <dialog
                ref={dialogRef}
                aria-label="Image lightbox"
                onClose={closeLightbox}
                onClick={(event) => {
                    if (event.target === event.currentTarget) closeLightbox();
                }}
                onKeyDown={(event) => {
                    if (event.key === "ArrowLeft") moveImage(-1);
                    if (event.key === "ArrowRight") moveImage(1);
                }}
                className="m-auto w-[calc(100%-2rem)] max-w-6xl bg-transparent p-0 text-zinc-100 backdrop:bg-black/90"
            >
                {activeImage && (
                    <div className="overflow-hidden bg-zinc-950">
                        <div className="flex items-center justify-between gap-4 px-4 py-3 sm:px-6">
                            <p className="min-w-0 truncate text-sm text-zinc-300">
                                {activeImage.alt}
                                <span className="ml-2 text-zinc-500">
                                    {activeIndex! + 1} / {images.length}
                                </span>
                            </p>
                            <button
                                type="button"
                                onClick={closeLightbox}
                                aria-label="Close lightbox"
                                className="inline-flex h-11 w-11 shrink-0 items-center justify-center text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-300"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>
                        <div className="relative flex h-[min(72vh,48rem)] items-center justify-center bg-black">
                            <Image
                                key={activeImage.src}
                                src={activeImage.src}
                                alt={activeImage.alt}
                                fill
                                priority
                                quality={90}
                                sizes="100vw"
                                className="object-contain"
                            />
                            {images.length > 1 && (
                                <>
                                    <button
                                        type="button"
                                        onClick={() => moveImage(-1)}
                                        aria-label="Previous image"
                                        className="absolute left-3 inline-flex h-11 w-11 items-center justify-center bg-black/70 text-white transition-colors hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-300 sm:left-5"
                                    >
                                        <ArrowLeft className="h-5 w-5" />
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => moveImage(1)}
                                        aria-label="Next image"
                                        className="absolute right-3 inline-flex h-11 w-11 items-center justify-center bg-black/70 text-white transition-colors hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-300 sm:right-5"
                                    >
                                        <ArrowRight className="h-5 w-5" />
                                    </button>
                                </>
                            )}
                        </div>
                        <div className="flex justify-end px-4 py-3 sm:px-6">
                            <a
                                href={postUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex min-h-11 items-center gap-2 text-sm text-zinc-300 underline decoration-zinc-700 underline-offset-4 hover:text-white hover:decoration-white"
                            >
                                View original post
                                <ExternalLink className="h-4 w-4" />
                            </a>
                        </div>
                    </div>
                )}
            </dialog>
        </>
    );
}
