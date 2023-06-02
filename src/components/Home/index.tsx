import { Typewriter } from "react-simple-typewriter";
import { BsGithub, BsLinkedin, BsTwitter, BsTwitch } from "react-icons/bs";

import { Navbar } from "../Navbar";

export function Home() {
  return (
    <section id="Main">
      <Navbar />
      <div
        className="h-screen relative flex flex-col justify-center items-center"
        data-aos="zoom-in"
      >
        <p className="text-4xl md:text-6xl">👋Olá, Eu sou</p>
        <h1 className="text-5xl md:text-7xl my-3 text-[#8CD1FF] font-bold">
          Diovane Alves
        </h1>
        <p className="text-2xl md:text-4xl">
          <Typewriter
            words={["Desenvolvedor Full Stack", "UI/UX Design"]}
            cursor
            cursorStyle=" /"
            cursorColor="#8CD1FF"
            typeSpeed={80}
            deleteSpeed={100}
          />
        </p>

        <div className="absolute bottom-0 flex gap-6  mb-5">
          <a href="https://www.linkedin.com/in/alvdiovane/" target="_blank">
            <BsLinkedin
              size={30}
              className="hover:text-[#8CD1FF] hover:scale-110 duration-150 "
            />
          </a>

          <a href="https://github.com/diovanealves" target="_blank">
            <BsGithub
              size={30}
              className="hover:text-[#8CD1FF] hover:scale-110 duration-150"
            />
          </a>

          <a href="https://twitter.com/deluxyfps" target="_blank">
            <BsTwitter
              size={30}
              className="hover:text-[#8CD1FF] hover:scale-110 duration-150 "
            />
          </a>

          <a href="https://www.twitch.tv/deluxyfps" target="_blank">
            <BsTwitch
              size={30}
              className="hover:text-[#8CD1FF] hover:scale-110 duration-150"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
