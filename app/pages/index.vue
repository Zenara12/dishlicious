<script setup lang="ts">

import appCredentials from '~~/constant/appCredintials';
import { type RecipeResponse } from '~~/types/RecipeTypes';

const { title, description } = appCredentials;
const { data, error } = await useFetch<RecipeResponse>("https://dummyjson.com/recipes?limit=12")

useSeoMeta({
  description: description,
  ogTitle: title,
  ogDescription: description,
  ogImage: "/nuxt-course-hero.png",
  ogUrl: 'https://dishlicious.vercel.app/',
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: "/nuxt-course-hero.png",
  twitterCard: "summary",
});
</script>

<template>
  <main>
    <section class="bg-[#f1f1f1]">
      <div class="container flex flex-col lg:flex-row items-center py-20 gap-10">
        <div class="flex-1 order-2 lg:order-1 text-center lg:text-left">
          <h1 class="text-4xl lg:text-6xl font-extrabold mb-6 text-balance">
            Master the Kitchen with Ease: Unleash Your Inner Chef Today!
          </h1>
          <p class="text-xl lg:text-2xl mb-8 text-balance">
            Discover recipes helping you to find the easiest way to cook.
          </p>
          <button class="px-4 py-2 text-white self-start bg-dodgeroll-gold rounded-md text-lg cursor-pointer">
            Browse Dishes
          </button>
        </div>
        <div class="flex-1 order-1 lg:order-2">
          <NuxtImg src="/nuxt-course-hero.png" densities="x1" sizes="xs:100vw sm:667px" format="webp" />
        </div>
      </div>
    </section>
    <section class="py-20 container">
      <h2 class="text-3xl lg:text-5xl mb-2">Discover, Create, Share</h2>
      <p class="text-lg lg:text-xl mb-8">Check out our most popular dish!</p>
      <div v-if="!error" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
        <RecipeCard v-for="(recipe, index) in data?.recipes" :key="index" :recipe="recipe" />
      </div>
      <div v-else>
        <p class="text-red-500 text-lg">Error loading recipes: {{ error.message }}</p>
      </div>
    </section>
  </main>
</template>