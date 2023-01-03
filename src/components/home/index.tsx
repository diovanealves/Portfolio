import { Typewriter } from "react-simple-typewriter";
import { BsLinkedin, BsGithub, BsTwitter } from "react-icons/bs";

import LogoHome from "../../assets/Home.svg";

export default function Home() {
  return (
    <div className="h-screen flex flex-wrap items-center justify-center md:justify-evenly">
      <ul className="flex flex-col">
        <span className="text-2xl lg:text-5xl">👋 Saudações</span>
        <span className="text-4xl lg:text-6xl text-[#8CD1FF] font-bold py-1">
          Diovane Alves
        </span>
        <span className="text-1xl lg:text-3xl font-semibold italic">
          <Typewriter
            words={["Desenvolvedor Full Stack", "UI/UX Design"]}
            cursor
            cursorStyle="/"
            cursorColor="#8CD1FF"
            typeSpeed={80}
            deleteSpeed={100}
          />
        </span>
        <li className="flex justify-center gap-4 mt-6">
          <a href="www.linkedin.com/in/alvdiovane" target="_blank">
            <BsLinkedin
              size={35}
              className="hover:text-[#8CD1FF] hover:scale-125 duration-200"
            />
          </a>
          <a href="https://github.com/diovanealves" target="_blank">
            <BsGithub
              size={35}
              className="hover:text-[#8CD1FF] hover:scale-125 duration-200"
            />
          </a>
          <a href="https://twitter.com/deluxyfps" target="_blank">
            <BsTwitter
              size={35}
              className="hover:text-[#8CD1FF] hover:scale-125 duration-200"
            />
          </a>
        </li>
      </ul>
      <img src={LogoHome} className="max-w-3xl w-4/5" />
    </div>
  );
}
