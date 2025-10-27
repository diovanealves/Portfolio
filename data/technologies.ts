import * as backEnd from "@/public/stack/back-end/index";
import * as databases from "@/public/stack/database/index";
import * as frontEnd from "@/public/stack/front-end/index";
import * as infra from "@/public/stack/infra/index";


interface TechnologyDescription {
  "pt-br": string;
  en: string;
}

interface Technology {
  name: string;
  icon: any;
  description: TechnologyDescription;
}

export const technologies: Technology[] = [
  {
    name: "TypeScript",
    icon: frontEnd.typescript,
    description: {
      "pt-br":
        "Superset tipado do JavaScript que compila para JavaScript puro. Oferece tipagem estática opcional, resultando em melhoria na detecção precoce de erros e ferramentas de IDE superiores.",
      en: "A typed superset of JavaScript that compiles to plain JavaScript. It provides optional static typing, leading to earlier error detection and superior IDE tooling.",
    },
  },
  {
    name: "React",
    icon: frontEnd.react,
    description: {
      "pt-br":
        "Biblioteca JavaScript de ponta para construir interfaces de usuário (UI) interativas e reativas de maneira eficiente, baseada em componentes.",
      en: "Leading JavaScript library for efficiently building interactive and reactive user interfaces (UI), based on a component model.",
    },
  },
  {
    name: "Next.js",
    icon: frontEnd.nextjs,
    description: {
      "pt-br":
        "Framework React para produção que facilita a criação de aplicações web de alto desempenho, oferecendo recursos como renderização híbrida, roteamento robusto e otimizações.",
      en: "A production-ready React framework that simplifies building high-performance web applications, featuring hybrid rendering, robust routing, and built-in optimizations.",
    },
  },
  {
    name: "ViteJS",
    icon: frontEnd.vitejs,
    description: {
      "pt-br":
        "Ferramenta de construção e bundler ultrarrápida para projetos web modernos. Garante tempos de inicialização instantâneos e um recarregamento de módulo a quente (HMR) incrivelmente rápido.",
      en: "Ultra-fast build tool and bundler for modern web projects. It ensures instantaneous startup times and incredibly fast Hot Module Replacement (HMR).",
    },
  },
  {
    name: "Tailwind",
    icon: frontEnd.tailwindCss,
    description: {
      "pt-br":
        "Framework CSS utility-first que permite a criação rápida de designs personalizados e complexos diretamente no seu HTML, promovendo o desenvolvimento ágil.",
      en: "A utility-first CSS framework that allows for the rapid creation of complex, custom designs directly within your HTML, promoting agile development.",
    },
  },
  {
    name: "Radix UI",
    icon: frontEnd.radixUi,
    description: {
      "pt-br":
        "Conjunto de componentes de UI de baixo nível para React, altamente acessíveis e completamente não opinativos em termos de estilo, servindo como base para sistemas de design.",
      en: "A set of low-level UI components for React, designed to be highly accessible and completely unopinionated on styling, serving as a foundation for design systems.",
    },
  },
  {
    name: "Tanstack Query",
    icon: frontEnd.tanstackQuery,
    description: {
      "pt-br":
        "Uma biblioteca poderosa para gerenciar, buscar, armazenar em cache e sincronizar dados assíncronos (estado do servidor) em aplicações React, simplificando drasticamente o código.",
      en: "A powerful library for managing, fetching, caching, and synchronizing asynchronous data (server state) in React applications, significantly simplifying code.",
    },
  },
  {
    name: "Node.js",
    icon: backEnd.nodeJS,
    description: {
      "pt-br":
        "Ambiente de execução JavaScript assíncrono e orientado a eventos, construído sobre o motor V8 do Chrome, ideal para criar aplicações de rede escaláveis e de alta concorrência.",
      en: "An asynchronous, event-driven JavaScript runtime environment, built on Chrome's V8 engine, ideal for creating scalable and high-concurrency network applications.",
    },
  },
  {
    name: "NestJS",
    icon: backEnd.nestJS,
    description: {
      "pt-br":
        "Framework Node.js progressivo para construir backends eficientes e escaláveis. Utiliza TypeScript e adota padrões de design robustos, como a arquitetura modular.",
      en: "A progressive Node.js framework for building efficient and scalable backends. It leverages TypeScript and adopts robust design patterns, such as modular architecture.",
    },
  },
  {
    name: "Express.js",
    icon: backEnd.expressJS,
    description: {
      "pt-br":
        "Framework web minimalista e flexível para Node.js, amplamente utilizado para construir APIs robustas e aplicações web e móveis com foco em velocidade e simplicidade.",
      en: "A minimalist and flexible web framework for Node.js, widely used for building robust APIs and web/mobile applications with a focus on speed and simplicity.",
    },
  },
  {
    name: "Fastify",
    icon: backEnd.fastify,
    description: {
      "pt-br":
        "Framework web de alto desempenho para Node.js, projetado para ser altamente eficiente, rápido e extensível. É uma das opções mais velozes para construir APIs.",
      en: "A high-performance web framework for Node.js, engineered to be highly efficient, fast, and extensible. It is one of the fastest options for building APIs.",
    },
  },
  {
    name: "Prisma ORM",
    icon: backEnd.prismaOrm,
    description: {
      "pt-br":
        "Ferramenta ORM (Mapeamento Objeto-Relacional) moderna para Node.js e TypeScript. Garante tipagem segura de ponta a ponta e torna as consultas ao banco de dados intuitivas.",
      en: "A modern ORM (Object-Relational Mapping) tool for Node.js and TypeScript. It ensures end-to-end type safety and makes database queries intuitive and easy to write.",
    },
  },
  {
    name: "Drizzle ORM",
    icon: backEnd.drizzleOrm,
    description: {
      "pt-br":
        "ORM leve e minimalista para TypeScript e Node.js. Destaca-se por seu foco em simplicidade, performance superior e compatibilidade com vários bancos de dados.",
      en: "A lightweight and minimalistic ORM for TypeScript and Node.js. It is characterized by its focus on simplicity, superior performance, and multi-database compatibility.",
    },
  },
  {
    name: "GraphQL",
    icon: backEnd.graphQL,
    description: {
      "pt-br":
        "Linguagem de consulta e tempo de execução para APIs. Permite que os clientes solicitem exatamente os dados de que precisam, evitando over-fetching e melhorando a eficiência da comunicação.",
      en: "A query language and runtime for APIs. It allows clients to request exactly the data they need, preventing over-fetching and improving communication efficiency.",
    },
  },
  {
    name: "Docker",
    icon: infra.docker,
    description: {
      "pt-br":
        "Plataforma líder em containerização, essencial para desenvolver, enviar e executar aplicações em ambientes isolados, garantindo consistência total entre desenvolvimento, teste e produção.",
      en: "The leading containerization platform, essential for developing, shipping, and running applications in isolated environments, ensuring full consistency across development, testing, and production.",
    },
  },
  {
    name: "Cloudflare",
    icon: infra.cloudflare,
    description: {
      "pt-br":
        "Plataforma de serviços em nuvem abrangente que oferece uma rede global de entrega de conteúdo (CDN), segurança, DNS e serviços serverless (Workers).",
      en: "A comprehensive cloud services platform offering a global Content Delivery Network (CDN), security, DNS, and serverless services (Workers).",
    },
  },
  {
    name: "Supabase",
    icon: infra.supabase,
    description: {
      "pt-br":
        "Plataforma Backend-as-a-Service (BaaS) de código aberto que fornece um banco de dados PostgreSQL real-time, autenticação, armazenamento de arquivos e funções de edge.",
      en: "An open-source Backend-as-a-Service (BaaS) platform that provides a real-time PostgreSQL database, authentication, file storage, and edge functions.",
    },
  },
  {
    name: "PostgreSQL",
    icon: databases.postgreesql,
    description: {
      "pt-br":
        "Sistema de gerenciamento de banco de dados relacional (SGBDR) open-source avançado. É altamente respeitado por sua robustez, extensibilidade, conformidade com SQL e recursos transacionais.",
      en: "An advanced, open-source Relational Database Management System (RDBMS). It is highly regarded for its robustness, extensibility, SQL compliance, and transactional features.",
    },
  },
  {
    name: "MySQL",
    icon: databases.mysql,
    description: {
      "pt-br":
        "Sistema de gerenciamento de banco de dados relacional amplamente adotado e maduro. Conhecido por sua eficiência, alta disponibilidade e adequação para aplicações web de grande escala.",
      en: "A widely adopted and mature Relational Database Management System. Known for its efficiency, high availability, and suitability for large-scale web applications.",
    },
  },
  {
    name: "MongoDB",
    icon: databases.mongoDb,
    description: {
      "pt-br":
        "Banco de dados NoSQL orientado a documentos flexível. Sua arquitetura permite escalabilidade horizontal e um modelo de dados dinâmico, ideal para aplicações com requisitos de dados em rápida mudança.",
      en: "A flexible NoSQL document-oriented database. Its architecture allows for horizontal scalability and a dynamic data model, ideal for applications with rapidly changing data requirements.",
    },
  },
];
