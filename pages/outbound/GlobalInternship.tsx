
import React from 'react';
import { ChevronRight, Home, Briefcase, Target, Globe, Award, Zap, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const GlobalInternship: React.FC = () => {
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
            <span className="text-[#003876] font-semibold">Global Internship Program</span>
          </nav>
          <h1 className="text-3xl lg:text-4xl font-bold text-[#003876] tracking-tight">Global Internship Program</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12 lg:py-20">
        <div className="max-w-4xl mx-auto">
          {/* Main GIP Intro */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Program Introduction</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-10">
              The Global Internship Program (GIP) was developed to provide students with the international business environment experience and skills to help them be better equipped for career planning and to nurture global citizens through enhancement in language proficiency and opportunities for diverse cultural experiences.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: <Briefcase />, title: "Professional Exp.", text: "First-hand professional experience in global HQ." },
                { icon: <Target />, title: "Business Env.", text: "Understanding the international business landscape." },
                { icon: <Globe />, title: "Global Skills", text: "Enhancing competitiveness and language skills." }
              ].map((item, i) => (
                <div key={i} className="p-8 border border-gray-100 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#003876] mb-6">
                    {item.icon}
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Global STERN Section */}
          <div className="bg-[#003876] rounded-[40px] p-10 lg:p-14 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/4 -translate-y-1/2 blur-3xl"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <Zap className="text-amber-400" size={28} />
                <h2 className="text-2xl lg:text-3xl font-bold">Global STERN: STudy + inTERN</h2>
              </div>
              <p className="text-blue-100 text-lg leading-relaxed mb-12">
                해외파견 교환 프로그램과 연계하여 종료 후 미국 대학생들과 함께 해외 인턴십을 경험하면서 글로벌 교육 환경에서 수학 뿐만 아니라 취·창업을 위한 글로벌 역량 강화 프로그램입니다. 공신력 있는 해외 인턴십 기관과 연계하여 질적으로 우수한 인턴십을 제공합니다.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { title: "글로벌 커리어 역량", text: "다양한 배경의 전문가들과 협업을 통한 소통 능력 배양" },
                  { title: "네트워크 확장", text: "공신력 있는 기관에서의 실무를 통한 인적 네트워크 형성" },
                  { title: "문화적 적응력", text: "미국 내 다양한 문화 행사 참여를 통한 글로벌 마인드 강화" },
                  { title: "취업 경쟁력", text: "해외 뿐만 아니라 국내 외국계 기업 취업 시 강력한 포트폴리오" }
                ].map((benefit, i) => (
                  <div key={i} className="flex gap-4 p-6 bg-white/10 rounded-2xl border border-white/10 hover:bg-white/20 transition-all">
                    <ShieldCheck className="text-amber-400 shrink-0" size={20} />
                    <div>
                      <h4 className="font-bold mb-1 text-[15px]">{benefit.title}</h4>
                      <p className="text-xs text-blue-100 leading-relaxed">{benefit.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalInternship;
