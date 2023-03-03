import axios from "../../service/axios";

const updateOnePost = {
  state: () => ({
    updatedPost: null,
    isLoading: true,
    errorMessage: "",
  }),
  mutations: {
    UPDATED_POST(state, data) {
      state.updatedPost = data;
    },
    SET_LOADING(state, status) {
      state.isLoading = status;
    },
    SET_ERRORMESSAGE(state, message) {
      state.errormessage = message;
    },
  },

  actions: {
    async updatePost({ commit }, data) {
      try {
        const updatedPost = await axios.put(`/posts/${data.id}`, data.data);
        console.log(updatedPost);
        commit("UPDATED_POST", updatedPost.data);
        commit("SET_LOADING", false);
      } catch (error) {
        commit("SET_ERRORMESSAGE", error.message);
        console.log(error);
      }
    },
  },
};

export default updateOnePost;
