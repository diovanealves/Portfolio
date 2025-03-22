<script setup lang="ts">
const { locale } = useI18n();

useHead({
  title: "Diovane Alves",
  htmlAttrs: {
    lang: locale.value,
  },
  meta: [
    {
      name: "description",
      content:
        "Desenvolvedor Full Stack apaixonado por transformar ideias em experiências digitais memoráveis. Especializado em soluções web de alta performance.",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
    {
      hid: "robots",
      name: "robots",
      content: "index, follow",
    },
  ],
});
</script>

<template>
  <main
    class="min-h-screen bg-gray-50 px-4 transition-all duration-300 dark:bg-black dark:text-zinc-100"
  >
    <div class="mx-auto w-11/12 max-w-5xl">
      <Header />

      <div class="mt-10">
        <div class="grid h-96 grid-cols-1 gap-3 lg:grid-cols-[70%,30%]">
          <AboutMe />
          <SocialCard />
        </div>
      </div>
    </div>
  </main>
</template>
