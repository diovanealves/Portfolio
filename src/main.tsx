import React from "react";
import ReactDOM from "react-dom/client";
import AboutMe from "./components/aboutMe";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Home from "./components/home";
import Skills from "./components/skills";
import Project from "./components/works";

import "./styles/main.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Home />
    <AboutMe />
    <Project />
    <Skills />
    <Contact />
    <Footer />
  </React.StrictMode>
);
