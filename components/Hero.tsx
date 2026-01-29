
import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { HERO_SLIDES, NAVIGATION_DATA } from '../constants';

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

  return (
    <section className="relative h-[700px] lg:h-[900px] overflow-hidden bg-gray-900">
      {/* Slides */}
      {HERO_SLIDES.map((slide, idx) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent z-10" />
          <img
            src={slide.image}
            alt={slide.title}
            className={`w-full h-full object-cover scale-105 transition-transform duration-[10000ms] ${idx === current ? 'scale-110' : 'scale-100'}`}
          />
          
          {/* Content */}
          <div className="absolute inset-0 z-20 flex flex-col justify-center items-start container mx-auto px-6 lg:px-12 pb-20 lg:pb-32">
            <div className={`transition-all duration-700 delay-300 transform ${idx === current ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h2 className="text-4xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] max-w-3xl drop-shadow-2xl text-shadow-sm">
                {slide.title}
              </h2>
              <p className="text-lg lg:text-2xl text-white/95 mb-10 max-w-2xl font-light tracking-wide leading-relaxed drop-shadow-lg">
                {slide.subtitle}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/inbound/say" className="bg-[#003876] hover:bg-[#002a5a] text-white px-10 py-4 rounded-md font-bold text-[16px] transition-all flex items-center gap-2 group shadow-2xl">
                  Explore Programs
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/intro/contact" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-10 py-4 rounded-md font-bold text-[16px] transition-all shadow-xl">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Floating GNB Bar (Desktop only) */}
      <div className="hidden lg:flex absolute bottom-0 left-0 w-full z-40 bg-white/95 backdrop-blur-md border-t border-gray-200">
        <div className="container mx-auto px-6 grid grid-cols-5 divide-x divide-gray-100">
          {NAVIGATION_DATA.map((item) => {
            const IconComponent = item.icon;
            // The item.href in constants is now updated to the first sub-item
            return (
              <Link 
                key={item.title} 
                to={item.href}
                className="group p-8 flex flex-col items-center text-center hover:bg-[#003876] transition-all duration-500"
              >
                <div className="mb-4 text-[#8A704C] group-hover:text-white transition-colors">
                  {IconComponent && <IconComponent size={32} strokeWidth={1.5} />}
                </div>
                <h3 className="text-gray-900 group-hover:text-white font-bold text-lg mb-1 transition-colors uppercase tracking-tight">
                  {item.title}
                </h3>
                <p className="text-gray-500 group-hover:text-white/70 text-xs font-medium uppercase tracking-[0.05em] transition-colors">
                  {item.description}
                </p>
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight size={16} className="text-white" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Controls */}
      <div className="absolute top-1/2 -translate-y-1/2 right-12 z-30 flex flex-col gap-4">
        <button 
          onClick={prev}
          className="p-3 rounded-full border border-white/30 text-white hover:bg-[#003876] hover:border-[#003876] transition-all backdrop-blur-sm"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={next}
          className="p-3 rounded-full border border-white/30 text-white hover:bg-[#003876] hover:border-[#003876] transition-all backdrop-blur-sm"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Progress Dots */}
      <div className="absolute bottom-[200px] left-12 lg:left-12 z-30 flex gap-2">
        {HERO_SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-1.5 transition-all duration-500 rounded-full ${
              idx === current ? 'w-12 bg-[#8A704C]' : 'w-4 bg-white/40'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
