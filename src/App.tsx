import { ApolloProvider } from "@apollo/client";
import "./style/global.css";

import { Client } from "./graphql/apollo";
import { Home } from "./components/Home";
import { AboutMe } from "./components/AboutMe";
import { Project } from "./components/Project";
import { NavbarToTop } from "./components/NavbarToTop";

export function App() {
  return (
    <ApolloProvider client={Client}>
      <Home />
      <AboutMe />
      <Project />
      <NavbarToTop />
    </ApolloProvider>
  );
}
