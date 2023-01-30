import { useEffect } from "react";

import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Footer } from "./pages/Footer";
import { Home } from "./pages/Home";
import { Project } from "./pages/Project";
import { Skills } from "./pages/Skills";

import AOS from "aos";
import "./styles/main.css";

export function App() {
  useEffect(() => {
    AOS.init({
      duration: 400,
      anchorPlacement: "top-center",
      once: true,
      mirror: true,
      easing: "ease-in",
    });
  }),
    [];

  return (
    <div className="scroll-smooth">
      <Home />
      <About />
      <Project />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
