
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Search, Globe, ExternalLink } from 'lucide-react';
import { NAVIGATION_DATA, SITE_CONFIG } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu and minimize PC mega menu on path change
  useEffect(() => {
    setIsOpen(false);
    setActiveMenu(null);
  }, [location.pathname]);

  const handleSubLinkClick = (href: string) => {
    if (href.startsWith('http')) {
      window.open(href, '_blank', 'noopener,noreferrer');
    }
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
          <Link to="/" className="flex flex-col">
            <span className="text-xl md:text-2xl font-bold tracking-tight text-[#003876]">
              {SITE_CONFIG.universityName}
            </span>
            <span className="text-xs md:text-sm font-medium text-[#8A704C] tracking-wide uppercase">
              {SITE_CONFIG.officeName}
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {NAVIGATION_DATA.map((item) => (
              <div 
                key={item.title}
                className="relative group px-1"
                onMouseEnter={() => setActiveMenu(item.title)}
                onMouseLeave={() => setActiveMenu(null)}
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
          activeMenu ? 'max-h-[500px] opacity-100 py-10' : 'max-h-0 opacity-0 py-0'
        }`}
        onMouseEnter={() => setActiveMenu(activeMenu)}
        onMouseLeave={() => setActiveMenu(null)}
      >
        <div className="container mx-auto px-6 grid grid-cols-5 gap-8">
          {NAVIGATION_DATA.map((menu) => (
            <div key={menu.title} className={`transition-all duration-500 delay-75 ${activeMenu === menu.title ? 'opacity-100 translate-y-0' : 'opacity-40 translate-y-2'}`}>
              <h3 className="text-[#003876] font-bold text-lg mb-4 pb-2 border-b border-gray-100 uppercase tracking-widest text-[13px]">
                {menu.title}
              </h3>
              <ul className="space-y-3">
                {menu.subItems?.map((sub) => (
                  <li key={sub.title}>
                    {sub.href.startsWith('http') ? (
                      <a 
                        href={sub.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-[#8A704C] text-[14px] font-medium transition-colors flex items-center gap-1 group/link"
                      >
                        {sub.title}
                        <ExternalLink size={12} className="opacity-0 group-hover/link:opacity-100 transition-opacity" />
                      </a>
                    ) : (
                      <Link 
                        to={sub.href} 
                        className="text-gray-600 hover:text-[#8A704C] text-[14px] font-medium transition-colors block leading-relaxed"
                      >
                        {sub.title}
                      </Link>
                    )}
                  </li>
                ))}
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
                  {item.subItems?.map((sub) => (
                    <li key={sub.title}>
                      {sub.href.startsWith('http') ? (
                        <a 
                          href={sub.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 text-[15px] font-medium flex items-center gap-2 hover:text-[#8A704C]"
                        >
                          {sub.title} <ExternalLink size={14} />
                        </a>
                      ) : (
                        <Link 
                          to={sub.href} 
                          onClick={() => setIsOpen(false)}
                          className="text-gray-600 text-[15px] font-medium block hover:text-[#8A704C]"
                        >
                          {sub.title}
                        </Link>
                      )}
                    </li>
                  ))}
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
