import { useEffect, useState, useRef } from "react";

export function useHeadsObserver() {
    const observer = useRef<IntersectionObserver | null>(null);
    const [activeId, setActiveId] = useState("");

    useEffect(() => {
        const handleObserver = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry: IntersectionObserverEntry) => {
                if (entry?.isIntersecting) {
                    setActiveId(entry.target.id);
                }
            });
        };

        observer.current = new IntersectionObserver(handleObserver, {
            // rootMargin: "-20% 0% -35% 0px"
            threshold: 0.7
        });

        const elements = document.querySelectorAll("[data-section-title]");
        elements.forEach(elem => observer.current?.observe(elem));

        return () => observer.current?.disconnect();
    }, []);

    return { activeId };
}
