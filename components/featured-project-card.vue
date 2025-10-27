<script setup lang="ts">
const { t } = useI18n();

interface ProjectProps {
  image: string;
  link: string;
}

const props = withDefaults(defineProps<ProjectProps>(), {
  image:
    "https://github.com/diovanealves/DevMeet/raw/main/assets/preview.jpg#vitrinedev",
  link: "https://github.com/diovanealves/DevMeet",
});
</script>

<template>
  <BaseCard title="Projeto em Destaque" class="group flex h-full flex-col">
    <template #icon>
      <Icon
        name="lucide:rocket"
        class="text-2xl text-blue-500 dark:text-blue-400"
      />
    </template>

    <template #content>
      <div
        class="relative mt-4 flex-1 overflow-hidden rounded-lg transition-transform group-hover:scale-[1.02]"
      >
        <img
          :src="image"
          alt="Imagem do projeto em destaque"
          class="h-full w-full bg-[#8CD1FF] object-fill"
          width="600"
          height="400"
          sizes="(max-width: 600px) 100vw, 600px"
        />
        <NuxtLink class="absolute inset-0" to="/en/project" />
      </div>
    </template>
  </BaseCard>
</template>
