
import React from 'react';
import { ChevronRight, Home, Award, GraduationCap, Building, ExternalLink, Mail, Phone, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

const ScholarshipCard: React.FC<{ title: string; objective: string; scale: string; eligibility: string[]; method: string; note?: string }> = ({ title, objective, scale, eligibility, method, note }) => (
  <div className="bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-lg transition-shadow">
    <div className="flex items-center gap-3 mb-6">
      <div className="w-10 h-10 bg-blue-50 text-[#003876] rounded-xl flex items-center justify-center shrink-0">
        <Award size={20} />
      </div>
      <h3 className="text-xl font-bold text-[#003876] leading-tight">{title}</h3>
    </div>
    <div className="space-y-6">
      <div>
        <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-2">Objective & Scale</h4>
        <p className="text-sm text-gray-700 font-medium mb-1">{objective}</p>
        <p className="text-sm text-[#8A704C] font-bold">{scale}</p>
      </div>
      <div>
        <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-2">Eligibility</h4>
        <ul className="space-y-2">
          {eligibility.map((item, i) => (
            <li key={i} className="text-[13px] text-gray-500 flex gap-2">
              <span className="text-[#8A704C]">•</span> {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="pt-4 border-t border-gray-50">
        <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-2">Application Method</h4>
        <p className="text-[13px] text-gray-600 font-medium">{method}</p>
        {note && <p className="text-[11px] text-gray-400 mt-2 italic">{note}</p>}
      </div>
    </div>
  </div>
);

const Scholarships: React.FC = () => {
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
            <span className="text-[#003876] font-semibold">Outbound Scholarships</span>
          </nav>
          <h1 className="text-3xl lg:text-4xl font-bold text-[#003876] tracking-tight">Outbound Scholarships</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12 lg:py-20">
        {/* On-Campus Section */}
        <section className="mb-24">
          <div className="flex items-center gap-3 mb-10">
            <GraduationCap className="text-[#8A704C]" size={28} />
            <h2 className="text-2xl font-bold text-gray-900">On-Campus Scholarships (교내 장학금)</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <ScholarshipCard 
              title="교류활성화 장학금"
              objective="파견교류 활성화를 위한 파견 장려 지원금 (등록금 지원과 별도)"
              scale="학기당 10명 내외, 인당 200만원"
              eligibility={[
                "신촌/국제캠퍼스 학부 및 대학원 교환/방문학생 선발자",
                "선정된 교류활성화 대상 대학으로 파견될 자",
                "기타 교내외 교환학생 장학금 미선발자"
              ]}
              method="매년 10월(봄학기), 4월(가을학기) 선발요강 발표"
              note="파견 종료 후 경험 보고서 및 홍보 자료 제출 의무"
            />
            <ScholarshipCard 
              title="글로벌리더 장학금"
              objective="재정지원을 통해 해외 교환프로그램 참가 장려 (등록금 지원과 별도)"
              scale="학기당 10명 내외, 1인 400만원"
              eligibility={[
                "대한민국 국적 학부생 (전공 무관)",
                "학자금지원구간 3구간 이내",
                "총 평량평균 3.1 이상 (4.3 기준)"
              ]}
              method="매년 9월(봄학기), 3월(가을학기) 대상자 개별 이메일 공지"
            />
            <ScholarshipCard 
              title="이윤재 글로벌 인재육성"
              objective="일본 International Christian University(ICU) 파견 학생 지원"
              scale="학기당 400만원"
              eligibility={[
                "ICU 배정 학생 전체"
              ]}
              method="ICU 배정 시 별도 절차 없이 자동 수혜"
            />
          </div>
          <div className="mt-8 p-4 bg-gray-50 rounded-xl text-xs text-gray-500 font-medium border-l-4 border-gray-200">
            ** 이외 일부 단과대학 또는 학과에서 운영하는 장학제도가 있으니, 소속 단위기관에 확인해보시기 바랍니다.
          </div>
        </section>

        {/* Off-Campus Section */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-10">
            <Building className="text-[#8A704C]" size={28} />
            <h2 className="text-2xl font-bold text-gray-900">Off-Campus Scholarships (교외 장학금)</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="border border-gray-200 rounded-[40px] p-10 flex flex-col md:flex-row gap-10 bg-white">
              <div className="md:w-1/3">
                <div className="w-16 h-16 bg-blue-50 text-[#003876] rounded-2xl flex items-center justify-center mb-6">
                  <ExternalLink size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">미래에셋 교환장학생</h3>
                <p className="text-[11px] font-bold text-[#8A704C] mt-2 uppercase tracking-widest">Mirae Asset Foundation</p>
              </div>
              <div className="md:w-2/3 space-y-6">
                <p className="text-sm text-gray-600 leading-relaxed font-medium">
                  재정지원을 통해 해외 교환프로그램 참가 장려를 목적으로 하며, 아시아 외 지역 파견 시 최고 수준의 지원을 제공합니다.
                </p>
                <div className="flex items-center gap-3 text-2xl font-black text-[#003876]">
                  7,500,000 <span className="text-xs font-bold text-gray-400">KRW (Max)</span>
                </div>
                <ul className="text-xs space-y-2 text-gray-500 border-t border-gray-100 pt-6">
                  <li>• 성적: 평량평균 3.1/4.3 이상</li>
                  <li>• 소득분위 1~8분위 이하</li>
                  <li>• 국제처를 통해 서류 일괄 접수</li>
                </ul>
              </div>
            </div>

            <div className="border border-gray-200 rounded-[40px] p-10 flex flex-col md:flex-row gap-10 bg-white">
              <div className="md:w-1/3">
                <div className="w-16 h-16 bg-blue-50 text-[#003876] rounded-2xl flex items-center justify-center mb-6">
                  <ExternalLink size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">서울교환학생 장학금</h3>
                <p className="text-[11px] font-bold text-[#8A704C] mt-2 uppercase tracking-widest">Hi Seoul SF</p>
              </div>
              <div className="md:w-2/3 space-y-6">
                <p className="text-sm text-gray-600 leading-relaxed font-medium">
                  서울특별시 거주 미래 글로벌 인재를 지원하기 위해 서울장학재단에서 운영하는 프로그램입니다.
                </p>
                <div className="flex items-center gap-3 text-2xl font-black text-[#003876]">
                  5,500,000 <span className="text-xs font-bold text-gray-400">KRW (Max)</span>
                </div>
                <ul className="text-xs space-y-2 text-gray-500 border-t border-gray-100 pt-6">
                  <li>• 성적: 평량평균 85점 이상</li>
                  <li>• 소득분위 0~4분위 이하</li>
                  <li>• 가을학기 파견자 대상 (연 1회 선발)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <div className="p-10 bg-[#003876] rounded-[40px] text-white">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div>
              <h3 className="text-2xl font-bold mb-4">Questions about Scholarships?</h3>
              <p className="text-blue-100 font-medium">Our Regional Cooperation Center is here to help you navigate financial support options.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 shrink-0">
              <div className="flex items-center gap-3">
                <Phone className="text-amber-400" size={20} />
                <span className="font-bold">02-2123-4704</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-amber-400" size={20} />
                <span className="font-bold">sap@yonsei.ac.kr</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scholarships;
