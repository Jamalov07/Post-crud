import axios from "../../service/axios";

const getOnePost = {
  state: () => ({
    post: {},
    isLoading: true,
    errorMessage: "",
  }),
  mutations: {
    GET_POST(state, data) {
      state.post = data;
    },
    SET_LOADING(state, status) {
      state.isLoading = status;
    },
    SET_ERRORMESSAGE(state, message) {
      state.errormessage = message;
    },
  },

  actions: {
    async getPost({ commit }, id) {
      try {
        const post = await axios.get(`/posts/${id}`);
        console.log(post,"bu post");
        commit("GET_POST", post.data);
        commit("SET_LOADING", false);
      } catch (error) {
        commit("SET_ERRORMESSAGE", error.message);
        console.log(error);
      }
    },
  },
};

export default getOnePost;
