import * as backEnd from "@/assets/stack/back-end/index";
import * as database from "@/assets/stack/database/index";
import * as frontEnd from "@/assets/stack/front-end/index";
import * as infra from "@/assets/stack/infra/index";
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
      image: frontEnd.html.src,
      title: "HTML",
      href: "https://developer.mozilla.org/pt-BR/docs/Web/HTML",
    },
    {
      image: frontEnd.css.src,
      title: "CSS",
      href: "https://developer.mozilla.org/pt-BR/docs/Web/CSS",
    },
    {
      image: frontEnd.javascript.src,
      title: "JavaScript",
      href: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript",
    },
    {
      image: frontEnd.typescript.src,
      title: "TypeScript",
      href: "https://www.typescriptlang.org/",
    },
    { image: frontEnd.react.src, title: "React", href: "https://react.dev/" },
    {
      image: frontEnd.framerMotion.src,
      title: "Framer Motion",
      href: "https://www.framer.com/motion/",
    },
    {
      image: frontEnd.tailwindCss.src,
      title: "Tailwind CSS",
      href: "https://tailwindcss.com/",
    },
    { image: frontEnd.sass.src, title: "SASS", href: "https://sass-lang.com/" },
    {
      image: frontEnd.radixUi.src,
      title: "Radix UI",
      href: "https://www.radix-ui.com/",
      classname: "dark:invert",
    },
    {
      image: frontEnd.nextjs.src,
      title: "Next.js",
      href: "https://nextjs.org/",
      classname: "dark:invert",
    },
    {
      image: frontEnd.tanstackQuery.src,
      title: "Tanstack Query",
      href: "https://tanstack.com/query/latest",
    },
    {
      image: frontEnd.vitejs.src,
      title: "Vite.js",
      href: "https://vitejs.dev/",
    },
  ],
  "Back-End": [
    {
      image: backEnd.nodeJS.src,
      title: "Node.js",
      href: "https://nodejs.org/en",
    },
    {
      image: backEnd.nestJS.src,
      title: "Nest.js",
      href: "https://nestjs.com/",
    },
    {
      image: backEnd.expressJS.src,
      title: "Express.js",
      href: "https://expressjs.com/",
      classname: "dark:invert",
    },
    {
      image: backEnd.fastify.src,
      title: "Fastify",
      href: "https://fastify.dev/",
      classname: "dark:invert",
    },
    {
      image: backEnd.prismaOrm.src,
      title: "Prisma ORM",
      href: "https://www.prisma.io/",
      classname: "dark:invert",
    },
    {
      image: backEnd.drizzleOrm.src,
      title: "Drizzle ORM",
      href: "https://orm.drizzle.team/",
    },
  ],
  Infra: [
    {
      image: infra.docker.src,
      title: "Docker",
      href: "https://www.docker.com/",
    },
    {
      image: infra.firebase.src,
      title: "Firebase",
      href: "https://firebase.google.com/?hl=pt-br",
    },
    {
      image: infra.supabase.src,
      title: "Supabase",
      href: "https://supabase.com/",
    },
    {
      image: infra.vercel.src,
      title: "Vercel",
      href: "https://vercel.com/",
      classname: "dark:invert",
    },
  ],
  Database: [
    {
      image: database.mongoDb.src,
      title: "MongoDB",
      href: "https://www.mongodb.com/pt-br",
    },
    {
      image: database.postgreesql.src,
      title: "PostgreSQL",
      href: "https://www.postgresql.org/",
    },
    {
      image: database.mysql.src,
      title: "MySQL",
      href: "https://www.mysql.com/",
    },
  ],
};
