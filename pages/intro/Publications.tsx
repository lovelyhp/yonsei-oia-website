
import React from 'react';
import { ChevronRight, Home, Download, FileText, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const BROCHURES = [
  { year: "2026", title: "2026 OIA Brochure", color: "bg-blue-600" },
  { year: "2025", title: "2025 OIA Brochure", color: "bg-[#003876]" },
  { year: "2024", title: "2024 OIA Brochure", color: "bg-[#8A704C]" },
  { year: "2023", title: "2023 OIA Brochure", color: "bg-gray-800" },
];

const Publications: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-gray-50 border-b border-gray-200 py-8 lg:py-12">
        <div className="container mx-auto px-4 md:px-6">
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <Link to="/" className="hover:text-[#003876] flex items-center gap-1">
              <Home size={14} /> Home
            </Link>
            <ChevronRight size={14} />
            <span className="text-gray-400">Introduction</span>
            <ChevronRight size={14} />
            <span className="text-[#003876] font-semibold">Publications</span>
          </nav>
          <h1 className="text-3xl lg:text-4xl font-bold text-[#003876] tracking-tight">Publications</h1>
          <p className="mt-2 text-gray-600 font-medium">Access our official brochures and annual guides for international students and partners.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12 lg:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {BROCHURES.map((item) => (
              <div key={item.year} className="group">
                <div className={`aspect-[3/4] ${item.color} rounded-2xl overflow-hidden shadow-lg relative mb-6 transition-transform group-hover:-translate-y-2 duration-500`}>
                   <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                   <div className="absolute top-6 left-6 flex items-center gap-2 text-white/60 font-bold text-xs uppercase tracking-widest">
                     <Calendar size={14} /> {item.year} EDITION
                   </div>
                   <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center text-white">
                     <FileText size={64} className="mb-6 opacity-30" />
                     <h3 className="text-xl font-bold leading-tight">{item.title}</h3>
                   </div>
                </div>
                <button className="w-full flex items-center justify-center gap-2 py-3 bg-gray-50 hover:bg-[#003876] border border-gray-200 hover:border-[#003876] text-[#003876] hover:text-white font-bold rounded-xl transition-all shadow-sm">
                  <Download size={18} /> PDF Download
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Publications;
