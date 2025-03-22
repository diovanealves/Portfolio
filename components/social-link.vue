<script lang="ts" setup>
defineProps({
  to: String,
  icon: {
    type: String,
    default: "",
  },
  title: String,
  username: String,
});
</script>

<template>
  <NuxtLink
    :to="to"
    target="_blank"
    rel="noopener noreferrer"
    class="group/social flex items-center gap-3 rounded-lg bg-gray-100 p-3 transition-all duration-300 hover:bg-gray-200 dark:bg-zinc-900/80 dark:hover:bg-zinc-800"
  >
    <div
      class="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 transition-colors group-hover:bg-blue-100 dark:bg-zinc-800 dark:group-hover:bg-blue-900/50"
    >
      <Icon :name="icon" class="h-5 w-5 text-blue-700 dark:text-blue-400" />
    </div>

    <div>
      <h1 class="font-medium text-gray-900 dark:text-white">{{ title }}</h1>
      <p class="text-sm text-gray-600 dark:text-zinc-400">{{ username }}</p>
    </div>

    <Icon
      name="lucide:arrow-up-right"
      class="ml-auto h-4 w-4 text-blue-600 opacity-0 transition-opacity group-hover/social:opacity-100 dark:text-blue-400"
    />
  </NuxtLink>
</template>
