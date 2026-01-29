
import React from 'react';
import { Book, Award, Home, Globe, ArrowRight, Calendar, Bell, Users, Globe2 } from 'lucide-react';
import { LATEST_SAY_NOTICES, LATEST_OIA_NOTICES, LATEST_GENERAL_NOTICES, QUICK_LINKS } from '../constants';
import { Link } from 'react-router-dom';

const iconMap: Record<string, React.ReactNode> = {
  Book: <Book size={24} />,
  Award: <Award size={24} />,
  Home: <Home size={24} />,
  Globe: <Globe size={24} />,
};

interface SmallNoticeProps {
  title: string;
  items: { id: number; title: string; date: string }[];
  href: string;
  icon: React.ReactNode;
}

const SmallNoticeCard: React.FC<SmallNoticeProps> = ({ title, items, href, icon }) => (
  <div className="bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col h-full overflow-hidden hover:shadow-md transition-shadow group/card">
    <div className="p-5 border-b border-gray-50 flex items-center justify-between bg-gray-50/30">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-white rounded-lg text-[#003876] shadow-sm border border-gray-100">
          {icon}
        </div>
        <h3 className="font-bold text-[#003876] text-base">{title}</h3>
      </div>
      <Link to={href} className="text-gray-400 hover:text-[#8A704C] transition-colors p-1">
        <ArrowRight size={16} />
      </Link>
    </div>
    <div className="flex-grow">
      {items.map((item, idx) => (
        <Link 
          to={href}
          key={item.id} 
          className={`block px-5 py-3.5 hover:bg-blue-50/30 transition-colors cursor-pointer group ${
            idx !== items.length - 1 ? 'border-b border-gray-50' : ''
          }`}
        >
          <h4 className="text-[13px] font-medium text-gray-800 line-clamp-1 group-hover:text-[#003876] transition-colors mb-0.5">
            {item.title}
          </h4>
          <span className="text-[11px] text-gray-400 font-medium flex items-center gap-1">
            <Calendar size={10} /> {item.date}
          </span>
        </Link>
      ))}
    </div>
    <Link 
      to={href} 
      className="py-3 text-center text-[11px] font-bold text-[#8A704C] hover:bg-gray-50 border-t border-gray-50 transition-colors uppercase tracking-widest"
    >
      View All
    </Link>
  </div>
);

const CardSection: React.FC = () => {
  return (
    <div className="py-12 lg:py-20 container mx-auto px-4 md:px-6">
      
      {/* Notice Board - Compact */}
      <div className="mb-16 lg:mb-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold text-[#003876] mb-1">Notice & Announcements</h2>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <SmallNoticeCard 
            title="Notice (SAY)" 
            items={LATEST_SAY_NOTICES} 
            href="/inbound/notice" 
            icon={<Users size={18} />} 
          />
          <SmallNoticeCard 
            title="Notice (OIA)" 
            items={LATEST_OIA_NOTICES} 
            href="/outbound/notice" 
            icon={<Globe2 size={18} />} 
          />
          <SmallNoticeCard 
            title="Announcements" 
            items={LATEST_GENERAL_NOTICES} 
            href="/news/announcements" 
            icon={<Bell size={18} />} 
          />
        </div>
      </div>

      {/* Quick Access - Compact Grid */}
      <div className="mb-16 lg:mb-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold text-[#003876] mb-1">Quick Access</h2>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {QUICK_LINKS.map((link) => (
            <Link 
              to={(link as any).href}
              key={link.title}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-[#8A704C]/30 transition-all group cursor-pointer block"
            >
              <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center text-[#8A704C] mb-4 group-hover:bg-[#003876] group-hover:text-white transition-all">
                {iconMap[link.icon]}
              </div>
              <h3 className="text-base font-bold text-gray-800 mb-1.5">{link.title}</h3>
              <p className="text-[13px] text-gray-500 leading-snug mb-4 line-clamp-2">
                {link.description}
              </p>
              <div className="text-[12px] font-bold text-[#003876] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                LEARN MORE <ArrowRight size={14} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardSection;
