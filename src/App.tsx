import "./style/global.css";

import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";

export function App() {
  return (
    <>
      <Navbar />
      <Home />
    </>
  );
}
