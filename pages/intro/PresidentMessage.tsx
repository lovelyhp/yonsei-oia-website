
import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

const PresidentMessage: React.FC = () => {
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
            <span className="text-[#003876] font-semibold">Message from the President</span>
          </nav>
          <h1 className="text-3xl lg:text-4xl font-bold text-[#003876] tracking-tight">Message from the President</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12 lg:py-20">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-10 items-start mb-12">
            <div className="w-full md:w-1/3">
              <div className="aspect-[3/4] bg-gray-100 rounded-2xl overflow-hidden border border-gray-200 shadow-sm relative group">
                <img 
                  src="https://yonsei.ac.kr/sites/en_sc/images/sub/greeding-boss.png" 
                  alt="President Prof. Dong-Sup Yoon" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl"></div>
              </div>
              <div className="mt-6 text-center md:text-left">
                <h3 className="text-xl font-bold text-[#003876]">Prof. Dong-Sup Yoon</h3>
                <p className="text-gray-600 font-medium">President</p>
                <p className="text-gray-400 text-sm">Yonsei University</p>
              </div>
            </div>

            <div className="w-full md:w-2/3">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 italic">"Greetings!"</h2>
              <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                <p>
                  Yonsei University has always followed the righteous path through the twists and turns of Korea’s modern history. As a distinguished global academic institution, Yonsei has made significant contributions to society and humanity. Inheriting this prestigious tradition, we aim to advance into a new era of Yonsei, thereby opening the gateway to the future with what makes us uniquely YONSEI.
                </p>
                <p>
                  In the age of “Big Blur," we are experiencing the collapse of boundaries between academia and industry. We are confronted with the dual challenges of digital transformation and energy transition on the fiercely competitive battlefield of innovation. Words like creativity, consilience, and convergence have long since become keywords in our society. Innovation is the only way to stay relevant in this rapidly changing international environment.
                </p>
                <p>
                  Yonsei's enduring mission for 139 years has been to nurture talents who drive innovation and change. We will continue to build on this foundation, to cultivate individuals who proactively tackle the problems of global society while pursuing the values of coexistence. We will strengthen programs that foster creative future talent, such as the “Student-Designed Semester,” enabling students to freely explore academia, to grow as independent agents of the future society.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6 text-gray-700 leading-relaxed text-lg mb-16">
            <p>
              Yonsei’s key asset is the optimal campus in which we can navigate diverse academic disciplines. We aim to bring together Yonsei’s academic capabilities to address: the meaning and quality of a healthy life in an aging society; redefine human dignity and ethics in the era of artificial intelligence; implement ecological practices to confront climate crises; and consolidate efforts to solve international conflicts and societal challenges. This interdisciplinary research initiative is rooted in a humanistic understanding of humanity and nature embedded in Yonsei spirit. With a focus on future sustainability, including artificial intelligence, biotechnology, and renewable energy, Yonsei will seek to elevate our global research competitiveness.
            </p>
            <p>
              The new Yonsei era will be realized through "Empowering Yonsei," founded on the principles of "governance centered on respect and communication." Enhancing the pride of the Yonsei community through the autonomous and responsible operation of each unit is the first step towards being Yonsei. Ensuring a happy campus, where all Yonseians can pursue studies, research, and personal growth to their hearts’ content, will indeed be the shortcut for Yonsei to leap forward into a future beyond boundaries. Please join us on this journey.
            </p>
            <p className="pt-4">Thank you.</p>
          </div>

          <div className="border-t border-gray-100 pt-10 text-right">
            <div className="inline-block text-left">
              <p className="text-[#003876] font-bold text-xl mb-1">20th President of Yonsei University</p>
              <p className="text-3xl font-serif font-bold text-gray-900">Dong-Sup Yoon</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PresidentMessage;
