"use client";

import { useEffect, useState } from "react";
import { MagneticButton } from "./ui/MagneticButton";

const links = [
  { href: "#works", label: "Работы" },
  { href: "#services", label: "Услуги" },
  { href: "#portfolio", label: "Портфолио" },
  { href: "#reviews", label: "Отзывы" },
  { href: "#contacts", label: "Контакты" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg/85 backdrop-blur-xl border-b border-border py-3"
          : "py-5"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-[var(--font-syne)] font-extrabold text-xl tracking-[0.12em] text-text"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          <span className="text-accent">P</span>RIZMA
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-text-2 text-[0.82rem] font-medium hover:text-text transition-colors duration-300"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <MagneticButton
          as="a"
          href="#contacts"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[0.75rem] font-semibold tracking-wide bg-gradient-to-r from-accent to-accent-2 text-white shadow-[0_4px_20px_var(--color-accent-glow)] hover:shadow-[0_8px_32px_var(--color-accent-glow)] hover:-translate-y-0.5 transition-all duration-300"
          strength={0.25}
        >
          Обсудить проект
        </MagneticButton>

        {/* Burger */}
        <button
          className="flex md:hidden flex-col gap-[5px] p-1 z-[1001]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span
            className={`w-6 h-0.5 bg-text rounded transition-transform duration-300 ${
              menuOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-text rounded transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-text rounded transition-transform duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-bg/96 backdrop-blur-2xl flex flex-col items-center justify-center gap-8 z-[999] transition-opacity duration-300 ${
            menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-lg text-text-2 font-medium hover:text-text transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacts"
            className="mt-4 px-8 py-3 rounded-full bg-gradient-to-r from-accent to-accent-2 text-white font-semibold text-sm"
            onClick={() => setMenuOpen(false)}
          >
            Обсудить проект
          </a>
        </div>
      </div>
    </nav>
  );
}
