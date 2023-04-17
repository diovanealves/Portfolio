import { ApolloProvider } from "@apollo/client";
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
