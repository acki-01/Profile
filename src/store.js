import Vue from 'vue';
import Vuex from 'vuex';
import { stat } from 'fs';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    likes: 121,
    followings: 723,
    followers: 4433,
    liked: false,
    followed: false,
    commentsVisibility: true,
    comments: [],
    showModal: false,
  },
  mutations: {
    addLike(state) {
      state.liked = !state.liked;
      return state.liked ? state.likes++ : state.likes--;
    },
    addFollower(state) {
      state.followed = !state.followed;
      return state.followed ? state.followers++ : state.followers--;
    },
    commentsToggleVisibility(state) {
      state.commentsVisibility = !state.commentsVisibility;
    },
    addComment(state, comment) {
      const temp = state.comments;
      temp.push(comment);
      return temp;
    },
    toggleModal(state) {
      state.showModal = !state.showModal;
    },
  },
});

export default store;
