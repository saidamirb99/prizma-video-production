"use client";

import { RevealOnScroll } from "../ui/RevealOnScroll";

const steps = [
  { num: "01", title: "Заявка", desc: "Обсуждаем вашу идею" },
  { num: "02", title: "Бриф", desc: "Цели, формат и бюджет" },
  { num: "03", title: "Сценарий", desc: "Разработка плана съёмки" },
  { num: "04", title: "Подготовка", desc: "Локации, актёры, техника" },
  { num: "05", title: "Съёмка", desc: "Профессиональная съёмка" },
  { num: "06", title: "Монтаж", desc: "Монтаж, графика, эффекты" },
  { num: "07", title: "Результат", desc: "Готовый продукт с правками" },
];

export function Process() {
  return (
    <section id="process" className="py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <RevealOnScroll className="text-center mb-14">
          <span className="block text-accent text-[0.75rem] font-bold tracking-[0.25em] mb-2" style={{ fontFamily: "var(--font-syne)" }}>
            КАК МЫ РАБОТАЕМ
          </span>
          <h2 className="text-[clamp(1.2rem,3vw,1.5rem)] font-bold" style={{ fontFamily: "var(--font-syne)" }}>
            7 шагов от идеи до готового результата
          </h2>
        </RevealOnScroll>

        {/* Desktop: horizontal timeline */}
        <div className="hidden lg:grid grid-cols-7 gap-3">
          {steps.map((s, i) => (
            <RevealOnScroll key={s.num} delay={i * 0.08}>
              <div className="group text-center">
                <div className="flex flex-col items-center mb-4">
                  <span
                    className="text-accent text-2xl font-extrabold leading-none mb-3 group-hover:scale-110 transition-transform duration-300"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    {s.num}
                  </span>
                  <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
                </div>
                <h3 className="text-[0.82rem] font-bold mb-1.5" style={{ fontFamily: "var(--font-syne)" }}>
                  {s.title}
                </h3>
                <p className="text-text-3 text-[0.72rem] leading-snug">{s.desc}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Mobile: vertical list */}
        <div className="lg:hidden flex flex-col gap-4">
          {steps.map((s, i) => (
            <RevealOnScroll key={s.num} delay={i * 0.06}>
              <div className="flex items-start gap-5 p-5 rounded-2xl bg-bg-card border border-border">
                <span
                  className="text-accent text-2xl font-extrabold leading-none flex-shrink-0 mt-0.5"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  {s.num}
                </span>
                <div>
                  <h3 className="text-[0.9rem] font-bold mb-1" style={{ fontFamily: "var(--font-syne)" }}>
                    {s.title}
                  </h3>
                  <p className="text-text-3 text-[0.82rem]">{s.desc}</p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
