import { Github, Linkedin, MessageCircle, Phone, Send, type LucideIcon } from "lucide-react";

export interface SocialLink {
  id: string;
  label: string;
  /** Text shown next to the icon in the Contact section. */
  display: string;
  href: string;
  icon: LucideIcon;
  /** Phone links should open the dialer instead of a new tab. */
  external: boolean;
}

export const PHONE_DISPLAY = "+251 942 836 279";

export const socialLinks: SocialLink[] = [
  { id: "github", label: "GitHub", display: "MengistuBirhan", href: "https://github.com/MengistuBirhan", icon: Github, external: true },
  { id: "linkedin", label: "LinkedIn", display: "mengistu-birhan", href: "https://www.linkedin.com/in/mengistu-birhan-a31134438", icon: Linkedin, external: true },
  { id: "telegram", label: "Telegram", display: "@gebrealbsrat19", href: "https://t.me/gebrealbsrat19", icon: Send, external: true },
  { id: "whatsapp", label: "WhatsApp", display: PHONE_DISPLAY, href: "https://wa.me/251942836279", icon: MessageCircle, external: true },
  { id: "phone", label: "Phone", display: PHONE_DISPLAY, href: "tel:+251942836279", icon: Phone, external: false },
];
