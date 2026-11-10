import { useLanguage } from "../context/LanguageContext";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-neutral-200 px-4 py-6 dark:border-neutral-800 sm:px-8 sm:py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center text-sm text-neutral-500 dark:text-neutral-400 md:flex-row md:text-left">
        <p>
          © {new Date().getFullYear()} {t("hero.name")}. {t("footer.rights")}
        </p>
        <SocialLinks variant="icons" />
      </div>
    </footer>
  );
}
