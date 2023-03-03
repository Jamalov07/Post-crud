import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Posts from "../views/Posts.vue";
import OnePost from "../views/OnePost.vue";
import UpdatePost from "../views/UpdatePost.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/posts",
      name: "posts",
      component: Posts,
      children: [],
    },
    {
      path: "/posts/:id",
      name: "onepost",
      component: OnePost,
    },
    {
      path: "/posts/edit/:id",
      name: "updatepost",
      component: UpdatePost,
    },
  ],
});

export default router;
