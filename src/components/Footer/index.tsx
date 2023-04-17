import { BsGithub, BsLinkedin, BsTwitter, BsTwitch } from "react-icons/bs";

export function Footer() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 mt-16 mb-7">
      <div className="flex gap-5">
        <a href="https://www.linkedin.com/in/alvdiovane/" target="_blank">
          <BsLinkedin
            size={28}
            className="hover:text-[#8CD1FF] hover:scale-110 duration-150 "
          />
        </a>

        <a href="https://github.com/diovanealves" target="_blank">
          <BsGithub
            size={28}
            className="hover:text-[#8CD1FF] hover:scale-110 duration-150"
          />
        </a>

        <a href="https://twitter.com/deluxyfps" target="_blank">
          <BsTwitter
            size={28}
            className="hover:text-[#8CD1FF] hover:scale-110 duration-150 "
          />
        </a>

        <a href="https://www.twitch.tv/deluxyfps" target="_blank">
          <BsTwitch
            size={28}
            className="hover:text-[#8CD1FF] hover:scale-110 duration-150"
          />
        </a>
      </div>
      <p>© 2023 Diovane Alves. All rights reserved.</p>
    </div>
  );
}
