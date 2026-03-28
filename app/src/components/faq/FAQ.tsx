"use client";

import { useState } from "react";
import { RevealOnScroll } from "../ui/RevealOnScroll";

const faqs = [
  { q: "Сколько стоит видеоролик?", a: "Стоимость зависит от формата, сложности и продолжительности. Свяжитесь с нами для индивидуального расчёта — мы подберём оптимальное решение под ваш бюджет." },
  { q: "Сколько времени занимает производство?", a: "Короткий ролик — от 5 рабочих дней, крупный проект — от 2-4 недель. Точные сроки обсуждаем на этапе брифа." },
  { q: "Можно ли внести правки в готовый ролик?", a: "Да, в стоимость входит до 2 раундов правок. Мы работаем до полного удовлетворения результатом." },
  { q: "Работаете ли вы за пределами Узбекистана?", a: "Да, мы реализуем проекты как в Узбекистане, так и за его пределами." },
  { q: "Нужен ли мне готовый сценарий?", a: "Нет, мы можем разработать сценарий с нуля. Достаточно рассказать о задаче — мы предложим решение." },
];

export function FAQ() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24">
      <div className="max-w-[760px] mx-auto px-6">
        <RevealOnScroll className="text-center mb-12">
          <span className="block text-accent text-[0.75rem] font-bold tracking-[0.25em] mb-2" style={{ fontFamily: "var(--font-syne)" }}>
            ЧАСТЫЕ ВОПРОСЫ
          </span>
        </RevealOnScroll>

        <div className="flex flex-col gap-2.5">
          {faqs.map((f, i) => (
            <RevealOnScroll key={i} delay={i * 0.06}>
              <div className={`rounded-xl border transition-all duration-300 overflow-hidden ${active === i ? "border-border-hover bg-[rgba(255,255,255,0.04)]" : "border-border bg-bg-card hover:border-border-hover"}`}>
                <button
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer"
                  onClick={() => setActive(active === i ? null : i)}
                  aria-expanded={active === i}
                >
                  <span className={`text-[0.9rem] font-semibold transition-colors duration-300 ${active === i ? "text-accent" : "text-text"}`}>
                    {f.q}
                  </span>
                  <svg
                    className={`w-5 h-5 flex-shrink-0 text-text-3 transition-transform duration-300 ${active === i ? "rotate-180 text-accent" : ""}`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                <div
                  className="grid transition-all duration-400"
                  style={{
                    gridTemplateRows: active === i ? "1fr" : "0fr",
                  }}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-text-2 text-[0.85rem] leading-relaxed">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
