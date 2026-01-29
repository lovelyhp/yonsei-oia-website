
import React, { useState, useMemo } from 'react';
import { ChevronRight, Home, Search, Globe, Filter, GraduationCap, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

// Data structured for Admin-ready updates
const PARTNER_DATA = [
  { id: 1, name: "Harvard University", continent: "North America", country: "USA", website: "https://www.harvard.edu" },
  { id: 2, name: "University of Oxford", continent: "Europe", country: "UK", website: "https://www.ox.ac.uk" },
  { id: 3, name: "The University of Tokyo", continent: "Asia", country: "Japan", website: "https://www.u-tokyo.ac.jp" },
  { id: 4, name: "National University of Singapore", continent: "Asia", country: "Singapore", website: "https://nus.edu.sg" },
  { id: 5, name: "University of Melbourne", continent: "Oceania", country: "Australia", website: "https://www.unimelb.edu.au" },
  { id: 6, name: "University of British Columbia", continent: "North America", country: "Canada", website: "https://www.ubc.ca" },
  { id: 7, name: "ETH Zurich", continent: "Europe", country: "Switzerland", website: "https://ethz.ch" },
  { id: 8, name: "Tsinghua University", continent: "Asia", country: "China", website: "https://www.tsinghua.edu.cn" },
  { id: 9, name: "University of Cape Town", continent: "Africa", country: "South Africa", website: "https://www.uct.ac.za" },
  { id: 10, name: "University of São Paulo", continent: "South America", country: "Brazil", website: "https://www5.usp.br" },
  { id: 11, name: "Stanford University", continent: "North America", country: "USA", website: "https://www.stanford.edu" },
  { id: 12, name: "Imperial College London", continent: "Europe", country: "UK", website: "https://www.imperial.ac.uk" },
  { id: 13, name: "Peking University", continent: "Asia", country: "China", website: "https://english.pku.edu.cn" },
  { id: 14, name: "Australian National University", continent: "Oceania", country: "Australia", website: "https://www.anu.edu.au" },
  { id: 15, name: "University of Munich", continent: "Europe", country: "Germany", website: "https://www.lmu.de" },
  { id: 16, name: "Sorbonne University", continent: "Europe", country: "France", website: "https://www.sorbonne-universite.fr" },
  { id: 17, name: "University of Hong Kong", continent: "Asia", country: "Hong Kong", website: "https://www.hku.hk" },
  { id: 18, name: "McGill University", continent: "North America", country: "Canada", website: "https://www.mcgill.ca" },
  { id: 19, name: "King's College London", continent: "Europe", country: "UK", website: "https://www.kcl.ac.uk" },
  { id: 20, name: "Kyoto University", continent: "Asia", country: "Japan", website: "https://www.kyoto-u.ac.jp" },
];

const CONTINENTS = ["All", "Asia", "Europe", "North America", "South America", "Oceania", "Africa"];

const PartnerInstitutions: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedContinent, setSelectedContinent] = useState('All');
  const [selectedCountry, setSelectedCountry] = useState('All');

  // Derived countries based on selected continent
  const availableCountries = useMemo(() => {
    const countries = new Set<string>();
    PARTNER_DATA.forEach(p => {
      if (selectedContinent === 'All' || p.continent === selectedContinent) {
        countries.add(p.country);
      }
    });
    return ["All", ...Array.from(countries).sort()];
  }, [selectedContinent]);

  // Reset country when continent changes
  React.useEffect(() => {
    setSelectedCountry('All');
  }, [selectedContinent]);

  const filteredData = useMemo(() => {
    return PARTNER_DATA.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesContinent = selectedContinent === 'All' || item.continent === selectedContinent;
      const matchesCountry = selectedCountry === 'All' || item.country === selectedCountry;
      return matchesSearch && matchesContinent && matchesCountry;
    });
  }, [searchTerm, selectedContinent, selectedCountry]);

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
            <span className="text-gray-400">Partnerships</span>
            <ChevronRight size={14} />
            <span className="text-[#003876] font-semibold">Partner Institutions</span>
          </nav>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-[#003876] tracking-tight">Partner Institutions</h1>
              <p className="mt-2 text-gray-600 max-w-2xl font-medium">
                Yonsei University maintains collaborative partnerships with 740+ leading institutions worldwide.
              </p>
            </div>
            <div className="flex items-center gap-3 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
               <div className="text-right">
                 <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Global Reach</p>
                 <p className="text-2xl font-black text-[#003876]">740+ <span className="text-sm font-medium text-gray-500">Countries</span></p>
               </div>
               <div className="w-px h-10 bg-gray-100 mx-2"></div>
               <Globe className="text-[#8A704C]" size={32} />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-10 lg:py-16">
        
        {/* Filter Section */}
        <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6 lg:p-8 mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
            
            {/* Search */}
            <div className="lg:col-span-4">
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Search Institution</label>
              <div className="relative group">
                <input 
                  type="text" 
                  placeholder="Enter university name..."
                  className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-[#003876]/5 focus:border-[#003876] focus:bg-white transition-all outline-none text-[15px] font-medium"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#003876] transition-colors" size={20} />
              </div>
            </div>

            {/* Continent */}
            <div className="lg:col-span-4">
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Continent</label>
              <div className="relative">
                <select 
                  className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-[#003876]/5 focus:border-[#003876] focus:bg-white transition-all outline-none text-[15px] font-medium appearance-none cursor-pointer"
                  value={selectedContinent}
                  onChange={(e) => setSelectedContinent(e.target.value)}
                >
                  {CONTINENTS.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
                <Filter className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
              </div>
            </div>

            {/* Country */}
            <div className="lg:col-span-4">
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Country</label>
              <div className="relative">
                <select 
                  className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-[#003876]/5 focus:border-[#003876] focus:bg-white transition-all outline-none text-[15px] font-medium appearance-none cursor-pointer disabled:opacity-50"
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                  disabled={availableCountries.length <= 1}
                >
                  {availableCountries.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
                <MapPin className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
              </div>
            </div>

          </div>

          {/* Continent Quick Tabs (Optional Enhancement) */}
          <div className="mt-8 pt-6 border-t border-gray-100 flex flex-wrap gap-2">
            {CONTINENTS.map(c => (
              <button
                key={c}
                onClick={() => setSelectedContinent(c)}
                className={`px-5 py-2 rounded-full text-[13px] font-bold transition-all ${
                  selectedContinent === c 
                    ? 'bg-[#003876] text-white shadow-lg shadow-[#003876]/20' 
                    : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Results Info */}
        <div className="mb-6 flex items-center justify-between">
          <p className="text-gray-500 text-sm font-medium">
            Showing <span className="text-[#003876] font-bold">{filteredData.length}</span> partner institutions
          </p>
          {searchTerm || selectedContinent !== 'All' || selectedCountry !== 'All' ? (
            <button 
              onClick={() => {
                setSearchTerm('');
                setSelectedContinent('All');
                setSelectedCountry('All');
              }}
              className="text-xs font-bold text-[#8A704C] hover:text-[#003876] uppercase tracking-wider underline underline-offset-4"
            >
              Reset Filters
            </button>
          ) : null}
        </div>

        {/* Institutions Table/List */}
        <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead className="hidden md:table-header-group bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-8 py-5 text-[13px] font-bold text-gray-400 uppercase tracking-widest w-16 text-center">No</th>
                <th className="px-8 py-5 text-[13px] font-bold text-gray-400 uppercase tracking-widest">Institution Name</th>
                <th className="px-8 py-5 text-[13px] font-bold text-gray-400 uppercase tracking-widest">Location</th>
                <th className="px-8 py-5 text-[13px] font-bold text-gray-400 uppercase tracking-widest w-32 text-center">Link</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredData.length > 0 ? (
                filteredData.map((item, idx) => (
                  <tr key={item.id} className="group hover:bg-gray-50/50 transition-colors">
                    {/* ID */}
                    <td className="hidden md:table-cell px-8 py-6 text-center text-sm font-bold text-gray-300">
                      {(idx + 1).toString().padStart(2, '0')}
                    </td>
                    
                    {/* Name */}
                    <td className="px-6 md:px-8 py-6">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#003876] flex items-center justify-center shrink-0 group-hover:bg-[#003876] group-hover:text-white transition-all">
                          <GraduationCap size={20} />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 text-base md:text-lg group-hover:text-[#003876] transition-colors">{item.name}</h4>
                          <div className="md:hidden flex items-center gap-2 mt-1">
                            <span className="text-xs font-bold text-[#8A704C]">{item.continent}</span>
                            <span className="text-xs text-gray-400">•</span>
                            <span className="text-xs text-gray-500 font-medium">{item.country}</span>
                          </div>
                        </div>
                      </div>
                    </td>

                    {/* Location Desktop */}
                    <td className="hidden md:table-cell px-8 py-6">
                      <div className="flex flex-col">
                        <span className="text-[13px] font-bold text-[#8A704C] uppercase tracking-wider">{item.continent}</span>
                        <span className="text-[15px] font-medium text-gray-600">{item.country}</span>
                      </div>
                    </td>

                    {/* Link */}
                    <td className="px-6 md:px-8 py-6 text-center">
                      <a 
                        href={item.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 text-gray-400 hover:text-[#003876] hover:border-[#003876] hover:bg-white transition-all shadow-sm"
                      >
                        <Globe size={18} />
                      </a>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="px-8 py-20 text-center">
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center text-gray-300 mb-4">
                        <Search size={32} />
                      </div>
                      <p className="text-gray-400 font-medium">No institutions found matching your criteria.</p>
                      <button 
                        onClick={() => {
                          setSearchTerm('');
                          setSelectedContinent('All');
                          setSelectedCountry('All');
                        }}
                        className="mt-4 text-[#003876] font-bold text-sm hover:underline"
                      >
                        Clear all filters
                      </button>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Notice Info */}
        <div className="mt-10 bg-blue-50/50 rounded-2xl p-6 border border-blue-100 flex items-start gap-4">
          <div className="p-2 bg-white rounded-lg text-[#003876] shadow-sm">
            <Globe size={20} />
          </div>
          <div>
            <h5 className="font-bold text-[#003876] mb-1">Global Partnership Support</h5>
            <p className="text-sm text-gray-600 leading-relaxed">
              If your institution is interested in establishing a partnership with Yonsei University, please contact the International Affairs Team at <strong>oia@yonsei.ac.kr</strong> for protocol and MoUs guidance.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PartnerInstitutions;
