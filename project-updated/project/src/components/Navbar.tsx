import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import type { TranslationKey } from "../i18n/translations";
import LanguageToggle from "./LanguageToggle";
import ThemeToggle from "./ThemeToggle";

const links: { href: string; label: TranslationKey }[] = [
  { href: "#about", label: "nav.about" },
  { href: "#projects", label: "nav.projects" },
  { href: "#skills", label: "nav.skills" },
  { href: "#certificates", label: "nav.certificates" },
  { href: "#contact", label: "nav.contact" },
];

export default function Navbar() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  // Close the mobile menu with Escape, and whenever the screen grows to desktop width.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = (e: MediaQueryListEvent) => {
      if (e.matches) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onChange);
    return () => {
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onChange);
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-950/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-2 px-3 min-[400px]:px-4 sm:gap-3 sm:px-8">
        <a href="#home" className="shrink-0 text-lg font-bold tracking-tight">
          MB<span className="text-primary-600">.</span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-neutral-600 transition-colors hover:text-primary-600 dark:text-neutral-300 dark:hover:text-primary-400"
              >
                {t(l.label)}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <a href="#contact" className="btn-accent hidden !px-4 !py-2 lg:inline-flex">
            {t("nav.hire")}
          </a>
          <LanguageToggle />
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? t("nav.close") : t("nav.menu")}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-300 text-neutral-700 transition-colors hover:border-primary-500 dark:border-neutral-700 dark:text-neutral-200 lg:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {open && (
        <ul
          id="mobile-menu"
          className="max-h-[calc(100svh-4rem)] animate-fade-in overflow-y-auto border-t border-neutral-200 bg-white px-4 py-3 shadow-lg dark:border-neutral-800 dark:bg-neutral-950 sm:px-8 lg:hidden"
        >
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-2 py-3 text-base font-medium text-neutral-700 hover:bg-neutral-100 hover:text-primary-600 dark:text-neutral-200 dark:hover:bg-neutral-900"
              >
                {t(l.label)}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" onClick={() => setOpen(false)} className="btn-accent mt-2 w-full">
              {t("nav.hire")}
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
