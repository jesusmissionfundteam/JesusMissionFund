import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PartnerCTA from "../components/partners/PartnerCTA";
import PartnerHero from "../components/partners/PartnerHero";
import PartnershipSupports from "../components/partners/PartnershipSupports";
import PowerOfPartnership from "../components/partners/PowerOfPartnership";
import RealityOfBattle from "../components/partners/RealityOfBattle";
import SpiritualWarfare from "../components/partners/SpiritualWarefare";
import TwoRoles from "../components/partners/TwoRoles";
import WhyWeExist from "../components/partners/WhyWeExist";


export default function Partner() {
  return (
    <main className="min-h-screen bg-background">
     <Navbar />
      <PartnerHero />
      <SpiritualWarfare />
      <RealityOfBattle />
      <PowerOfPartnership />
      <WhyWeExist />
      <TwoRoles />
      <PartnershipSupports />
      <PartnerCTA />
      <Footer />
    </main>
  );
}