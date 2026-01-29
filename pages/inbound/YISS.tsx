
import React from 'react';
import { ChevronRight, Home, ExternalLink, Calendar, GraduationCap, Users, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

const YISS: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-gray-50 border-b border-gray-200 py-8 lg:py-12">
        <div className="container mx-auto px-4 md:px-6">
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <Link to="/" className="hover:text-[#003876] flex items-center gap-1">
              <Home size={14} /> Home
            </Link>
            <ChevronRight size={14} />
            <span className="text-gray-400">Inbound</span>
            <ChevronRight size={14} />
            <span className="text-[#003876] font-semibold">Yonsei International Summer School (YISS)</span>
          </nav>
          <h1 className="text-3xl lg:text-4xl font-bold text-[#003876] tracking-tight">Yonsei International Summer School (YISS)</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12 lg:py-20">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-[40px] overflow-hidden mb-12 shadow-2xl">
            <img 
              src="https://summer.yonsei.ac.kr/_res/editor_image/2025/02/HEKJljWiHlNxkPXfWoVA0.jpg" 
              alt="YISS Campus" 
              className="w-full h-[400px] object-cover"
            />
            {/* Weakened gradient overlay: from opacity 100 to 50 */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#003876]/50 to-transparent"></div>
            <div className="absolute bottom-10 left-10 text-white">
              <h2 className="text-3xl font-bold mb-2">Summer in the Heart of Seoul</h2>
              <p className="text-blue-100 font-medium">Join 15,000+ alumni from around the globe.</p>
            </div>
          </div>

          <div className="space-y-8 text-gray-600 text-lg leading-relaxed mb-16">
            <p>
              Yonsei International Summer School (YISS) invites students to take courses at one of the world's premier universities in the heart of Seoul, Korea. YISS offers a choice of more than 100 courses during a 4-week or 6-week program taught by both Yonsei and distinguished faculty from prestigious institutions around the globe. Through the YISS program, students will have the opportunity to:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
              {[
                { icon: <GraduationCap />, title: "Credit Transfer", desc: "Easily transfer credits back to your home institution." },
                { icon: <Users />, title: "Cultural Enrichment", desc: "Experience life in one of Asia's most exciting cities." },
                { icon: <Briefcase />, title: "Internship Program", desc: "Enhance career prospects through YSIP." },
                { icon: <ExternalLink />, title: "Global Network", desc: "Connect with over 15,000 alumni worldwide." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 p-6 border border-gray-100 rounded-2xl bg-gray-50">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-[#003876] shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#003876] rounded-3xl p-10 lg:p-14 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Discover More About YISS</h3>
            <p className="text-blue-100 mb-8 max-w-xl mx-auto font-medium">
              Detailed program schedule, course list, and application procedure are available on our specialized website.
            </p>
            <a 
              href="http://summer.yonsei.ac.kr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-4 bg-white text-[#003876] rounded-xl font-bold hover:bg-gray-100 transition-all shadow-xl"
            >
              Visit YISS Website <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YISS;
