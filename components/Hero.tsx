
import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, ChevronLeft, ArrowRight, Calendar, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { HERO_SLIDES } from '../constants';
import { HOME_NOTICE_DATA } from '../src/data/homeNoticeData';
import { STATS_DATA } from '../src/data/statsData';
import { GLOBAL_EVENTS_DATA } from '../src/data/globalEventsData';
import { PROGRAM_CARDS_DATA } from '../src/data/programCardsData';

// ─── Counter hook ───
const useCountUp = (target: number, duration = 2000) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const startTime = performance.now();
    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, target, duration]);

  return { count, ref };
};

// ─── Hero Section ───
const Hero: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % HERO_SLIDES.length);
  const prev = () => setCurrent((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);

  const shortcuts = {
    left: [
      { title: "Study Abroad at Yonsei (SAY)", href: "/inbound/programs/study-abroad-at-yonsei-say" },
      { title: "Partner Institutions", href: "/partnerships/partner-institutions" },
    ],
    right: [
      { title: "Yonsei International Summer School (YISS)", href: "/inbound/programs/yonsei-international-summer-school-yiss" },
      { title: "Winter Abroad at Yonsei (WAY)", href: "/inbound/programs/winter-abroad-at-yonsei-way" },
    ],
  };

  return (
    <>
      {/* ─── Hero Slide ─── */}
      <section className="relative h-[420px] md:h-[500px] lg:h-[600px] overflow-hidden bg-gray-900">
        {/* Slides */}
        {HERO_SLIDES.map((slide, idx) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === current ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10" />
            <img
              src={slide.image}
              alt={slide.title}
              className={`w-full h-full object-cover transition-transform duration-[10000ms] ${idx === current ? 'scale-110' : 'scale-105'}`}
            />

            {/* Title overlay — positioned above the bottom overlay cards */}
            <div className="absolute inset-0 z-20 flex flex-col justify-start pt-[80px] md:pt-[100px] lg:pt-[140px] pb-[120px] md:pb-[150px] lg:pb-[185px] container mx-auto px-4 md:px-6 lg:px-12">
              <div className={`transition-all duration-700 delay-300 transform ${idx === current ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <h2 className="text-2xl md:text-3xl lg:text-6xl font-bold text-white mb-3 md:mb-4 leading-[1.1] max-w-3xl drop-shadow-2xl">
                  {slide.title}
                </h2>
                <p className="text-sm md:text-base lg:text-xl text-white/90 max-w-2xl font-light tracking-wide leading-relaxed drop-shadow-lg">
                  {slide.subtitle}
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* Slide Controls */}
        <div className="absolute top-1/3 -translate-y-1/2 md:top-1/2 right-3 md:right-8 z-30 flex flex-col gap-2 md:gap-3">
          <button onClick={prev} className="p-2.5 rounded-full border border-white/30 text-white hover:bg-[#003876] hover:border-[#003876] transition-all backdrop-blur-sm">
            <ChevronLeft size={20} />
          </button>
          <button onClick={next} className="p-2.5 rounded-full border border-white/30 text-white hover:bg-[#003876] hover:border-[#003876] transition-all backdrop-blur-sm">
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Progress Dots */}
        <div className="absolute bottom-[100px] md:bottom-[130px] lg:bottom-[160px] left-4 md:left-8 lg:left-12 z-30 flex gap-2">
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-1.5 transition-all duration-500 rounded-full ${
                idx === current ? 'w-10 bg-[#8A704C]' : 'w-4 bg-white/40'
              }`}
            />
          ))}
        </div>

        {/* ─── Overlay UI (3 columns at bottom) ─── */}
        <div className="absolute bottom-0 left-0 w-full z-40">
          <div className="container mx-auto px-3 md:px-4 lg:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr_1fr] gap-2 lg:gap-3 pb-2 md:pb-3 lg:pb-5">
              {/* Left: Shortcut Buttons */}
              <div className="hidden lg:flex flex-col gap-2">
                {shortcuts.left.map((item) => (
                  <Link
                    key={item.title}
                    to={item.href}
                    className="flex-1 bg-black/40 backdrop-blur-sm rounded-xl px-5 py-3 text-center font-bold text-[16px] text-white hover:bg-[#003876] hover:text-white transition-all shadow-lg border border-white/20 flex items-center justify-center gap-2 group"
                  >
                    {item.title}
                    <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                ))}
              </div>

              {/* Center: Notice Widget */}
              <div className="bg-black/40 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 overflow-hidden">
                <div className="px-4 md:px-5 py-2 md:py-2.5 flex items-center justify-between border-b border-white/15">
                  <h3 className="font-bold text-white text-[15px] md:text-[17px]">Notice</h3>
                  <Link to="/news-and-events/notice" className="text-[13px] font-bold text-white bg-white/20 hover:bg-[#003876] px-4 py-1.5 rounded-md transition-colors flex items-center gap-1.5">
                    more <ArrowRight size={13} />
                  </Link>
                </div>
                <div className="divide-y divide-white/10">
                  {HOME_NOTICE_DATA.slice(0, 4).map((item) => (
                    <Link
                      key={item.id}
                      to="/news-and-events/notice"
                      className="flex items-center justify-between px-4 md:px-5 py-2 md:py-2.5 hover:bg-white/10 transition-colors group"
                    >
                      <span className="text-[13px] md:text-[14px] font-medium text-white/90 group-hover:text-white transition-colors line-clamp-1 flex-1 mr-3 md:mr-4">
                        {item.title}
                      </span>
                      <span className="text-[12px] text-white/60 font-medium shrink-0 hidden sm:flex items-center gap-1">
                        <Calendar size={11} /> {item.date}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Right: Shortcut Buttons */}
              <div className="hidden lg:flex flex-col gap-2">
                {shortcuts.right.map((item) => (
                  <Link
                    key={item.title}
                    to={item.href}
                    className="flex-1 bg-black/40 backdrop-blur-sm rounded-xl px-5 py-3 text-center font-bold text-[16px] text-white hover:bg-[#003876] hover:text-white transition-all shadow-lg border border-white/20 flex items-center justify-center gap-2 group"
                  >
                    {item.title}
                    <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Statistics Counter Section ─── */}
      <section className="bg-white py-10 md:py-16 lg:py-20 border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-3 gap-4 md:gap-10 lg:gap-16 max-w-5xl mx-auto">
            {STATS_DATA.map((stat) => {
              const { count, ref } = useCountUp(stat.value);
              return (
                <div key={stat.label} ref={ref} className="text-center">
                  <div className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#003876] mb-2 md:mb-3 tabular-nums">
                    {count}
                    {stat.suffix && <span className="text-3xl lg:text-4xl">{stat.suffix}</span>}
                  </div>
                  <p className="text-[11px] md:text-sm lg:text-base text-gray-500 font-medium leading-snug">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Program Cards Section ─── */}
      <ProgramCardsSection />

      {/* ─── Global Events Section ─── */}
      <GlobalEventsSection />
    </>
  );
};

// ─── Program Cards Section ───
const ProgramCardsSection: React.FC = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="bg-white py-10 md:py-16 lg:py-20 border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section header */}
        <div className="mb-6 md:mb-10">
          <span className="text-[11px] md:text-[12px] font-bold text-[#8A704C] uppercase tracking-[0.15em]">Yonsei OIA</span>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#003876] mt-1">Our Programs</h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 border border-gray-200 rounded-2xl overflow-hidden">
          {PROGRAM_CARDS_DATA.map((card, idx) => {
            const isHovered = hovered === idx;
            return (
              <div
                key={card.title}
                className={`relative min-h-[240px] md:min-h-[280px] p-5 md:p-7 flex flex-col transition-colors duration-300 ${
                  isHovered ? 'bg-gray-50/80' : 'bg-white'
                } ${idx < 2 ? 'md:border-r border-b md:border-b-0 border-gray-200' : ''}`}
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Top color line */}
                <div
                  className="absolute top-0 left-0 w-full h-[3px] bg-[#003876] origin-left transition-transform duration-[400ms] ease-out"
                  style={{ transform: isHovered ? 'scaleX(1)' : 'scaleX(0)' }}
                />

                {/* Tag */}
                <div className="mb-4">
                  <span className={`text-[11px] font-bold text-white px-2.5 py-1 rounded-md uppercase tracking-wide ${card.tagColor}`}>
                    {card.tag}
                  </span>
                </div>

                {/* Title + Subtitle */}
                <h3 className={`text-lg font-bold mb-1 transition-colors duration-300 ${isHovered ? 'text-[#003876]' : 'text-gray-900'}`}>
                  {card.title}
                </h3>
                <p className="text-[13px] text-gray-400 font-medium mb-5">{card.subtitle}</p>

                {/* List */}
                <ul className="space-y-2 mb-6">
                  {card.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-[13px]">
                      <span className={`mt-[6px] w-1.5 h-1.5 rounded-full shrink-0 transition-colors duration-300 ${isHovered ? card.dotColor : 'bg-gray-300'}`} />
                      <span className={`transition-colors duration-300 ${isHovered ? 'text-gray-800' : 'text-gray-500'}`}>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Spacer */}
                <div className="flex-1" />

                {/* Bottom: link + badge */}
                <div className="flex items-center justify-between">
                  <Link
                    to={card.link.href}
                    className={`text-[13px] font-bold flex items-center transition-all duration-300 ${
                      isHovered ? 'text-[#003876] gap-2.5' : 'text-gray-400 gap-1.5'
                    }`}
                  >
                    {card.link.label}
                    <span className={`transition-transform duration-300 ${isHovered ? 'translate-x-0.5' : ''}`}>→</span>
                  </Link>
                  {card.badge && (
                    <span className={`text-[11px] font-bold text-[#003876] bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100 transition-opacity duration-300 ${
                      isHovered ? 'opacity-100' : 'opacity-0'
                    }`}>
                      {card.badge}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// ─── Global Events Section ───
const GlobalEventsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-gray-50 py-10 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 md:mb-10">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#003876]">Global Events</h2>
          <Link
            to="/news-and-events/global-events"
            className="text-[12px] md:text-[14px] font-bold text-white bg-[#003876] hover:bg-[#002a5a] px-3 md:px-5 py-1.5 md:py-2 rounded-lg transition-colors flex items-center gap-1.5"
          >
            more <ArrowRight size={14} />
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {GLOBAL_EVENTS_DATA.slice(0, 3).map((event, idx) => (
            <Link
              key={event.id}
              to="/news-and-events/global-events"
              className={`group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-700 ${
                visible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: visible ? `${idx * 150}ms` : '0ms' }}
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 md:p-5">
                <h3 className="text-[14px] md:text-[15px] font-bold text-gray-800 group-hover:text-[#003876] transition-colors line-clamp-2 mb-2 md:mb-3 leading-snug">
                  {event.title}
                </h3>
                <div className="flex items-center gap-4 text-[12px] text-gray-400 font-medium">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} /> {event.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={12} /> {event.location}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
