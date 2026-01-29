
import React from 'react';
import { ChevronRight, Home, Globe, GraduationCap, CreditCard, Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ESP: React.FC = () => {
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
            <span className="text-[#003876] font-semibold">Exchange Student Program (ESP)</span>
          </nav>
          <h1 className="text-3xl lg:text-4xl font-bold text-[#003876] tracking-tight">Exchange Student Program (ESP)</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12 lg:py-20">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-blue max-w-none text-gray-600 leading-relaxed space-y-8 mb-16">
            <p className="text-xl text-gray-700 font-medium border-l-4 border-[#8A704C] pl-6">
              Office of International Affairs (OIA) administers a wide range of semester and academic year-long study abroad opportunities to foster global competence of Yonsei students and their personal growth as global citizens.
            </p>
            <p>
              Available programs: semester/year-long exchanges, semester-long visiting student programs, summer term programs, and global internships ranging from six weeks to one year awarding academic credit. The Regional Cooperation Center (Study Abroad) of OIA facilitates the outgoing exchange process and works closely with our international partner universities to develop new academic opportunities and provides extensive planning assistance for students including pre-departure orientation sessions.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-[40px] p-8 lg:p-12 shadow-sm mb-12">
            <h2 className="text-2xl font-bold text-[#003876] mb-8 flex items-center gap-3">
              <GraduationCap size={28} className="text-[#8A704C]" /> Program Highlights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-[#003876] shrink-0">
                    <Globe size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Global Reach</h4>
                    <p className="text-sm text-gray-500">Study at top-tier universities worldwide through bilateral agreements.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-[#003876] shrink-0">
                    <CreditCard size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Credit Transfer</h4>
                    <p className="text-sm text-gray-500">Credits earned abroad are transferred to your academic account at Yonsei.</p>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-[#003876] rounded-2xl text-white">
                <h4 className="font-bold text-amber-400 mb-2 flex items-center gap-2">
                  <Calendar size={18} /> Tuition Policy
                </h4>
                <p className="text-sm leading-relaxed mb-4">
                  Students pay the <strong>tuition to Yonsei University only</strong>. Host university tuition is waived under the exchange agreement.
                </p>
                <div className="pt-4 border-t border-white/10 text-[11px] font-medium text-blue-200 uppercase tracking-widest">
                  Application: Approx. 1 year before departure
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/partners/institutions" className="inline-flex items-center gap-2 px-8 py-4 bg-[#8A704C] text-white rounded-xl font-bold hover:bg-[#725a3d] transition-all shadow-lg">
              View Partner Institutions <ArrowRight size={18} />
            </Link>
            <Link to="/outbound/notice" className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#003876] text-[#003876] rounded-xl font-bold hover:bg-blue-50 transition-all">
              Check Latest Announcements
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ESP;
