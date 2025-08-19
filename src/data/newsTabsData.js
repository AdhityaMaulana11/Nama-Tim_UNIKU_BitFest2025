
const allNews = [
  {
    id: 1,
    title: "Benchmarking Kurikulum bersama FSI UNUANI: Sinergi Menuju Kurikulum Adaptif dan Kolaboratif",
    date: "10 Agustus 2025",
    summary: "Kegiatan benchmarking kurikulum bersama FSI UNUANI untuk memperkuat sinergi dan adaptasi kurikulum di UCIC.",
    image: "assets/images/berita1.jpg",
    category: "Kegiatan"
  },
  {
    id: 2,
    title: "UCIC Laksanakan Asesmen Lapangan LAMEMBA untuk Program Studi D3 Manajemen Bisnis",
    date: "8 Agustus 2025",
    summary: "Asesmen lapangan LAMEMBA di UCIC untuk akreditasi program studi D3 Manajemen Bisnis.",
    image: "assets/images/berita2.jpg",
    category: "Kegiatan"
  },
  {
    id: 3,
    title: "Program Studi Sistem Informasi UCIC Jalani Asesmen Lapangan untuk Akreditasi",
    date: "7 Agustus 2025",
    summary: "Program Studi Sistem Informasi UCIC menjalani asesmen lapangan untuk proses akreditasi.",
    image: "assets/images/berita3.jpg",
    category: "Kegiatan"
  },
  {
    id: 4,
    title: "Pendampingan Ilustrasi AI: Mahasiswa UCIC Dibekali Keterampilan Desain Berbasis Teknologi",
    date: "6 Agustus 2025",
    summary: "Mahasiswa UCIC mengikuti pelatihan ilustrasi AI untuk meningkatkan keterampilan desain berbasis teknologi.",
    image: "assets/images/berita4.jpg",
    category: "Kegiatan"
  },
  {
    id: 5,
    title: "EMOVICS 2025: Wadah Kreativitas Mahasiswa CIC dalam Membuat Film",
    date: "5 Agustus 2025",
    summary: "Event EMOVICS 2025 menjadi wadah kreativitas mahasiswa CIC dalam pembuatan film inovatif.",
    image: "assets/images/berita5.jpg",
    category: "Berita"
  },
  {
    id: 6,
    title: "UCIC X Griya Karya Harapanku",
    date: "4 Agustus 2025",
    summary: "Kolaborasi UCIC dengan Griya Karya Harapanku dalam mendukung masyarakat berkebutuhan khusus.",
    image: "assets/images/berita6.jpg",
    category: "Berita"
  }
//   {
//     id: 7,
//     title: "Pendaftaran Mahasiswa Baru 2025",
//     date: "1 Agustus 2025",
//     summary: "Pendaftaran mahasiswa baru UCIC tahun ajaran 2025/2026 telah dibuka.",
//     image: "assets/images/berita3.jpg",
//     category: "Pengumuman"
//   }
];

const newsTabsData = [
  {
    key: "semua",
    label: "Semua",
    title: "Semua Berita",
    items: allNews
  },
  {
    key: "berita",
    label: "Berita",
    title: "Berita",
    items: allNews.filter((item) => item.category === "Berita")
  },
  {
    key: "kegiatan",
    label: "Kegiatan",
    title: "Kegiatan",
    items: allNews.filter((item) => item.category === "Kegiatan")
  }
];

export default newsTabsData;
