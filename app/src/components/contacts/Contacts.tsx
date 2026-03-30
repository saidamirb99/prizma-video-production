"use client";

import { RevealOnScroll } from "../ui/RevealOnScroll";

export function Contacts() {
  return (
    <section id="contacts" className="py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <RevealOnScroll className="text-center mb-12">
          <span className="block text-accent text-[0.75rem] font-bold tracking-[0.25em] mb-2" style={{ fontFamily: "var(--font-syne)" }}>
            КОНТАКТЫ
          </span>
        </RevealOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Form */}
          <RevealOnScroll>
            <form
              className="p-8 rounded-2xl bg-bg-card border border-border"
              onSubmit={(e) => e.preventDefault()}
            >
              <h3 className="text-xl font-bold mb-1.5" style={{ fontFamily: "var(--font-syne)" }}>
                Расскажите о проекте
              </h3>
              <p className="text-text-3 text-[0.85rem] mb-6">
                Мы свяжемся с вами в ближайшее время
              </p>

              <div className="flex flex-col gap-3.5 mb-4">
                <input
                  type="text"
                  placeholder="Ваше имя"
                  required
                  className="w-full px-5 py-3.5 rounded-xl bg-bg-card border border-border text-text text-[0.88rem] outline-none focus:border-accent focus:shadow-[0_0_0_3px_var(--color-accent-dark)] transition-all duration-300 placeholder:text-text-3"
                />
                <input
                  type="text"
                  placeholder="Телефон или email"
                  required
                  className="w-full px-5 py-3.5 rounded-xl bg-bg-card border border-border text-text text-[0.88rem] outline-none focus:border-accent focus:shadow-[0_0_0_3px_var(--color-accent-dark)] transition-all duration-300 placeholder:text-text-3"
                />
                <textarea
                  placeholder="Расскажите о проекте..."
                  rows={4}
                  className="w-full px-5 py-3.5 rounded-xl bg-bg-card border border-border text-text text-[0.88rem] outline-none focus:border-accent focus:shadow-[0_0_0_3px_var(--color-accent-dark)] transition-all duration-300 resize-y placeholder:text-text-3"
                />
              </div>

              <label className="flex gap-2.5 items-start mb-5 cursor-pointer text-[0.78rem] text-text-3">
                <input type="checkbox" required className="mt-0.5 accent-[var(--color-accent)]" />
                <span>
                  Я даю согласие на обработку персональных данных и соглашаюсь с{" "}
                  <a href="/privacy" className="text-accent hover:underline">
                    Политикой конфиденциальности
                  </a>
                </span>
              </label>

              <button
                type="submit"
                className="w-full py-3.5 rounded-full text-[0.8rem] font-semibold btn-primary shadow-[0_4px_20px_var(--t-accent-glow)] hover:shadow-[0_8px_32px_var(--t-accent-glow)] hover:-translate-y-0.5 transition-all duration-300"
              >
                ОТПРАВИТЬ ЗАЯВКУ
              </button>
            </form>
          </RevealOnScroll>

          {/* Info */}
          <RevealOnScroll delay={0.15}>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <span className="text-[0.7rem] font-semibold tracking-[0.12em] uppercase text-text-3">
                  Телефон
                </span>
                <a
                  href="tel:+998999335333"
                  className="text-accent text-[clamp(1.4rem,3vw,1.8rem)] font-extrabold hover:brightness-110 transition-all"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  +998 99 933 53 33
                </a>
              </div>

              <div className="flex flex-col gap-2.5">
                <span className="text-[0.7rem] font-semibold tracking-[0.12em] uppercase text-text-3">
                  Мессенджеры
                </span>
                <a
                  href="https://t.me/Javamir"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-bg-card border border-border text-text-2 text-[0.82rem] font-medium hover:border-[rgba(0,136,204,0.4)] hover:text-[#29b6f6] hover:bg-[rgba(0,136,204,0.06)] transition-all duration-300"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 1 0 24 12.056 12.01 12.01 0 0 0 11.944 0Zm5.581 8.192-1.882 8.867a.792.792 0 0 1-1.14.508l-3.6-2.544-1.944 1.872a.48.48 0 0 1-.456.096l.288-4.08 7.44-6.72c.336-.288-.072-.432-.504-.168l-9.192 5.784-3.96-1.248a.48.48 0 0 1-.024-.888l15.48-5.952a.47.47 0 0 1 .6.336.482.482 0 0 1-.108.336Z"/></svg>
                  TELEGRAM
                </a>
                <a
                  href="https://www.instagram.com/re_production.uz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-bg-card border border-border text-text-2 text-[0.82rem] font-medium hover:border-[rgba(225,48,108,0.4)] hover:text-[#e1306c] hover:bg-[rgba(225,48,108,0.05)] transition-all duration-300"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z"/></svg>
                  INSTAGRAM
                </a>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[0.7rem] font-semibold tracking-[0.12em] uppercase text-text-3">
                  Адрес
                </span>
                <p className="text-text-2 text-[0.9rem]">Ташкент, Узбекистан</p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
