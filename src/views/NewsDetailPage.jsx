import { useParams, useNavigate } from "react-router-dom";
import newsTabsData from "../data/newsTabsData";
import BackButton from "../components/news/BackButton";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function NewsDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  // Gabungkan semua berita dari semua tab
  const allNews = newsTabsData[0].items.concat(newsTabsData[1].items, newsTabsData[2].items);
  const news = allNews.find((n) => String(n.id) === String(id));

  if (!news) return <div className="text-center py-20">Berita tidak ditemukan</div>;

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white pb-12 pt-24">
        <div className="w-full max-w-[1200px] mx-auto">

        <div className="w-[90%] max-w-[1200px] pt-6 flex justify-start">
            <BackButton onClick={() => navigate(-1)} />
        </div>

          <h1 className="text-2xl md:text-3xl font-bold text-[#0a3d91] mb-4">{news.title}</h1>
          <p className="text-[#1976d2] text-sm mb-4 font-semibold">{news.date}</p>
          <img src={news.image} alt={news.title} className="w-full rounded-xl shadow mb-6 object-cover" />
          {/* Isi lengkap berita, jika ada */}
          {news.body && (
            <div className="prose max-w-none text-[#222] text-base leading-relaxed mb-6">
              {news.body.split('\n').map((p, idx) => <p key={idx}>{p}</p>)}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
