import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutHeaderSection from "../components/about/AboutHeaderSection";
import AboutTabsSection from "../components/about/AboutTabsSection";
import AboutContentSection from "../components/about/AboutContentSection";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a3d91] to-[#1976d2]">
      <Navbar />
      <main className="pt-24">
        <AboutHeaderSection />
        <AboutTabsSection />
        <hr className="border-b border-[#e0e0e0] w-[90%] mx-auto my-6" />
        <AboutContentSection />
      </main>
      <Footer />
    </div>
  );
}
