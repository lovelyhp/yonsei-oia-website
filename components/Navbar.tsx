
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Search, Globe, ExternalLink } from 'lucide-react';
import { NAVIGATION_DATA, SITE_CONFIG } from '../constants';
import type { NavSubItem } from '../constants';

const NavLink: React.FC<{ href: string; className?: string; onClick?: () => void; children: React.ReactNode }> = ({ href, className, onClick, children }) => {
  if (href.startsWith('http')) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className} onClick={onClick}>
        {children}
        <ExternalLink size={12} className="opacity-0 group-hover/link:opacity-100 transition-opacity" />
      </a>
    );
  }
  return <Link to={href} className={className} onClick={onClick}>{children}</Link>;
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);
  const location = useLocation();
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openMenu = useCallback((title: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setActiveMenu(title);
  }, []);

  const closeMenuWithDelay = useCallback(() => {
    closeTimeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
      closeTimeoutRef.current = null;
    }, 150);
  }, []);

  const keepMenuOpen = useCallback(() => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveMenu(null);
    setExpandedMobile(null);
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  }, [location.pathname]);

  const renderMegaMenuSubItem = (sub: NavSubItem) => {
    if (sub.children) {
      return (
        <li key={sub.title}>
          <span className="text-[#003876] font-semibold text-[13px] uppercase tracking-wider block mb-2 mt-1">
            {sub.title}
          </span>
          <ul className="space-y-2 pl-3 border-l-2 border-gray-100">
            {sub.children.map((child) => (
              <li key={child.title}>
                <NavLink
                  href={child.href}
                  className="text-gray-600 hover:text-[#8A704C] text-[13px] font-medium transition-colors block leading-relaxed group/link flex items-center gap-1"
                >
                  {child.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </li>
      );
    }
    return (
      <li key={sub.title}>
        <NavLink
          href={sub.href}
          className="text-gray-600 hover:text-[#8A704C] text-[14px] font-medium transition-colors block leading-relaxed group/link flex items-center gap-1"
        >
          {sub.title}
        </NavLink>
      </li>
    );
  };

  const renderMobileSubItem = (sub: NavSubItem) => {
    const isExpanded = expandedMobile === sub.title;
    if (sub.children) {
      return (
        <li key={sub.title}>
          <button
            onClick={() => setExpandedMobile(isExpanded ? null : sub.title)}
            className="w-full text-left text-gray-700 text-[15px] font-semibold flex items-center justify-between hover:text-[#8A704C]"
          >
            {sub.title}
            <ChevronDown size={14} className={`transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
          </button>
          <ul className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-[500px] mt-2' : 'max-h-0'}`}>
            {sub.children.map((child) => (
              <li key={child.title} className="pl-3 py-1.5">
                <NavLink
                  href={child.href}
                  className="text-gray-500 text-[14px] font-medium block hover:text-[#8A704C] flex items-center gap-1 group/link"
                  onClick={() => setIsOpen(false)}
                >
                  {child.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </li>
      );
    }
    return (
      <li key={sub.title}>
        <NavLink
          href={sub.href}
          className="text-gray-600 text-[15px] font-medium block hover:text-[#8A704C] flex items-center gap-1 group/link"
          onClick={() => setIsOpen(false)}
        >
          {sub.title}
        </NavLink>
      </li>
    );
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <nav className="flex items-center justify-between">
          {/* Logo Area */}
          <Link to="/" className="flex items-center gap-2 md:gap-3">
            <img
              src="https://yonsei.ac.kr/sites/sc/images/sub/img-symbol1.png"
              alt="Yonsei University"
              className="h-8 md:h-10 lg:h-12 w-auto"
            />
            <div className="flex flex-col">
              <span className="text-sm md:text-xl lg:text-2xl font-bold tracking-tight text-[#003876]">
                {SITE_CONFIG.universityName}
              </span>
              <span className="text-[9px] md:text-xs lg:text-sm font-medium text-[#8A704C] tracking-wide uppercase">
                {SITE_CONFIG.officeName}
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {NAVIGATION_DATA.map((item) => (
              <div
                key={item.title}
                className="relative group px-1"
                onMouseEnter={() => openMenu(item.title)}
                onMouseLeave={closeMenuWithDelay}
              >
                <Link
                  to={item.href}
                  className="px-4 py-2 text-[15px] font-semibold text-gray-800 hover:text-[#003876] flex items-center gap-1 transition-colors border-b-2 border-transparent hover:border-[#003876]"
                >
                  {item.title}
                  {item.subItems && <ChevronDown size={14} className="opacity-60 group-hover:rotate-180 transition-transform" />}
                </Link>
              </div>
            ))}

            {/* Action Icons */}
            <div className="flex items-center ml-4 pl-4 border-l border-gray-200 space-x-4">
              <button className="text-gray-600 hover:text-[#003876] transition-colors"><Search size={20} /></button>
              <button className="text-gray-600 hover:text-[#003876] transition-colors flex items-center gap-1">
                <Globe size={18} />
                <span className="text-sm font-medium">EN</span>
              </button>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>
      </div>

      {/* Mega Menu Overlay (Desktop Only) */}
      <div
        className={`hidden lg:block absolute left-0 w-full bg-white border-b border-gray-100 shadow-2xl transition-all duration-300 ease-in-out transform overflow-hidden ${
          activeMenu ? 'max-h-[600px] opacity-100 py-10' : 'max-h-0 opacity-0 py-0'
        }`}
        onMouseEnter={keepMenuOpen}
        onMouseLeave={closeMenuWithDelay}
      >
        <div className="container mx-auto px-6 grid grid-cols-5 gap-8">
          {NAVIGATION_DATA.map((menu) => (
            <div key={menu.title} className={`transition-all duration-500 delay-75 ${activeMenu === menu.title ? 'opacity-100 translate-y-0' : 'opacity-40 translate-y-2'}`}>
              <h3 className="text-[#003876] font-bold text-lg mb-4 pb-2 border-b border-gray-100 uppercase tracking-widest text-[13px]">
                {menu.title}
              </h3>
              <ul className="space-y-3">
                {menu.subItems?.map(renderMegaMenuSubItem)}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Drawer (Overlay) */}
      <div className={`fixed inset-0 bg-black/50 z-[60] lg:hidden transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsOpen(false)}>
        <div
          className={`absolute top-0 right-0 h-full w-[80%] max-w-sm bg-white shadow-2xl transition-transform duration-300 ease-out flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6 flex justify-between items-center border-b border-gray-100">
            <span className="font-bold text-[#003876]">NAVIGATION</span>
            <button onClick={() => setIsOpen(false)} className="p-2"><X size={24} /></button>
          </div>
          <div className="flex-grow overflow-y-auto py-4">
            {NAVIGATION_DATA.map((item) => (
              <div key={item.title} className="px-6 mb-6">
                <h4 className="text-[#003876] font-bold mb-3 tracking-wide">{item.title}</h4>
                <ul className="space-y-3 pl-2 border-l-2 border-gray-100">
                  {item.subItems?.map(renderMobileSubItem)}
                </ul>
              </div>
            ))}
          </div>
          <div className="p-6 bg-gray-50 flex justify-between items-center">
            <span className="text-sm font-medium text-gray-500 uppercase">Selection: English</span>
            <Globe size={18} className="text-[#003876]" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
