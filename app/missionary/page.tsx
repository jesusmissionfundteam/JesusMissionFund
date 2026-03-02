import React from 'react'
import Footer from '../components/Footer';
import MissionaryCTA from '../components/missionary/MissionaryCTA';
import MissionaryHero from '../components/missionary/MissionaryHero';
import Navbar from '../components/Navbar';
import ApplicationProcess from '../components/missionary/ApplicationProcess';
import MissionaryIntro from '../components/missionary/MissionaryIntro';
import SupportIncludes from '../components/missionary/SupportIncludes';
import WhoWeSupport from '../components/missionary/WhoWeSupport';
//import PartnerHero from '../components/partners/PartnerHero';
import MissionaryPartnerHero from '../components/missionary/MissionaryPartnerHero';

function page() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <MissionaryPartnerHero />
      <ApplicationProcess />
      <MissionaryCTA />
      <MissionaryHero />
      <MissionaryIntro />
      <SupportIncludes />
      <WhoWeSupport />
        <Footer />
    </main>
  );
}

export default page