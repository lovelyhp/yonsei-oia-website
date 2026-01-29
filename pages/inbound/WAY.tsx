
import React from 'react';
import { ChevronRight, Home, ExternalLink, Snowflake, Map, Coffee, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

const WAY: React.FC = () => {
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
            <span className="text-[#003876] font-semibold">Winter Abroad at Yonsei (WAY)</span>
          </nav>
          <h1 className="text-3xl lg:text-4xl font-bold text-[#003876] tracking-tight">Winter Abroad at Yonsei (WAY)</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12 lg:py-20">
        <div className="max-w-4xl mx-auto">
          {/* Updated layout with weakened gradient overlay: from 100% to 50% opacity */}
          <div className="relative rounded-[40px] overflow-hidden mb-12 shadow-2xl">
            <img 
              src="https://winter.yonsei.ac.kr/_attach/image/2025/11/IBuassAQKQTticczYhhw0.jpg" 
              alt="WAY Campus" 
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
            <div className="absolute bottom-10 left-10 text-white">
              <h2 className="text-3xl font-bold mb-2">Experience a Seoul Winter</h2>
              <p className="text-blue-100 font-medium">3-Week Intensive Academic & Cultural Program</p>
            </div>
            <div className="absolute top-6 right-6 p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white shadow-lg">
              <Snowflake size={24} />
            </div>
          </div>

          <div className="space-y-8 text-gray-600 text-lg leading-relaxed mb-16">
            <p>
              In Winter Abroad at Yonsei (WAY), Yonsei University offers a 3-week winter program at our Sinchon campus for international students who want to enjoy the winter in Seoul. We focus on academic achievement with various courses and provide opportunities to travel around Seoul and experience Korean culture.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6">
              <div className="text-center p-6 border border-gray-100 rounded-2xl bg-gray-50">
                <div className="w-16 h-16 bg-white shadow-sm rounded-2xl flex items-center justify-center text-[#003876] mx-auto mb-6">
                  <GraduationCap size={32} />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Academic Achievement</h4>
                <p className="text-sm text-gray-500">Focused selection for intensive learning.</p>
              </div>
              <div className="text-center p-6 border border-gray-100 rounded-2xl bg-gray-50">
                <div className="w-16 h-16 bg-white shadow-sm rounded-2xl flex items-center justify-center text-[#8A704C] mx-auto mb-6">
                  <Map size={32} />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Winter Tours</h4>
                <p className="text-sm text-gray-500">Visit DMZ, enjoy SKI trips, and more.</p>
              </div>
              <div className="text-center p-6 border border-gray-100 rounded-2xl bg-gray-50">
                <div className="w-16 h-16 bg-white shadow-sm rounded-2xl flex items-center justify-center text-red-600 mx-auto mb-6">
                  <Coffee size={32} />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Cultural Experience</h4>
                <p className="text-sm text-gray-500">Authentic Korean cooking classes.</p>
              </div>
            </div>

            <p className="pt-6">
              We provide an excellent opportunity to enhance your scholarship, interact with eminent professors, and enjoy the companionship of participants from around the world.
            </p>
          </div>

          <div className="bg-blue-900 rounded-3xl p-10 lg:p-14 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Discover More About WAY</h3>
            <p className="text-blue-100 mb-8 max-w-xl mx-auto font-medium">
              Join us for a memorable winter experience. Explore the program and apply via our specialized portal.
            </p>
            <a 
              href="http://winter.yonsei.ac.kr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-4 bg-white text-blue-900 rounded-xl font-bold hover:bg-gray-100 transition-all shadow-xl"
            >
              Visit WAY Website <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WAY;
