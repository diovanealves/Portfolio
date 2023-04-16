import { Typewriter } from "react-simple-typewriter";
import { BsGithub, BsLinkedin, BsTwitter, BsTwitch } from "react-icons/bs";

import { Navbar } from "../Navbar";

export function Home() {
  return (
    <section id="Inicio">
      <Navbar />
      <div className="h-screen relative flex flex-col justify-center items-center">
        <p className="text-4xl">👋Saudações</p>
        <h1 className="text-5xl text-[#8CD1FF] font-bold">Diovane Alves</h1>
        <p className="text-2xl">
          <Typewriter
            words={["Desenvolvedor Full Stack", "UI/UX Design"]}
            cursor
            cursorStyle=" /"
            cursorColor="#8CD1FF"
            typeSpeed={80}
            deleteSpeed={100}
          />
        </p>

        <div className="absolute bottom-0 flex gap-4  mb-5">
          <a href="https://www.linkedin.com/in/alvdiovane/" target="_blank">
            <BsLinkedin className="w-7 h-7 md:w-10 md:h-10 hover:text-[#8CD1FF] hover:scale-110 duration-150 " />
          </a>

          <a href="https://github.com/diovanealves" target="_blank">
            <BsGithub className="w-7 h-7 md:w-10 md:h-10 hover:text-[#8CD1FF] hover:scale-110 duration-150" />
          </a>

          <a href="https://twitter.com/deluxyfps" target="_blank">
            <BsTwitter className="w-7 h-7 md:w-10 md:h-10 hover:text-[#8CD1FF] hover:scale-110 duration-150 " />
          </a>

          <a href="https://www.twitch.tv/deluxyfps" target="_blank">
            <BsTwitch className="w-7 h-7 md:w-10 md:h-10 hover:text-[#8CD1FF] hover:scale-110 duration-150" />
          </a>
        </div>
      </div>
    </section>
  );
}
