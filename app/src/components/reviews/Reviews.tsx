"use client";

import { RevealOnScroll } from "../ui/RevealOnScroll";

const reviews = [
  { name: "Сожида", role: "Клиент", initial: "С", text: "Супер! Очень теплые и душевные кадры. Они действительно передали всю атмосферу нашего увлекательного процесса!" },
  { name: "Азиз", role: "Директор компании", initial: "А", text: "Профессиональный подход и отличное качество. Ролик получился именно таким, как мы задумывали. Рекомендуем!" },
  { name: "Малика", role: "Маркетолог", initial: "М", text: "Быстро, качественно и креативно. Команда PRIZMA понимает задачу с полуслова и выдаёт результат выше ожиданий." },
];

export function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-bg-2">
      <div className="max-w-[1200px] mx-auto px-6">
        <RevealOnScroll className="text-center mb-12">
          <span className="block text-accent text-[0.75rem] font-bold tracking-[0.25em] mb-2" style={{ fontFamily: "var(--font-syne)" }}>
            ОТЗЫВЫ КЛИЕНТОВ
          </span>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {reviews.map((r, i) => (
            <RevealOnScroll key={r.name} delay={i * 0.1}>
              <div className="p-7 rounded-2xl bg-bg-card border border-border hover:border-border-hover transition-all duration-300 h-full flex flex-col">
                <div className="text-accent text-sm tracking-widest mb-4">★★★★★</div>
                <p className="text-text-2 text-[0.9rem] leading-relaxed italic mb-6 flex-1">&ldquo;{r.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-accent-2 flex items-center justify-center text-white font-bold text-sm flex-shrink-0" style={{ fontFamily: "var(--font-syne)" }}>
                    {r.initial}
                  </div>
                  <div>
                    <span className="block font-semibold text-[0.85rem]">{r.name}</span>
                    <span className="text-[0.72rem] text-text-3">{r.role}</span>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll className="text-center">
          <button className="px-6 py-2.5 rounded-full border border-border text-[0.78rem] font-semibold text-text-2 hover:text-text hover:border-border-hover transition-all duration-300">
            ОСТАВИТЬ ОТЗЫВ
          </button>
        </RevealOnScroll>
      </div>
    </section>
  );
}
