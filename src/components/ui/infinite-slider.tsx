'use client';
import { cn } from '@/lib/utils';
import { useMotionValue, animate, motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import useMeasure from 'react-use-measure';

type InfiniteSliderProps = {
    children: React.ReactNode;
    gap?: number;
    duration?: number;
    durationOnHover?: number;
    direction?: 'horizontal' | 'vertical';
    reverse?: boolean;
    className?: string;
    speed?: number;
    speedOnHover?: number;
    pauseOnHover?: boolean;
};

export function InfiniteSlider({
    children,
    gap = 16,
    duration = 25,
    durationOnHover,
    direction = 'horizontal',
    reverse = false,
    className,
    speed,
    speedOnHover,
    pauseOnHover = false,
}: InfiniteSliderProps) {
    // Support both duration and speed props
    const actualDuration = speed ? 1000 / speed : duration;
    const actualDurationOnHover = speedOnHover ? 1000 / speedOnHover : durationOnHover;

    const [currentDuration, setCurrentDuration] = useState(actualDuration);
    const [ref, { width, height }] = useMeasure();
    const translation = useMotionValue(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [key, setKey] = useState(0);
    const animationControls = useRef<ReturnType<typeof animate> | null>(null);
    const isHovered = useRef(false);

    useEffect(() => {
        let controls;
        const size = direction === 'horizontal' ? width : height;
        const contentSize = size + gap;
        const from = reverse ? -contentSize / 2 : 0;
        const to = reverse ? 0 : -contentSize / 2;

        if (isTransitioning) {
            controls = animate(translation, [translation.get(), to], {
                ease: 'linear',
                duration:
                    currentDuration * Math.abs((translation.get() - to) / contentSize),
                onComplete: () => {
                    setIsTransitioning(false);
                    setKey((prevKey) => prevKey + 1);
                },
            });
        } else {
            controls = animate(translation, [from, to], {
                ease: 'linear',
                duration: currentDuration,
                repeat: Infinity,
                repeatType: 'loop',
                repeatDelay: 0,
                onRepeat: () => {
                    translation.set(from);
                },
            });
        }

        animationControls.current = controls;
        if (pauseOnHover && isHovered.current) controls.pause();

        return () => controls.stop();
    }, [
        key,
        translation,
        currentDuration,
        width,
        height,
        gap,
        isTransitioning,
        direction,
        reverse,
        pauseOnHover,
    ]);

    const hoverProps = !pauseOnHover && actualDurationOnHover
        ? {
            onHoverStart: () => {
                setIsTransitioning(true);
                setCurrentDuration(actualDurationOnHover);
            },
            onHoverEnd: () => {
                setIsTransitioning(true);
                setCurrentDuration(actualDuration);
            },
        }
        : {};

    return (
        <div
            className={cn('overflow-hidden', className)}
            onMouseEnter={pauseOnHover ? () => {
                isHovered.current = true;
                animationControls.current?.pause();
            } : undefined}
            onMouseLeave={pauseOnHover ? () => {
                isHovered.current = false;
                animationControls.current?.play();
            } : undefined}
        >
            <motion.div
                className='flex w-max'
                style={{
                    ...(direction === 'horizontal'
                        ? { x: translation }
                        : { y: translation }),
                    gap: `${gap}px`,
                    flexDirection: direction === 'horizontal' ? 'row' : 'column',
                }}
                ref={ref}
                {...hoverProps}
            >
                {children}
                {children}
            </motion.div>
        </div>
    );
}
