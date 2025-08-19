import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutHeaderSection from "../components/about/AboutHeaderSection";
import AboutTabsSection from "../components/about/AboutTabsSection";
import AboutContentSection from "../components/about/AboutContentSection";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-l from-[#002E5B] to-[#0062C1]">
      <Navbar />
      <main className="pt-24">
        <AboutHeaderSection />
        <AboutTabsSection />
        <AboutContentSection />
      </main>
      <Footer />
    </div>
  );
}
