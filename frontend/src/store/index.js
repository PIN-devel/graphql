import Vue from "vue";
import Vuex from "vuex";

import BACKEND from "@/api/backend";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: [],
  },
  getters: {},
  mutations: {
    SET_POSTS(state, posts) {
      state.posts = posts;
    },
  },
  actions: {
    fetchPosts({ commit }) {
      const query = {
        query: "query{posts{title,content}}",
      };
      axios
        .post(BACKEND.URL + BACKEND.ROUTES.graphql, query)
        .then((res) => commit("SET_POSTS", res.data.data.posts))
        .catch((err) => console.error(err));
    },
  },
  modules: {},
});
