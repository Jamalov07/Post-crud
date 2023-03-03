import axios from "../../service/axios";

const createNewPost = {
  state: () => ({
    newPost: {},
    isLoading: true,
    errorMessage: "",
  }),
  mutations: {
    NEW_POST(state, data) {
      state.newPost = data;
    },
    SET_LOADING(state, status) {
      state.isLoading = status;
    },
    SET_ERRORMESSAGE(state, message) {
      state.errormessage = message;
    },
  },

  actions: {
    async createPost({ commit }, postBody) {
      try {
        const newPost = await axios.post("/posts", postBody);
        console.log(newPost);
        commit("NEW_POST", newPost.data);
        commit("SET_LOADING", false);
      } catch (error) {
        commit("SET_ERRORMESSAGE", error.message);
        console.log(error);
      }
    },
  },
};

export default createNewPost;
