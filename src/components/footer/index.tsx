export default function Footer() {
  return (
    <div className="border-t-2 border-[#052131] p-6">
      <ul className="flex flex-col items-center justify-between gap-5 md:flex-row ">
        <li>
          <span className="text-base">Copyright © Diovane Alves 2022</span>
        </li>
        <li>
          <a href="https://storyset.com" target="_blank">
            <span className="text-base">Ilustrações por StorySet</span>
          </a>
        </li>
      </ul>
    </div>
  );
}
