"use client";

import { RevealOnScroll } from "../ui/RevealOnScroll";

const projects = [
  { title: "UZTELECOM NEW YEAR", tag: "Реклама", type: "Рекламный ролик", hue: 270 },
  { title: "CARVON PROMOTIONAL", tag: "Промо", type: "Промо видео", hue: 190 },
  { title: "BUKA GYM", tag: "Спорт", type: "Спортивное видео", hue: 330 },
];

export function Works() {
  return (
    <section id="works" className="py-24 bg-bg-2">
      <div className="max-w-[1200px] mx-auto px-6">
        <RevealOnScroll>
          <div className="flex items-end justify-between mb-12 gap-6 flex-wrap">
            <div>
              <span
                className="block text-accent text-[0.75rem] font-bold tracking-[0.25em] mb-2"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                НАШИ РАБОТЫ
              </span>
              <h2
                className="text-[clamp(1.4rem,3vw,1.8rem)] font-bold tracking-tight"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                Избранные проекты
              </h2>
            </div>
            <a
              href="#portfolio"
              className="px-5 py-2.5 rounded-full border border-border text-[0.75rem] font-semibold text-text-2 hover:text-text hover:border-border-hover transition-all duration-300"
            >
              ВСЕ РАБОТЫ
            </a>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <RevealOnScroll
              key={p.title}
              delay={i * 0.1}
              className={i === 0 ? "md:row-span-2" : ""}
            >
              <div className="group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
                <div
                  className={`relative overflow-hidden ${
                    i === 0 ? "aspect-[4/5] md:h-full" : "aspect-video"
                  }`}
                >
                  <div
                    className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                    style={{
                      background: `linear-gradient(135deg, hsl(${p.hue},15%,var(--t-placeholder-l1)), hsl(${p.hue},10%,var(--t-placeholder-l2)), hsl(${p.hue},15%,var(--t-placeholder-l1)))`,
                    }}
                  />
                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'var(--t-overlay)' }}>
                    <div className="w-16 h-16 rounded-full backdrop-blur-sm flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-500" style={{ background: 'var(--t-play-bg)', borderWidth: 1, borderColor: 'var(--t-play-border)' }}>
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="text-text"
                      >
                        <polygon points="5,3 19,12 5,21" />
                      </svg>
                    </div>
                  </div>
                  {/* Tag */}
                  <div className="absolute top-4 left-4 px-3.5 py-1 bg-bg/70 backdrop-blur-md border border-border rounded-full text-[0.65rem] font-semibold tracking-wide text-accent">
                    {p.tag}
                  </div>
                </div>
                <div className="p-5 bg-bg-card border border-border border-t-0 rounded-b-2xl">
                  <h3
                    className="text-[0.85rem] font-bold tracking-wide mb-0.5"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    {p.title}
                  </h3>
                  <span className="text-[0.75rem] text-text-3">{p.type}</span>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
