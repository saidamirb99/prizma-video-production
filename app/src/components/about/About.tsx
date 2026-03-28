"use client";

import { RevealOnScroll } from "../ui/RevealOnScroll";

const cards = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="2" width="20" height="20" rx="2.18" />
        <line x1="7" y1="2" x2="7" y2="22" />
        <line x1="17" y1="2" x2="17" y2="22" />
        <line x1="2" y1="12" x2="22" y2="12" />
      </svg>
    ),
    title: "Видеопродакшн",
    desc: "Полный цикл создания видеоконтента",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
        <circle cx="12" cy="13" r="4" />
      </svg>
    ),
    title: "Фотосъёмка",
    desc: "Профессиональная съёмка любого формата",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    title: "Постпродакшн",
    desc: "Монтаж, графика, цвет и спецэффекты",
  },
];

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <RevealOnScroll>
          <div>
            <span
              className="block text-accent text-[0.75rem] font-bold tracking-[0.25em] mb-3"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              О СТУДИИ
            </span>
            <h2
              className="text-[clamp(1.3rem,3vw,1.6rem)] font-bold leading-snug mb-4"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Мы — команда экспертов в фото и видео продакшене с опытом более 8 лет.
            </h2>
            <p className="text-text-2 text-[0.92rem] leading-relaxed mb-7">
              Создаём яркие рекламные ролики для международных брендов, предлагая полный спектр услуг — от разработки концепции до финальной постпродакшн. Вдохновляем, создаём и достигаем результатов как в Узбекистане, так и за его границами.
            </p>
            <a
              href="#services"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border text-[0.78rem] font-semibold text-text-2 hover:text-text hover:border-border-hover transition-all duration-300"
            >
              ПОДРОБНЕЕ
            </a>
          </div>
        </RevealOnScroll>

        <div className="flex flex-col gap-4">
          {cards.map((c, i) => (
            <RevealOnScroll key={c.title} delay={i * 0.12}>
              <div className="group flex items-start gap-4 p-5 rounded-2xl bg-bg-card border border-border hover:border-border-hover transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-accent-dark flex items-center justify-center flex-shrink-0 text-accent group-hover:scale-110 transition-transform duration-300">
                  {c.icon}
                </div>
                <div>
                  <h4
                    className="text-[0.9rem] font-bold mb-1"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    {c.title}
                  </h4>
                  <p className="text-[0.8rem] text-text-3">{c.desc}</p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
