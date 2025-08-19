import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NewsHeaderSection from "../components/news/NewsHeaderSection";
import NewsTabsSection from "../components/news/NewsTabsSection";
import { useNavigate } from "react-router-dom";
import BackButton from "../components/news/BackButton";

export default function NewsPage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-24">
        <div className="w-[90%] max-w-[1200px] mx-auto pt-6 flex justify-start">
            <BackButton onClick={() => navigate(-1)} />
        </div>
        <NewsHeaderSection />
        <NewsTabsSection />
      </main>
      <Footer />
    </div>
  );
}
