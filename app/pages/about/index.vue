<script setup lang="ts">
import appCredentials from '~~/constant/appCredintials';

const { title } = appCredentials;

const titleAbout = 'About Us';
const descriptionAbout = 'Learn more about FoodGasm — our mission, our passion for cooking, and how we help home cooks explore new recipes with confidence.'

useSeoMeta({
  title: titleAbout,
  description: descriptionAbout,
  ogTitle: titleAbout,
  ogDescription: descriptionAbout,
  ogImage: "/nuxt-course-hero.png",
  ogUrl: `http:localhost:3000`,
  twitterTitle: titleAbout,
  twitterDescription: descriptionAbout,
  twitterImage: "/nuxt-course-hero.png",
  twitterCard: "summary",
});

</script>
<template>
  <div class="max-w-3xl mx-auto px-4 py-12 text-center">
    <h1 class="text-4xl font-bold mb-6">About Us</h1>
    <p class="text-lg mb-4">
      Welcome to <strong>{{ title }}</strong> — your go-to destination for easy, delicious, and inspiring recipes from
      around the world.
    </p>

    <p class="text-lg mb-4">
      Our mission is to make cooking fun and accessible for everyone. Whether you're a beginner in the kitchen or an
      experienced home chef, our curated collection of recipes is designed to help you explore new flavors and cook with
      confidence.
    </p>

    <p class="text-lg mb-4">
      From quick weekday meals to weekend feasts and healthy dishes to indulgent desserts, we provide step-by-step
      guides, tips, and tricks to make every meal special.
    </p>

    <p class="text-lg">
      Thank you for being a part of our cooking community. 🍽️ <br />
      Stay hungry and keep exploring new recipes!
    </p>
  </div>
</template>
