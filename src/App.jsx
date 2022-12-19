import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppFooter from "./components/shared/AppFooter";
import AppHeader from "./components/shared/AppHeader";
import "./css/App.css";
import About from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectSingle from "./pages/ProjectSingle";
import { AnimatePresence } from "framer-motion";
import UseScrollToTop from "./customhooks/useScrollToTop";
import { HelmetProvider } from "react-helmet-async";
function App() {
  return (
    <HelmetProvider aria-label="title provider">
      <AnimatePresence>
        <div className=" bg-secondary-light dark:bg-primary-dark transition duration-300">
          <Router>
            <AppHeader />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="projects" element={<Projects />} />
              <Route
                path="projects/single-project"
                element={<ProjectSingle />}
              />

              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
            </Routes>
            <AppFooter />
          </Router>
          <UseScrollToTop />
        </div>
      </AnimatePresence>
    </HelmetProvider>
  );
}

export default App;
