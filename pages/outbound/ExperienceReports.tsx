
import React from 'react';
import { ChevronRight, Home, FileText, ExternalLink, Search, UserCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const ExperienceReports: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-gray-50 border-b border-gray-200 py-8 lg:py-12">
        <div className="container mx-auto px-4 md:px-6">
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <Link to="/" className="hover:text-[#003876] flex items-center gap-1">
              <Home size={14} /> Home
            </Link>
            <ChevronRight size={14} />
            <span className="text-gray-400">Outbound</span>
            <ChevronRight size={14} />
            <span className="text-[#003876] font-semibold">Experience Reports</span>
          </nav>
          <h1 className="text-3xl lg:text-4xl font-bold text-[#003876] tracking-tight">Experience Reports</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12 lg:py-20">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Learn from Fellow Yonseians</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Before choosing your host university, we highly recommend browsing through the experience reports submitted by previous participants. These reports offer invaluable insights into campus life, housing, academics, and living costs at our partner institutions.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-[#003876] font-bold text-sm">
                  <UserCheck className="text-[#8A704C]" size={20} /> Real Student Feedback
                </div>
                <div className="flex items-center gap-3 text-[#003876] font-bold text-sm">
                  <Search className="text-[#8A704C]" size={20} /> Searchable by Region & Univ.
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-gray-50 rounded-[40px] p-8 border border-gray-100 flex flex-col items-center text-center shadow-inner">
                <div className="w-20 h-20 bg-white rounded-3xl shadow-md flex items-center justify-center text-[#003876] mb-8">
                  <FileText size={40} />
                </div>
                <h3 className="font-bold text-gray-900 mb-4 uppercase tracking-widest text-xs">Official Portal Path</h3>
                <div className="space-y-2 text-sm text-gray-500 font-medium mb-10">
                  <p>Yonsei Portal (학사포탈)</p>
                  <ChevronDownSmall />
                  <p>Academic Information System (국제학생교류)</p>
                  <ChevronDownSmall />
                  <p className="text-[#003876] font-bold">OIA Experience Reports (경험보고서조회)</p>
                </div>
                <a 
                  href="https://portal.yonsei.ac.kr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full bg-[#003876] text-white py-4 rounded-2xl font-bold hover:bg-[#002a5a] transition-all flex items-center justify-center gap-2 shadow-lg"
                >
                  Access Yonsei Portal <ExternalLink size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ChevronDownSmall = () => (
  <div className="flex justify-center text-gray-300">
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
    </svg>
  </div>
);

export default ExperienceReports;
