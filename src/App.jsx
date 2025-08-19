import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { MusicPlayerProvider } from "./contexts/MusicPlayerContext";
import Menu from "./components/Menu/Menu";
import GlobalMusicPlayer from "./components/GlobalMusicPlayer/GlobalMusicPlayer";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Updates from "./pages/updates/Updates";
import Solutions from "./pages/solutions/Solutions";
import Contact from "./pages/contact/Contact";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isDarkMenu = location.pathname === "/updates";

  const pageTitles = {
    "/": "Harmonia Digital | Moldando o Futuro da Música",
    "/about": "Sobre Nós | Harmonia Digital",
    "/solutions": "Soluções | Harmonia Digital",
    "/updates": "Novidades | Harmonia Digital",
    "/contact": "Contato | Harmonia Digital",
  };

  useEffect(() => {
    const currentTitle = pageTitles[location.pathname] || "Harmonia Digital";
    document.title = currentTitle;

    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 750);
  }, [location.pathname]);

  return (
    <MusicPlayerProvider>
      <div className="app">
        <Menu
          isOpen={isMenuOpen}
          setIsOpen={setIsMenuOpen}
          isDark={isDarkMenu}
        />
        <GlobalMusicPlayer />
        <AnimatePresence mode="wait" initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/updates" element={<Updates />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </div>
    </MusicPlayerProvider>
  );
}

export default App;
