import {
  SiCss3,
  SiFigma,
  SiGit,
  SiGithub,
  SiVisualstudiocode,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export function Skills() {
  return (
    <section className="w-3/4 mx-auto text-center mt-16" id="Conhecimentos">
      <h1 className="text-2xl font-bold mb-6">Conhecimentos.</h1>
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
        <SiVisualstudiocode
          size={38}
          className="text-[#8CD1FF] hover:scale-150 duration-200 "
        />
      </div>
    </section>
  );
}
