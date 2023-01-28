import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { Typewriter } from "react-simple-typewriter";

import { Navbar } from "../../components/Navbar";

import LogoHome from "../../assets/Home.svg";

export function Home() {
  return (
    <div id="Home">
      <Navbar />
      <div className="flex flex-wrap mt-24 md:mt-10  items-center justify-center md:justify-evenly">
        <ul>
          <li className="text-2xl lg:text-5xl">👋 Saudações</li>
          <li className="text-4xl lg:text-6xl text-highlight font-bold py-1">
            Diovane Alves
          </li>
          <li className="text-1xl lg:text-3xl font-semibold italic">
            <Typewriter
              words={["Desenvolvedor Full Stack", "UI/UX Design"]}
              cursor
              cursorStyle=" /"
              cursorColor="#8CD1FF"
              typeSpeed={80}
              deleteSpeed={100}
            />
          </li>
          <li className="flex justify-center gap-4 mt-6">
            <a href="www.linkedin.com/in/alvdiovane" target="_blank">
              <BsLinkedin
                size={35}
                className="hover:text-highlight hover:scale-125 duration-200"
              />
            </a>
            <a href="https://github.com/diovanealves" target="_blank">
              <BsGithub
                size={35}
                className="hover:text-highlight hover:scale-125 duration-200"
              />
            </a>
            <a href="https://twitter.com/deluxyfps" target="_blank">
              <BsTwitter
                size={35}
                className="hover:text-highlight hover:scale-125 duration-200"
              />
            </a>
          </li>
        </ul>
        <img src={LogoHome} alt="" className="max-w-3xl w-4/5" />
      </div>
    </div>
  );
}
