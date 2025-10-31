<script setup lang="ts">
import { technologies } from "@/data/technologies";

const { t, locale } = useI18n();
</script>

<template>
  <main
    class="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-slate-900 p-6 text-white md:p-12"
  >
    <div class="mx-auto w-11/12 max-w-5xl">
      <NuxtLink
        to="/"
        class="mb-6 inline-flex items-center gap-2 rounded-lg px-3 py-2 text-base font-semibold transition-colors duration-150 hover:bg-zinc-100"
      >
        <Icon name="lucide:arrow-left" class="text-lg" />
        {{ $t("common") }}
      </NuxtLink>

      <h1
        class="mb-2 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-5xl font-bold text-transparent"
      >
        {{ $t("stack.title") }}
      </h1>
      <p class="max-w-4xl text-xl font-semibold text-zinc-400">
        {{ $t("stack.description") }}
      </p>

      <div class="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
        <div
          v-for="tech in technologies"
          :key="tech.name"
          class="group rounded-lg border border-zinc-800 bg-zinc-900/90 p-6 backdrop-blur-sm transition-all duration-150 hover:scale-110 hover:shadow-lg"
        >
          <div class="flex flex-col items-center text-center">
            <div
              class="mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-900/30 to-blue-800/30 transition-transform group-hover:scale-110"
            >
              <img
                :src="tech.icon"
                :alt="tech.name"
                width="40"
                height="40"
                class="h-10 w-10 object-contain transition-transform duration-200 group-hover:scale-125"
              />
            </div>

            <h3 class="mb-2 text-xl font-bold text-white">
              {{ tech.name }}
            </h3>
            <p>{{ tech.description[locale] }}</p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
