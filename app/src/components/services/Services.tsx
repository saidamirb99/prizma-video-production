"use client";

import { RevealOnScroll } from "../ui/RevealOnScroll";

const services = [
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="2.18"/><line x1="7" y1="2" x2="7" y2="22"/><line x1="17" y1="2" x2="17" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/></svg>,
    title: "Рекламные ролики",
    desc: "Коммерческая и социальная реклама для ТВ и интернета",
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M15 10l4.553-2.276A1 1 0 0 1 21 8.618v6.764a1 1 0 0 1-1.447.894L15 14M3 8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8z"/></svg>,
    title: "Видеопрезентации",
    desc: "Информационные ролики и презентации для бизнеса",
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><polygon points="10,8 16,12 10,16"/></svg>,
    title: "Спортивные видео",
    desc: "Динамичные съёмки соревнований и тренировок",
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>,
    title: "Фотосъёмка",
    desc: "Репортажная, студийная, коммерческая и предметная",
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 3v18M3 12h18M5.636 5.636l12.728 12.728M18.364 5.636L5.636 18.364"/></svg>,
    title: "Креативный контент",
    desc: "Нестандартные решения и уникальные концепции",
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    title: "Корпоративные фильмы",
    desc: "Мероприятия, конференции, корпоративы",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-bg-2">
      <div className="max-w-[1200px] mx-auto px-6">
        <RevealOnScroll className="text-center mb-12">
          <span className="block text-accent text-[0.75rem] font-bold tracking-[0.25em] mb-2" style={{ fontFamily: "var(--font-syne)" }}>
            НАШИ УСЛУГИ
          </span>
          <p className="text-text-2 text-[0.95rem] max-w-lg mx-auto">
            Полный спектр услуг для создания визуального контента
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <RevealOnScroll key={s.title} delay={i * 0.07}>
              <div className="group text-center p-8 rounded-2xl bg-bg-card border border-border hover:border-border-hover transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-accent-dark flex items-center justify-center mx-auto mb-4 text-accent group-hover:scale-110 group-hover:bg-[rgba(255,107,53,0.2)] transition-all duration-300">
                  {s.icon}
                </div>
                <h3 className="text-[0.9rem] font-bold mb-2" style={{ fontFamily: "var(--font-syne)" }}>
                  {s.title}
                </h3>
                <p className="text-text-3 text-[0.82rem] leading-relaxed">{s.desc}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
