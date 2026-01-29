
import React, { useState } from 'react';
import { ChevronRight, Home, Download, Calendar, Book, FileText, Globe, GraduationCap, DollarSign, CheckCircle, Info, ExternalLink, Search, AlertCircle, Languages, Calculator, Scale, ShieldAlert, AlertTriangle, XCircle, Clock, UserCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const TABS = [
  { id: 'overview', title: 'Overview' },
  { id: 'exchange', title: 'Exchange Students' },
  { id: 'visiting', title: 'Visiting Students' },
  { id: 'calendar', title: 'Academic Calendar' },
  { id: 'courses', title: 'Courses' },
  { id: 'rules', title: 'Rules & Regulations' },
  { id: 'transcripts', title: 'Transcripts' },
];

const SAYProgram: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-2xl font-bold text-[#003876] mb-6">Welcome to Yonsei University!</h2>
            <div className="prose prose-blue max-w-none text-gray-600 leading-relaxed space-y-4">
              <p>
                Yonsei University's Exchange/Visiting Student Programs offer opportunities to students who plan to study for a year or a semester in Korea's top university located in the heart of Seoul, the dynamic capital city of Korea.
              </p>
              <p>
                In addition to gaining academic excellence, international students are also exposed to a beautiful and culturally rich environment and can share special memories and experience Korean culture by participating in various Yonsei clubs and activities for international students.
              </p>
            </div>
            <div className="mt-10">
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-[#003876] text-white rounded-lg font-bold hover:bg-[#002a5a] transition-colors shadow-lg">
                <Download size={18} /> PDF Download
              </button>
            </div>
          </div>
        );
      case 'exchange':
        return (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-2xl font-bold text-[#003876] mb-6">Exchange Student Program</h2>
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 mb-8 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white rounded-xl text-[#8A704C] shadow-sm">
                  <FileText size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">[Yonsei] Fact Sheet for Exchange Student Program</h4>
                  <p className="text-xs text-gray-400 mt-1 uppercase tracking-widest font-bold">PDF Document</p>
                </div>
              </div>
              <button className="p-2 text-[#003876] hover:bg-white rounded-full transition-all">
                <Download size={20} />
              </button>
            </div>
            <div className="text-gray-600 leading-relaxed">
              <p>
                Exchange students are those who are nominated by an overseas university under bilateral exchange agreement. Exchange program candidates can apply through the International Office of their home university. Tuition is paid to the home university, and in most cases the application and documentation fee is waived.
              </p>
            </div>
          </div>
        );
      case 'visiting':
        return (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-[#003876] mb-6">Visiting Student Program</h2>
              <p className="text-gray-500 text-sm mb-6">(Partners or Study Abroad Student)</p>
              <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 mb-8 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white rounded-xl text-[#8A704C] shadow-sm">
                    <FileText size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">[Yonsei] Fact Sheet for Visiting Student Program</h4>
                    <p className="text-xs text-gray-400 mt-1 uppercase tracking-widest font-bold">PDF Document</p>
                  </div>
                </div>
                <button className="p-2 text-[#003876] hover:bg-white rounded-full transition-all">
                  <Download size={20} />
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 border border-gray-100 rounded-2xl bg-blue-50/30">
                  <h4 className="font-bold text-[#003876] mb-2">Institutional Payment</h4>
                  <p className="text-sm text-gray-600">The student's institution or home university pays for their students' application fee and tuition to Yonsei University.</p>
                </div>
                <div className="p-6 border border-gray-100 rounded-2xl bg-amber-50/30">
                  <h4 className="font-bold text-[#8A704C] mb-2">Individual Payment</h4>
                  <p className="text-sm text-gray-600">Student themselves pay for their application fee and tuition directly to Yonsei University.</p>
                </div>
              </div>
            </div>

            {/* Deadlines */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Calendar className="text-[#003876]" size={20} /> Important Deadlines
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white border border-gray-200 rounded-xl p-5">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Nomination</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm"><span className="text-gray-500">Fall Semester</span> <span className="font-bold">Mar 01 – Apr 15</span></div>
                    <div className="flex justify-between text-sm"><span className="text-gray-500">Spring Semester</span> <span className="font-bold">Sep 01 – Oct 15</span></div>
                  </div>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-5">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Application</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm"><span className="text-gray-500">Fall Semester</span> <span className="font-bold">Mar 01 – Apr 30</span></div>
                    <div className="flex justify-between text-sm"><span className="text-gray-500">Spring Semester</span> <span className="font-bold">Sep 01 – Oct 31</span></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Requirements */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <CheckCircle className="text-[#003876]" size={20} /> Requirements
              </h3>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <h4 className="font-bold text-[#003876] mb-3">Academic Requirement (GPA)</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Minimum GPA: <strong>CGPA 2.5 on a 4.0 scale</strong> (for Exchange and Group Visiting).<br/>
                    * For <strong>Individual Visiting</strong> student only, <strong>CGPA 3.0 on a 4.0 scale</strong> is required.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <h4 className="font-bold text-[#003876] mb-3">Language Proficiency</h4>
                  <p className="text-sm text-gray-600 mb-4">Either English OR Korean proficiency proof is required (within 2 years).</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                      <p className="text-xs font-bold text-[#8A704C] mb-2">ENGLISH</p>
                      <ul className="text-xs space-y-1 text-gray-500">
                        <li>• TOEFL iBT 79</li>
                        <li>• IELTS 6.5</li>
                        <li>• Cambridge English B2-C2</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                      <p className="text-xs font-bold text-[#8A704C] mb-2">KOREAN</p>
                      <ul className="text-xs space-y-1 text-gray-500">
                        <li>• TOPIK Level 4</li>
                        <li>• KLAT Level 4</li>
                        <li>• Professor's Assessment</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Fees */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <DollarSign className="text-[#003876]" size={20} /> Tuition & Fees
              </h3>
              <div className="overflow-hidden border border-gray-200 rounded-2xl bg-white">
                <table className="w-full text-left">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest">Category</th>
                      <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest text-right">Cost (KRW)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-sm">
                    <tr>
                      <td className="px-6 py-4 font-medium">Application Fee</td>
                      <td className="px-6 py-4 text-right font-bold text-gray-900">100,000</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium">Tuition per Semester</td>
                      <td className="px-6 py-4 text-right font-bold text-[#003876]">6,000,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4 p-4 bg-blue-50 rounded-xl flex gap-3 items-start">
                <Info size={18} className="text-[#003876] shrink-0 mt-0.5" />
                <p className="text-[11px] text-[#003876] leading-relaxed">
                  Total estimated budget per semester (including housing, meals, and living expenses) is approximately <strong>KRW 11,600,000</strong>. All costs are subject to change.
                </p>
              </div>
            </div>
          </div>
        );
      case 'calendar':
        return (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-2xl font-bold text-[#003876] mb-6">Academic Calendar</h2>
            <div className="bg-white border border-gray-200 rounded-2xl p-10 text-center">
              <Calendar size={48} className="mx-auto text-gray-200 mb-4" />
              <p className="text-gray-500 font-medium mb-6">View the detailed academic schedule for Exchange/Visiting students.</p>
              <a 
                href="https://oia.yonsei.ac.kr/intstd/exCalendar.asp" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 text-[#003876] font-bold hover:underline"
              >
                Go to Official Academic Calendar <ExternalLink size={16} />
              </a>
            </div>
          </div>
        );
      case 'courses':
        return (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-[#003876] mb-6">Course Information</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Yonsei University offers approximately 1,000 undergraduate courses taught in English every semester across various disciplines.
              </p>

              {/* 1. Searching Courses */}
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Search className="text-[#003876]" size={20} /> Searching Courses & Syllabus
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#003876] text-white flex items-center justify-center shrink-0 font-bold text-sm">1</div>
                    <p className="text-sm text-gray-600">Go to <a href="https://portal.yonsei.ac.kr" target="_blank" className="text-[#003876] font-bold underline">Yonsei Portal</a> and change language to <strong>ENG</strong> (top right).</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#003876] text-white flex items-center justify-center shrink-0 font-bold text-sm">2</div>
                    <p className="text-sm text-gray-600">Click on the <strong>"Course Catalogue and Syllabus"</strong> banner under Yonsei Service.</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#003876] text-white flex items-center justify-center shrink-0 font-bold text-sm">3</div>
                    <p className="text-sm text-gray-600">Search by Major, Semester, or enter a course title/code.</p>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-amber-50 border border-amber-100 rounded-xl flex gap-3">
                   <Info size={18} className="text-[#8A704C] shrink-0" />
                   <p className="text-xs text-[#8A704C] leading-relaxed">
                     <strong>Note:</strong> Academic year runs from Spring (1st Sem) to Fall (2nd Sem). IEE coded courses and Graduate courses are selectable under "Study Abroad Course".
                   </p>
                </div>
              </div>

              {/* 2. Enrollment & Load */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="border border-gray-200 rounded-2xl p-6">
                  <h3 className="font-bold text-[#003876] mb-4 flex items-center gap-2"><GraduationCap size={18} /> Course Load</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-sm border-b border-gray-50 pb-2">
                      <span className="text-gray-500">Undergraduate</span>
                      <span className="font-bold">9 – 18 Credits</span>
                    </div>
                    <div className="flex justify-between items-center text-sm border-b border-gray-50 pb-2">
                      <span className="text-gray-500">Graduate</span>
                      <span className="font-bold">9 – 15 Credits</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-500">Korean (KLI)</span>
                      <span className="font-bold">6 Credits</span>
                    </div>
                  </div>
                </div>
                <div className="border border-gray-200 rounded-2xl p-6 bg-gray-50">
                   <h3 className="font-bold text-[#003876] mb-4 flex items-center gap-2"><AlertCircle size={18} /> Registration Rules</h3>
                   <p className="text-xs text-gray-500 leading-relaxed">
                     Course registration is highly competitive and spots are not guaranteed. Registration happens online via Yonsei Portal. Plan ahead with your home university.
                   </p>
                </div>
              </div>

              {/* 3. Subject Specifics */}
              <div className="space-y-4 mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Subject-Specific Guidelines</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-5 border border-red-100 bg-red-50/30 rounded-xl">
                    <h4 className="text-sm font-bold text-red-700 mb-2">Restricted Majors</h4>
                    <p className="text-[11px] text-red-600 leading-relaxed">
                      Medicine, Dentistry, Pharmacy, Nursing, Music, MBA, Law School, and some UIC courses.
                    </p>
                  </div>
                  <div className="p-5 border border-blue-100 bg-blue-50/30 rounded-xl">
                    <h4 className="text-sm font-bold text-blue-700 mb-2">Business (BIZ)</h4>
                    <p className="text-[11px] text-blue-600 leading-relaxed">
                      Strictly open to Business majors only. Maximum 4 courses per semester.
                    </p>
                  </div>
                  <div className="p-5 border border-gray-100 bg-gray-50 rounded-xl">
                    <h4 className="text-sm font-bold text-gray-700 mb-2">Computer Science</h4>
                    <p className="text-[11px] text-gray-500 leading-relaxed">
                      Extremely limited availability for exchange/visiting students. High competition.
                    </p>
                  </div>
                </div>
              </div>

              {/* 4. Korean Language */}
              <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-8">
                 <h3 className="text-lg font-bold text-[#003876] mb-6 flex items-center gap-2">
                   <Languages size={20} className="text-[#8A704C]" /> Intensive Korean Language (KLI)
                 </h3>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div>
                      <p className="text-sm text-gray-600 mb-4">
                        Optional intensive program through the Korean Language Institute (KLI).
                      </p>
                      <ul className="text-xs space-y-2 text-gray-500">
                        <li className="flex justify-between"><span>Credits:</span> <span className="font-bold">6 Credits</span></li>
                        <li className="flex justify-between"><span>Duration:</span> <span className="font-bold">16 Weeks (Mon-Fri)</span></li>
                        <li className="flex justify-between"><span>Levels:</span> <span className="font-bold">Level 1 - 6</span></li>
                        <li className="flex justify-between"><span>Time:</span> <span className="font-bold">4:00 PM – 5:50 PM</span></li>
                      </ul>
                    </div>
                    <div className="bg-blue-50/50 p-4 rounded-xl">
                      <h4 className="text-xs font-bold text-[#003876] mb-2 uppercase tracking-wider">Alt: Regular Korean</h4>
                      <p className="text-[11px] text-gray-600 leading-relaxed">
                        For those who find KLI too intensive, the OIA offers <strong>IEE3341 Korean (1)</strong> for 3 credits.
                      </p>
                    </div>
                 </div>
              </div>

              {/* 5. Grading */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Calculator size={20} className="text-[#003876]" /> Grading System
                </h3>
                <div className="overflow-hidden border border-gray-200 rounded-2xl">
                  <table className="w-full text-center text-sm">
                    <thead className="bg-gray-50 border-b border-gray-200">
                      <tr>
                        <th className="px-4 py-3 font-bold text-[#003876]">Grade</th>
                        <th className="px-4 py-3 font-bold text-[#003876]">GPA</th>
                        <th className="px-4 py-3 font-bold text-[#003876]">Grade</th>
                        <th className="px-4 py-3 font-bold text-[#003876]">GPA</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      <tr>
                        <td className="px-4 py-2 font-bold">A+</td><td className="px-4 py-2 text-gray-500">4.3</td>
                        <td className="px-4 py-2 font-bold">B+</td><td className="px-4 py-2 text-gray-500">3.3</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 font-bold">A0</td><td className="px-4 py-2 text-gray-500">4.0</td>
                        <td className="px-4 py-2 font-bold">B0</td><td className="px-4 py-2 text-gray-500">3.0</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 font-bold">A-</td><td className="px-4 py-2 text-gray-500">3.7</td>
                        <td className="px-4 py-2 font-bold">B-</td><td className="px-4 py-2 text-gray-500">2.7</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          </div>
        );
      case 'rules':
        return (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-12">
            <h2 className="text-2xl font-bold text-[#003876] mb-6">Rules & Regulations</h2>

            {/* Attendance Section */}
            <div className="p-8 bg-amber-50 rounded-3xl border border-amber-200 flex flex-col md:flex-row gap-6">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#8A704C] shrink-0 shadow-sm">
                <Clock size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#8A704C] mb-3">Attendance Policy</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Yonsei University maintains a strict attendance policy. Any student absent for <strong>more than 1/3 of the semester</strong> will automatically be issued an <strong>"F" grade</strong>, regardless of academic achievement. Please check your specific course syllabus or consult your professor.
                </p>
              </div>
            </div>

            {/* Code of Conduct Section */}
            <div className="p-8 bg-white rounded-3xl border border-gray-200 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <ShieldAlert className="text-red-600" size={24} />
                <h3 className="text-lg font-bold text-gray-900">Code of Conduct & Dismissal</h3>
              </div>
              <div className="prose prose-sm prose-blue max-w-none text-gray-600 leading-relaxed space-y-4">
                <p>
                  Students are expected to be responsible, honest, and considerate. Prohibited behaviors include:
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-xs list-disc pl-5">
                  <li>Harassment or fraud</li>
                  <li>Unauthorized use of facilities/equipment</li>
                  <li>Falsification of records</li>
                  <li>Commercial use of instructional materials</li>
                  <li>Illegal drug use or employment</li>
                  <li>Cheating (results in automatic 'F')</li>
                </ul>
                <div className="mt-4 p-4 bg-red-50 text-red-700 text-xs rounded-xl font-medium">
                   <strong>Dismissal:</strong> Yonsei reserves the right to dismiss students detrimental to the program or those failing to maintain academic/behavioral standards. In such cases, <strong>no refund</strong> is possible.
                </div>
              </div>
            </div>

            {/* Registration Actions Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Course Add and Drop */}
              <div className="p-8 border border-gray-200 rounded-3xl bg-white hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-[#003876] mb-4 flex items-center gap-2">
                  <CheckCircle size={20} /> Course Add and Drop
                </h3>
                <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                  The final chance to register for courses. Changes (Drop/Add/Confirmation) are only available via the <strong>Undergraduate Course Enrollment</strong> menu on the Portal.
                </p>
                <a 
                  href="https://portal.yonsei.ac.kr" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-xs font-bold text-[#003876] underline flex items-center gap-1"
                >
                  Go to Yonsei Portal <ExternalLink size={14} />
                </a>
              </div>

              {/* Course Withdrawal */}
              <div className="p-8 border border-gray-200 rounded-3xl bg-white hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-[#003876] mb-4 flex items-center gap-2">
                  <XCircle size={20} className="text-red-500" /> Course Withdrawal
                </h3>
                <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                  The final chance to drop a course. Minimum load of <strong>9 credits</strong> must be maintained.
                </p>
                <div className="text-[11px] text-gray-500 bg-gray-50 p-4 rounded-xl">
                  <strong>Path:</strong> Portal - Academic Management - Course - Course Enrollment - Apply for Withdrawal
                </div>
              </div>
            </div>

            {/* Grade Check and Evaluation */}
            <div className="bg-gray-50 p-10 rounded-[40px] border border-gray-100">
              <div className="flex flex-col lg:flex-row gap-12">
                <div className="lg:w-1/2">
                  <h3 className="text-xl font-bold text-[#003876] mb-6 flex items-center gap-2">
                    <UserCheck size={24} /> Course Evaluation
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-6">
                    Mandatory online evaluation in the last month of the semester via the Portal. <strong>Only students who complete the evaluation can check their grades online.</strong>
                  </p>
                  <p className="text-[11px] text-[#8A704C] font-bold italic">
                    * Note: No course evaluation for KLI and graduate courses.
                  </p>
                </div>
                <div className="lg:w-1/2">
                  <h3 className="text-xl font-bold text-[#003876] mb-6 flex items-center gap-2">
                    <Calculator size={24} /> Online Grade Check
                  </h3>
                  <ol className="text-sm text-gray-600 space-y-3 list-decimal pl-5">
                    <li>Log in to <a href="https://portal.yonsei.ac.kr" className="font-bold underline">Portal</a></li>
                    <li>Change initial password if required</li>
                    <li>Click <strong>"Final Grades for Current Semester"</strong> menu</li>
                    <li>Contact professor before deadline if grades do not match expected outcomes</li>
                  </ol>
                </div>
              </div>
            </div>

            {/* Grading Policy Final Info */}
            <div className="bg-[#003876] p-10 rounded-[40px] text-white">
              <h3 className="text-2xl font-bold mb-8">Grading Policy Overview</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-amber-400 mb-2 uppercase text-xs tracking-widest">Assessment Factors</h4>
                    <p className="text-sm text-blue-50 leading-relaxed">Attendance, participation, assignments, and examinations all contribute to the final grade (A+ through F).</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-amber-400 mb-2 uppercase text-xs tracking-widest">Permanent Record</h4>
                    <p className="text-sm text-blue-50 leading-relaxed">Grades cannot be changed after the correction period under any circumstances.</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-amber-400 mb-2 uppercase text-xs tracking-widest">Grading Systems</h4>
                    <ul className="text-sm text-blue-50 space-y-2">
                      <li className="flex gap-2"><span>•</span> Korean-taught courses: Typically <strong>Curve System</strong></li>
                      <li className="flex gap-2"><span>•</span> English-taught courses (excl. GSIS/UIC): <strong>No Curve</strong></li>
                      <li className="flex gap-2"><span>•</span> Yonsei does <strong>not</strong> offer "Incomplete" grades</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'transcripts':
        return (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-10">
            <h2 className="text-2xl font-bold text-[#003876] mb-6">Transcripts</h2>
            
            <div className="p-8 border border-gray-200 rounded-3xl bg-white shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Official Transcript Issuance</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                All exchange and visiting students who attended SAY Program can issue their own official transcript through Yonsei Portal. If you need a hard copy sent abroad, please use the request system below.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button className="flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors group">
                  <span className="text-sm font-bold text-[#003876]">Exchange/Visiting Program</span>
                  <div className="px-3 py-1 bg-blue-50 text-[#003876] text-[10px] font-bold rounded uppercase">Request</div>
                </button>
                <button className="flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors group">
                  <span className="text-sm font-bold text-[#003876]">Summer School (YISS)</span>
                  <div className="px-3 py-1 bg-blue-50 text-[#003876] text-[10px] font-bold rounded uppercase">Request</div>
                </button>
                <button className="flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors group">
                  <span className="text-sm font-bold text-[#003876]">Winter Abroad (WAY)</span>
                  <div className="px-3 py-1 bg-blue-50 text-[#003876] text-[10px] font-bold rounded uppercase">Request</div>
                </button>
              </div>
            </div>

            <div className="p-8 border-l-4 border-[#8A704C] bg-gray-50 rounded-r-3xl">
              <h3 className="font-bold text-[#003876] mb-3">How do I verify the transcript?</h3>
              <p className="text-sm text-gray-600 mb-4">You and your home university can verify the transcript without logging in as follows:</p>
              <ol className="text-xs space-y-2 text-gray-500 list-decimal pl-4">
                <li>Go to Yonsei Portal and click "English".</li>
                <li>Click "Online Transcripts & Certificates" in the middle of the main page.</li>
                <li>Click "Verification" tab and enter the Verification Number and Date of Issue.</li>
              </ol>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-gray-50 border-b border-gray-200 py-8 lg:py-12">
        <div className="container mx-auto px-4 md:px-6">
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <Link to="/" className="hover:text-[#003876] flex items-center gap-1">
              <Home size={14} /> Home
            </Link>
            <ChevronRight size={14} />
            <span className="text-gray-400">Inbound</span>
            <ChevronRight size={14} />
            <span className="text-[#003876] font-semibold">Study Abroad at Yonsei (SAY)</span>
          </nav>
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-[#003876] tracking-tight">Study Abroad at Yonsei (SAY)</h1>
              <p className="mt-2 text-gray-600 font-medium">Exchange and Visiting Student Programs for a lifetime experience in Seoul.</p>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-[#8A704C]/10 rounded-full border border-[#8A704C]/20 text-[#8A704C] text-sm font-bold">
              <Globe size={16} /> Global Program
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Side Tabs Navigation */}
          <div className="lg:col-span-3">
            <div className="sticky top-[120px] space-y-1">
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full text-left px-5 py-4 rounded-xl text-sm font-bold transition-all ${
                    activeTab === tab.id 
                      ? 'bg-[#003876] text-white shadow-lg shadow-blue-900/10' 
                      : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  {tab.title}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="lg:col-span-9">
            <div className="min-h-[600px]">
              {renderContent()}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SAYProgram;
