<script setup lang="ts">
import appCredentials from '~~/constant/appCredintials';
const { title } = appCredentials;

useHead({
  titleTemplate: `%s ${title}`,
  meta: [
    { name: 'keywords', content: 'dishlicious, dish, recipes, cooking, food, home cooking, easy recipes,DishLicious' },
    { name: 'google-site-verification', content: 'ePPm5orCDaKbmzGwisryY4GGZkcHfqYLREK0V56pz0I' }
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
