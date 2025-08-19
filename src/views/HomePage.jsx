import AboutSection from "../components/home/AboutSection";
import AkademikSection from "../components/home/AkademikSection";
import FasilitasMahasiswaSection from "../components/home/FasilitasMahasiswaSection";
import Footer from "../components/Footer";
import HeroSection from "../components/home/HeroSection";
import Navbar from "../components/Navbar";
import PrestasiSection from "../components/home/PrestasiSection";
import WartaSection from "../components/home/WartaSection";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <AkademikSection />
      <FasilitasMahasiswaSection />
      <PrestasiSection />
      <WartaSection />
      <Footer />
    </div>
  );
}
