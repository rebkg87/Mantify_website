import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AnimatedText = ({ text, className }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        gsap.fromTo(
            el,
            {
                opacity: 0,
                y: 10,
            },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "ease-in-out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 80%",
                    end: "bottom 30%",
                    scrub: true,
                },
            }
        );
    }, []);

    return (
        <div ref={containerRef} className={`my-5 ${className}`}>
            <span className={`mb-4 ${className}`}>
                {text}
            </span>
        </div>
    );
};

export default AnimatedText;
