"use client";

import { RevealOnScroll } from "../ui/RevealOnScroll";
import { MagneticButton } from "../ui/MagneticButton";

export function CTABanner() {
  return (
    <section className="py-20 bg-bg-2">
      <div className="max-w-[1200px] mx-auto px-6">
        <RevealOnScroll>
          <div className="relative rounded-3xl overflow-hidden p-12 md:p-16 text-center border border-border bg-bg-card">
            {/* Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] blur-[120px] rounded-full pointer-events-none" style={{ background: 'var(--t-accent-dark)' }} />

            <h2 className="relative text-[clamp(1.4rem,4vw,2rem)] font-extrabold mb-3" style={{ fontFamily: "var(--font-syne)" }}>
              Готовы обсудить проект?
            </h2>
            <p className="relative text-text-2 text-[0.95rem] mb-8 max-w-md mx-auto">
              Расскажите о своей идее — мы предложим лучшее решение
            </p>
            <div className="relative flex gap-3 justify-center flex-wrap">
              <MagneticButton
                as="a"
                href="#contacts"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-[0.8rem] font-semibold btn-primary shadow-[0_4px_24px_var(--t-accent-glow)] hover:shadow-[0_8px_40px_var(--t-accent-glow)] hover:-translate-y-0.5 transition-all duration-300"
              >
                ОСТАВИТЬ ЗАЯВКУ
              </MagneticButton>
              <a
                href="https://t.me/Javamir"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-[0.8rem] text-text-2 hover:text-text transition-colors duration-300"
              >
                НАПИСАТЬ В TELEGRAM
              </a>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
