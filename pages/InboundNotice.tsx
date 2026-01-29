
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
    id: 105,
    type: 'pinned',
    subject: "[Fall 2025] Regarding Fall 2025 SAY Program Official Transcript",
    hasAttachment: true,
    date: "2026.01.06",
    views: 1542
  },
  {
    id: 104,
    type: 'pinned',
    subject: "[Fall 2025] End of Semester and Mandatory Departure from Korea for D-2 ARC Holders",
    hasAttachment: true,
    date: "2025.12.18",
    views: 2103
  },
  {
    id: 103,
    type: 'normal',
    subject: "[Fall 2025] Final Course Evaluation and Grade/Transcript Information",
    hasAttachment: false,
    date: "2025.12.15",
    views: 845
  },
  {
    id: 102,
    type: 'normal',
    subject: "[Spring 2026] Dormitory Application and Possible Options for Off-Campus Housing",
    hasAttachment: false,
    date: "2025.11.25",
    views: 3120
  },
  {
    id: 101,
    type: 'normal',
    subject: "[Fall 2025] Invitation to Fall 2025 Global Day",
    hasAttachment: true,
    date: "2025.11.20",
    views: 1280
  },
  {
    id: 100,
    type: 'normal',
    subject: "[Fall 2025] Kimchi Day by Yonsei Coop",
    hasAttachment: true,
    date: "2025.11.12",
    views: 950
  },
  {
    id: 99,
    type: 'normal',
    subject: "[Fall 2025] Seoul Historiography Tour",
    hasAttachment: true,
    date: "2025.10.21",
    views: 1120
  }
];

const InboundNotice: React.FC = () => {
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
            <span className="hover:text-[#003876] cursor-pointer">Inbound</span>
            <ChevronRight size={14} />
            <span className="text-[#003876] font-semibold">Notice (SAY)</span>
          </nav>
          <h1 className="text-3xl lg:text-4xl font-bold text-[#003876] tracking-tight">Notice (SAY)</h1>
          <p className="mt-2 text-gray-600 max-w-2xl font-medium">
            Find the latest information and announcements for Study Abroad at Yonsei (SAY) program.
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
                  {/* Desktop ID / Pinned Icon */}
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

                  {/* Subject - Main column */}
                  <td className="px-4 md:px-6 py-5">
                    <div className="flex flex-col gap-1">
                      {/* Consistent alignment using items-start and specific mt for icons */}
                      <div className="flex items-start gap-2">
                        {/* Mobile Pin Icon */}
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
                      {/* Mobile metadata */}
                      <div className="flex md:hidden items-center gap-4 mt-2 text-[12px] text-gray-400 font-medium">
                        <span className="flex items-center gap-1"><Calendar size={12} /> {item.date}</span>
                        <span className="flex items-center gap-1"><Eye size={12} /> {item.views}</span>
                      </div>
                    </div>
                  </td>

                  {/* Date Desktop */}
                  <td className="hidden md:table-cell px-6 py-5 text-center text-sm font-medium text-gray-500">
                    {item.date}
                  </td>

                  {/* Views Desktop */}
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

// Internal icon component for the select dropdown
const ChevronDownSmall = () => (
  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 1L5 5L9 1" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default InboundNotice;
