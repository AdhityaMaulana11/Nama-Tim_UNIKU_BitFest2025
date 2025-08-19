import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HomePage from "./views/HomePage";
import AkademikPage from "./views/AkademikPage";
import AboutPage from "./views/AboutPage";
import NewsPage from "./views/NewsPage";
// import NewsDetailPage from "./views/NewsDetailPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/akademik"
          element={<Navigate to="/akademik/fti" replace />}
        />
        <Route path="/akademik/:fak" element={<AkademikPage />} />
        <Route path="/tentang-ucic" element={<AboutPage />} />
        <Route path="/warta-ucic" element={<NewsPage />} />
        {/* <Route path="/warta-ucic/:id" element={<NewsDetailPage />} /> */}
      </Routes>
    </Router>
  );
}
