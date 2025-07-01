<script setup lang="ts">
import appCredentials from '~~/constant/appCredintials';
const { title, description } = appCredentials;

useHead({
  titleTemplate: `%s ${title}`,
  meta: [
    { name: 'keywords', content: '%s dish, recipes, cooking, food, home cooking, easy recipes' },
  ]
})


</script>

<template>

  <div class="font-Montserrat">

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

  </div>
</template>
