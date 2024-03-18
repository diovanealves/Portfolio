import * as icon from "@/assets/stack/front-end/index";
export interface stackProps {
  [key: string]: {
    image: string;
    title: string;
    href: string;
    classname?: string;
  }[];
}

export const stackData: stackProps = {
  "Front-End": [
    {
      image: icon.html.src,
      title: "HTML",
      href: "https://developer.mozilla.org/pt-BR/docs/Web/HTML",
    },
    {
      image: icon.css.src,
      title: "CSS",
      href: "https://developer.mozilla.org/pt-BR/docs/Web/CSS",
    },
    {
      image: icon.javascript.src,
      title: "JavaScript",
      href: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript",
    },
    {
      image: icon.typescript.src,
      title: "TypeScript",
      href: "https://www.typescriptlang.org/",
    },
    { image: icon.react.src, title: "React", href: "https://react.dev/" },
    {
      image: icon.framerMotion.src,
      title: "Framer Motion",
      href: "https://www.framer.com/motion/",
    },
    {
      image: icon.tailwindCss.src,
      title: "Tailwind CSS",
      href: "https://tailwindcss.com/",
    },
    { image: icon.sass.src, title: "SASS", href: "https://sass-lang.com/" },
    {
      image: icon.radixUi.src,
      title: "Radix UI",
      href: "https://www.radix-ui.com/",
      classname: "dark:invert",
    },
    {
      image: icon.nextjs.src,
      title: "Next.js",
      href: "https://nextjs.org/",
      classname: "dark:invert",
    },
    {
      image: icon.tanstackQuery.src,
      title: "Tanstack Query",
      href: "https://tanstack.com/query/latest",
    },
    { image: icon.vitejs.src, title: "Vite.js", href: "https://vitejs.dev/" },
  ],
};
