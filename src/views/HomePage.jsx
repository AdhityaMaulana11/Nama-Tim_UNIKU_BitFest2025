import AboutSection from "../components/AboutSection";
import AkademikSection from "../components/AkademikSection";
import FasilitasMahasiswaSection from "../components/FasilitasMahasiswaSection";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import PrestasiSection from "../components/PrestasiSection";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <AkademikSection />
      <FasilitasMahasiswaSection />
      <PrestasiSection />
      <Footer />
    </div>
  );
}
