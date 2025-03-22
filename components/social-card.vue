<script setup lang="ts">
import { socialLinks } from "~/data/social-links";

const { t } = useI18n();
</script>

<template>
  <BaseCard :title="t('social.title')">
    <template #icon
      ><Icon
        name="lucide:external-link"
        class="text-2xl text-blue-500 dark:text-blue-400"
    /></template>

    <template #content>
      <div class="space-y-2">
        <SocialLink
          v-for="(link, index) in socialLinks"
          :key="index"
          :to="link.to"
          :icon="link.icon"
          :title="link.title"
          :username="link.username"
        />
      </div>
    </template>
  </BaseCard>
</template>
