import { ImArrowRight2 } from "react-icons/im";
import { CardProject } from "../../components/CardProject";

export function Project() {
  return (
    <div className=" flex flex-col items-center mt-7 md:mt-20" id="Project">
      <h1 className="text-4xl text-highlight font-bold mt-6">Projetos</h1>
      <p>Trabalhos e projetos.</p>
      <CardProject />
      <a
        href="https://github.com/diovanealves"
        target="_blank"
        className="w-full flex justify-center md:justify-end  md:mr-32 "
      >
        <label className="flex items-center gap-2 mt-10 text-highlight hover:scale-110 duration-100 cursor-pointer">
          <p>Veja mais projetos no meu Github</p>
          <ImArrowRight2 size={23} />
        </label>
      </a>
    </div>
  );
}
