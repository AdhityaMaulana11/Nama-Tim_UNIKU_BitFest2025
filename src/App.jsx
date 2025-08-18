import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HomePage from "./views/HomePage";
import AkademikPage from "./views/AkademikPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* redirect agar /akademik langsung ke FTI (boleh ganti ke fakultas lain) */}
        <Route
          path="/akademik"
          element={<Navigate to="/akademik/fti" replace />}
        />
        {/* halaman dinamis per fakultas */}
        <Route path="/akademik/:fak" element={<AkademikPage />} />
      </Routes>
    </Router>
  );
}
