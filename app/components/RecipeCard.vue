<script setup lang="ts">
import { type Recipe } from '~~/types/RecipeTypes';

defineProps<{
  recipe: Recipe;
}>();
</script>
<template>
  <div class="flex flex-col shadow rounded-md">
    <NuxtImg :src="recipe.image" sizes="xs:100vw sm:50vw lg:400px" densities="x1" format="webp" alt=""
      class="rounded-t-md" />
    <div class="flex flex-col py-6 px-4 flex-1">
      <p class="text-xl lg:text-2xl font-semibold mb-2">{{ recipe.name }}</p>
      <div class="font-normal w-full bg-white/80 flex gap-8 text-lg lg:text-xl mb-4 mt-auto">
        <div class="flex items-center gap-1">
          <Icon name="mdi:clock-time-eight-outline" style="color: #f79f1a" />
          <span>{{ recipe.prepTimeMinutes }}</span>
        </div>
        <div class="flex items-center gap-1">
          <Icon name="mdi:fire" style="color: #f79f1a" />
          <span>{{ recipe.caloriesPerServing }}</span>
        </div>
        <div class="flex items-center gap-1">
          <Icon name="mdi:star" style="color: #f79f1a" />
          <span>{{ recipe.rating }}({{ recipe.reviewCount }})</span>
        </div>
      </div>
      <BaseBtn :to="`/recipes/${recipe.id}`" :label="'View'" />
    </div>
  </div>
</template>