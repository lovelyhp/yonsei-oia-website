
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import InboundNotice from './pages/InboundNotice';
import Announcements from './pages/Announcements';
import GlobalEvents from './pages/GlobalEvents';
import ArchivedNews from './pages/ArchivedNews';
import PresidentMessage from './pages/intro/PresidentMessage';
import VPMessage from './pages/intro/VPMessage';
import FormerVPs from './pages/intro/FormerVPs';
import VisionMission from './pages/intro/VisionMission';
import Publications from './pages/intro/Publications';
import ContactUs from './pages/intro/ContactUs';
import PartnerInstitutions from './pages/partners/PartnerInstitutions';
import GlobalNetwork from './pages/partners/GlobalNetwork';
import FacultyMobility from './pages/partners/FacultyMobility';
import SAYProgram from './pages/inbound/SAYProgram';
import YISS from './pages/inbound/YISS';
import WAY from './pages/inbound/WAY';
import GOSC from './pages/inbound/GOSC';
import Transcripts from './pages/inbound/Transcripts';
import DegreeSeeking from './pages/inbound/DegreeSeeking';
import ESP from './pages/outbound/ESP';
import VSP from './pages/outbound/VSP';
import OutboundFAQ from './pages/outbound/OutboundFAQ';
import Scholarships from './pages/outbound/Scholarships';
import GlobalInternship from './pages/outbound/GlobalInternship';
import ExperienceReports from './pages/outbound/ExperienceReports';

// Component to handle scrolling to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const HomePage: React.FC = () => {
  return (
    <main className="flex-grow">
      <Hero />
    </main>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <div className="pt-[72px] lg:pt-[88px]"> {/* Space for fixed navbar */}
          <Routes>
            <Route path="/" element={<HomePage />} />

            {/* Introduction */}
            <Route path="/intro/welcome-message/message-from-the-president" element={<PresidentMessage />} />
            <Route path="/intro/welcome-message/message-from-the-vp" element={<VPMessage />} />
            <Route path="/intro/about-oia/vision-and-mission" element={<VisionMission />} />
            <Route path="/intro/about-oia/former-vice-presidents" element={<FormerVPs />} />
            <Route path="/intro/publications" element={<Publications />} />
            <Route path="/intro/contact-us" element={<ContactUs />} />

            {/* Partnerships */}
            <Route path="/partnerships/partner-institutions" element={<PartnerInstitutions />} />
            <Route path="/partnerships/global-network" element={<GlobalNetwork />} />
            <Route path="/partnerships/faculty-mobility" element={<FacultyMobility />} />

            {/* Inbound */}
            <Route path="/inbound/programs/notice-say" element={<InboundNotice />} />
            <Route path="/inbound/programs/study-abroad-at-yonsei-say" element={<SAYProgram />} />
            <Route path="/inbound/programs/yonsei-international-summer-school-yiss" element={<YISS />} />
            <Route path="/inbound/programs/winter-abroad-at-yonsei-way" element={<WAY />} />
            <Route path="/inbound/transcripts" element={<Transcripts />} />
            <Route path="/inbound/degree-seeking" element={<DegreeSeeking />} />
            <Route path="/inbound/global-one-stop-service-center" element={<GOSC />} />

            {/* Outbound */}
            <Route path="/outbound/programs/exchange-student-program-esp" element={<ESP />} />
            <Route path="/outbound/programs/visiting-student-program-vsp" element={<VSP />} />
            <Route path="/outbound/programs/outbound-scholarships" element={<Scholarships />} />
            <Route path="/outbound/programs/outbound-programs-faq" element={<OutboundFAQ />} />
            <Route path="/outbound/global-internship-program" element={<GlobalInternship />} />
            <Route path="/outbound/experience-reports" element={<ExperienceReports />} />

            {/* News and Events */}
            <Route path="/news-and-events/notice" element={<Announcements />} />
            <Route path="/news-and-events/global-events" element={<GlobalEvents />} />
            <Route path="/news-and-events/archived-news" element={<ArchivedNews />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
