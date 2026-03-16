export interface ProgramCard {
  tag: string;
  tagColor: string;
  dotColor: string;
  title: string;
  subtitle: string;
  items: string[];
  link: { label: string; href: string };
  badge?: string;
}

export const PROGRAM_CARDS_DATA: ProgramCard[] = [
  {
    tag: "Inbound",
    tagColor: "bg-blue-600",
    dotColor: "bg-blue-500",
    title: "Inbound Programs",
    subtitle: "SAY · YISS · WAY",
    items: [
      "Exchange & Visiting Students",
      "Yonsei International Summer School",
      "Winter Abroad at Yonsei",
    ],
    link: { label: "Explore programs", href: "/inbound/programs/study-abroad-at-yonsei-say" },
    badge: "YISS 40th yr",
  },
  {
    tag: "Outbound",
    tagColor: "bg-emerald-600",
    dotColor: "bg-emerald-500",
    title: "Outbound Programs",
    subtitle: "ESP · VSP",
    items: [
      "Exchange Student Program (ESP)",
      "Visiting Student Program (VSP)",
      "Global Internship Program",
    ],
    link: { label: "Study abroad", href: "/outbound/programs/exchange-student-program-esp" },
  },
  {
    tag: "Partnerships",
    tagColor: "bg-violet-600",
    dotColor: "bg-violet-500",
    title: "Global Partner Universities",
    subtitle: "740 partners across 6 continents",
    items: [
      "Yonsei University maintains collaborative partnerships with 740+ leading institutions worldwide.",
    ],
    link: { label: "View network", href: "/partnerships/partner-institutions" },
    badge: "#50 QS World",
  },
];
