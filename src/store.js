import Vue from 'vue';
import Vuex from 'vuex';

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
      const value = state.liked ? state.likes++ : state.likes--;
      return value;
    },
    addFollower(state) {
      state.followed = !state.followed;
      const value = state.followed ? state.followers++ : state.followers--;
      return value;
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
