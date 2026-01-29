
import React, { useState } from 'react';
import { ChevronRight, Home, Search, Calendar, Camera, Eye, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

// Admin Ready Data Structure - Updated with user provided content
const VISITOR_NEWS = [
  {
    id: 1,
    title: "Visit from the Delegation of Embassy if Italy in Seoul and Guest Lecture by Astronaut Maurizio Cheli, January 23rd 2025",
    date: "2025.02.13",
    location: "Underwood Hall",
    image: "https://oia.yonsei.ac.kr/upload_file/photo/202502131506015436164062500.jpg",
    views: 1245
  },
  {
    id: 2,
    title: "Visit from the President of the Georgia Institute of Technology, January 23rd 2025",
    date: "2025.02.13",
    location: "Underwood Hall",
    image: "https://oia.yonsei.ac.kr/upload_file/photo/202502131454505369059765625.jpg",
    views: 892
  },
  {
    id: 3,
    title: "Visit from the Delegation of The University of Florida, December 3rd 2024",
    date: "2024.12.10",
    location: "Sinchon Campus",
    image: "https://oia.yonsei.ac.kr/upload_file/photo/202412101601145767485546875.jpg",
    views: 428
  },
  {
    id: 4,
    title: "Visit from the Delegation of The University of Glasgow, November 20th 2024",
    date: "2024.11.21",
    location: "VP's Office",
    image: "https://oia.yonsei.ac.kr/upload_file/photo/202411211107204004033593750.jpg",
    views: 189
  },
  {
    id: 5,
    title: "Visit from the Embassy of France in Korea, November 5th 2024",
    date: "2024.11.05",
    location: "Office of International Affairs",
    image: "https://oia.yonsei.ac.kr/upload_file/photo/202411051519215516125000000.jpg",
    views: 567
  },
  {
    id: 6,
    title: "Visit from Fudan University, China , October 18th 2024",
    date: "2024.10.18",
    location: "Office of International Affairs",
    image: "https://oia.yonsei.ac.kr/upload_file/photo/202410181548095688964453125.jpg",
    views: 312
  }
];

const GlobalEvents: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredNews = VISITOR_NEWS.filter(item => 
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumbs & Header */}
      <div className="bg-gray-50 border-b border-gray-200 py-8 lg:py-12">
        <div className="container mx-auto px-4 md:px-6">
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <Link to="/" className="hover:text-[#003876] flex items-center gap-1">
              <Home size={14} /> Home
            </Link>
            <ChevronRight size={14} />
            <span className="text-gray-400">News & Events</span>
            <ChevronRight size={14} />
            <span className="text-[#003876] font-semibold">Global Events</span>
          </nav>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-[#003876] tracking-tight">Global Events</h1>
              <p className="mt-2 text-gray-600 font-medium max-w-2xl">
                Discover the latest international exchanges, high-level visits, and global milestones at Yonsei University.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-10 lg:py-16">
        
        {/* Search Bar */}
        <div className="flex flex-col md:flex-row justify-end items-center mb-10 gap-4">
          <div className="relative w-full md:w-[350px]">
            <input 
              type="text" 
              placeholder="Search by institution or title..."
              className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-4 focus:ring-[#003876]/5 focus:border-[#003876] transition-all outline-none text-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredNews.map((item) => (
            <div 
              key={item.id} 
              className="group bg-white border border-gray-100 rounded-[24px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                   <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#003876] shadow-xl">
                      <Camera size={20} />
                   </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex items-center gap-4 text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-3">
                  <span className="flex items-center gap-1"><Calendar size={12} /> {item.date}</span>
                  <span className="flex items-center gap-1"><Eye size={12} /> {item.views}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 leading-tight group-hover:text-[#003876] transition-colors line-clamp-2 mb-4">
                  {item.title}
                </h3>
                <div className="mt-auto pt-4 border-t border-gray-50 flex items-center gap-1 text-xs text-gray-500 font-medium italic">
                  <MapPin size={12} className="text-[#8A704C]" /> {item.location}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredNews.length === 0 && (
          <div className="py-20 text-center flex flex-col items-center">
            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center text-gray-300 mb-6">
              <Search size={40} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">No visitor news found</h3>
            <p className="text-gray-500">Try adjusting your search terms.</p>
            <button 
              onClick={() => setSearchTerm('')}
              className="mt-6 px-6 py-2 bg-[#003876] text-white rounded-lg font-bold text-sm"
            >
              Show all news
            </button>
          </div>
        )}

        {/* Pagination */}
        <div className="flex justify-center items-center gap-3">
          <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-[#003876] transition-colors">
            <ChevronRight className="rotate-180" size={20} />
          </button>
          <button className="w-10 h-10 rounded-full bg-[#003876] text-white font-bold text-sm shadow-lg shadow-blue-900/20">1</button>
          <button className="w-10 h-10 rounded-full border border-gray-200 text-gray-500 font-bold text-sm hover:bg-gray-50 transition-colors">2</button>
          <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-[#003876] transition-colors">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Quick Links Section at Bottom */}
      <div className="bg-gray-50 py-16 mt-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h4 className="text-xl font-bold text-[#003876] mb-2">Protocol & Visitor Inquiries</h4>
              <p className="text-gray-500 text-sm">For official visits or international protocol support, please contact our team.</p>
            </div>
            <Link to="/intro/contact" className="px-8 py-4 bg-[#8A704C] text-white rounded-xl font-bold hover:bg-[#725a3d] transition-all shadow-lg">
              Contact Protocol Officer
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalEvents;
