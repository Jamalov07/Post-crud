<script setup>
import { useStore } from "vuex";
import { onMounted, onUpdated } from "vue";
import { useRoute } from "vue-router";
const store = useStore();
const route = useRoute();
console.log(store.state.getOnePost);
onMounted(() => {
  store.dispatch("getPost", route.params.id);
});

function deletePost(router) {
  store.dispatch("deletePost", route.params.id);
  store.dispatch("getPosts");
  router.replace({ path: "/posts" });
}
</script>
<template>
  <div class="container mx-auto p-5">
    <div
      class="p-4 flex justify-between shadow-md shadow-green-600 bg-slate-300"
    >
      <div class="flex flex-col gap-4 text-xl justify-around">
        <strong class="text-green-500"
          ><span class="text-black">ID : </span>
          {{ store.state.getOnePost.post.id }}</strong
        >
        <h1 class="text-green-500 text-3xl font-medium">
          <span class="text-black text-[20px] uppercase">TItle : </span>
          {{ store.state.getOnePost.post.title }}
        </h1>
        <p class="text-green-500 text-3xl font-medium">
          <span class="text-black text-[20px] uppercase">Body : </span>
          {{ store.state.getOnePost.post.body }}
        </p>
      </div>
      <div class="flex flex-col gap-4 justify-around">
        <button
          @click="$router.back()"
          class="text-[20px] font-medium text-white focus:ring-2 ring-green-400 rounded bg-green-700 px-3 py-2"
        >
          BACK
        </button>
        <RouterLink
          :to="`/posts/edit/${store.state.getOnePost.post.id}`"
          class="text-[20px] font-medium text-white focus:ring-2 ring-yellow-400 rounded bg-yellow-600 px-3 py-2"
        >
          UPDATE
        </RouterLink>
        <button
          @click="deletePost($router)"
          class="text-[20px] font-medium text-white focus:ring-2 ring-red-400 rounded bg-red-700 px-3 py-2"
        >
          DELETE
        </button>
      </div>
    </div>
  </div>
</template>

<style></style>
