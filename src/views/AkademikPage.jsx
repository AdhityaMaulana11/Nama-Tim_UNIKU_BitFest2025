import { lazy, Suspense, useEffect, useMemo } from "react";
import { useParams, Navigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { akademikData } from "../data/akademikData"; // pastikan path-nya benar

// lazy load untuk perf (UI tetap sama)
const AkademikHeader = lazy(() =>
  import("../components/akademik/AkademikHeader")
);
const AkademikAbout = lazy(() =>
  import("../components/akademik/AkademikAbout")
);
const AkademikProdi = lazy(() =>
  import("../components/akademik/AkademikProdi")
);

const slugToName = {
  fti: "Fakultas Teknologi & Informasi (FTI)",
  feb: "Fakultas Ekonomi & Bisnis (FEB)",
  fps: "Fakultas Pendidikan & Sains",
};

const subtitleEN = {
  fti: "Faculty of Technology & Information",
  feb: "Faculty of Economics & Business",
  fps: "Faculty of Education & Science",
};

export default function AkademikPage() {
  const { fak } = useParams(); // fti | feb | fps

  const fakultas = useMemo(() => {
    const targetName = slugToName[fak];
    return akademikData.find((f) => f.nama === targetName);
  }, [fak]);

  // Jika slug tidak valid -> 404 sederhana atau redirect
  if (!fakultas) return <Navigate to="/akademik/fti" replace />;

  // SEO ringan
  useEffect(() => {
    document.title = `Akademik - ${fakultas.nama}`;
    const desc = `Informasi ${fakultas.nama}: daftar program studi, visi misi, prospek lulusan, dan kurikulum.`;
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);

    // JSON-LD
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "CollegeOrUniversity",
      name: "Universitas Catur Insan Cendekia",
      department: { "@type": "CollegeOrUniversity", name: fakultas.nama },
      url: window.location.href,
    });
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, [fakultas]);

  return (
    <div>
      <Navbar />
      <main>
        <Suspense fallback={<div className="h-[480px] bg-gray-100" />}>
          <AkademikHeader title={fakultas.nama} subtitle={subtitleEN[fak]} />
          <AkademikAbout fakultasName={fakultas.nama} />
          <AkademikProdi prodi={fakultas.prodi} />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
