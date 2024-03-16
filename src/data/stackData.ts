import * as icon from "@/assets/stack/front-end/index";
export interface stackProps {
  [key: string]: {
    image: string;
    title: string;
  }[];
}

export const stackData: stackProps = {
  "Front-End": [
    {
      image: icon.html.src,
      title: "HTML",
    },
    { image: icon.css.src, title: "CSS" },
    { image: icon.javascript.src, title: "JavaScript" },
    { image: icon.typescript.src, title: "TypeScript" },
    { image: icon.react.src, title: "React" },
    { image: icon.framerMotion.src, title: "Framer Motion" },
    { image: icon.tailwindCss.src, title: "Tailwind CSS" },
    { image: icon.sass.src, title: "SASS" },
    { image: icon.radixUi.src, title: "Radix UI" },
    { image: icon.nextjs.src, title: "Next.js" },
    { image: icon.tanstackQuery.src, title: "Tanstack Query" },
    { image: icon.vitejs.src, title: "Vite.js" },
  ],
};
