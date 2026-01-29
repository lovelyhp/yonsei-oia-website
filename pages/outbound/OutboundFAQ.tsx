
import React, { useState } from 'react';
import { ChevronRight, Home, HelpCircle, ChevronDown, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const FAQ_DATA = [
  {
    question: "When should I start preparing for my exchange program?",
    answer: "You should typically start preparing at least one year before your desired departure. Application periods are usually in January (for the following Spring) and July (for the following Fall)."
  },
  {
    question: "How many universities can I apply to?",
    answer: "Students can usually select up to 25 choice universities in their application. We recommend listing a diverse range of locations to increase your chances of placement."
  },
  {
    question: "What are the language requirements?",
    answer: "Most programs require a valid TOEFL or IELTS score. Some universities in Japan or China may require specific language proficiency levels (JLPT, HSK). Always check the latest host university fact sheet."
  },
  {
    question: "Can I study abroad in my final semester?",
    answer: "It is not recommended as it may delay graduation due to transcript processing times. Students must be enrolled at Yonsei for at least one semester after returning."
  },
  {
    question: "Is financial aid available for study abroad?",
    answer: "Yes, we offer several scholarships including the Global Leader Scholarship and the VSP Scholarship. External scholarships like Mirae Asset are also highly popular among our students."
  }
];

const OutboundFAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

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
            <span className="text-[#003876] font-semibold">Programs FAQ</span>
          </nav>
          <h1 className="text-3xl lg:text-4xl font-bold text-[#003876] tracking-tight">Outbound Programs FAQ</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12 lg:py-20">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-4 mb-10 pb-6 border-b border-gray-100">
            <div className="w-12 h-12 bg-blue-50 text-[#003876] rounded-2xl flex items-center justify-center shadow-sm">
              <HelpCircle size={24} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">Frequently Asked Questions</h2>
              <p className="text-sm text-gray-500 font-medium">Find answers to the most common questions about studying abroad.</p>
            </div>
          </div>

          <div className="space-y-4">
            {FAQ_DATA.map((item, idx) => (
              <div 
                key={idx} 
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                  openIdx === idx ? 'border-[#003876] ring-4 ring-blue-50 bg-white' : 'border-gray-200 hover:border-gray-300 bg-gray-50/50'
                }`}
              >
                <button 
                  onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className={`font-bold text-[15px] md:text-base ${openIdx === idx ? 'text-[#003876]' : 'text-gray-700'}`}>
                    {item.question}
                  </span>
                  <ChevronDown className={`transition-transform duration-300 ${openIdx === idx ? 'rotate-180 text-[#003876]' : 'text-gray-400'}`} size={20} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openIdx === idx ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-6 pb-6 text-sm md:text-base text-gray-600 leading-relaxed border-t border-gray-100/50 pt-4">
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Updated Banner to lead to Contact Us page */}
          <div className="mt-20 bg-[#003876] rounded-[32px] p-8 lg:p-12 text-white relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left max-w-lg">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
                  <MessageSquare size={20} className="text-amber-400" />
                  <h3 className="text-2xl font-bold">Still have questions?</h3>
                </div>
                <p className="text-blue-100 font-medium text-[15px] leading-relaxed">
                  Our regional coordinators are ready to provide you with personalized guidance. Visit our Contact Us page for detailed assistance and inquiries.
                </p>
              </div>
              <Link 
                to="/intro/contact" 
                className="shrink-0 px-8 py-4 bg-white text-[#003876] rounded-xl font-bold hover:bg-gray-100 transition-all flex items-center gap-2 shadow-lg group"
              >
                Go to Contact Us <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutboundFAQ;
