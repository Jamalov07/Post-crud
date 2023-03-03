<script setup>
import { useStore } from "vuex";
import { onMounted, onUpdated } from "vue";
import { useRoute } from "vue-router";
import { ref } from "vue";
const store = useStore();
const route = useRoute();
console.log(store.state.getOnePost);
onMounted(() => {
  store.dispatch("getPost", route.params.id);
});
let updatedTitle = ref(store.state.getOnePost.post.title).value;
let updatedBody = ref(store.state.getOnePost.post.body).value;
let updatedId = ref(store.state.getOnePost.post.id).value;

function saveAndReplaceRoute(router) {
  console.log(updatedBody, updatedId, updatedTitle);
  const newData = {
    id: updatedId,
    body: updatedBody,
    title: updatedTitle,
  };
  store.dispatch("updatePost", { id: route.params.id, data: newData });
  router.replace({ path: "/posts" });
}
</script>
<template>
  <div class="container mx-auto p-5">
    <div
      class="p-4 flex justify-between shadow-md shadow-green-600 bg-slate-300"
    >
      <div class="flex flex-col gap-4 text-xl justify-around">
        <div class="flex justify-between items-center">
          <span class="text-black">ID : </span>
          <input
            class="text-green-500 p-2 outline-none focus:ring-2 ring-green-500 duration-300 rounded ml-2"
            v-model="updatedId"
          />
        </div>
        <div class="flex justify-between items-center">
          <span class="text-black text-[20px] uppercase">TItle : </span>
          <input
            class="text-green-500 p-2 outline-none text-xl focus:ring-2 ring-green-500 duration-300 rounded ml-2"
            v-model="updatedTitle"
          />
        </div>
        <div class="flex justify-between items-center">
          <span class="text-black text-[20px] uppercase">Body : </span>
          <input
            class="text-green-500 p-2 outline-none text-xl focus:ring-2 ring-green-500 duration-300 rounded ml-2"
            v-model="updatedBody"
          />
        </div>
      </div>
      <div class="flex flex-col gap-4 justify-around">
        <button
          @click="$router.back()"
          class="text-[20px] font-medium text-white focus:ring-2 ring-red-400 rounded bg-red-700 px-3 py-2"
        >
          BACK
        </button>
        <button
          @click="saveAndReplaceRoute($router)"
          class="text-[20px] font-medium text-white focus:ring-2 ring-green-600 rounded bg-green-600 px-3 py-2"
        >
          SAVE
        </button>
      </div>
    </div>
  </div>
</template>

<style></style>
