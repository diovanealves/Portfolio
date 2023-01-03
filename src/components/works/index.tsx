import { projects } from "../../utils/project.json";
import { ImLink, ImGithub, ImArrowRight2 } from "react-icons/im";

export default function Project() {
  return (
    <div className="flex flex-col items-center mt-48">
      <span className=" text-4xl text-[#8CD1FF] font-bold mt-6">Projetos</span>
      <span>Trabalhos e projetos</span>
      <div className="flex flex-wrap justify-center mt-4 gap-4">
        {projects.map((RecentProjects) => {
          return (
            <div className="max-w-sm w-11/12 bg-[#052131] rounded hover:scale-105 duration-200">
              <img
                src={RecentProjects.icon}
                className="rounded-t-md w-full"
                alt="Logo do Projeto"
              />
              <ul className="flex p-4">
                <li>
                  <p className="text-2xl font-black text-[#8cd1ff]">
                    {RecentProjects.title}
                  </p>
                  <p className="h-24 text-base font-regular ">
                    {RecentProjects.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="text-lg font-semibold text-[#8cd1ff]">
                      {RecentProjects.technology}
                    </p>
                    <li className="flex gap-3">
                      <a
                        href={RecentProjects.linkProject}
                        target="_blank"
                        className="hover:text-[#8cd1ff] hover:scale-125 duration-200"
                      >
                        <ImLink size={24} />
                      </a>
                      <a
                        href={RecentProjects.linkGithub}
                        target="_blank"
                        className="hover:text-[#8cd1ff] hover:scale-125 duration-200"
                      >
                        <ImGithub size={24} />
                      </a>
                    </li>
                  </div>
                </li>
              </ul>
            </div>
          );
        })}
      </div>
      <div className="w-full flex justify-end mr-28">
        <a href="https://github.com/diovanealves" target="_blank">
          <label className="flex items-center gap-2 mt-4 text-[#8cd1ff] hover:scale-110 duration-100 cursor-pointer">
            <p>Veja mais projetos no meu Github</p>
            <ImArrowRight2 size={23} />
          </label>
        </a>
      </div>
    </div>
  );
}
