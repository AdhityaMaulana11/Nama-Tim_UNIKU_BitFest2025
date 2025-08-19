// import { useParams, useNavigate } from "react-router-dom";
// import newsTabsData from "../data/newsTabsData";

// export default function NewsDetailPage() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   // Gabungkan semua berita dari semua tab
//   const allNews = newsTabsData[0].items.concat(newsTabsData[1].items, newsTabsData[2].items);
//   const news = allNews.find((n) => String(n.id) === String(id));

//   if (!news) return <div className="text-center py-20">Berita tidak ditemukan</div>;

//   return (
//     <div className="min-h-screen bg-[#f5f7fa] pb-12">
//       <div className="w-full max-w-[900px] mx-auto pt-12">
//         <button
//           onClick={() => navigate(-1)}
//           className="bg-[#0a3d91] text-white rounded-lg px-4 py-2 font-semibold mb-6 hover:bg-[#002E5B] transition"
//         >
//           &larr; Kembali
//         </button>
//         <h1 className="text-2xl md:text-3xl font-bold text-[#0a3d91] mb-4">{news.title}</h1>
//         <p className="text-[#1976d2] text-sm mb-4 font-semibold">{news.date}</p>
//         <img src={news.image} alt={news.title} className="w-full rounded-xl shadow mb-6 object-cover" />
//         {/* Isi lengkap berita, jika ada */}
//         {news.body && (
//           <div className="prose max-w-none text-[#222] text-base leading-relaxed mb-6">
//             {news.body.split('\n').map((p, idx) => <p key={idx}>{p}</p>)}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
