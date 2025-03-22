<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
  <header class="flex items-start justify-between pt-12">
    <div>
      <StatusBadge />
      <h1
        class="mb-3 mt-10 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-6xl font-bold text-transparent dark:from-blue-300 dark:to-blue-500"
      >
        Diovane Alves
      </h1>
      <p class="max-w-2xl text-xl text-gray-700 dark:text-gray-300">
        {{ t("hero.description") }}
      </p>

      <a
        href="/CurriculoDiovane.pdf"
        download
        rel="noopener"
        class="mt-4 inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-6 py-2 text-gray-800 transition-colors duration-300 hover:bg-gray-100 dark:border-zinc-800 dark:bg-zinc-900/80 dark:text-zinc-200 dark:hover:bg-zinc-800"
      >
        <Icon
          name="lucide:download"
          class="h-5 w-5 text-blue-600 dark:text-blue-400"
        />
        {{ t("hero.curriculum") }}
      </a>
    </div>

    <ThemeToggle />
  </header>
</template>
