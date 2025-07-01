<script setup lang="ts">
import appCredentials from '~~/constant/appCredintials';

const { title } = appCredentials;

const navigations = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
]
</script>

<template>
  <header class="py-4 border-b">
    <nav class="flex container items-center">
      <NuxtLink to="/" class="flex gap-1 items-center">
        <NuxtImg src="/icon-green.png" sizes="xs:36px lg:56px" densities="x1" format="webp" />
        <span class="lg:text-3xl font-bold">{{ title }}</span>
      </NuxtLink>
      <ul class="flex gap-6 ml-auto lg:text-xl font-bold capitalize">
        <li v-for="nav in navigations" :key="nav.name">
          <NuxtLink :to="nav.path">{{ nav.name }}</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped></style>