
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CardSection from './components/CardSection';
import Footer from './components/Footer';
import InboundNotice from './pages/InboundNotice';
import OutboundNotice from './pages/OutboundNotice';
import Announcements from './pages/Announcements';
import GlobalEvents from './pages/GlobalEvents';
import ArchivedNews from './pages/ArchivedNews';
import PresidentMessage from './pages/intro/PresidentMessage';
import VPMessage from './pages/intro/VPMessage';
import FormerVPs from './pages/intro/FormerVPs';
import VisionMission from './pages/intro/VisionMission';
import AboutOIA from './pages/intro/AboutOIA';
import Multimedia from './pages/intro/Multimedia';
import Publications from './pages/intro/Publications';
import ContactUs from './pages/intro/ContactUs';
import PartnerInstitutions from './pages/partners/PartnerInstitutions';
import GlobalNetwork from './pages/partners/GlobalNetwork';
import FacultyMobility from './pages/partners/FacultyMobility';
import SAYProgram from './pages/inbound/SAYProgram';
import YISS from './pages/inbound/YISS';
import WAY from './pages/inbound/WAY';
import GOSC from './pages/inbound/GOSC';
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
      <CardSection />
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
            <Route path="/inbound/notice" element={<InboundNotice />} />
            <Route path="/outbound/notice" element={<OutboundNotice />} />
            <Route path="/news/announcements" element={<Announcements />} />
            <Route path="/news/events" element={<GlobalEvents />} />
            <Route path="/news/archive" element={<ArchivedNews />} />
            
            {/* Introduction Pages */}
            <Route path="/intro/welcome/president" element={<PresidentMessage />} />
            <Route path="/intro/welcome/vp" element={<VPMessage />} />
            <Route path="/intro/former-vps" element={<FormerVPs />} />
            <Route path="/intro/vision" element={<VisionMission />} />
            <Route path="/intro/about" element={<AboutOIA />} />
            <Route path="/intro/multimedia" element={<Multimedia />} />
            <Route path="/intro/publications" element={<Publications />} />
            <Route path="/intro/contact" element={<ContactUs />} />

            {/* Partnerships Pages */}
            <Route path="/partners/institutions" element={<PartnerInstitutions />} />
            <Route path="/partners/network" element={<GlobalNetwork />} />
            <Route path="/partners/faculty" element={<FacultyMobility />} />

            {/* Inbound Pages */}
            <Route path="/inbound/say" element={<SAYProgram />} />
            <Route path="/inbound/yiss" element={<YISS />} />
            <Route path="/inbound/way" element={<WAY />} />
            <Route path="/inbound/gosc" element={<GOSC />} />

            {/* Outbound Pages */}
            <Route path="/outbound/esp" element={<ESP />} />
            <Route path="/outbound/vsp" element={<VSP />} />
            <Route path="/outbound/faq" element={<OutboundFAQ />} />
            <Route path="/outbound/scholarships" element={<Scholarships />} />
            <Route path="/outbound/internship" element={<GlobalInternship />} />
            <Route path="/outbound/reports" element={<ExperienceReports />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
