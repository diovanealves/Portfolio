import { List } from "@phosphor-icons/react";
import { useState } from "react";

export function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Ínicio", url: "#Inicio" },
    { name: "Quem sou", url: "#QuemSou" },
    { name: "Conhecimentos", url: "#Conhecimentos" },
    { name: "Projetos", url: "#Projetos" },
    { name: "Contato", url: "#Contato" },
  ];

  return (
    <nav className="flex items-center justify-between pt-4 mx-5">
      <a href="/" className="flex items-center gap-1 text-xl font-bold ">
        <strong className="text-3xl text-[#8CD1FF] font-bold">/</strong>
        Diovane
      </a>

      <div className="z-20 fixed right-5 cursor-pointer md:hidden">
        <List size={26} onClick={() => setOpen(!open)} />
      </div>

      <ul
        className={` rounded-tl-lg backdrop-blur-lg md:static fixed pr-10 z-10  top-0 pt-16 md:pt-0 md:h-auto h-screen duration-200 ease-linear ${
          !open ? "right-[-100%]" : "right-0"
        }`}
      >
        {links.map((link, index) => (
          <li
            key={index}
            className="md:inline-block md:ml-8 ml-5 mr-10 md:mr-0 border-transparent duration-300"
          >
            <a
              href={link.url}
              onClick={() => setOpen(false)}
              className="text-base py-2 md:py-5 lg:py-0 inline-block hover:underline"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
