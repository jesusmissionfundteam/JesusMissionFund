
// app/page.tsx
import Navbar from "./components/Navbar";
//import HeroSection from "./components/HeroSection";
//import InfoSection from "./components/InfoSection";
//import HowItWorks from "./components/HowItWorks";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import LandingHero from "./components/LandingHero";
import PartnersSection from "./components/PartnersSection";
import MissionarySection from "./components/MissionarySection";
//import JoinMissionSection from "./components/NavLink";




export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <LandingHero />
      <PartnersSection />
      <MissionarySection />
      <CTASection />
      <Footer />
    </div>
  );
}
