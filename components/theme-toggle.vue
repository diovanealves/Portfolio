<script setup lang="ts">
import { ref } from "vue";

const isDarkMode = ref(false);

function toggleTheme() {
  isDarkMode.value = !isDarkMode.value;

  if (isDarkMode.value) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}
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
      :name="isDarkMode ? 'lucide:moon' : 'lucide:sun'"
    />
  </button>
</template>
