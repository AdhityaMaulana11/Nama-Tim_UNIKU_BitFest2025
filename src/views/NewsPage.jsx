import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NewsHeaderSection from "../components/news/NewsHeaderSection";
import NewsTabsSection from "../components/news/NewsTabsSection";
import { useNavigate } from "react-router-dom";

export default function NewsPage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-24">
        <NewsHeaderSection onBack={() => navigate(-1)} />
        <NewsTabsSection />
      </main>
      <Footer />
    </div>
  );
}
