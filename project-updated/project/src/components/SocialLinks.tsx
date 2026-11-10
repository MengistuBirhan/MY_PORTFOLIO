import { socialLinks } from "../data/social";

interface Props {
  /** "cards": icon + label + handle (Contact). "icons": compact icon-only row (Footer). */
  variant?: "cards" | "icons";
}

export default function SocialLinks({ variant = "cards" }: Props) {
  if (variant === "icons") {
    return (
      <ul className="flex flex-wrap items-center justify-center gap-2">
        {socialLinks.map(({ id, label, href, icon: Icon, external }) => (
          <li key={id}>
            <a
              href={href}
              aria-label={label}
              title={label}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-300 text-neutral-600 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary-500 hover:text-primary-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/40 dark:border-neutral-700 dark:text-neutral-300 dark:hover:text-primary-400"
            >
              <Icon className="h-5 w-5" aria-hidden="true" />
            </a>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <ul className="grid grid-cols-1 gap-3 min-[480px]:grid-cols-2">
      {socialLinks.map(({ id, label, display, href, icon: Icon, external }) => (
        <li key={id} className="min-w-0">
          <a
            href={href}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="card card-hover flex items-center gap-3 p-3 sm:p-4"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-600 dark:bg-primary-950 dark:text-primary-300">
              <Icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="min-w-0">
              <span className="block text-sm font-semibold">{label}</span>
              <span className="block truncate text-xs text-neutral-500 dark:text-neutral-400">{display}</span>
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
