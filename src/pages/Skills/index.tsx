import {
  SiCss3,
  SiFigma,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export function Skills() {
  return (
    <div className="flex flex-col items-center mt-16 mb-12" id="Skills">
      <h1 className="text-2xl text-highlight font-bold">Skills</h1>
      <p className="text-2xl font-semibold mt-2 mb-10">
        Techs que uso no dia a dia
      </p>
      <div className="flex flex-wrap justify-center gap-4 p-3">
        <SiReact
          size={38}
          className="text-[#8CD1FF] hover:scale-150 duration-200"
        />
        <SiJavascript
          size={38}
          className="text-[#8CD1FF] hover:scale-150 duration-200"
        />
        <SiTypescript
          size={38}
          className="text-[#8CD1FF] hover:scale-150 duration-200"
        />
        <SiTailwindcss
          size={38}
          className="text-[#8CD1FF] hover:scale-150 duration-200"
        />
        <SiHtml5
          size={38}
          className="text-[#8CD1FF] hover:scale-150 duration-200"
        />
        <SiCss3
          size={38}
          className="text-[#8CD1FF] hover:scale-150 duration-200"
        />
        <SiFigma
          size={38}
          className="text-[#8CD1FF] hover:scale-150 duration-200"
        />
        <SiGithub
          size={38}
          className="text-[#8CD1FF] hover:scale-150 duration-200"
        />
        <SiGit
          size={38}
          className="text-[#8CD1FF] hover:scale-150 duration-200 "
        />
      </div>
    </div>
  );
}
