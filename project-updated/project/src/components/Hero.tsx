import { motion } from "framer-motion";
import { Eye } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import AnimatedText from "./AnimatedText";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="grid-pattern flex min-h-[100svh] items-center px-4 pb-12 pt-24 sm:px-8 sm:pb-20 sm:pt-32 lg:px-16 xl:px-24">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-8 sm:gap-10 lg:grid-cols-[1fr_auto] lg:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto min-w-0 max-w-3xl text-center lg:mx-0 lg:text-left"
        >
          <h1 className="break-words text-3xl font-bold uppercase leading-tight tracking-tight min-[400px]:text-4xl sm:text-5xl lg:text-6xl">
            <span className="gradient-text">{t("hero.name")}</span>
          </h1>
          <p className="mt-3 min-h-[1.5em] text-lg font-semibold tracking-tight min-[400px]:text-xl sm:text-2xl lg:text-3xl">
            <AnimatedText text={t("hero.role")} />
          </p>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed lg:mx-0 sm:mt-6 text-neutral-600 sm:text-lg dark:text-neutral-300">
            {t("hero.tagline")}
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
            <a href="#projects" className="btn-primary w-full sm:w-auto">
              {t("hero.cta.projects")}
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-secondary w-full sm:w-auto">
              <Eye className="h-4 w-4" />
              {t("hero.cta.resume")}
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative order-first mx-auto h-44 w-44 min-[400px]:h-52 min-[400px]:w-52 sm:h-72 sm:w-72 lg:order-last lg:h-96 lg:w-96"
        >
          <div aria-hidden="true" className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-400/40 to-accent-400/30 blur-2xl" />
          <img
            src="/profile-photo.jpg"
            alt={t("hero.photo")}
            width={384}
            height={384}
            className="relative h-full w-full rounded-full object-cover object-top ring-4 ring-white shadow-2xl dark:ring-neutral-800"
          />
        </motion.div>
      </div>
    </section>
  );
}
