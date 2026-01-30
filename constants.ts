
import { Info, Handshake, LogIn, LogOut, Bell } from 'lucide-react';
import React from 'react';

export interface NavItem {
  title: string;
  href: string;
  description?: string;
  icon?: any;
  subItems?: { title: string; href: string }[];
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
    href: "/intro/welcome/president",
    description: "About Yonsei OIA",
    icon: Info,
    subItems: [
      { title: "Message from the President", href: "/intro/welcome/president" },
      { title: "Message from the VP", href: "/intro/welcome/vp" },
      { title: "Former Vice Presidents", href: "/intro/former-vps" },
      { title: "About OIA", href: "/intro/about" },
      { title: "Vision & Mission", href: "/intro/vision" },
      { title: "Multimedia", href: "/intro/multimedia" },
      { title: "Publications", href: "/intro/publications" },
      { title: "Contact Us", href: "/intro/contact" },
    ]
  },
  {
    title: "Partnerships",
    href: "/partners/institutions",
    description: "Global Networks",
    icon: Handshake,
    subItems: [
      { title: "Partner Institutions", href: "/partners/institutions" },
      { title: "Global Network", href: "/partners/network" },
      { title: "Faculty Mobility", href: "/partners/faculty" },
    ]
  },
  {
    title: "Inbound",
    href: "/inbound/notice",
    description: "Coming to Yonsei",
    icon: LogIn,
    subItems: [
      { title: "Notice (SAY)", href: "/inbound/notice" },
      { title: "Study Abroad at Yonsei (SAY)", href: "/inbound/say" },
      { title: "Yonsei International Summer School (YISS)", href: "/inbound/yiss" },
      { title: "Winter Abroad at Yonsei (WAY)", href: "/inbound/way" },
      { title: "Degree Seeking", href: "https://admission.yonsei.ac.kr/" },
      { title: "Global One-Stop Service Center", href: "/inbound/gosc" },
    ]
  },
  {
    title: "Outbound",
    href: "/outbound/notice",
    description: "Going Abroad",
    icon: LogOut,
    subItems: [
      { title: "Notice (OIA)", href: "/outbound/notice" },
      { title: "Exchange Student Program (ESP)", href: "/outbound/esp" },
      { title: "Visiting Student Program (VSP)", href: "/outbound/vsp" },
      { title: "Outbound Programs FAQ", href: "/outbound/faq" },
      { title: "Outbound Scholarships", href: "/outbound/scholarships" },
      { title: "Global Internship Program", href: "/outbound/internship" },
      { title: "Experience Reports", href: "/outbound/reports" },
    ]
  },
  {
    title: "News & Events",
    href: "/news/announcements",
    description: "Latest Updates",
    icon: Bell,
    subItems: [
      { title: "Announcements", href: "/news/announcements" },
      { title: "Global Events", href: "/news/events" },
      { title: "Archived News", href: "/news/archive" },
    ]
  }
];

export const HERO_SLIDES = [
  {
    id: 1,
    image: "https://scontent-ssn1-1.xx.fbcdn.net/v/t39.30808-6/491935138_1036405128587134_3539924212542404863_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=9MIhkS87PUoQ7kNvwFNfb42&_nc_oc=Adm2stkt5xCcrRBKp1uUG8qhXtUEaFsykX_1bMGuYSLSj0sIfDwE3rRsE_6m_FaAZy8&_nc_zt=23&_nc_ht=scontent-ssn1-1.xx&_nc_gid=NIU54GSr_XwMrlz3CikafA&oh=00_AfoBX9-9lKuSVS_IewJ_M_bz7BJpL7WX3Pr2AQlliQu7Iw&oe=69814B9B",
    title: "Connecting Yonsei to the World",
    subtitle: "Experience a global education at Korea's most prestigious private university."
  },
  {
    id: 2,
    image: "https://www.yonsei.ac.kr/sites/en_sc/images/main/global_img1.png",
    title: "Building Global Leaders",
    subtitle: "Over 740 partner institutions across 70 countries."
  },
  {
    id: 3,
    image: "https://news.yonsei.ac.kr/frame/imagePreview?atchFileId=17344",
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
    href: "/inbound/say"
  },
  { 
    title: "OIA Outbound Programs", 
    icon: "Award", 
    description: "Exchange/Visiting Programs for Yonsei Students",
    href: "/outbound/notice"
  },
  { 
    title: "Global Network", 
    icon: "Globe", 
    description: "Our worldwide partnerships and agreements.",
    href: "/partners/institutions"
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
