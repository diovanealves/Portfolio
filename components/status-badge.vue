<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
  <div
    class="inline-flex items-center gap-2 rounded-xl border border-blue-100 bg-blue-50 px-3 py-2 text-blue-700 transition-colors duration-200 hover:bg-blue-100 dark:border-zinc-900 dark:bg-zinc-950 dark:text-blue-400 dark:hover:bg-zinc-900"
  >
    <div class="h-2 w-2 animate-ping rounded-full bg-blue-600" />
    <h1>{{ t("hero.available") }}</h1>
  </div>
</template>
