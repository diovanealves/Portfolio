import { ApolloProvider } from "@apollo/client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./style/global.css";

import { Client } from "./graphql/apollo";
import { Home } from "./components/Home";
import { AboutMe } from "./components/AboutMe";
import { Skills } from "./components/Skills";
import { Project } from "./components/Project";
import { NavbarToTop } from "./components/NavbarToTop";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export function App() {
  useEffect(() => {
    AOS.init({
      disable: "mobile",
      duration: 400,
      easing: "ease",
      once: true,
      mirror: true,
      anchorPlacement: "top-center",
    });
    AOS.refresh();
  });
  return (
    <ApolloProvider client={Client}>
      <Home />
      <AboutMe />
      <Skills />
      <Project />
      <Contact />
      <Footer />
      <NavbarToTop />
    </ApolloProvider>
  );
}
