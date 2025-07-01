<script setup lang="ts">
defineProps<{
  navigate?: string;
  label?: string
}>()
</script>
<template>
  <NuxtLink :to="navigate" class=" px-4 py-2 text-white self-start bg-dodgeroll-gold rounded-md text-base lg:text-lg
        cursor-pointer">
    <slot>{{ label }}</slot>
  </NuxtLink>
</template>
