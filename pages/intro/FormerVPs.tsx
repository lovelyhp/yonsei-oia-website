
import React from 'react';
import { ChevronRight, Home, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FORMER_VPS } from '../../constants';

const VPCard: React.FC<{ name: string; dept: string; term: string }> = ({ name, dept, term }) => (
  <div className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all group overflow-hidden">
    <div className="aspect-[4/5] bg-gray-50 flex items-center justify-center relative overflow-hidden">
      <Users size={48} className="text-gray-200 group-hover:scale-110 transition-transform duration-500" />
      <div className="absolute inset-0 bg-[#003876]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
    </div>
    <div className="p-5">
      <h4 className="font-bold text-gray-900 group-hover:text-[#003876] transition-colors">{name}</h4>
      <p className="text-[#8A704C] text-[11px] font-bold uppercase tracking-widest mt-1">{dept}</p>
      <div className="mt-3 pt-3 border-t border-gray-50">
        <p className="text-gray-500 text-xs font-medium">{term}</p>
      </div>
    </div>
  </div>
);

const FormerVPs: React.FC = () => {
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
            <span className="text-[#003876] font-semibold">Former Vice Presidents</span>
          </nav>
          <h1 className="text-3xl lg:text-4xl font-bold text-[#003876] tracking-tight">Former Vice Presidents</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-16 lg:py-24">
        {/* Section 1: OIA */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px flex-grow bg-gray-200"></div>
            <h2 className="text-xl lg:text-2xl font-bold text-[#003876] whitespace-nowrap">Office of International Affairs (2007-present)</h2>
            <div className="h-px flex-grow bg-gray-200"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {FORMER_VPS.oia.map((vp) => (
              <VPCard key={vp.name} {...vp} />
            ))}
          </div>
        </div>

        {/* Section 2: DIEE */}
        <div>
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px flex-grow bg-gray-200"></div>
            <h2 className="text-xl lg:text-2xl font-bold text-[#003876] whitespace-nowrap text-center">
              Division of International Education and Exchange <br className="md:hidden" /> (1966-2007)
            </h2>
            <div className="h-px flex-grow bg-gray-200"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {FORMER_VPS.diee.map((vp) => (
              <VPCard key={vp.name} {...vp} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormerVPs;
