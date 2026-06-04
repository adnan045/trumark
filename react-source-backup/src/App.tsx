import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import ScrollAnimate from "./components/ScrollAnimate";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Universities from "./pages/Universities";
import StudyAbroad from "./pages/StudyAbroad";
import MBBSAbroad from "./pages/MBBSAbroad";
import MBBSEurope from "./pages/MBBSEurope";
import CountryPage from "./pages/CountryPage";
import UniversityPage from "./pages/UniversityPage";
import BlogPost from "./pages/BlogPost";
import ProgramPage from "./pages/ProgramPage";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 font-sans">
      <ScrollAnimate />
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/universities" element={<Universities />} />
          <Route path="/universities/:slug" element={<UniversityPage />} />
          <Route path="/mbbs-abroad" element={<MBBSAbroad />} />
          <Route path="/mbbs-abroad/:slug" element={<CountryPage variant="mbbs" />} />
          <Route path="/mbbs-in-europe" element={<MBBSEurope />} />
          <Route path="/mbbs-in-europe/:slug" element={<CountryPage variant="europe" />} />
          <Route path="/study-abroad" element={<StudyAbroad />} />
          <Route path="/study-abroad/:slug" element={<ProgramPage />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
