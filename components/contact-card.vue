<script setup lang="ts">
import BaseCard from "./base-card.vue";

const { t } = useI18n();
</script>

<template>
  <BaseCard title="" class="mt-4 w-full">
    <template #content>
      <div class="flex flex-col items-center justify-between gap-4 md:flex-row">
        <div class="flex flex-1 flex-col">
          <h3 class="mb-2 text-xl font-bold text-gray-900 dark:text-white">
            Vamos trabalhar juntos?
          </h3>
          <p class="text-base text-gray-600 dark:text-zinc-400">
            Estou disponível para projetos freelance e oportunidades full-time.
            Vamos criar algo incrível!
          </p>
        </div>

        <div
          class="group relative flex-shrink-0 transform rounded-xl bg-blue-600 px-6 py-3 text-center text-white shadow-lg shadow-blue-500/50 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
        >
          <NuxtLink
            class="flex items-center justify-center font-semibold"
            to="/algum-link-destino"
          >
            <span class="mr-1 whitespace-nowrap">Iniciar conversa</span>
            <Icon
              name="lucide:arrow-up-right"
              class="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
            />
          </NuxtLink>
        </div>
      </div>
    </template>
  </BaseCard>
</template>
