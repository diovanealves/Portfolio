import { ImGithub, ImLink } from "react-icons/im";

import { projects } from "../../utils/project.json";

export function CardProject() {
  return (
    <div className="flex flex-wrap justify-center mt-4 gap-5">
      {projects.map((recentProject, index) => {
        return (
          <div
            key={index}
            className="max-w-sm w-11/12 bg-highlightBackground rounded-lg hover:scale-105 duration-200"
          >
            <img
              src={recentProject.icon}
              className="rounded-t-lg w-full"
              alt="logo dos projetos"
            />
            <div className="p-4">
              <h1 className="text-2xl text-highlight font-black">
                {recentProject.title}
              </h1>
              <p className="h-24 flex items-center">
                {recentProject.description}
              </p>
              <div className="flex justify-between">
                <p className="text-lg text-highlight font-semibold">
                  {recentProject.technology}
                </p>
                <div className="flex gap-4">
                  <a href={recentProject.linkProject} target="_blank">
                    <ImLink size={24} />
                  </a>
                  <a href={recentProject.linkGithub} target="_blank">
                    <ImGithub size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
