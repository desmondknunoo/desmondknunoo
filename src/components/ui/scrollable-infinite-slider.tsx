'use client';

import { useAnimationFrame } from 'framer-motion';
import { useEffect, useRef } from 'react';
import useMeasure from 'react-use-measure';

type ScrollableInfiniteSliderProps = {
    children: React.ReactNode;
    duration: number;
    gap: number;
    label: string;
    autoPlay?: boolean;
};

export function ScrollableInfiniteSlider({ children, duration, gap, label, autoPlay = true }: ScrollableInfiniteSliderProps) {
    const viewport = useRef<HTMLDivElement>(null);
    const [measure, { width }] = useMeasure();
    const cycle = width + gap;
    const hovered = useRef(false);
    const focused = useRef(false);
    const dragging = useRef(false);
    const pointerActive = useRef(false);
    const pointerX = useRef(0);
    const pauseUntil = useRef(0);
    const remainder = useRef(0);

    // Keep the viewport in the middle copy, where both directions have runway.
    // Rebasing by one full copy preserves the visible logos and their spacing.
    function wrapScroll() {
        const element = viewport.current;
        if (!element || !width) return;
        if (element.scrollLeft < cycle || element.scrollLeft >= cycle * 2) {
            element.scrollLeft = cycle + ((element.scrollLeft % cycle) + cycle) % cycle;
        }
    }

    useEffect(() => {
        if (viewport.current && width) viewport.current.scrollLeft = cycle;
    }, [cycle, width]);

    useAnimationFrame((_time, delta) => {
        const element = viewport.current;
        if (!autoPlay || !element || !width || hovered.current || focused.current || pointerActive.current || performance.now() < pauseUntil.current) return;
        // Accumulate subpixels so slow motion stays consistent across browsers.
        const distance = remainder.current + cycle / duration * Math.min(delta, 64) / 1000;
        const pixels = Math.floor(distance);
        remainder.current = distance - pixels;
        if (pixels) {
            element.scrollLeft += pixels;
            wrapScroll();
        }
    });

    function pauseAfterInteraction() {
        pauseUntil.current = performance.now() + 1500;
    }

    return (
        <div
            ref={viewport}
            role="region"
            aria-label={label}
            tabIndex={0}
            className="cursor-grab overflow-x-auto overflow-y-hidden overscroll-x-contain select-none active:cursor-grabbing focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-zinc-500 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            onScroll={wrapScroll}
            onMouseEnter={() => { hovered.current = true; }}
            onMouseLeave={() => { hovered.current = false; }}
            onFocus={() => { focused.current = true; }}
            onBlur={() => { focused.current = false; }}
            onWheel={pauseAfterInteraction}
            onPointerDown={(event) => {
                pointerActive.current = true;
                pauseAfterInteraction();
                if (event.pointerType !== 'mouse' || event.button !== 0) return;
                dragging.current = true;
                pointerX.current = event.clientX;
                event.currentTarget.setPointerCapture(event.pointerId);
                event.preventDefault();
            }}
            onPointerMove={(event) => {
                if (!dragging.current) return;
                event.currentTarget.scrollLeft += pointerX.current - event.clientX;
                pointerX.current = event.clientX;
                wrapScroll();
            }}
            onPointerUp={(event) => {
                pointerActive.current = false;
                dragging.current = false;
                pauseAfterInteraction();
                if (event.currentTarget.hasPointerCapture(event.pointerId)) {
                    event.currentTarget.releasePointerCapture(event.pointerId);
                }
            }}
            onPointerCancel={() => { pointerActive.current = false; dragging.current = false; pauseAfterInteraction(); }}
            onLostPointerCapture={() => { pointerActive.current = false; dragging.current = false; }}
            onKeyDown={(event) => {
                if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
                event.preventDefault();
                event.currentTarget.scrollLeft += event.key === 'ArrowRight' ? 160 : -160;
                wrapScroll();
            }}
        >
            <div aria-hidden="true" className="flex w-max" style={{ gap }}>
                {[0, 1, 2].map((copy) => (
                    <div key={copy} ref={copy === 0 ? measure : undefined} className="flex shrink-0 items-center" style={{ gap }}>
                        {children}
                    </div>
                ))}
            </div>
        </div>
    );
}
