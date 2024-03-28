import * as backEnd from "@/assets/stack/back-end/index";
import * as database from "@/assets/stack/database/index";
import * as frontEnd from "@/assets/stack/front-end/index";
import * as infra from "@/assets/stack/infra/index";
import type { stackProps } from "@/types/stack.interface";


export const stackData: stackProps[] = [
  {
    image: frontEnd.javascript.src,
    title: "JavaScript",
    href: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript",
    loading: "eager",
  },
  {
    image: frontEnd.typescript.src,
    title: "TypeScript",
    href: "https://www.typescriptlang.org/",
    loading: "eager",
  },
  {
    image: frontEnd.react.src,
    title: "React",
    href: "https://react.dev/",
    loading: "eager",
  },
  {
    image: frontEnd.tailwindCss.src,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com/",
    loading: "eager",
  },
  {
    image: frontEnd.radixUi.src,
    title: "Radix UI",
    href: "https://www.radix-ui.com/",
    classname: "dark:invert",
    loading: "eager",
  },
  {
    image: frontEnd.nextjs.src,
    title: "Next.js",
    href: "https://nextjs.org/",
    classname: "dark:invert",
    loading: "eager",
  },
  {
    image: frontEnd.tanstackQuery.src,
    title: "Tanstack Query",
    href: "https://tanstack.com/query/latest",
    loading: "eager",
  },
  {
    image: frontEnd.vitejs.src,
    title: "Vite.js",
    href: "https://vitejs.dev/",
    loading: "eager",
  },

  {
    image: backEnd.nodeJS.src,
    title: "Node.js",
    href: "https://nodejs.org/en",
    loading: "eager",
  },
  {
    image: backEnd.nestJS.src,
    title: "Nest.js",
    href: "https://nestjs.com/",
    loading: "eager",
  },
  {
    image: backEnd.expressJS.src,
    title: "Express.js",
    href: "https://expressjs.com/",
    classname: "dark:invert",
    loading: "eager",
  },
  {
    image: backEnd.fastify.src,
    title: "Fastify",
    href: "https://fastify.dev/",
    classname: "dark:invert",
    loading: "eager",
  },
  {
    image: backEnd.prismaOrm.src,
    title: "Prisma ORM",
    href: "https://www.prisma.io/",
    classname: "dark:invert",
    loading: "lazy",
  },
  {
    image: backEnd.drizzleOrm.src,
    title: "Drizzle ORM",
    href: "https://orm.drizzle.team/",
    loading: "lazy",
  },

  {
    image: infra.docker.src,
    title: "Docker",
    href: "https://www.docker.com/",
    loading: "lazy",
  },
  {
    image: infra.supabase.src,
    title: "Supabase",
    href: "https://supabase.com/",
    loading: "lazy",
  },
  {
    image: database.mongoDb.src,
    title: "MongoDB",
    href: "https://www.mongodb.com/pt-br",
    loading: "lazy",
  },
  {
    image: database.postgreesql.src,
    title: "PostgreSQL",
    href: "https://www.postgresql.org/",
    loading: "lazy",
  },
];
