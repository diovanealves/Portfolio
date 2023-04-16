import { Typewriter } from "react-simple-typewriter";
import {
  GithubLogo,
  LinkedinLogo,
  TwitchLogo,
  TwitterLogo,
} from "@phosphor-icons/react";
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
            <LinkedinLogo className="w-7 h-7 md:w-10 md:h-10 hover:bg-[#8CD1FF] hover:p-2 hover:rounded-full hover:text-black" />
          </a>

          <a href="https://github.com/diovanealves" target="_blank">
            <GithubLogo className="w-7 h-7 md:w-10 md:h-10 hover:bg-[#8CD1FF] hover:p-2 hover:rounded-full hover:text-black" />
          </a>

          <a href="https://twitter.com/deluxyfps" target="_blank">
            <TwitterLogo className="w-7 h-7 md:w-10 md:h-10 hover:bg-[#8CD1FF] hover:p-2 hover:rounded-full hover:text-black" />
          </a>

          <a href="https://www.twitch.tv/deluxyfps" target="_blank">
            <TwitchLogo className="w-7 h-7 md:w-10 md:h-10 hover:bg-[#8CD1FF] hover:p-2 hover:rounded-full hover:text-black" />
          </a>
        </div>
      </div>
    </section>
  );
}
