import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import useDarkMode from "../hooks/useDarkMode.js";

export default function MainLayout() {
  const [dark, setDark] = useDarkMode();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-[--c-bg] font-sans text-[--c-ink] antialiased">
      {/* <Navbar dark={dark} setDark={setDark} /> */}
      <main>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  );
}
