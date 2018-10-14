<template>
  <div class="comments">
      <p class="info" v-on:click='commentsToggleHandler'>Hide comments <span>({{amount}})</span></p>
      <div class="comments-section" v-if='commentsVisibility'>
        <Comment v-for="(comment, index) in comments" v-bind:text="comment.text" v-bind:key="index"/>
        <textarea @keydown.enter="addCommentHandler" placeholder="Add a comment"></textarea>
      </div>
  </div>
</template>

<script>
import Comment from "./Comment";

export default {
  name: "Comments",
  components: {
    Comment
  },
  computed: {
    commentsVisibility() {
      return this.$store.state.commentsVisibility;
    },
    comments() {
      return this.$store.state.comments;
    },
    amount() {
      return this.$store.state.comments.length;
    }
  },
  methods: {
    commentsToggleHandler() {
      return this.$store.commit("commentsToggleVisibility");
    },
    addCommentHandler(e) {
      console.log(e);
      e.stopPropagation();
      e.preventDefault();
      e.returnValue = false;
      const comment = {
        time: new Date().getTime(),
        photo: "",
        name: "",
        text: e.target.value
      };
      this.$store.commit("addComment", comment);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.comments {
  margin-top: 10px;
  width: 80%;
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 10px;
  -webkit-box-shadow: 1px 1px 10px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 1px 1px 10px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 1px 1px 10px 0px rgba(0, 0, 0, 0.75);
}

.info {
  margin-left: 15px;
  cursor: pointer;
  color: #ffa640;
  text-decoration: underline;
}
textarea {
  height: 25px;
  width: 90%;
  margin-top: 5px;
  margin-left: 15px;
  border: none;
  border-bottom: 1px solid #ddd;
  resize: none;
}
</style>
