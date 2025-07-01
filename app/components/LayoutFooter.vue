<script setup lang="ts">
import appCredentials from '~~/constant/appCredintials';

const { title } = appCredentials

</script>

<template>
  <footer class="bg-gray-900 text-gray-300 py-8 mt-12">
    <div class="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
      <!-- Left: Logo & Name -->
      <div class="text-center md:text-left">
        <h2 class="text-xl font-semibold text-white">{{ title }}</h2>
        <p class="text-sm">Bringing flavor to your kitchen since 2025.</p>
      </div>

      <!-- Middle: Navigation -->
      <nav class="flex space-x-4">
        <NuxtLink to="/" class="hover:underline">Home</NuxtLink>
        <NuxtLink to="/about" class="hover:underline">About</NuxtLink>
      </nav>

      <!-- Right: Social Links -->
      <div class="flex space-x-4">
        <a href="https://facebook.com" target="_blank" aria-label="Facebook" class="hover:text-white">
          <Icon name="mdi:facebook" style="color: #f79f1a" />
        </a>
        <a href="https://instagram.com" target="_blank" aria-label="Instagram" class="hover:text-white">
          <Icon name="mdi:instagram" style="color: #f79f1a" />
        </a>
        <a href="https://github.com" target="_blank" aria-label="GitHub" class="hover:text-white">
          <Icon name="mdi:github" style="color: #f79f1a" />
        </a>
      </div>
    </div>

    <!-- Bottom: Copyright -->
    <div class="text-center text-sm text-gray-500 mt-6">
      &copy; {{ new Date().getFullYear() }} {{ title }}. All rights reserved.
    </div>
  </footer>
</template>
