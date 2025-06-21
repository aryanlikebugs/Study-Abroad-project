//updated after backend integration
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Programs from "./pages/Programs";
import Requirements from "./pages/Requirements";
import Scholarships from "./pages/Scholarships";
import FAQs from "./pages/FAQs";
import Process from "./pages/Process";
import Stories from "./pages/Stories";
import Contact from "./pages/Contact";
import Auth from "./pages/Auth";
import ProtectedRoute from "./components/ProtectedRoute";
import Recommend from "./pages/Recommend";
import Profile from "./pages/Profile";
import About from "./pages/About";
import { Search } from "lucide-react";
import { SearchProvider } from "./components/SearchContext";

function App() {
  const location = useLocation();

  return (
    <SearchProvider>
      <div className="min-h-screen bg-gray-100">
        <Header />

        {/* Hide Sidebar on Auth Page */}
        {location.pathname !== "/auth" && <Sidebar />}

        <main className="pt-16 md:pl-2">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/about" element={<About />} />{" "}
            {/* ✅ Added About Route */}
            {/* Protected Routes (Wrapped in ProtectedRoute) */}
            <Route element={<ProtectedRoute />}>
              <Route path="/programs" element={<Programs />} />
              <Route path="/requirements" element={<Requirements />} />
              <Route path="/scholarships" element={<Scholarships />} />
              <Route path="/faqs" element={<FAQs />} />
              <Route path="/process" element={<Process />} />
              <Route path="/stories" element={<Stories />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/profile" element={<Profile />} />{" "}
              {/* ✅ Added Profile Route */}
              <Route path="/recommend" element={<Recommend />} />{" "}
              {/* ✅ Added Recommend Route */}
            </Route>
          </Routes>
        </main>

        <Footer />
      </div>
    </SearchProvider>
  );
}

export default App;
