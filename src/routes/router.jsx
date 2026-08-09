import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout.jsx";
import Home from "../pages/Home.jsx";
import Features from "../pages/Features.jsx";
import HowItWorks from "../pages/HowItWorks.jsx";
import Pricing from "../pages/Pricing.jsx";
import About from "../pages/About.jsx";
import Contact from "../pages/Contact.jsx";
import Music from "../pages/Music.jsx";
import NotFound from "../pages/NotFound.jsx";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/music" element={<Music />} />
        {/* Future routes (salon details, booking flow, dashboard, auth)
            will be added here as the project grows beyond the landing page. */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
