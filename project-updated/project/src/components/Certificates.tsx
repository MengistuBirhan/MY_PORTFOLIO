import { ExternalLink } from "lucide-react";
import { certificates } from "../data/certificates";
import { useLanguage } from "../context/LanguageContext";

export default function Certificates() {
  const { t } = useLanguage();

  return (
    <section id="certificates" className="section-padding bg-neutral-100/60 dark:bg-neutral-900/40">
      <div className="mx-auto max-w-6xl">
        <p className="section-subtitle">{t("certs.subtitle")}</p>
        <h2 className="section-title">{t("certs.title")}</h2>

        {certificates.length === 0 ? (
          <p className="mt-10 text-neutral-500 dark:text-neutral-400">{t("certs.empty")}</p>
        ) : (
          <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-12 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {certificates.map((c) => (
              <article key={c.title} className="card card-pad flex flex-col">
                <h3 className="break-words font-semibold">{c.title}</h3>
                <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                  {c.issuer}, {c.year}
                </p>
                {c.url && (
                  <a href={c.url} target="_blank" rel="noreferrer" className="mt-auto inline-flex self-start pt-4 items-center gap-1.5 text-sm font-medium text-primary-600 hover:underline dark:text-primary-400">
                    <ExternalLink className="h-4 w-4" />
                    {t("certs.view")}
                  </a>
                )}
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
