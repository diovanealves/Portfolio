import {
  SiFigma,
  SiTailwindcss,
  SiReact,
  SiCss3,
  SiHtml5,
  SiGithub,
  SiGit,
  SiJavascript,
  SiTypescript,
} from "react-icons/si";

export default function Skills() {
  return (
    <div className="flex flex-col items-center mt-28 mb-36">
      <span className="text-2xl font-bold text-[#8CD1FF]">Skills</span>
      <span className="text-3xl font-bold mt-2 mb-10">
        Tecnologias e Habilidades
      </span>
      <span className="text-lg font-bold mb-4">Techs que uso no dia a dia</span>
      <div className="flex flex-wrap justify-center gap-5">
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
