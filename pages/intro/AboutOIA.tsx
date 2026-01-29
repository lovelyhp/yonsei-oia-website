
import React from 'react';
import { ChevronRight, Home, ShieldCheck, Globe, Users, Network } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutOIA: React.FC = () => {
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
            <span className="text-gray-400">Introduction</span>
            <ChevronRight size={14} />
            <span className="text-[#003876] font-semibold">About OIA</span>
          </nav>
          <h1 className="text-3xl lg:text-4xl font-bold text-[#003876] tracking-tight">About OIA</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12 lg:py-20">
        <div className="max-w-5xl mx-auto">
          {/* Introduction Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
            <div className="lg:col-span-7">
              <div className="inline-block px-3 py-1 rounded-full bg-blue-50 text-[#003876] text-[12px] font-bold uppercase tracking-widest mb-6">
                Gateway to Global Yonsei
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 leading-tight">
                Driving strategic direction for Yonsei University’s global endeavors.
              </h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  The Office of International Affairs (OIA) provides strategic direction for Yonsei University’s global endeavors in its mission to become Asia’s World University.
                </p>
                <p>
                  Since its establishment in 1966 as the first international office among Korean universities, the OIA has developed significant partnerships with leading universities around the world to develop collaborative global strategies, initiatives, and programs and ensure a culturally rich environment for students and faculty on campus.
                </p>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#8A704C]/10 rounded-full blur-2xl"></div>
                <div className="bg-[#003876] p-10 rounded-[40px] shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                  <Globe size={120} className="text-white/10 absolute -bottom-10 -right-10 group-hover:scale-110 transition-transform duration-700" />
                  <div className="relative z-10 space-y-8">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white shrink-0">
                        <ShieldCheck size={24} />
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-lg mb-1">Pioneering Vision</h4>
                        <p className="text-blue-100 text-sm">Korea's first international office, established in 1966.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white shrink-0">
                        <Users size={24} />
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-lg mb-1">Global Community</h4>
                        <p className="text-blue-100 text-sm">Supporting thousands of international students and faculty.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Teams Section Summary */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            <div className="bg-gray-50 p-8 lg:p-10 rounded-3xl border border-gray-100 hover:shadow-xl transition-all duration-500">
              <h3 className="text-xl font-bold text-[#003876] mb-4">International Affairs Team</h3>
              <p className="text-gray-600 leading-relaxed">
                In charge of international partnerships, exchange programs, international visits and protocol, and non-degree programs including Yonsei's international Summer and Winter Schools.
              </p>
            </div>
            <div className="bg-gray-50 p-8 lg:p-10 rounded-3xl border border-gray-100 hover:shadow-xl transition-all duration-500">
              <h3 className="text-xl font-bold text-[#003876] mb-4">Global One-Stop Service Center (GOSC)</h3>
              <p className="text-gray-600 leading-relaxed">
                In charge of supporting the international community at Yonsei University, providing various services from visa guidance to transition to a new environment.
              </p>
            </div>
          </div>

          {/* Organization Chart Section */}
          <div className="pt-20 border-t border-gray-100">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-[#003876] rounded-xl flex items-center justify-center text-white shadow-lg shadow-[#003876]/20">
                  <Network size={28} />
                </div>
              </div>
              <h2 className="text-3xl font-bold text-[#003876]">Organization</h2>
              <p className="text-gray-500 mt-2">Leadership & Structure of the OIA</p>
            </div>

            {/* Responsive Organizational Chart - Fixed Parallel Layout */}
            <div className="bg-white rounded-3xl border border-gray-200 p-3 md:p-12 shadow-sm overflow-hidden">
              <div className="flex flex-col items-center w-full">
                
                {/* VP - Top */}
                <div className="w-full max-w-[220px] md:max-w-[280px] bg-[#003876] p-4 md:p-6 rounded-2xl text-center text-white shadow-xl relative z-10">
                  <h4 className="font-bold text-sm md:text-lg">Vice President</h4>
                  <p className="text-blue-200 text-[9px] md:text-sm font-medium uppercase tracking-widest mt-1">for International Affairs</p>
                </div>

                {/* Vertical Line Connector */}
                <div className="w-0.5 h-6 md:h-10 bg-gray-200"></div>

                {/* Associate VP - Middle */}
                <div className="w-full max-w-[220px] md:max-w-[280px] bg-[#8A704C] p-4 md:p-6 rounded-2xl text-center text-white shadow-xl relative z-10">
                  <h4 className="font-bold text-sm md:text-lg">Associate Vice President</h4>
                  <p className="text-amber-100 text-[9px] md:text-sm font-medium uppercase tracking-widest mt-1">for International Affairs</p>
                </div>

                {/* Branching Logic - Fixed Horizontal even on Mobile */}
                <div className="w-full flex flex-col items-center">
                  <div className="w-0.5 h-6 md:h-10 bg-gray-200"></div>
                  
                  {/* Branch Horizontal Line */}
                  <div className="w-[70%] md:w-[60%] h-0.5 bg-gray-200"></div>
                  
                  {/* Vertical Legs to Teams */}
                  <div className="w-[70%] md:w-[60%] flex justify-between">
                    <div className="w-0.5 h-4 md:h-8 bg-gray-200"></div>
                    <div className="w-0.5 h-4 md:h-8 bg-gray-200"></div>
                  </div>

                  {/* Bottom Teams - Side by Side Fixed */}
                  <div className="flex flex-row justify-center gap-1.5 md:gap-8 w-full">
                    {/* Team 1: International Affairs Team */}
                    <div className="w-1/2">
                      <div className="bg-gray-50 border border-gray-200 p-2.5 md:p-8 rounded-xl md:rounded-3xl hover:bg-white hover:border-[#003876]/30 transition-all group h-full shadow-sm">
                        <h5 className="font-bold text-[#003876] text-[11px] md:text-lg mb-2.5 md:mb-6 text-center leading-tight">International Affairs Team</h5>
                        <ul className="text-gray-500 text-[9px] md:text-sm space-y-1 md:space-y-3">
                          {[
                            "Global Alliances",
                            "International Partnerships",
                            "Protocol",
                            "Exchange Student Program",
                            "Visiting Student Program",
                            "Study Abroad at Yonsei (SAY)",
                            "Yonsei International Summer School (YISS)",
                            "Winter Abroad at Yonsei (WAY)"
                          ].map((text, i) => (
                            <li key={i} className="flex items-start gap-1 md:gap-2">
                              <div className="w-1 md:w-1.5 h-1 md:h-1.5 bg-[#8A704C] rounded-full mt-1.5 md:mt-2 shrink-0"></div> 
                              <span className="leading-tight">{text}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Team 2: Global One-Stop Service Center (GOSC) */}
                    <div className="w-1/2">
                      <div className="bg-gray-50 border border-gray-200 p-2.5 md:p-8 rounded-xl md:rounded-3xl hover:bg-white hover:border-[#003876]/30 transition-all group h-full shadow-sm">
                        <h5 className="font-bold text-[#003876] text-[11px] md:text-lg mb-2.5 md:mb-6 text-center leading-tight">Global One-Stop Service Center (GOSC)</h5>
                        <ul className="text-gray-500 text-[9px] md:text-sm space-y-1 md:space-y-3">
                          {[
                            "International Student Services",
                            "International Faculty Services",
                            "Global Service Desk",
                            "Global Lounge"
                          ].map((text, i) => (
                            <li key={i} className="flex items-start gap-1 md:gap-2">
                              <div className="w-1 md:w-1.5 h-1 md:h-1.5 bg-[#8A704C] rounded-full mt-1.5 md:mt-2 shrink-0"></div> 
                              <span className="leading-tight">{text}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutOIA;
