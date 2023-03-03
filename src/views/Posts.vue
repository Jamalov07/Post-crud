<script setup>
import { onMounted, onUpdated } from "vue";
import { useStore } from "vuex";
import { ref } from "vue";
const store = useStore();

let newTitle = ref("").value;
let newBody = ref("").value;

onMounted(() => {
  console.log(store);
  store.dispatch("getPosts");
});
onUpdated(() => {
  console.log("updated");
});

function sendPostBody() {
  const post = {
    id: Date.now(),
    title: newTitle,
    body: newBody,
  };
  store.dispatch("createPost", post);
  newTitle = "";
  newBody = "";
  store.dispatch("getPosts");
}
</script>

<template>
  <div class="container mx-auto p-5 my-4 bg-lime-400 rounded">
    <h1 class="text-4xl font-light text-cyan-600 text-center uppercase">
      Posts
    </h1>
    <div class="flex justify-between items-center p-3">
      <div
        class="p-2 flex flex-col gap-2 text-center w-2/3 bg-purple-300 mt-4 rounded border-2 border-green-600"
      >
        <input
          type="text"
          class="p-2 outline-none"
          placeholder="Input post title"
          v-model="newTitle"
        />
        <input
          type="text"
          class="p-2 outline-none"
          placeholder="Input post body"
          v-model="newBody"
        />
      </div>
      <button
        @click="sendPostBody"
        class="rounded-md text-white ring-sky-400 focus:ring-2 bg-sky-600 text-xl font-semibold py-2 px-3"
      >
        ADD POST
      </button>
    </div>

    <RouterLink
      v-if="store.state.getAllPosts.posts.length"
      :to="`posts/${post.id}`"
      @click="store.dispatch('getPost', post.id)"
      v-for="post in store.state.getAllPosts.posts"
      :key="post.id"
      class="p-2 flex flex-col gap-2 text-center bg-purple-800 mt-4 rounded border-2 border-red-600"
    >
      <h1 class="text-white font-medium text-2xl p-2 bg-cyan-800">
        {{ post.title }}
      </h1>
      <h2 class="text-amber-800 font-light text-2xl p-2 bg-emerald-500">
        {{ post.body }}
      </h2>
    </RouterLink>
    <div v-else="store.state.getAllPosts.posts">
      <h1 class="text-red-600 font-medium text-3xl uppercase text-center">
        the post list is empty
      </h1>
    </div>
  </div>
</template>

<style></style>
