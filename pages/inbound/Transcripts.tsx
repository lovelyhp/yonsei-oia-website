
import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

const Transcripts: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-gray-50 border-b border-gray-200 py-8 lg:py-12">
        <div className="container mx-auto px-4 md:px-6">
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <Link to="/" className="hover:text-[#003876] flex items-center gap-1"><Home size={14} /> Home</Link>
            <ChevronRight size={14} />
            <span className="text-gray-400">Inbound</span>
            <ChevronRight size={14} />
            <span className="text-[#003876] font-semibold">Transcripts</span>
          </nav>
          <h1 className="text-3xl lg:text-4xl font-bold text-[#003876] tracking-tight">Transcripts</h1>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-6 py-12 lg:py-20">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-500 text-lg">This page is under construction. Please check back later.</p>
        </div>
      </div>
    </div>
  );
};

export default Transcripts;
