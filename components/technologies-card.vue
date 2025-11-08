<script setup lang="ts">
import { technologies } from "@/data/technologies";

const { t, locale } = useI18n();
const hoveredTech = ref<string | null>(null);
</script>

<template>
  <BaseCard :title="t('technologies.title')" to="/stack">
    <template #icon>
      <Icon
        name="lucide:code-xml"
        class="text-2xl text-blue-500 dark:text-blue-400"
      />
    </template>

    <template #content class="">
      <div class="grid grid-cols-3 gap-6">
        <div
          v-for="tech in technologies.slice(0, 9)"
          :key="tech.name"
          class="flex flex-col items-center justify-center rounded-xl bg-gray-100 p-4 transition-all hover:scale-110 hover:bg-gray-200 dark:bg-zinc-800/50 dark:hover:bg-zinc-700/5"
          @mouseenter="hoveredTech = tech.name"
          @mouseleave="hoveredTech = null"
        >
          <div
            class="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white dark:bg-zinc-800"
          >
            <img
              :src="tech.icon"
              :alt="tech.name"
              class="h-8 w-8 object-contain"
            />
          </div>

          <span class="text-sm font-medium text-gray-700 dark:text-gray-300">
            {{ tech.name }}</span
          >
        </div>
      </div>
      <div class="relative h-24 overflow-hidden rounded-lg">
        <Transition
          enter-active-class="transition-all duration-300 ease-out"
          enter-from-class="opacity-0 translate-y-3"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition-all duration-300 ease-in"
          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 translate-y-3"
          mode="out-in"
        >
          <p
            v-if="hoveredTech"
            :key="hoveredTech"
            class="absolute inset-0 flex items-center justify-center bg-gray-100 px-2 text-sm text-gray-800 dark:bg-zinc-800/50 dark:text-zinc-300"
          >
            {{
              technologies.find((tech) => tech.name === hoveredTech)
                ?.description[locale]
            }}
          </p>

          <p
            v-else
            key="empty"
            class="absolute inset-0 flex items-center justify-center opacity-0"
          >
            <!-- vazio, mantém espaço -->
          </p>
        </Transition>
      </div>
    </template>
  </BaseCard>
</template>
