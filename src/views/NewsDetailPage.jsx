import { useParams, useNavigate } from "react-router-dom";
import newsTabsData from "../data/newsTabsData";
import BackButton from "../components/news/BackButton";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NewsContentSection from "../components/news/NewsContentSection";

export default function NewsDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Gabungkan semua berita
  const allNews = [
    ...newsTabsData[0].items,
    ...newsTabsData[1].items,
    ...newsTabsData[2].items,
  ];
  const news = allNews.find((n) => String(n.id) === String(id));

  // Related news (ambil 3 berita random selain yang sedang dibuka)
  const relatedNews = allNews.filter((n) => n.id !== news?.id).slice(0, 3);

  if (!news) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen flex items-center justify-center text-gray-600 text-lg">
          Berita tidak ditemukan
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-24 pb-16">
        <div className="w-full max-w-[1200px] mx-auto px-4">
          {/* Tombol kembali */}
          <div className="pt-4 flex justify-start">
            <BackButton onClick={() => navigate(-1)} />
          </div>

          {/* Judul & tanggal */}
          <header className="mt-6 mb-4">
            <h1 className="text-2xl md:text-3xl font-bold text-[#0a3d91] leading-snug">
              {news.title}
            </h1>
            <time
              dateTime={news.date}
              className="text-[#1976d2] text-sm md:text-base font-semibold"
            >
              {news.date}
            </time>
          </header>

          {/* Gambar utama */}
          {news.image && (
            <figure className="mb-8">
              <img
                src={news.image}
                alt={news.title}
                loading="lazy"
                className="w-full max-h-[480px] rounded-xl shadow object-cover mx-auto"
              />
            </figure>
          )}

          {/* Isi berita */}
          <article className="text-justify text-gray-800 text-base md:text-lg leading-8 space-y-5">
            {news.body.split("\n").map((p, idx) => {
              // Highlight kalimat penting
              if (p.includes("“") && p.includes("”")) {
                return (
                  <p key={idx} className="text-[#0a3d91] font-semibold italic">
                    {p}
                  </p>
                );
              }

              // Render normal paragraf
              return p.trim() ? <p key={idx}>{p}</p> : <br key={idx} />;
            })}
          </article>
        </div>

        {/* Related News */}
        {relatedNews.length > 0 && (
          <section
            aria-labelledby="related-news-heading"
            className="w-full max-w-[1200px] mx-auto px-4 mt-16"
          >
            <h2
              id="related-news-heading"
              className="text-xl font-bold text-[#0a3d91] mb-8"
            >
              Berita Terkait
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {relatedNews.map((item) => (
                <a
                  key={item.id}
                  href={`/warta-ucic/${item.id}`}
                  className="block bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden text-center"
                >
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-40 object-cover"
                    />
                  )}
                  <div className="p-4">
                    <h3 className="font-semibold text-[#0a3d91] text-sm md:text-base mb-2 line-clamp-2">
                      {item.title}
                    </h3>
                    <time
                      dateTime={item.date}
                      className="text-[#1976d2] text-xs font-medium block"
                    >
                      {item.date}
                    </time>
                  </div>
                </a>
              ))}
            </div>

            {/* Tombol lihat lainnya */}
            <div className="flex justify-center mt-8">
              <a
                href="/warta-ucic"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0a3d91] text-white font-semibold hover:bg-[#1976d2] transition"
              >
                Lihat Lainnya →
              </a>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
