
import React from 'react';
import { ChevronRight, Home, Globe, MapPin, Building2, Briefcase, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const GlobalNetwork: React.FC = () => {
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
            <span className="text-[#003876] font-semibold">Global Network</span>
          </nav>
          <h1 className="text-3xl lg:text-4xl font-bold text-[#003876] tracking-tight">Global Network</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12 lg:py-20">
        <div className="max-w-4xl mx-auto">
          
          {/* Overseas Offices Section */}
          <section className="mb-20">
            <h2 className="text-xl font-bold text-[#003876] mb-8 flex items-center gap-2">
              <Building2 size={22} className="text-[#8A704C]" /> Overseas Offices
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Tokyo Center */}
              <div className="border border-gray-200 p-8 rounded-xl bg-white">
                <div className="text-[10px] font-bold text-[#8A704C] uppercase tracking-widest mb-2">Tokyo, Japan</div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Yonsei Tokyo Center</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Facilitates faculty and student exchanges with Japanese universities and supports scholars' research activities. Located at Keio University's Mita Campus since May 2012.
                </p>
                <div className="flex items-center gap-2 text-xs font-semibold text-gray-400">
                  <MapPin size={14} /> Keio University Mita Campus
                </div>
              </div>

              {/* Geneva Center */}
              <div className="border border-gray-200 p-8 rounded-xl bg-white">
                <div className="text-[10px] font-bold text-[#8A704C] uppercase tracking-widest mb-2">Geneva, Switzerland</div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Yonsei Geneva Center</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Opened in 2013 at the Global Studies Institute of the University of Geneva. Facilitates collaborative research projects and high-level student/faculty mobility.
                </p>
                <div className="flex items-center gap-2 text-xs font-semibold text-gray-400">
                  <MapPin size={14} /> University of Geneva
                </div>
              </div>
            </div>
          </section>

          {/* International Projects Section */}
          <section>
            <h2 className="text-xl font-bold text-[#003876] mb-8 flex items-center gap-2">
              <Briefcase size={22} className="text-[#8A704C]" /> International Projects
            </h2>

            <div className="space-y-6">
              {/* Government Projects */}
              <div className="p-8 border border-gray-100 bg-gray-50 rounded-xl">
                <h3 className="font-bold text-[#003876] mb-3">Government Projects (MOE)</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Management of Ministry of Education initiatives including <strong>Campus Asia</strong> and various <strong>ODA projects</strong>. We coordinate internal communication and global cooperation for high-impact research and educational development.
                </p>
              </div>

              {/* Joint Funding Program */}
              <div className="p-8 border-l-4 border-[#003876] bg-blue-50/30 rounded-r-xl">
                <h3 className="font-bold text-[#003876] mb-3">Joint Funding Program</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Strategic partnerships with top-tier global universities for joint research funding and excellence.
                </p>
                <div className="flex flex-wrap gap-x-6 gap-y-3 mb-6">
                  {['University of Sydney', 'University of Geneva', 'Emory University', 'Tel-Aviv University'].map(univ => (
                    <div key={univ} className="flex items-center gap-2 text-[13px] font-medium text-gray-700">
                      <div className="w-1.5 h-1.5 bg-[#8A704C] rounded-full"></div> {univ}
                    </div>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href="https://yfl.yonsei.ac.kr" target="_blank" rel="noopener noreferrer" className="text-[13px] font-bold text-[#003876] hover:underline flex items-center gap-1">
                    Yonsei Frontier Lab <ExternalLink size={14} />
                  </a>
                  <span className="text-gray-300">|</span>
                  <a href="#" className="text-[13px] font-bold text-[#003876] hover:underline flex items-center gap-1">
                    Researcher Pure Site <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default GlobalNetwork;
