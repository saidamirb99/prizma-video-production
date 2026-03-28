"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface TextRevealProps {
  children: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  delay?: number;
  stagger?: number;
  scrollTrigger?: boolean;
}

export function TextReveal({
  children,
  className = "",
  as: Tag = "h2",
  delay = 0,
  stagger = 0.03,
  scrollTrigger = true,
}: TextRevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const words = children.split(" ");
    el.innerHTML = words
      .map(
        (word) =>
          `<span class="inline-block overflow-hidden"><span class="char inline-block" style="opacity:0;transform:translateY(100%)">${word}</span></span>`
      )
      .join('<span class="inline-block w-[0.3em]"></span>');

    const chars = el.querySelectorAll(".char");

    const config: gsap.TweenVars = {
      opacity: 1,
      y: 0,
      duration: 0.7,
      stagger,
      delay,
      ease: "power3.out",
    };

    if (scrollTrigger) {
      config.scrollTrigger = {
        trigger: el,
        start: "top 80%",
        once: true,
      };
    }

    gsap.to(chars, config);

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [children, delay, stagger, scrollTrigger]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return <Tag ref={ref as any} className={className} />;
}
