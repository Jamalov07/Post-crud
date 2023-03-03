import { createStore } from "vuex";
import createNewPost from "../modules/posts/createPost";
import getAllPosts from "../modules/posts/getAllPosts";
import getOnePost from "../modules/posts/getOnePost";
import updateOnePost from "../modules/posts/updatePost";
import deletePost from "../modules/posts/deletePost";
const store = createStore({
  modules: {
    createNewPost,
    getAllPosts,
    getOnePost,
    updateOnePost,
    deletePost,
  },
});

export default store;
