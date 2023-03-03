<script setup>
import { RouterLink } from "vue-router";
import { ref } from "vue";
import navLinks from "../constants/navLinks";
</script>

<template>
  <header class="bg-blue-900">
    <div class="container mx-auto">
      <nav
        class="flex justify-between p-5 text-3xl text-white items-center h-20"
      >
        <h1>LOGO</h1>
        <ul class="flex w-1/4 justify-between items-center">
          <li v-for="link in navLinks" :key="link.id">
            <RouterLink :to="link.path">{{ link.title }}</RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.router-link-active {
  border-bottom: 1px solid greenyellow;
  color: greenyellow;
}
</style>
