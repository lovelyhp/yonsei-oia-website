
import React, { useState } from 'react';
import { ChevronRight, Home, User, GraduationCap, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const BioToggle: React.FC<{ name: string; title: string; dept: string; bio: string }> = ({ name, title, dept, bio }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className={`border rounded-2xl overflow-hidden transition-all duration-500 ${isExpanded ? 'bg-white shadow-xl border-[#8A704C]/30' : 'bg-gray-50 border-gray-200'}`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className="p-6 flex items-center justify-between cursor-default">
        <div>
          <h4 className="font-bold text-[#003876] text-lg">{name}</h4>
          <p className="text-gray-600 text-sm">{title}</p>
          <p className="text-[#8A704C] text-[12px] font-semibold mt-1 uppercase tracking-wider">{dept}</p>
        </div>
        <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${isExpanded ? 'bg-[#8A704C] text-white' : 'bg-white text-gray-400 border border-gray-200'}`}>
          <User size={20} />
        </div>
      </div>
      <div className={`transition-all duration-500 overflow-hidden ${isExpanded ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 pb-8 border-t border-gray-100 mt-2 pt-6">
          <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line italic">
            {bio}
          </p>
        </div>
      </div>
    </div>
  );
};

const VPMessage: React.FC = () => {
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
            <span className="text-[#003876] font-semibold">Message from the VP</span>
          </nav>
          <h1 className="text-3xl lg:text-4xl font-bold text-[#003876] tracking-tight">Message from the VP</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12 lg:py-20">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-10 items-start mb-12">
            <div className="w-full md:w-1/3">
              <div className="aspect-[3/4] bg-gray-100 rounded-2xl overflow-hidden border border-gray-200 shadow-sm relative group">
                <img 
                  src="https://oia.yonsei.ac.kr/images/intro/vp3_v3.jpg" 
                  alt="Prof. Yong-Chan Kim" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl"></div>
              </div>
              <div className="mt-6 text-center md:text-left">
                <h3 className="text-xl font-bold text-[#003876]">Prof. Yong-Chan Kim</h3>
                <p className="text-gray-600 font-medium">Vice President for International Affairs</p>
              </div>
            </div>

            <div className="w-full md:w-2/3">
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                  It gives me great pleasure to welcome you all to the Yonsei campus on behalf of our faculty, staff, and students. Yonsei University has gained its reputation as unarguably the most international university in Korea. It also has a strong heritage of academic excellence, tradition, and innovation. We would like to continue to build on these accomplishments and keep moving forward with one of our school missions, the spirit of truth and freedom.
                </p>
                <p>
                  Yonsei University is well-positioned to provide you with numerous experiential learning opportunities as well as a wide variety of academic courses by eminent faculty. Its core and elective courses include several thousand regular university courses in a broad range of academic disciplines taught in Korean as well as approximately 1,000 undergraduate courses taught in English every semester.
                </p>
                <p>
                  I firmly believe that Yonsei’s well-designed international education and academic exchange program would enable you to study in a global setting. Your school life with an international and intercultural learning experience at Yonsei would also motivate you to expand your scope and navigate your career path.
                </p>
              </div>
            </div>
          </div>

          <div className="text-gray-700 text-lg leading-relaxed mb-16">
            <p className="mb-6">
              You would be able to customize your education further by joining diverse student clubs and experiencing year-round social activities and events. You can enjoy a vibrant community of students in a friendly atmosphere and build close relationships that will last through changing circumstances in your life.
            </p>
            <p>
              For your memorable and invaluable experience, our OIA staff are always here to provide you with information and support to help make a great year for your study and life at Yonsei. Please do not hesitate to reach out for help. The OIA looks forward to welcoming you and supporting you throughout your time at Yonsei.
            </p>
          </div>

          <div className="pt-12 border-t border-gray-100">
            <h3 className="text-2xl font-bold text-[#003876] mb-8 flex items-center gap-3">
              <Award className="text-[#8A704C]" /> Leadership Biographies
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <BioToggle 
                name="Prof. Yong-Chan Kim"
                title="Vice President for International Affairs"
                dept="Professor, Department of Communication"
                bio="Yong-Chan Kim (PhD, University of Southern California) is Vice President for International Affairs and Professor in the Department of Communication at Yonsei University, Seoul, Korea. He is also a professor at Pohang University of Science and Technology (Postech) at courtesy. He directs two research units at Yonsei: The Urban Communication Center and the Urban Communication Lab. For the past 20 years, his research program has been built around three key areas: urban communication, new media technology, and risk society. He has published more than 80 articles in prestigious journals such as Communication Research, New Media & Society, and Human Communication Research."
              />
              <BioToggle 
                name="Prof. Sang Hoon Youm"
                title="Associate Vice President for International Affairs"
                dept="Professor, Department of Architecture"
                bio="Sang Hoon Youm, a graduate of Seoul National University and Columbia University in NY, is currently a Professor in the Department of Architecture and Architectural Engineering at Yonsei University. Leading the CAT Architecture and Urban Design Lab, he explores the interface between cities and architecture. His designs and research have been showcased at prestigious venues, including the National Museum of Modern and Contemporary Art Seoul and MoMA New York. Professor Youm also curated the Guest Cities Exhibition at the 4th Seoul Biennale of Architecture and Urbanism."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VPMessage;
