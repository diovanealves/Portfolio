<script setup lang="ts">
import { BaseCard } from "#components";
const { t } = useI18n();
</script>

<template>
  <div>
    <BaseCard to="/about-me" :title="t('about.title')">
      <template #icon>
        <Icon
          name="lucide:sparkles"
          class="text-2xl text-blue-500 dark:text-blue-400"
        />
      </template>

      <template #content>
        <p class="leading-relaxed text-zinc-600 dark:text-zinc-300">
          {{ t("about.description.first") }}
        </p>
        <p class="leading-relaxed text-zinc-600 dark:text-zinc-300">
          {{ t("about.description.second") }}
        </p>
        <p class="leading-relaxed text-zinc-600 dark:text-zinc-300">
          {{ t("about.description.third") }}
        </p>
      </template>
    </BaseCard>
  </div>
</template>
