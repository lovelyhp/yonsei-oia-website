
import React from 'react';
import { ChevronRight, Home, Target, Compass, Heart, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const VisionMission: React.FC = () => {
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
            <span className="text-[#003876] font-semibold">Vision & Mission</span>
          </nav>
          <h1 className="text-3xl lg:text-4xl font-bold text-[#003876] tracking-tight">Vision & Mission</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-16 lg:py-24">
        <div className="max-w-5xl mx-auto">
          {/* Mission Section */}
          <div className="relative mb-24">
            <div className="absolute top-0 left-0 w-20 h-20 bg-[#003876]/5 rounded-full -translate-x-10 -translate-y-10"></div>
            <div className="relative z-10 bg-white p-10 lg:p-16 rounded-[40px] border border-gray-100 shadow-xl shadow-gray-100/50">
              <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="w-24 h-24 lg:w-32 lg:h-32 bg-[#003876] rounded-[30px] flex items-center justify-center shrink-0 shadow-lg rotate-3">
                  <Target size={48} className="text-white -rotate-3" />
                </div>
                <div>
                  <h2 className="text-[#8A704C] font-bold text-sm tracking-[0.2em] uppercase mb-4">Our Purpose</h2>
                  <h3 className="text-3xl lg:text-4xl font-bold text-[#003876] mb-6 leading-tight">Mission Statement</h3>
                  <p className="text-xl lg:text-2xl text-gray-600 font-light leading-relaxed">
                    To promote collaborative partnerships with leading universities abroad for innovative global engagement and provide key services in support of Yonsei's global endeavors, including various study abroad programs, international student and faculty services, and operational support for international projects.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Core Values Infographic */}
          <div>
            <div className="text-center mb-16">
              <h2 className="text-[#8A704C] font-bold text-sm tracking-[0.2em] uppercase mb-3">Foundational Principles</h2>
              <h3 className="text-3xl lg:text-4xl font-bold text-[#003876]">Core Values</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group bg-gray-50 p-10 rounded-[30px] border border-transparent hover:border-[#8A704C]/30 hover:bg-white hover:shadow-2xl transition-all duration-500 text-center">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-[#003876] mx-auto mb-6 shadow-sm group-hover:bg-[#003876] group-hover:text-white transition-all">
                  <Compass size={32} />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">Academic Excellence</h4>
                <p className="text-gray-500 leading-relaxed">
                  Upholding the highest standards of teaching and research in a global context.
                </p>
              </div>

              <div className="group bg-gray-50 p-10 rounded-[30px] border border-transparent hover:border-[#8A704C]/30 hover:bg-white hover:shadow-2xl transition-all duration-500 text-center">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-[#003876] mx-auto mb-6 shadow-sm group-hover:bg-[#003876] group-hover:text-white transition-all">
                  <Heart size={32} />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">Intercultural Environment</h4>
                <p className="text-gray-500 leading-relaxed">
                  Fostering a diverse campus that celebrates global perspectives and inclusion.
                </p>
              </div>

              <div className="group bg-gray-50 p-10 rounded-[30px] border border-transparent hover:border-[#8A704C]/30 hover:bg-white hover:shadow-2xl transition-all duration-500 text-center">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-[#003876] mx-auto mb-6 shadow-sm group-hover:bg-[#003876] group-hover:text-white transition-all">
                  <Globe size={32} />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">Commitment to Internationalization</h4>
                <p className="text-gray-500 leading-relaxed">
                  Driving Yonsei's presence as a leading global hub for future leaders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;
