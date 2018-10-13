<template>
  <div class="comment">
      <img src="../assets/face.jpg" alt="face" class="face">
      <div class="info">
          <h5 class="name">Mike Ross</h5>
          <p class="text">{{text}}</p>
      </div>
      <p class="share" v-on:click="toggleModalHandler"></p>
  </div>
</template>

<script>
console.log(this);
export default {
  name: "Comment",
  props: ["text"],
  methods: {
    toggleModalHandler() {
      return this.$store.commit("toggleModal");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.comment {
  display: flex;
  flex-direction: row;
  margin-top: 5px;
  margin-left: 15px;
  border-bottom: 1px solid #ddd;
}
.face {
  height: 40px;
  width: 40px;
  border-radius: 50%;
}

.name {
  font-size: 16px;
  margin-top: 10px;
}

.info {
  width: 70%;
  margin-left: 10px;
}
.text {
  font-size: 12px;
  color: #000;
}
.share {
  height: 16px;
  width: 16px;
  display: inline-block;
  margin: 0;
  cursor: pointer;
  background-image: url("../assets/share.svg");
  border: 1px solid #ddd;
}
</style>
