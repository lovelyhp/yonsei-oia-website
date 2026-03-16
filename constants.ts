
import { Info, Handshake, LogIn, LogOut, Bell } from 'lucide-react';
import React from 'react';

export interface NavSubItem {
  title: string;
  href: string;
  children?: { title: string; href: string }[];
}

export interface NavItem {
  title: string;
  href: string;
  description?: string;
  icon?: any;
  subItems?: NavSubItem[];
}

export const SITE_CONFIG = {
  universityName: "YONSEI UNIVERSITY",
  officeName: "Office of International Affairs",
  contact: {
    address: "50 Yonsei-ro, Seodaemun-gu, Seoul 03722, Republic of Korea",
    phone: "+82-2-2123-8453",
    email: "exch@yonsei.ac.kr",
  },
  colors: {
    primary: "#003876",
    secondary: "#8A704C",
    gray: "#F3F4F6"
  }
};

export const NAVIGATION_DATA: NavItem[] = [
  {
    title: "Introduction",
    href: "/intro/welcome-message/message-from-the-president",
    description: "About Yonsei OIA",
    icon: Info,
    subItems: [
      {
        title: "Welcome Message",
        href: "/intro/welcome-message/message-from-the-president",
        children: [
          { title: "Message from the President", href: "/intro/welcome-message/message-from-the-president" },
          { title: "Message from the VP", href: "/intro/welcome-message/message-from-the-vp" },
        ]
      },
      {
        title: "About OIA",
        href: "/intro/about-oia/vision-and-mission",
        children: [
          { title: "Vision and Mission", href: "/intro/about-oia/vision-and-mission" },
          { title: "Former Vice Presidents", href: "/intro/about-oia/former-vice-presidents" },
        ]
      },
      { title: "Publications", href: "/intro/publications" },
      { title: "Contact Us", href: "/intro/contact-us" },
    ]
  },
  {
    title: "Partnerships",
    href: "/partnerships/partner-institutions",
    description: "Global Networks",
    icon: Handshake,
    subItems: [
      { title: "Partner Institutions", href: "/partnerships/partner-institutions" },
      { title: "Global Network", href: "/partnerships/global-network" },
      { title: "Faculty Mobility", href: "/partnerships/faculty-mobility" },
    ]
  },
  {
    title: "Inbound",
    href: "/inbound/programs/notice-say",
    description: "Coming to Yonsei",
    icon: LogIn,
    subItems: [
      {
        title: "Programs",
        href: "/inbound/programs/notice-say",
        children: [
          { title: "Notice (SAY)", href: "/inbound/programs/notice-say" },
          { title: "Study Abroad at Yonsei (SAY)", href: "/inbound/programs/study-abroad-at-yonsei-say" },
          { title: "Yonsei International Summer School (YISS)", href: "/inbound/programs/yonsei-international-summer-school-yiss" },
          { title: "Winter Abroad at Yonsei (WAY)", href: "/inbound/programs/winter-abroad-at-yonsei-way" },
        ]
      },
      { title: "Transcripts", href: "/inbound/transcripts" },
      { title: "Degree Seeking", href: "/inbound/degree-seeking" },
      { title: "Global One-Stop Service Center", href: "/inbound/global-one-stop-service-center" },
    ]
  },
  {
    title: "Outbound",
    href: "/outbound/programs/exchange-student-program-esp",
    description: "Going Abroad",
    icon: LogOut,
    subItems: [
      {
        title: "Programs",
        href: "/outbound/programs/exchange-student-program-esp",
        children: [
          { title: "Exchange Student Program (ESP)", href: "/outbound/programs/exchange-student-program-esp" },
          { title: "Visiting Student Program (VSP)", href: "/outbound/programs/visiting-student-program-vsp" },
          { title: "Outbound Scholarships", href: "/outbound/programs/outbound-scholarships" },
          { title: "Outbound Programs FAQ", href: "/outbound/programs/outbound-programs-faq" },
        ]
      },
      { title: "Global Internship Program", href: "/outbound/global-internship-program" },
      { title: "Experience Reports", href: "/outbound/experience-reports" },
    ]
  },
  {
    title: "News and Events",
    href: "/news-and-events/notice",
    description: "Latest Updates",
    icon: Bell,
    subItems: [
      { title: "Notice", href: "/news-and-events/notice" },
      { title: "Global Events", href: "/news-and-events/global-events" },
      { title: "Archived News", href: "/news-and-events/archived-news" },
    ]
  }
];

export const HERO_SLIDES = [
  {
    id: 1,
    image: "https://www.yonsei.ac.kr/sites/sc/atchmnfl_mngr/imageSlide/73/temp_1750298387242100.jpg",
    title: "Connecting Yonsei to the World",
    subtitle: "Experience a global education at Korea's most prestigious private university."
  },
  {
    id: 2,
    image: "https://www.yonsei.ac.kr/sites/sc/atchmnfl_mngr/imageSlide/73/temp_1745222035084100.jpg",
    title: "Building Global Leaders",
    subtitle: "Over 740 partner institutions across 70 countries."
  },
  {
    id: 3,
    image: "https://gosc.yonsei.ac.kr/_res/gosc/img/main/slide02c.jpg",
    title: "Gateway to Excellence",
    subtitle: "Providing comprehensive support for international exchange and research."
  }
];

export const LATEST_SAY_NOTICES = [
  { id: 105, title: "[Fall 2025] Regarding Fall 2025 SAY Program Official Transcript", date: "2026.01.06" },
  { id: 104, title: "[Fall 2025] End of Semester and Mandatory Departure from Korea", date: "2025.12.18" },
  { id: 103, title: "[Fall 2025] Final Course Evaluation and Grade/Transcript Info", date: "2025.12.15" },
];

export const LATEST_OIA_NOTICES = [
  { id: 110, title: "[2026 가을학기] 해외파견프로그램 배정대학 명단 List of Host Universities", date: "2025.12.16" },
  { id: 109, title: "[2026 여름방학] 1차~2차 해외 파견프로그램 지원 안내", date: "2026.01.19" },
  { id: 108, title: "[2026 가을학기] 해외파견프로그램 1차 서류 신청 가이드", date: "2026.01.06" },
];

export const LATEST_GENERAL_NOTICES = [
  { id: 150, title: "Call for Participation: APRU Global Health Events in Spring 2026", date: "2026.01.29" },
  { id: 149, title: "OIA Office Closed (Jan 19 - 23)", date: "2026.01.12" },
  { id: 148, title: "제19회 한미학생회의(KASC 19) 한국 대학생 대표단 모집", date: "2026.01.23" },
];

export const QUICK_LINKS = [
  { 
    title: "Study Abroad Guide", 
    icon: "Book", 
    description: "All you need to know about inbound programs.",
    href: "/inbound/programs/study-abroad-at-yonsei-say"
  },
  { 
    title: "OIA Outbound Programs", 
    icon: "Award", 
    description: "Exchange/Visiting Programs for Yonsei Students",
    href: "/news-and-events/notice"
  },
  { 
    title: "Global Network", 
    icon: "Globe", 
    description: "Our worldwide partnerships and agreements.",
    href: "/partnerships/partner-institutions"
  },
];

export const FORMER_VPS = {
  oia: [
    { name: "Dong-hun KIM", dept: "Graduate School of International Studies", term: "Feb 2022 - Jan 2024" },
    { name: "Sunku HAHN", dept: "Department of Economics", term: "Feb 2020 - Jan 2022" },
    { name: "Doowon LEE", dept: "Department of Economics", term: "Feb 2018 - Jan 2020" },
    { name: "Joongi KIM", dept: "Yonsei Law School", term: "Feb 2016 - Jan 2018" },
    { name: "Jongryn MO", dept: "Graduate School of International Studies", term: "Feb 2012 - Jan 2016" },
    { name: "Donghoon KIM", dept: "School of Business", term: "Feb 2010 - Jan 2012" },
    { name: "Yeonseob HA", dept: "Department of Public Administration", term: "Feb 2007 - Jan 2010" }
  ],
  diee: [
    { name: "Jung-Hoon LEE", dept: "Graduate School of International Studies", term: "Sept 2004 - Jan 2007" },
    { name: "Chung-min LEE", dept: "Graduate School of International Studies", term: "Sept 2000 - Aug 2004" },
    { name: "Dae Ryun CHANG", dept: "School of Business", term: "Sept 1996 - Aug 2000" },
    { name: "Horace H. Underwood, II", dept: "English Language & Literature", term: "Sept 1990 - Aug 1996" },
    { name: "Heung-Soo PARK", dept: "Department of Mass Communication", term: "Aug 1983 - Aug 1989" }
  ]
};
