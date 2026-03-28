const links = [
  { href: "#works", label: "Работы" },
  { href: "#services", label: "Услуги" },
  { href: "#portfolio", label: "Портфолио" },
  { href: "#reviews", label: "Отзывы" },
  { href: "#contacts", label: "Контакты" },
];

const socials = [
  { href: "https://t.me/Javamir", label: "Telegram", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 1 0 24 12.056 12.01 12.01 0 0 0 11.944 0Zm5.581 8.192-1.882 8.867a.792.792 0 0 1-1.14.508l-3.6-2.544-1.944 1.872a.48.48 0 0 1-.456.096l.288-4.08 7.44-6.72c.336-.288-.072-.432-.504-.168l-9.192 5.784-3.96-1.248a.48.48 0 0 1-.024-.888l15.48-5.952a.47.47 0 0 1 .6.336.482.482 0 0 1-.108.336Z"/></svg> },
  { href: "https://www.instagram.com/re_production.uz/", label: "Instagram", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z"/></svg> },
  { href: "https://www.youtube.com/watch?v=LgnoL-kJuT0", label: "YouTube", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814ZM9.545 15.568V8.432L15.818 12l-6.273 3.568Z"/></svg> },
];

export function Footer() {
  return (
    <footer className="border-t border-border pt-12 pb-8 bg-bg">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-8 border-b border-border mb-6">
          <div>
            <span className="block text-xl font-extrabold tracking-[0.12em]" style={{ fontFamily: "var(--font-syne)" }}>
              <span className="text-accent">P</span>RIZMA
            </span>
            <p className="text-text-3 text-[0.82rem] mt-1">
              Воплощаем ваши идеи в реальность!
            </p>
          </div>

          <nav className="hidden md:flex gap-6">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-text-3 text-[0.82rem] hover:text-text transition-colors duration-300">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex gap-3.5">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="text-text-3 hover:text-text hover:-translate-y-0.5 transition-all duration-300"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-center">
          <span className="text-text-3 text-[0.72rem]">
            &copy; 2025 PRIZMA. Все права защищены.
          </span>
          <a href="/privacy" className="text-text-3 text-[0.72rem] hover:text-text-2 transition-colors">
            Политика конфиденциальности
          </a>
        </div>
      </div>
    </footer>
  );
}
