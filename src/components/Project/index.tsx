import { ImArrowRight2 } from "react-icons/im";

import { CardProject } from "./CardProject";

export function Project() {
  return (
    <section className="text-center mt-24" id="Projetos" data-aos="slide-up">
      <h1 className="text-[#8CD1FF] text-4xl font-bold mb-8">Projetos</h1>
      <CardProject />

      <a
        href="https://github.com/diovanealves"
        target="_blank"
        className="absolute right-4"
      >
        <label className="flex items-center gap-2 mt-10 text-[#8CD1FF] hover:scale-110 duration-100 cursor-pointer">
          <p>Veja mais projetos no meu Github</p>
          <ImArrowRight2 size={24} />
        </label>
      </a>
    </section>
  );
}
