<script setup lang="ts">
const { isDark, toggleTheme } = useTheme();
</script>

<template>
  <button
    class="inline-flex items-center justify-center rounded-md border-2 p-2 transition-all duration-300 ease-in-out hover:border-zinc-300 hover:bg-zinc-300/60 active:scale-95 dark:border-zinc-700 dark:hover:border-zinc-600 dark:hover:bg-zinc-800/60"
    aria-label="Alternar tema"
    type="button"
    @click="toggleTheme"
  >
    <Icon
      class="h-5 w-5 transition-colors"
      :name="isDark ? 'lucide:moon' : 'lucide:sun'"
    />
  </button>
</template>
