export interface Certificate {
  title: string;
  issuer: string;
  year: string;
  url?: string;
}

export const certificates: Certificate[] = [
  {
    title: "The Udara Project – Certificate of Participation (Agentic AI)",
    issuer: "The Udara Project",
    year: "2026",
    url: "/certificates/udara-project.pdf",
  },
  {
    title: "Listening Skills in English",
    issuer: "Cursa",
    year: "2026",
    url: "/certificates/cursa-english-listening.pdf",
  },
  {
    title: "Data Analysis Fundamentals (Nanodegree)",
    issuer: "Udacity",
    year: "2024",
    url: "/certificates/udacity-data-analysis.pdf",
  },
  {
    title: "Selling Online",
    issuer: "HP LIFE",
    year: "2024",
    url: "/certificates/hp-life-selling-online.pdf",
  },
];
