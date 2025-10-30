<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
  <main
    class="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-slate-900 p-6 text-white md:p-12"
  >
    <div class="mx-auto w-11/12 max-w-5xl">
      <NuxtLink
        to="/"
        class="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-base font-semibold transition-colors duration-150 hover:bg-zinc-100"
      >
        <Icon name="lucide:arrow-left" class="text-lg" />
        {{ t("common") }}
      </NuxtLink>

      <h1 class="mb-8 mt-6 text-4xl font-bold">{{ $t("aboutMe.title") }}</h1>
      <div
        class="space-y-6 text-base font-medium leading-relaxed text-gray-300"
      >
        <p>
          {{ $t("aboutMe.paragraph1") }}
        </p>
        <p>
          {{ $t("aboutMe.paragraph2") }}
        </p>
        <p>
          {{ $t("aboutMe.paragraph3") }}
        </p>
        <p>
          {{ $t("aboutMe.paragraph4") }}
        </p>
        <p>
          {{ $t("aboutMe.paragraph5") }}
        </p>
      </div>
    </div>
  </main>
</template>
