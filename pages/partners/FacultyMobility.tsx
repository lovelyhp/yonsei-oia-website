
import React from 'react';
import { ChevronRight, Home, Calendar, Award, Plane, ExternalLink, Library } from 'lucide-react';
import { Link } from 'react-router-dom';

const FacultyMobility: React.FC = () => {
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
            <span className="text-gray-400">Partnerships</span>
            <ChevronRight size={14} />
            <span className="text-[#003876] font-semibold">Faculty Mobility</span>
          </nav>
          <h1 className="text-3xl lg:text-4xl font-bold text-[#003876] tracking-tight">Faculty Mobility</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12 lg:py-20">
        <div className="max-w-4xl mx-auto">
          
          {/* Harvard-Yenching Program */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Library className="text-[#8A704C]" size={24} />
              <h2 className="text-2xl font-bold text-gray-900">Harvard-Yenching Program</h2>
            </div>
            
            <div className="border border-gray-200 rounded-2xl p-8 lg:p-10 bg-white shadow-sm">
              <p className="text-gray-600 leading-relaxed mb-8">
                Offers faculty members in humanities and social sciences the opportunity for <strong>10 months of research at Harvard University</strong> with access to libraries and facilities.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <h4 className="text-sm font-bold text-[#003876] uppercase tracking-wider mb-4">Selection Criteria</h4>
                  <ul className="space-y-2 text-sm text-gray-500">
                    <li>• English proficiency and PhD degree</li>
                    <li>• Quality and originality of research proposal</li>
                    <li>• Feasibility of conducting research at Harvard</li>
                    <li>• Priority for those without recent US experience</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                  <h4 className="text-sm font-bold text-[#003876] uppercase tracking-wider mb-4">Application Timeline</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between"><span className="text-gray-500">Announcement</span> <span className="font-bold">June</span></div>
                    <div className="flex justify-between"><span className="text-gray-500">Deadline</span> <span className="font-bold text-[#8A704C]">Late September</span></div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-100">
                <h4 className="text-sm font-bold text-[#003876] uppercase tracking-wider mb-4">Coverage</h4>
                <div className="flex flex-wrap gap-4">
                  {["Round trip airfare", "10-month stipend", "Health insurance ($4.5k)", "Research assistant funding"].map((benefit, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-50 text-[#003876] text-xs font-bold rounded-md">
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Indiana Dispatch Program */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <Plane className="text-[#8A704C]" size={24} />
              <h2 className="text-2xl font-bold text-gray-900">Indiana Dispatch Program</h2>
            </div>

            <div className="border border-gray-200 rounded-2xl p-8 lg:p-10 bg-white shadow-sm">
              <p className="text-gray-600 leading-relaxed mb-8">
                Short-term faculty exchange between <strong>Indiana University and Yonsei University</strong>. Hosts one senior faculty member for one month at Bloomington or Indianapolis.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <Award size={18} className="text-[#8A704C] shrink-0 mt-0.5" />
                    <div className="text-sm">
                      <p className="font-bold text-gray-900">IU Support</p>
                      <p className="text-gray-500">Housing, $20 per diem stipend, and health insurance.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Plane size={18} className="text-[#8A704C] shrink-0 mt-0.5" />
                    <div className="text-sm">
                      <p className="font-bold text-gray-900">Yonsei Support</p>
                      <p className="text-gray-500">Round trip economy class airfare.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                  <h4 className="text-sm font-bold text-[#003876] uppercase tracking-wider mb-4">Application Timeline</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between"><span className="text-gray-500">Announcement</span> <span className="font-bold">January</span></div>
                    <div className="flex justify-between"><span className="text-gray-500">Deadline</span> <span className="font-bold text-[#8A704C]">Late March</span></div>
                  </div>
                </div>
              </div>

              <div className="mt-10 text-center">
                <a 
                  href="https://global.iu.edu/partnerships/faculty-exchange/index.html" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#003876] text-white text-sm rounded-lg font-bold hover:bg-[#002a5a] transition-colors"
                >
                  Official IU Partnership Site <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default FacultyMobility;
