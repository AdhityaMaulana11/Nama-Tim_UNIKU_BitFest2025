
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutHeaderSection from "../components/about/AboutHeaderSection";
import AboutTabsSection from "../components/about/AboutTabsSection";
import AboutContentSection from "../components/about/AboutContentSection";
import AboutMapSection from "../components/about/AboutMapSection";

export default function AboutPage() {
  return (
    <div style={{ background: 'linear-gradient(180deg, #0a3d91 0%, #1976d2 100%)', minHeight: '100vh' }}>
      <Navbar />
      <AboutHeaderSection />
      <AboutTabsSection />
      <hr style={{
        border: "none",
        borderBottom: "1px solid #e0e0e0",
        margin: "0 auto 1.5rem auto",
        width: "90%"
        }} />
      <AboutContentSection />
      <Footer />
    </div>
  );
}
