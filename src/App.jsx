import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Menu from "./components/Menu/Menu";
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

  // Este objeto mapeia cada rota para um título.
  const pageTitles = {
    "/": "Harmonia Digital | Moldando o Futuro da Música",
    "/about": "Sobre Nós | Harmonia Digital",
    "/solutions": "Soluções | Harmonia Digital",
    "/updates": "Novidades | Harmonia Digital",
    "/contact": "Contato | Harmonia Digital",
  };

  useEffect(() => {
    // Procura o título correspondente à rota atual ou usa um título padrão.
    const currentTitle = pageTitles[location.pathname] || "Harmonia Digital";
    document.title = currentTitle;

    // Lógica para rolar para o topo
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 750);
  }, [location.pathname]);

  return (
    <div className="app">
      <Menu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} isDark={isDarkMenu} />
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
  );
}

export default App;
