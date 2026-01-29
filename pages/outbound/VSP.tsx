
import React from 'react';
import { ChevronRight, Home, Info, DollarSign, CheckCircle2, AlertTriangle, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

const VSP: React.FC = () => {
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
            <span className="text-[#003876] font-semibold">Visiting Student Program (VSP)</span>
          </nav>
          <h1 className="text-3xl lg:text-4xl font-bold text-[#003876] tracking-tight">Visiting Student Program (VSP)</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12 lg:py-20">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-blue max-w-none text-gray-600 leading-relaxed space-y-8 mb-16">
            <p className="text-xl">
              Visiting Student Program (VSP) is just like the ESP except that students pay tuition fees to both the home university and the host university. To offer financial aid, Yonsei provides the <strong>VSP Scholarship which covers 80% of Yonsei tuition</strong> to all VSP participants.
            </p>
            <div className="bg-amber-50 border border-amber-200 p-6 rounded-2xl flex gap-4 items-start">
              <AlertTriangle className="text-amber-600 shrink-0 mt-1" size={24} />
              <p className="text-sm font-bold text-amber-800">
                This scholarship opportunity is for Yonsei students planning to study abroad, not for inbound international students participating in Yonsei's visiting student program.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
              <h3 className="text-lg font-bold text-[#003876] mb-6 flex items-center gap-2">
                <CheckCircle2 size={20} className="text-[#8A704C]" /> Advantages
              </h3>
              <ul className="space-y-4">
                {[
                  "Financial support: VSP Scholarship provided to all participants.",
                  "Credit transfer: Credits earned abroad are fully recognized.",
                  "Greater Choice: Access universities not in official exchange partnerships."
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 text-sm text-gray-600 font-medium">
                    <span className="w-1.5 h-1.5 bg-[#8A704C] rounded-full mt-1.5 shrink-0"></span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8">
              <h3 className="text-lg font-bold text-[#003876] mb-6 flex items-center gap-2">
                <Info size={20} className="text-[#8A704C]" /> Conditions
              </h3>
              <ul className="space-y-4">
                {[
                  "Open to undergraduate students only.",
                  "Not available for Graduate students or Medicine, Dentistry, Nursing.",
                  "Available for one (1) semester only.",
                  "Wonju Campus students must consult with their local center."
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 text-sm text-gray-500">
                    <span className="w-1.5 h-1.5 bg-gray-300 rounded-full mt-1.5 shrink-0"></span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-[#003876] rounded-[40px] p-10 lg:p-14 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                <DollarSign size={32} className="text-amber-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">VSP Scholarship Support</h3>
                <p className="text-blue-100 font-medium leading-relaxed">
                  Automatic eligibility for an 80% tuition discount on your Yonsei registration while abroad. We ensure that financial barriers do not stop our students from going global.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VSP;
