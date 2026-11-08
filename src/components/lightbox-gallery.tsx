"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ExternalLink, X } from "lucide-react";

type GalleryImage = {
    src: string;
    alt: string;
    fit?: "cover" | "contain";
};

type LightboxGalleryProps = {
    images: GalleryImage[];
    postUrl?: string;
    sourceLabel?: string;
};

export function LightboxGallery({
    images,
    postUrl,
    sourceLabel = "View original post",
}: LightboxGalleryProps) {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const dialogRef = useRef<HTMLDialogElement>(null);
    const rowRef = useRef<HTMLDivElement>(null);
    const [canScroll, setCanScroll] = useState({ left: false, right: false });

    useEffect(() => {
        const row = rowRef.current;
        if (!row) return;

        function updateControls() {
            if (!row) return;
            setCanScroll({
                left: row.scrollLeft > 1,
                right: row.scrollLeft + row.clientWidth < row.scrollWidth - 1,
            });
        }

        const observer = new ResizeObserver(updateControls);
        observer.observe(row);
        row.addEventListener("scroll", updateControls, { passive: true });
        return () => {
            observer.disconnect();
            row.removeEventListener("scroll", updateControls);
        };
    }, [images.length]);

    function scrollRow(direction: -1 | 1) {
        const row = rowRef.current;
        const firstTile = row?.firstElementChild;
        if (!row || !firstTile) return;

        const gap = parseFloat(getComputedStyle(row).columnGap);
        const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth";
        row.scrollBy({ left: direction * (firstTile.clientWidth + gap), behavior });
    }

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

    return (
        <>
            {(canScroll.left || canScroll.right) && (
                <div className="mb-2 flex items-center justify-between gap-3">
                    <p className="text-sm text-ink-muted">{images.length} images · Scroll to browse</p>
                    <div className="flex gap-2">
                        <button
                            type="button"
                            aria-label="Scroll gallery left"
                            aria-disabled={!canScroll.left}
                            onClick={() => canScroll.left && scrollRow(-1)}
                            className="inline-flex h-11 w-11 items-center justify-center border border-rule text-ink hover:border-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent aria-disabled:opacity-40"
                        >
                            <ArrowLeft aria-hidden="true" className="h-5 w-5" />
                        </button>
                        <button
                            type="button"
                            aria-label="Scroll gallery right"
                            aria-disabled={!canScroll.right}
                            onClick={() => canScroll.right && scrollRow(1)}
                            className="inline-flex h-11 w-11 items-center justify-center border border-rule text-ink hover:border-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent aria-disabled:opacity-40"
                        >
                            <ArrowRight aria-hidden="true" className="h-5 w-5" />
                        </button>
                    </div>
                </div>
            )}
            <div
                ref={rowRef}
                role="group"
                aria-label="Image gallery"
                className="flex w-full min-w-0 snap-x snap-proximity gap-4 overflow-x-auto overscroll-x-contain p-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
                {images.map((image, index) => (
                    <button
                        key={image.src}
                        type="button"
                        onClick={() => setActiveIndex(index)}
                        aria-label={`Open image ${index + 1} of ${images.length}: ${image.alt}`}
                        className={`group relative aspect-video max-w-4xl shrink-0 snap-start cursor-zoom-in overflow-hidden bg-paper-raised focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${images.length === 1 ? "w-full" : "w-[90%] sm:w-[76%] lg:w-[68%]"}`}
                    >
                        <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            quality={75}
                            sizes={images.length === 1 ? "(max-width: 896px) 100vw, 896px" : "(max-width: 639px) 90vw, (max-width: 1023px) 76vw, (max-width: 1318px) 68vw, 896px"}
                            className={`${image.fit === "contain" ? "object-contain" : "object-cover"} transition-transform duration-500 motion-reduce:transition-none group-hover:scale-[1.03] motion-reduce:group-hover:scale-100`}
                        />
                    </button>
                ))}
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
                className="m-auto w-[calc(100%-2rem)] max-w-6xl bg-transparent p-0 text-ink backdrop:bg-black/90"
            >
                {activeImage && (
                    <div className="overflow-hidden bg-paper">
                        <div className="flex items-center justify-between gap-4 px-4 py-3 sm:px-6">
                            <p className="min-w-0 truncate text-sm text-ink">
                                {activeImage.alt}
                                <span className="ml-2 text-ink-faint">
                                    {activeIndex! + 1} / {images.length}
                                </span>
                            </p>
                            <button
                                type="button"
                                onClick={closeLightbox}
                                aria-label="Close lightbox"
                                className="inline-flex h-11 w-11 shrink-0 items-center justify-center text-ink transition-colors hover:bg-paper-raised hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>
                        <div className="relative flex h-[min(72vh,48rem)] items-center justify-center bg-paper">
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
                                        className="absolute left-3 inline-flex h-11 w-11 items-center justify-center bg-paper/90 text-ink transition-colors hover:bg-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:left-5"
                                    >
                                        <ArrowLeft className="h-5 w-5" />
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => moveImage(1)}
                                        aria-label="Next image"
                                        className="absolute right-3 inline-flex h-11 w-11 items-center justify-center bg-paper/90 text-ink transition-colors hover:bg-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:right-5"
                                    >
                                        <ArrowRight className="h-5 w-5" />
                                    </button>
                                </>
                            )}
                        </div>
                        {postUrl && <div className="flex justify-end px-4 py-3 sm:px-6">
                            <a
                                href={postUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex min-h-11 items-center gap-2 text-sm text-ink underline decoration-ink/40 underline-offset-4 hover:text-accent hover:decoration-accent"
                            >
                                {sourceLabel}
                                <ExternalLink className="h-4 w-4" />
                            </a>
                        </div>}
                    </div>
                )}
            </dialog>
        </>
    );
}
