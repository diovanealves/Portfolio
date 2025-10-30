<script setup lang="ts">
import { NuxtLink } from "#components";

const props = defineProps<{ to?: string; title: string }>();
</script>

<template>
  <component
    :is="to ? NuxtLink : 'div'"
    :to="to"
    :aria-label="title"
    role="link"
  >
    <div
      class="group relative z-0 block h-full overflow-hidden rounded-lg border bg-gradient-to-b transition-all duration-300 backdrop:blur-md hover:shadow-lg dark:border-zinc-800 dark:from-zinc-950 dark:to-zinc-900"
      :class="{ 'cursor-pointer': to }"
    >
      <div
        class="bg-grid-blue-500/[0.02] dark:bg-grid-white-500/[0.02] absolute inset-0 [mask-image:linear-gradient(0deg,transparent,black)]"
      />

      <div class="relative p-4">
        <div
          class="group mb-3 flex items-center justify-between gap-4"
          v-if="title || $slots.icon"
        >
          <div class="relative flex items-center gap-2">
            <div
              class="absolute inset-0 rounded-full bg-blue-100 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-90 dark:bg-blue-500/20"
            />
            <slot name="icon" />

            <h2
              v-if="title"
              class="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-xl font-bold text-transparent dark:from-blue-400 dark:to-blue-300"
            >
              {{ title }}
            </h2>
          </div>
          <Icon
            v-if="to"
            name="lucide:move-up-right"
            class="my-auto flex transform items-center text-blue-500 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
            size="20"
          />
        </div>

        <div class="space-y-3">
          <slot name="content" />
        </div>
      </div>
      <div
        class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/10 to-transparent"
      />
    </div>
  </component>
</template>
