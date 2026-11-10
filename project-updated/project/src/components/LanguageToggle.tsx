import { Languages } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function LanguageToggle() {
  const { lang, toggleLang } = useLanguage();
  const next = lang === "en" ? "አማርኛ" : "English";

  return (
    <button
      type="button"
      onClick={toggleLang}
      aria-label={lang === "en" ? "ወደ አማርኛ ቀይር (Switch to Amharic)" : "Switch to English"}
      className="inline-flex items-center gap-2 whitespace-nowrap rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 h-10 px-2.5 text-xs font-medium min-[400px]:text-sm text-neutral-800 dark:text-neutral-200 transition-colors hover:border-primary-500 hover:text-primary-600 dark:hover:text-primary-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/40 sm:px-3"
    >
      <Languages className="hidden h-4 w-4 sm:block" aria-hidden="true" />
      {next}
    </button>
  );
}
