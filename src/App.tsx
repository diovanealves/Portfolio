import "./styles/main.css";

import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Footer } from "./pages/Footer";
import { Home } from "./pages/Home";
import { Project } from "./pages/Project";
import { Skills } from "./pages/Skills";

export function App() {
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
