
import React from 'react';
import { Facebook, Instagram, Youtube, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { SITE_CONFIG } from '../constants';

const SOCIAL_LINKS = [
  { icon: Facebook, url: "https://www.facebook.com/yonsei.eng" },
  { icon: Instagram, url: "https://www.instagram.com/yonsei_official" },
  { icon: Youtube, url: "https://www.youtube.com/@ysuniversity" },
  { icon: Linkedin, url: "https://kr.linkedin.com/school/yonsei/" }
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 pt-16 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        {/* 상단 섹션: Brand Info + Useful Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="lg:col-span-8">
            <div className="flex flex-col mb-6">
              <span className="text-2xl font-bold text-white tracking-tight uppercase">
                {SITE_CONFIG.universityName}
              </span>
              <span className="text-sm font-medium text-[#8A704C] tracking-[0.2em] uppercase mt-1">
                {SITE_CONFIG.officeName}
              </span>
            </div>
            <p className="max-w-2xl leading-relaxed mb-8 text-[15px]">
              Yonsei University is committed to global excellence in research and education. 
              The Office of International Affairs serves as the central hub for our worldwide network, 
              fostering international collaborations and providing support for our global community.
            </p>
            <div className="flex gap-4">
              {SOCIAL_LINKS.map(({ icon: Icon, url }, idx) => (
                <a 
                  key={idx} 
                  href={url} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-[#003876] hover:text-white transition-all shadow-lg"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Useful Links */}
          <div className="lg:col-span-4 lg:pl-12">
            <h4 className="text-white font-bold text-sm mb-6 uppercase tracking-widest">Related Resources</h4>
            <div className="grid grid-cols-2 gap-4">
              <ul className="space-y-3">
                {[
                  { name: "Yonsei Portal", link: "https://portal.yonsei.ac.kr" },
                  { name: "Academic Calendar", link: "https://www.yonsei.ac.kr/sc/373/subview.do" },
                  { name: "Campus Map", link: "https://www.yonsei.ac.kr/sc/242/subview.do" }
                ].map((item) => (
                  <li key={item.name}>
                    <a 
                      href={item.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-[14px] hover:text-[#8A704C] transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>

              <ul className="space-y-3">
                {[
                  { name: "Admissions", link: "https://admission.yonsei.ac.kr" },
                  { name: "Library", link: "https://library.yonsei.ac.kr" },
                  { name: "Contact OIA", link: "/contact" }
                ].map((item) => (
                  <li key={item.name}>
                    <a 
                      href={item.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-[14px] hover:text-[#8A704C] transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div> {/* 상단 grid 섹션 닫기 (추가된 부분) */}

        {/* Copyright - 하단 가로줄 구분 섹션 */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-semibold uppercase tracking-[0.1em]">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} {SITE_CONFIG.universityName} {SITE_CONFIG.officeName}. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-6">
            <a 
              href="https://oia.yonsei.ac.kr/privacy_ko.html" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
          </div>
        </div>
      </div> {/* container 닫기 */}
    </footer>
  );
};

export default Footer;
