"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { MagneticButton } from "../ui/MagneticButton";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 });

    tl.fromTo(
      badgeRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
    )
      .fromTo(
        titleRef.current,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" },
        "-=0.3"
      )
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
        "-=0.4"
      )
      .fromTo(
        descRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
        "-=0.3"
      )
      .fromTo(
        buttonsRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
        "-=0.2"
      )
      .fromTo(
        visualRef.current,
        { opacity: 0, scale: 0.95, x: 40 },
        { opacity: 1, scale: 1, x: 0, duration: 1, ease: "power3.out" },
        "-=0.8"
      );
  }, []);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* BG gradients */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 60% 50% at 30% 40%, rgba(255,107,53,0.07) 0%, transparent 60%),
              radial-gradient(ellipse 50% 40% at 70% 60%, rgba(255,140,90,0.04) 0%, transparent 50%)
            `,
          }}
        />
        {/* Animated grid lines */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center pt-28 pb-16">
        {/* Left */}
        <div>
          <div
            ref={badgeRef}
            className="inline-block px-4 py-1.5 border border-border rounded-full text-[0.65rem] tracking-[0.25em] text-accent bg-accent-dark mb-7"
            style={{ opacity: 0 }}
          >
            PHOTO & VIDEO PRODUCTION
          </div>

          <h1
            ref={titleRef}
            className="text-[clamp(3.2rem,8vw,6rem)] font-extrabold tracking-[0.06em] leading-[0.95] mb-5"
            style={{ fontFamily: "var(--font-syne)", opacity: 0 }}
          >
            PRI
            <span className="text-accent drop-shadow-[0_0_30px_rgba(255,107,53,0.4)]">
              Z
            </span>
            MA
          </h1>

          <p
            ref={subtitleRef}
            className="text-[clamp(1rem,2vw,1.2rem)] text-text-2 font-normal mb-3"
            style={{ opacity: 0 }}
          >
            Яркие моменты, запечатленные в каждом кадре
          </p>

          <p
            ref={descRef}
            className="text-[0.9rem] text-text-3 mb-9 max-w-[420px] leading-relaxed"
            style={{ opacity: 0 }}
          >
            Профессиональная фото и видеосъемка для любых событий и проектов. Создаём контент, который вдохновляет.
          </p>

          <div
            ref={buttonsRef}
            className="flex gap-3 flex-wrap items-center"
            style={{ opacity: 0 }}
          >
            <MagneticButton
              as="a"
              href="#works"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-[0.8rem] font-semibold tracking-wide bg-gradient-to-r from-accent to-accent-2 text-white shadow-[0_4px_24px_var(--color-accent-glow)] hover:shadow-[0_8px_40px_var(--color-accent-glow)] hover:-translate-y-0.5 transition-all duration-300"
            >
              СМОТРЕТЬ РАБОТЫ
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </MagneticButton>
            <a
              href="tel:+998999335333"
              className="px-5 py-3.5 text-[0.8rem] text-text-2 hover:text-text transition-colors"
            >
              +998 99 933 53 33
            </a>
          </div>
        </div>

        {/* Right — Visual */}
        <div ref={visualRef} className="hidden lg:flex justify-center" style={{ opacity: 0 }}>
          <div className="relative w-full max-w-[440px]">
            {/* Main card */}
            <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-border bg-gradient-to-br from-accent-dark to-bg-2">
              <div className="w-full h-full flex items-center justify-center">
                <svg
                  width="80"
                  height="80"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="rgba(255,255,255,0.15)"
                  strokeWidth="0.8"
                >
                  <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                  <circle cx="12" cy="13" r="4" />
                </svg>
              </div>
            </div>

            {/* Floating badge 1 */}
            <div className="absolute -bottom-5 -left-5 bg-bg/90 backdrop-blur-xl border border-border rounded-xl px-5 py-3.5 flex flex-col animate-[float_6s_ease-in-out_infinite]">
              <span
                className="text-accent font-extrabold text-xl"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                100+
              </span>
              <span className="text-[0.7rem] text-text-3">проектов</span>
            </div>

            {/* Floating badge 2 */}
            <div className="absolute -top-4 -right-4 bg-bg/90 backdrop-blur-xl border border-border rounded-xl px-4 py-2.5 animate-[float_5s_1s_ease-in-out_infinite]">
              <span
                className="text-accent font-extrabold text-base"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                4K
              </span>
            </div>

            {/* Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-accent/5 blur-[100px] pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-px h-12 bg-gradient-to-b from-accent to-transparent animate-pulse" />
      </div>
    </section>
  );
}
