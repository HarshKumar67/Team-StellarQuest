import React, { useRef, useEffect, useCallback } from 'react';

// FIX: Added `transition: string` to the return type definition.
// The style object returned by the hook includes a `transition` property, which was causing a type error.
type UseScrollFadeInReturn<T extends HTMLElement> = [
    React.RefObject<T>,
    { opacity: number; transform: string; transition: string }
];

const useScrollFadeIn = <T extends HTMLElement,>(): UseScrollFadeInReturn<T> => {
    const dom = useRef<T>(null);
    const [style, setStyle] = React.useState({
        opacity: 0,
        transform: 'translateY(20px)',
    });

    const handleScroll = useCallback(([entry]: IntersectionObserverEntry[]) => {
        if (entry.isIntersecting) {
            setStyle({
                opacity: 1,
                transform: 'translateY(0px)',
            });
        }
    }, []);

    useEffect(() => {
        let observer: IntersectionObserver;
        const { current } = dom;

        if (current) {
            observer = new IntersectionObserver(handleScroll, { threshold: 0.1 });
            observer.observe(current);

            return () => observer && observer.disconnect();
        }
    }, [handleScroll]);

    return [dom, { ...style, transition: 'opacity 0.6s ease-out, transform 0.6s ease-out' }];
};

export default useScrollFadeIn;
