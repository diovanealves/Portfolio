import { AiOutlineArrowUp } from "react-icons/ai";

export function NavbarToTop() {
  return (
    <div className="fixed bottom-3 right-5 p-2 hover:bg-[#8CD1FF] rounded-full transition-colors">
      <a href="#Main">
        <AiOutlineArrowUp className="h-7 w-7 md:h-9 md:w-9" />
      </a>
    </div>
  );
}
