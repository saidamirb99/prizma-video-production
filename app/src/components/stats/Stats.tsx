"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { target: 8, label: "лет опыта" },
  { target: 10, label: "специалистов" },
  { target: 50, label: "брендов" },
  { target: 100, label: "проектов" },
];

export function Stats() {
  const ref = useRef<HTMLElement>(null);
  const numbersRef = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: el,
        start: "top 80%",
        once: true,
        onEnter: () => {
          numbersRef.current.forEach((numEl, i) => {
            gsap.fromTo(
              { val: 0 },
              { val: stats[i].target },
              {
                val: stats[i].target,
                duration: 2,
                ease: "power2.out",
                onUpdate: function () {
                  numEl.textContent = String(
                    Math.round(this.targets()[0].val)
                  );
                },
              }
            );
          });
        },
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      className="py-10 border-y border-border bg-bg-2"
    >
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-center">
        {stats.map((s, i) => (
          <div key={s.label} className="contents">
            {i > 0 && (
              <div className="w-px h-12 bg-border flex-shrink-0 hidden sm:block" />
            )}
            <div className="flex-1 text-center py-3 px-5">
              <div className="flex items-baseline justify-center gap-0.5">
                <span
                  ref={(el) => { if (el) numbersRef.current[i] = el; }}
                  className="text-accent text-[clamp(1.8rem,4vw,2.4rem)] font-extrabold leading-none"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  0
                </span>
                <span
                  className="text-accent text-[clamp(1.2rem,2.5vw,1.5rem)] font-extrabold"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  +
                </span>
              </div>
              <span className="block mt-1.5 text-text-3 text-[0.78rem]">
                {s.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
