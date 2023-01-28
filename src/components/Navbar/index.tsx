import { Spin as Hamburger } from "hamburger-react";
import { useState } from "react";
export function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const links = [
    { name: "Home", url: "#Home" },
    { name: "Sobre Mim", url: "#About" },
    { name: "Projetos", url: "#Project" },
    { name: "Skills", url: "#Skills" },
    { name: "Contato", url: "#Contact" },
  ];

  function ClickInLink() {
    setOpen(false);
  }

  return (
    <nav className="flex items-center justify-between pt-6">
      <h1 className="flex items-center gap-3 w-10 ml-7 text-xl font-semibold">
        <span className="text-highlight text-3xl font-bold">/ </span> Diovane
      </h1>
      <div className="z-20 fixed right-5 cursor-pointer md:hidden">
        <Hamburger
          size={20}
          toggled={isOpen}
          toggle={setOpen}
          direction="left"
        />
      </div>
      <ul
        className={`bg-highlightBackground rounded-tl-lg backdrop-blur-lg md:pl-10 pr-28 z-10 md:static fixed top-0 pt-16 md:pt-0 md:h-auto h-screen duration-300 ease-linear ${
          !isOpen ? "right-[-100%]" : "right-0"
        }`}
      >
        {links.map((link, index) => (
          <li
            key={index}
            className="md:inline-block md:ml-10 ml-5 border-b-2 border-transparent hover:border-highlight duration-300 md:my-0 "
          >
            <a
              href={link.url}
              onClick={ClickInLink}
              className="text-sm md:py-5 py-3 inline-block font-normal"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
