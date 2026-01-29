
import React from 'react';
import { ChevronRight, Home, MapPin, Phone, Mail, Users, Building, ShieldCheck, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const STAFF_DATA = {
  management: [
    { role: "Vice President for International Affairs", name: "Prof. Yong-Chan KIM (김용찬 국제처장)", tel: "", email: "" },
    { role: "Associate Vice President & GOSC Executive Director", name: "Prof. Sang Hoon YOUM (염상훈 국제부처장)", tel: "", email: "" },
    { role: "YISS/WAY Chair", name: "Prof. Jon SODERHOLM (소더홈존 주임교수)", tel: "", email: "" },
  ],
  international: [
    { role: "Director", name: "Ms. Kileun OH (오길은 팀장)", tel: "+82-2-2123-6494", email: "ipartners@yonsei.ac.kr" },
    { role: "Exchange Manager (Europe)", name: "Ms. Seo-Ah CHOI(최서아 과장)", tel: "+82-2-2123-4703", email: "abroad@yonsei.ac.kr" },
    { role: "Exchange Manager (Americas)", name: "Ms. Geeyeon NOH (노지연 대리)", tel: "+82-2-2123-3983", email: "ysoia@yonsei.ac.kr" },
    { role: "Exchange Manager (Asia & Oceania)", name: "Mr. Jongwon KIM (김종원 직원)", tel: "+82-2-2123-4704", email: "sap@yonsei.ac.kr" },
    { role: "Visiting Program Manager", name: "Mr. Sangchan CHUNG (정상찬 대리)", tel: "+82-2-2123-3987", email: "study@yonsei.ac.kr" },
    { role: "Protocol, Summer/Winter Outbound, APRU/AEARU, Global STERN Coordinator", name: "Mr. Jaeyung SHIN (신재영 직원)", tel: "+82-2-2123-4436", email: "protocol@yonsei.ac.kr" },
    { role: "YISS/WAY Assistant Director", name: "Ms. SuhHye LEE (이서혜 차장)", tel: "+82-2-2123-6286", email: "isummer@yonsei.ac.kr" },
    { role: "YISS/WAY Manager", name: "Ms. Rebeca BAEK (백리브가 대리)", tel: "+82-2-2123-3985", email: "summer@yonsei.ac.kr" },
    { role: "YISS/WAY Coordinator", name: "Ms. JeeHye JEONG (정지혜 직원)", tel: "+82-2-2123-3979", email: "iwinter@yonsei.ac.kr" },
    { role: "YISS/WAY Internships, Extracurricular Activities Coordinator", name: "Ms. Ga Vin PARK (박가빈 직원)", tel: "+82-2-2123-3988", email: "yissintern@yonsei.ac.kr" },
    { role: "Outgoing Student Assistant", name: "Assistant (아웃바운드 조교)", tel: "+82-2-2123-8453", email: "exch@yonsei.ac.kr" },
    { role: "Incoming Student Assistant", name: "Assistant (인바운드 조교)", tel: "+82-2-2123-3977", email: "study@yonsei.ac.kr" },
    { role: "YISS/WAY Student Assistant", name: "Assistant (YISS/WAY 조교)", tel: "+82-2-2123-3535", email: "iwinter@yonsei.ac.kr" },
  ],
  gosc: [
    { role: "Director", name: "Ms. Eunjung LEE (이은정 팀장)", tel: "+82-2123-7371", email: "amber@yonsei.ac.kr" },
    { role: "Int'l Student/Faculty Visa (UG) Associate Director", name: "Mr. Yong Hwa CHUNG (정용화 차장)", tel: "+82-2-2123-6492", email: "ivisa@yonsei.ac.kr" },
    { role: "Int'l Student Visa (Grad), GKS Program (Grad) Manager", name: "Ms. Soo Kyung NAM (남수경 주임)", tel: "+82-2-2123-3228", email: "igrad@yonsei.ac.kr" },
    { role: "GKS Program (UG), Part-time, Student Insurance Manager", name: "Ms. Sumin LEE (이수민 직원)", tel: "+82-2-2123-3488", email: "istudent@yonsei.ac.kr" },
    { role: "Int'l Student/Faculty Services Manager", name: "Ms. Dasom KIM(김다솜 주임)", tel: "+82-2-2123-7372", email: "iservice@yonsei.ac.kr" },
    { role: "Global Service Desk (English), PR Coordinator", name: "Ms. Eun Saem JUNG (정은샘 직원)", tel: "+82-2-2123-7377", email: "iservice@yonsei.ac.kr" },
    { role: "Global Service Desk (Chinese), PR Coordinator", name: "Ms. Leehee KIM (김리희 직원)", tel: "+82-2-2123-7375", email: "iservice@yonsei.ac.kr" },
    { role: "Int'l Student Service Assistant", name: "Assistant (GOSC 조교)", tel: "82-2-2123-6495", email: "ivisa@yonsei.ac.kr" },
  ]
};

const ContactRow: React.FC<{ staff: any; hideContact?: boolean }> = ({ staff, hideContact }) => (
  <div className={`grid grid-cols-1 ${hideContact ? 'md:grid-cols-8' : 'md:grid-cols-12'} gap-4 py-6 md:py-4 items-center border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors px-2 md:px-6 rounded-xl md:rounded-none`}>
    <div className={hideContact ? 'md:col-span-5' : 'md:col-span-5'}>
      <p className="text-[10px] md:hidden font-bold text-gray-400 uppercase tracking-widest mb-1">Status / Role</p>
      <p className="text-[13px] md:text-sm font-bold text-[#003876] leading-tight">{staff.role}</p>
    </div>
    <div className={hideContact ? 'md:col-span-3' : 'md:col-span-3'}>
      <p className="text-[10px] md:hidden font-bold text-gray-400 uppercase tracking-widest mb-1">Name</p>
      <p className="text-sm font-medium text-gray-900">{staff.name}</p>
    </div>
    {!hideContact && (
      <div className="md:col-span-4 flex flex-col gap-1">
        <p className="text-[10px] md:hidden font-bold text-gray-400 uppercase tracking-widest mb-1">Contact Details</p>
        {staff.tel && (
          <a href={`tel:${staff.tel}`} className="text-xs text-gray-600 flex items-center gap-1.5 hover:text-[#003876] transition-colors">
            <Phone size={12} className="text-[#8A704C]" /> {staff.tel}
          </a>
        )}
        {staff.email && (
          <a href={`mailto:${staff.email}`} className="text-xs text-gray-600 flex items-center gap-1.5 hover:text-[#003876] transition-colors truncate">
            <Mail size={12} className="text-[#8A704C]" /> {staff.email}
          </a>
        )}
      </div>
    )}
  </div>
);

const SectionHeader: React.FC<{ title: string; icon: React.ReactNode }> = ({ title, icon }) => (
  <div className="flex items-center gap-3 mb-6 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
    <div className="w-10 h-10 bg-blue-50 text-[#003876] rounded-xl flex items-center justify-center shadow-inner">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-[#003876]">{title}</h3>
  </div>
);

const ContactUs: React.FC = () => {
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
            <span className="text-[#003876] font-semibold">Contact Us</span>
          </nav>
          <h1 className="text-3xl lg:text-4xl font-bold text-[#003876] tracking-tight">Contact Us</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12 lg:py-20">
        <div className="max-w-6xl mx-auto">
          
          {/* Main Info */}
          <div className="mb-20">
            <div className="bg-white border border-gray-200 rounded-[40px] p-8 lg:p-12 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#003876]/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
              <h2 className="text-2xl font-bold text-[#003876] mb-8">Office of International Affairs</h2>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-[#8A704C] shrink-0 shadow-sm border border-gray-100">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Mailing Address</h4>
                  <p className="text-gray-600 leading-relaxed font-medium">
                    Yonsei University, 50 Yonsei-ro, Seodaemun-gu, Seoul 03722, Korea
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Directory Sections */}
          <div className="space-y-16">
            
            {/* Senior Management */}
            <div>
              <SectionHeader title="Senior Management" icon={<ShieldCheck size={24} />} />
              <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm">
                <div className="hidden md:grid grid-cols-8 gap-4 bg-gray-50/50 px-6 py-4 border-b border-gray-100">
                  <div className="col-span-5 text-[11px] font-bold text-gray-400 uppercase tracking-widest">Status / Title</div>
                  <div className="col-span-3 text-[11px] font-bold text-gray-400 uppercase tracking-widest">Name</div>
                </div>
                {STAFF_DATA.management.map((staff, i) => (
                  <ContactRow key={i} staff={staff} hideContact={true} />
                ))}
              </div>
            </div>

            {/* International Affairs Team */}
            <div>
              <SectionHeader title="International Affairs Team" icon={<Users size={24} />} />
              <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm">
                <div className="hidden md:grid grid-cols-12 gap-4 bg-gray-50/50 px-6 py-4 border-b border-gray-100">
                  <div className="col-span-5 text-[11px] font-bold text-gray-400 uppercase tracking-widest">Status / Title</div>
                  <div className="col-span-3 text-[11px] font-bold text-gray-400 uppercase tracking-widest">Name</div>
                  <div className="col-span-4 text-[11px] font-bold text-gray-400 uppercase tracking-widest">Contact</div>
                </div>
                {STAFF_DATA.international.map((staff, i) => (
                  <ContactRow key={i} staff={staff} />
                ))}
              </div>
            </div>

            {/* Global One-Stop Service Center */}
            <div>
              <SectionHeader title="Global One-Stop Service Center" icon={<Heart size={24} />} />
              <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm">
                <div className="hidden md:grid grid-cols-12 gap-4 bg-gray-50/50 px-6 py-4 border-b border-gray-100">
                  <div className="col-span-5 text-[11px] font-bold text-gray-400 uppercase tracking-widest">Status / Title</div>
                  <div className="col-span-3 text-[11px] font-bold text-gray-400 uppercase tracking-widest">Name</div>
                  <div className="col-span-4 text-[11px] font-bold text-gray-400 uppercase tracking-widest">Contact</div>
                </div>
                {STAFF_DATA.gosc.map((staff, i) => (
                  <ContactRow key={i} staff={staff} />
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
