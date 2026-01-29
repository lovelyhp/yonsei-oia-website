
import React from 'react';
import { ChevronRight, Home, Facebook, Instagram, Youtube, Linkedin, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const SNS_CHANNELS = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/yonsei.eng",
    icon: <Facebook size={32} />,
    color: "bg-[#1877F2]",
    description: "Connect with us on Facebook for international student highlights and event photos."
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/yonsei_official",
    icon: <Instagram size={32} />,
    color: "bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]",
    description: "Follow our daily campus life and stories through stunning visuals on Instagram."
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@ysuniversity",
    icon: <Youtube size={32} />,
    color: "bg-[#FF0000]",
    description: "Watch campus tours, graduation ceremonies, and academic special features on our YouTube channel."
  },
  {
    name: "LinkedIn",
    url: "https://kr.linkedin.com/school/yonsei/",
    icon: <Linkedin size={32} />,
    color: "bg-[#0077B5]",
    description: "Join our professional network of over 300,000 alumni and partners worldwide."
  }
];

const Multimedia: React.FC = () => {
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
            <span className="text-[#003876] font-semibold">Multimedia</span>
          </nav>
          <h1 className="text-3xl lg:text-4xl font-bold text-[#003876] tracking-tight">Multimedia</h1>
          <p className="mt-2 text-gray-600 font-medium">Connect with the global Yonsei community through our official social media channels.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12 lg:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SNS_CHANNELS.map((sns) => (
              <a 
                key={sns.name}
                href={sns.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-white border border-gray-100 rounded-[32px] p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              >
                <div className={`w-16 h-16 ${sns.color} text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                  {sns.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{sns.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-8">
                  {sns.description}
                </p>
                <div className="flex items-center gap-2 text-[#003876] font-bold text-sm">
                  Visit Official Channel <ExternalLink size={14} />
                </div>
              </a>
            ))}
          </div>

          {/* Virtual Tour Highlight */}
          <div className="mt-20 relative rounded-[40px] overflow-hidden bg-[#003876] h-[400px] flex items-center px-10 lg:px-20 text-white shadow-2xl">
            <div className="absolute inset-0 opacity-20 grayscale">
               <img src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=2070" alt="Yonsei Campus" className="w-full h-full object-cover" />
            </div>
            <div className="relative z-10 max-w-xl">
               <h2 className="text-3xl lg:text-5xl font-bold mb-6">Discover Campus Life</h2>
               <p className="text-lg text-blue-100 font-medium mb-10 leading-relaxed">
                 Experience our beautiful historic campus and vibrant student community through our curated video content.
               </p>
               <a 
                 href="https://www.youtube.com/@ysuniversity"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="inline-flex px-10 py-4 bg-[#8A704C] hover:bg-[#725a3d] text-white rounded-xl font-bold transition-all shadow-lg items-center gap-2"
               >
                 Watch Official Film <Youtube size={20} />
               </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Multimedia;
