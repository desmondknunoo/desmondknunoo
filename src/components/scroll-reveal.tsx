'use client'

import { useEffect } from 'react'

const revealSelector = 'main section, main article, main [data-scroll-reveal]'

export function ScrollReveal() {
    useEffect(() => {
        if (
            window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
            !('IntersectionObserver' in window)
        ) {
            return
        }

        const observed = new WeakSet<Element>()
        const intersectionObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible')
                    entry.target.classList.remove('scroll-pending')
                    intersectionObserver.unobserve(entry.target)
                }
            })
        }, { threshold: 0 })

        const observe = (element: Element) => {
            if (observed.has(element)) return

            element.setAttribute('data-scroll-reveal', '')
            element.classList.add('scroll-pending')
            observed.add(element)
            intersectionObserver.observe(element)
        }

        const scan = (node: Node) => {
            if (node instanceof Element) {
                if (node.matches(revealSelector)) observe(node)
                node.querySelectorAll(revealSelector).forEach(observe)
            }
        }

        scan(document.body)

        const mutationObserver = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                mutation.addedNodes.forEach(scan)
            })
        })
        mutationObserver.observe(document.body, { childList: true, subtree: true })

        return () => {
            mutationObserver.disconnect()
            intersectionObserver.disconnect()
        }
    }, [])

    return null
}