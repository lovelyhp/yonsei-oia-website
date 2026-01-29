
import React, { useState } from 'react';
import { ChevronRight, Home, Search, Calendar, ArrowRight, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

// Admin Ready Data Structure - Updated with user provided content
const NEWS_ITEMS = [
  {
    id: 1,
    category: "University News",
    title: "Yonsei University Holds 2026 New Year’s Address for Faculty and Staff",
    summary: "Yonsei University kicked off the new year with an official address for faculty and staff, outlining the strategic vision for 2026 and celebrating collective achievements.",
    date: "2026.01.05",
    views: 8240,
    thumbnail: "https://news.yonsei.ac.kr/frame/imagePreview?atchFileId=18971",
  },
  {
    id: 2,
    category: "Global Network",
    title: "Yonsei University Hosts “Yonsei Chinese Network” Gathering in Shanghai",
    summary: "The OIA organized a major networking event in Shanghai to strengthen connections among alumni and partners in China, fostering a robust global community.",
    date: "2025.12.29",
    views: 4560,
    thumbnail: "https://news.yonsei.ac.kr/frame/imagePreview?atchFileId=19069",
  },
  {
    id: 3,
    category: "Innovation",
    title: "Yonsei University Launches AI Policy Campus and Hosts AX Innovation Awards Ceremony",
    summary: "Marking a milestone in digital transformation, Yonsei launched its AI Policy Campus and recognized outstanding contributions in AI-driven innovation.",
    date: "2025.12.18",
    views: 12100,
    thumbnail: "https://news.yonsei.ac.kr/frame/imagePreview?atchFileId=18729",
  },
  {
    id: 4,
    category: "Global Health",
    title: "Tunisian Minister of Health Visits K-NIBRT Program",
    summary: "The Minister of Health of Tunisia visited the K-NIBRT facility at Yonsei to discuss international cooperation in biopharmaceutical training and global health initiatives.",
    date: "2025.10.02",
    views: 3180,
    thumbnail: "https://news.yonsei.ac.kr/frame/imagePreview?atchFileId=18009",
  }
];

const ArchivedNews: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredNews = NEWS_ITEMS.filter(item => 
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.summary.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white min-h-screen">
      {/* Page Header */}
      <div className="bg-gray-50 border-b border-gray-200 py-8 lg:py-12">
        <div className="container mx-auto px-4 md:px-6">
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <Link to="/" className="hover:text-[#003876] flex items-center gap-1">
              <Home size={14} /> Home
            </Link>
            <ChevronRight size={14} />
            <span className="text-gray-400">News & Events</span>
            <ChevronRight size={14} />
            <span className="text-[#003876] font-semibold">Archived News</span>
          </nav>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-[#003876] tracking-tight">Archived News</h1>
              <p className="mt-2 text-gray-600 font-medium max-w-2xl">
                Stay updated with the latest news, media coverage, and major achievements of Yonsei OIA.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-10 lg:py-16">
        
        {/* Search Bar */}
        <div className="flex flex-col md:flex-row justify-end items-center mb-10 gap-4">
          <div className="relative w-full md:w-[400px]">
            <input 
              type="text" 
              placeholder="Search news by title or content..."
              className="w-full pl-12 pr-4 py-3.5 bg-white border border-gray-200 rounded-xl focus:ring-4 focus:ring-[#003876]/5 focus:border-[#003876] transition-all outline-none text-[15px] font-medium"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </div>

        {/* News List Board */}
        <div className="space-y-6">
          {filteredNews.length > 0 ? (
            filteredNews.map((item) => (
              <div 
                key={item.id} 
                className="group flex flex-col md:flex-row gap-6 lg:gap-8 bg-white border border-gray-100 p-4 md:p-6 rounded-[32px] hover:shadow-xl hover:border-[#003876]/10 transition-all duration-500 cursor-pointer"
              >
                {/* Thumbnail */}
                <div className="w-full md:w-[240px] lg:w-[320px] aspect-[16/10] md:aspect-square lg:aspect-[16/10] shrink-0 rounded-2xl overflow-hidden relative shadow-sm">
                  <img 
                    src={item.thumbnail} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute top-3 left-3">
                    <span className="bg-[#003876]/90 backdrop-blur-sm text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center flex-grow">
                  <div className="flex items-center gap-4 text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-3">
                    <span className="flex items-center gap-1.5"><Calendar size={14} className="text-[#8A704C]" /> {item.date}</span>
                    <span className="flex items-center gap-1.5"><Eye size={14} /> {item.views.toLocaleString()}</span>
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 group-hover:text-[#003876] transition-colors leading-tight mb-3 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-[15px] leading-relaxed line-clamp-2 md:line-clamp-3 mb-6">
                    {item.summary}
                  </p>
                  <div className="mt-auto flex items-center gap-2 text-sm font-bold text-[#8A704C] group-hover:translate-x-1 transition-transform">
                    READ MORE <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="py-24 text-center">
              <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center text-gray-300 mx-auto mb-6">
                <Search size={40} />
              </div>
              <h3 className="text-xl font-bold text-gray-900">No archived news found</h3>
              <p className="text-gray-500 mt-2">Try adjusting your search terms.</p>
              <button 
                onClick={() => setSearchTerm('')}
                className="mt-8 px-8 py-3 bg-[#003876] text-white rounded-xl font-bold shadow-lg"
              >
                View all news
              </button>
            </div>
          )}
        </div>

        {/* Pagination */}
        <div className="mt-16 flex justify-center items-center gap-3">
          <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-[#003876] hover:border-[#003876] transition-all">
            <ChevronRight className="rotate-180" size={24} />
          </button>
          <button className="w-12 h-12 rounded-full bg-[#003876] text-white font-bold text-base shadow-lg shadow-blue-900/20">1</button>
          <button className="w-12 h-12 rounded-full border border-gray-200 text-gray-500 font-bold text-base hover:bg-gray-50 transition-colors">2</button>
          <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-[#003876] hover:border-[#003876] transition-all">
            <ChevronRight size={24} />
          </button>
        </div>

      </div>

      {/* Media Contact Section */}
      <div className="bg-gray-900 py-16 lg:py-24 mt-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="text-center md:text-left">
              <h4 className="text-2xl font-bold text-white mb-3">Media & Press Inquiries</h4>
              <p className="text-gray-400 font-medium">For official press releases, campus photography permissions, or interviews, please contact our PR coordinator.</p>
            </div>
            <Link 
              to="/intro/contact" 
              className="px-10 py-4 bg-[#8A704C] hover:bg-[#725a3d] text-white rounded-2xl font-bold transition-all shadow-xl whitespace-nowrap"
            >
              Contact Press Office
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArchivedNews;
