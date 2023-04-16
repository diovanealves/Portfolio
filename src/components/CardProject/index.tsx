import { GithubLogo, Globe } from "@phosphor-icons/react";
import { useQuery } from "@apollo/client";
import { Get_Project } from "../../graphql/queries/GetProject";

interface Project {
  id: string;
  title: string;
  description: string;
  linkImage: string;
  projectWebsite: string;
  githubRepository: string;
  usedLanguages: string;
}

interface ProjectData {
  projects: Project[];
}

export function CardProject() {
  const { loading, error, data } = useQuery<ProjectData>(Get_Project);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <div className="flex flex-wrap justify-center mt-4 gap-5">
      {data?.projects.map((project) => {
        return (
          <div
            key={project.id}
            className="max-w-sm w-11/12 bg-[#052131] rounded-lg hover:scale-105 duration-200"
          >
            <img
              src={project.linkImage}
              className="rounded-t-lg w-full"
              alt="logo dos projetos"
            />
            <div className="p-4 text-start">
              <h1 className="text-2xl text-[#8CD1FF] font-black">
                {project.title}
              </h1>
              <p className="h-24 flex items-center">{project.description}</p>
              <div className="flex justify-between">
                <p className="text-sm text-[#8CD1FF] font-semibold">
                  {project.usedLanguages}
                </p>
                <div className="flex gap-4 ">
                  <a
                    href={project.projectWebsite}
                    target="_blank"
                    className="hover:text-[#8CD1FF]"
                  >
                    <Globe size={24} />
                  </a>
                  <a
                    href={project.githubRepository}
                    target="_blank"
                    className="hover:text-[#8CD1FF]"
                  >
                    <GithubLogo size={24} />
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
