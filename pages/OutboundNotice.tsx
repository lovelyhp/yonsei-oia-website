
import React, { useState } from 'react';
import { Search, Paperclip, ChevronLeft, ChevronRight, Megaphone, Eye, Calendar, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BoardItem {
  id: number;
  type: 'pinned' | 'normal';
  category?: string;
  subject: string;
  hasAttachment: boolean;
  date: string;
  views: number;
}

const BOARD_DATA: BoardItem[] = [
  {
    id: 110,
    type: 'pinned',
    subject: "[2026 가을학기] 해외파견프로그램 배정대학 명단 List of Host Universities for the Fall 2026 Semester",
    hasAttachment: true,
    date: "2025.12.16",
    views: 9865
  },
  {
    id: 109,
    type: 'normal',
    subject: "[2026 여름방학] 1차~2차 해외 파견프로그램 지원 안내 / 2026 Summer Program Application Guidelines (1st~2 Round Nominations)",
    hasAttachment: true,
    date: "2026.01.19",
    views: 890
  },
  {
    id: 108,
    type: 'normal',
    subject: "[2026 가을학기] 해외파견프로그램 1차 서류 신청 가이드 (Fall 2026 Outbound 1st Round Application Guide)",
    hasAttachment: false,
    date: "2026.01.06",
    views: 1560
  },
  {
    id: 107,
    type: 'normal',
    subject: "[2026 가을학기] 해외파견프로그램 자주 묻는 질문 모음 (FAQ: Fall 2026 Outbound Application)",
    hasAttachment: false,
    date: "2025.12.23",
    views: 2340
  },
  {
    id: 106,
    type: 'normal',
    subject: "[2026 봄학기] Virtual Student Exchange Program 지원 안내",
    hasAttachment: false,
    date: "2025.12.12",
    views: 670
  },
  {
    id: 105,
    type: 'normal',
    subject: "[광고] ETS 공식 토플 모의고사 시험 할인 쿠폰",
    hasAttachment: true,
    date: "2025.12.02",
    views: 1100
  },
  {
    id: 104,
    type: 'normal',
    subject: "[2026 봄학기] 국제처 해외파견프로그램 참가자 사전교육 (Pre-departure Orientation for Spring 2026 ESP.VSP)",
    hasAttachment: true,
    date: "2025.11.18",
    views: 1850
  }
];

const OutboundNotice: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="bg-white min-h-screen">
      {/* Header / Breadcrumbs */}
      <div className="bg-gray-50 border-b border-gray-200 py-8 lg:py-12">
        <div className="container mx-auto px-4 md:px-6">
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <Link to="/" className="hover:text-[#003876] flex items-center gap-1">
              <Home size={14} /> Home
            </Link>
            <ChevronRight size={14} />
            <span className="hover:text-[#003876] cursor-pointer">Outbound</span>
            <ChevronRight size={14} />
            <span className="text-[#003876] font-semibold">Notice (OIA)</span>
          </nav>
          <h1 className="text-3xl lg:text-4xl font-bold text-[#003876] tracking-tight">Notice (OIA)</h1>
          <p className="mt-2 text-gray-600 max-w-2xl font-medium">
            Find the latest information and announcements for students planning to study abroad.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-10 lg:py-16">
        
        {/* Search Bar */}
        <div className="flex flex-col md:flex-row justify-end mb-8 gap-3">
          <div className="relative flex items-center">
            <select className="absolute left-0 h-full pl-4 pr-8 bg-white border-r border-gray-200 text-sm font-semibold text-gray-700 focus:outline-none appearance-none cursor-pointer rounded-l-lg">
              <option>Subject</option>
              <option>Content</option>
            </select>
            <div className="absolute left-[85px] pointer-events-none">
              <ChevronDownSmall />
            </div>
            <input 
              type="text" 
              placeholder="Search announcements..."
              className="pl-32 pr-12 py-3 w-full md:w-[400px] bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#003876]/20 focus:border-[#003876] transition-all outline-none text-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="absolute right-2 p-2 bg-[#003876] text-white rounded-md hover:bg-[#002a5a] transition-colors">
              <Search size={18} />
            </button>
          </div>
        </div>

        {/* Board Table */}
        <div className="overflow-hidden border-t-2 border-[#003876]">
          <table className="w-full text-left border-collapse">
            <thead className="hidden md:table-header-group bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-sm font-bold text-gray-700 uppercase tracking-wider w-20 text-center">No</th>
                <th className="px-6 py-4 text-sm font-bold text-gray-700 uppercase tracking-wider">Subject</th>
                <th className="px-6 py-4 text-sm font-bold text-gray-700 uppercase tracking-wider w-32 text-center">Date</th>
                <th className="px-6 py-4 text-sm font-bold text-gray-700 uppercase tracking-wider w-24 text-center">Views</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {BOARD_DATA.map((item) => (
                <tr 
                  key={item.id} 
                  className={`group transition-colors hover:bg-gray-50 cursor-pointer ${item.type === 'pinned' ? 'bg-blue-50/40' : ''}`}
                >
                  <td className="hidden md:table-cell px-6 py-5 text-center text-sm font-medium text-gray-500">
                    {item.type === 'pinned' ? (
                      <div className="flex justify-center">
                        <span className="bg-[#003876] text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase flex items-center gap-1">
                          <Megaphone size={10} /> Notice
                        </span>
                      </div>
                    ) : (
                      item.id
                    )}
                  </td>

                  <td className="px-4 md:px-6 py-5">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-start gap-2">
                        {item.type === 'pinned' && (
                          <span className="md:hidden bg-[#003876] text-white text-[9px] font-bold px-1.5 py-0.5 rounded uppercase shrink-0 mt-[3px]">
                            Notice
                          </span>
                        )}
                        <span className={`text-[15px] md:text-base leading-tight group-hover:text-[#003876] transition-colors ${item.type === 'pinned' ? 'font-bold' : 'font-medium'}`}>
                          {item.subject}
                        </span>
                        {item.hasAttachment && (
                          <Paperclip size={14} className="text-[#8A704C] shrink-0 mt-[4px] md:mt-[5px]" />
                        )}
                      </div>
                      <div className="flex md:hidden items-center gap-4 mt-2 text-[12px] text-gray-400 font-medium">
                        <span className="flex items-center gap-1"><Calendar size={12} /> {item.date}</span>
                        <span className="flex items-center gap-1"><Eye size={12} /> {item.views}</span>
                      </div>
                    </div>
                  </td>

                  <td className="hidden md:table-cell px-6 py-5 text-center text-sm font-medium text-gray-500">
                    {item.date}
                  </td>

                  <td className="hidden md:table-cell px-6 py-5 text-center text-sm font-medium text-gray-500">
                    {item.views.toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="mt-12 flex justify-center items-center gap-2">
          <button className="p-2 rounded-md border border-gray-200 text-gray-400 hover:text-[#003876] hover:border-[#003876] transition-all">
            <ChevronLeft size={20} />
          </button>
          {[1, 2, 3].map((num) => (
            <button 
              key={num}
              className={`w-10 h-10 rounded-md font-bold text-sm transition-all ${
                num === 1 
                  ? 'bg-[#003876] text-white shadow-lg' 
                  : 'text-gray-500 hover:bg-gray-100'
              }`}
            >
              {num}
            </button>
          ))}
          <button className="p-2 rounded-md border border-gray-200 text-gray-400 hover:text-[#003876] hover:border-[#003876] transition-all">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

const ChevronDownSmall = () => (
  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 1L5 5L9 1" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default OutboundNotice;
