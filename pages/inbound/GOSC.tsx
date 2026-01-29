
import React from 'react';
import { ChevronRight, Home, ExternalLink, ShieldCheck, Heart, LifeBuoy, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const GOSC: React.FC = () => {
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
            <span className="text-[#003876] font-semibold">Global One-Stop Service Center (GOSC)</span>
          </nav>
          <h1 className="text-3xl lg:text-4xl font-bold text-[#003876] tracking-tight">Global One-Stop Service Center (GOSC)</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12 lg:py-20">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="inline-block px-3 py-1 bg-blue-50 text-[#003876] text-xs font-bold rounded-md uppercase tracking-widest mb-4">Support Hub</div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">Assisting your potential skills at Yonsei University.</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Established in September 2022, GOSC supports the international community at Yonsei University, providing services from visa guidance to transition to a new environment. Our mission is to assist them in achieving their academic goals and enhancing their potential skills at Yonsei University.
              </p>
              <div className="space-y-4">
                {[
                  { icon: <ShieldCheck size={18} />, text: "Professional Visa Guidance" },
                  { icon: <Heart size={18} />, text: "Settlement & Transition Support" },
                  { icon: <LifeBuoy size={18} />, text: "Daily Life Assistance" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-[#003876] font-bold">
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <span className="text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 rounded-[40px] p-8 border border-gray-100 relative">
              <div className="w-20 h-20 bg-[#8A704C]/10 rounded-full absolute -top-5 -right-5 blur-xl"></div>
              <img 
                src="https://gosc.yonsei.ac.kr/_res/gosc/img/about/img-abuot01.jpg" 
                alt="Support Staff at GOSC" 
                className="rounded-3xl shadow-xl w-full aspect-square object-cover"
              />
            </div>
          </div>

          <div className="bg-white border-2 border-[#8A704C]/20 rounded-3xl p-10 flex flex-col items-center text-center shadow-lg">
            <MapPin className="text-[#8A704C] mb-4" size={32} />
            <h3 className="text-xl font-bold text-[#003876] mb-4">Official GOSC Portal</h3>
            <p className="text-gray-500 mb-8 max-w-lg leading-relaxed">
              The Center supports its soft landing at Yonsei University by providing services from visa guidance to transition to a new environment.
            </p>
            <a 
              href="https://gosc.yonsei.ac.kr/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-[#8A704C] text-white rounded-xl font-bold hover:bg-[#725a3d] transition-all shadow-lg"
            >
              Go to GOSC Website <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GOSC;
