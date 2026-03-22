import { useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import Technologies from "./components/Technologies";
function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1 md:ml-16 lg:ml-20">
        <Hero />
        <About />
        <Technologies />
        <Projects />
        {/* <Experience /> */}
        <Testimonials />
        <Contact />
        <Footer />
      </main>
      <BackToTop />
    </div>
  );
}
export default App;
