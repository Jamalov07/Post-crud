import axios from "../../service/axios";

const getAllPosts = {
  state: () => ({
    posts: [],
    isLoading: true,
    errorMessage: "",
  }),
  mutations: {
    GET_ALL_POSTS(state, data) {
      state.posts = data;
    },
    SET_LOADING(state, status) {
      state.isLoading = status;
    },
    SET_ERRORMESSAGE(state, message) {
      state.errormessage = message;
    },
  },

  actions: {
    async getPosts({ commit }) {
      try {
        const posts = await axios.get("/posts");
        console.log(posts);
        commit("GET_ALL_POSTS", posts.data);
        commit("SET_LOADING", false);
      } catch (error) {
        commit("SET_ERRORMESSAGE", error.message);
        console.log(error);
      }
    },
  },
};

export default getAllPosts;
