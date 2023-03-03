<script setup>
import Home from "./views/Home.vue";
import Header from "./components/Header.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <div>
    <Header />
    <RouterView />
  </div>
</template>

<style></style>
