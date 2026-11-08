"use client";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

const NUDGE_DELAY = 900;
const NUDGE_DISTANCE = 340;
const NUDGE_DURATION = 3200;
const NUDGE_PAUSE = 700;
const HIDE_THRESHOLD = 24;

function easeInOutSine(t: number) {
    return -(Math.cos(Math.PI * t) - 1) / 2;
}

export function ScrollHint() {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        function handleScroll() {
            setVisible(window.scrollY <= HIDE_THRESHOLD);
        }
        window.addEventListener("scroll", handleScroll, { passive: true });

        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;
        if (prefersReducedMotion) {
            return () => window.removeEventListener("scroll", handleScroll);
        }

        let cancelled = false;
        const cancel = () => {
            cancelled = true;
        };
        const interactionEvents: (keyof WindowEventMap)[] = [
            "wheel",
            "touchstart",
            "pointerdown",
        ];
        interactionEvents.forEach((event) =>
            window.addEventListener(event, cancel, { passive: true, once: true })
        );

        const startTimer = window.setTimeout(() => {
            if (cancelled || window.scrollY > 10) return;
            const startY = window.scrollY;
            const startTime = performance.now();

            function step(now: number) {
                if (cancelled) return;
                const t = Math.min((now - startTime) / NUDGE_DURATION, 1);
                window.scrollTo(0, startY + NUDGE_DISTANCE * easeInOutSine(t));
                if (t < 1) {
                    requestAnimationFrame(step);
                } else {
                    window.setTimeout(() => {
                        if (!cancelled) window.scrollTo({ top: 0, behavior: "smooth" });
                    }, NUDGE_PAUSE);
                }
            }
            requestAnimationFrame(step);
        }, NUDGE_DELAY);

        return () => {
            cancelled = true;
            window.clearTimeout(startTimer);
            window.removeEventListener("scroll", handleScroll);
            interactionEvents.forEach((event) =>
                window.removeEventListener(event, cancel)
            );
        };
    }, []);

    return (
        <div
            aria-hidden="true"
            className={`pointer-events-none fixed inset-x-0 bottom-6 z-40 flex justify-center transition-opacity duration-500 ${
                visible ? "opacity-100" : "opacity-0"
            }`}
        >
            <div className="flex flex-col items-center gap-1 text-zinc-400">
                <span className="text-xs tracking-wide">Scroll</span>
                <ChevronDown className="h-5 w-5 motion-safe:animate-bounce" />
            </div>
        </div>
    );
}
