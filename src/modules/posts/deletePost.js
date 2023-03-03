import axios from "../../service/axios";

const deletePost = {
  state: () => ({
    deletedPost: null,
    isLoading: true,
    errorMessage: "",
  }),
  mutations: {
    DELETED_POST(state, data) {
      state.deletedPost = data;
    },
    SET_LOADING(state, status) {
      state.isLoading = status;
    },
    SET_ERRORMESSAGE(state, message) {
      state.errormessage = message;
    },
  },

  actions: {
    async deletePost({ commit }, id) {
      try {
        const deletedPost = await axios.delete(`/posts/${id}`);
        console.log(deletedPost);
        commit("DELETED_POST", deletedPost.data);
        commit("SET_LOADING", false);
      } catch (error) {
        commit("SET_ERRORMESSAGE", error.message);
        console.log(error);
      }
    },
  },
};

export default deletePost;
