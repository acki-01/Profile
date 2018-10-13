<template>
  <div id="app">
    <div class="background">
      <Profile/>
      <Comments/>
      <Modal v-if="showModal"/>
    </div>
  </div>
</template>

<script>
import Profile from "./components/Profile";
import Comments from "./components/Comments";
import Modal from "./components/Modal";

export default {
  name: "App",
  components: {
    Profile,
    Comments,
    Modal
  },
  computed: {
    showModal() {
      return this.$store.state.showModal;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  justify-content: center;
  background: #000;
  color: #2c3e50;
  margin-top: 80px;
}
.background {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 700px;
  width: 500px;
  background: #fff;
  border-top: 80px solid #002c71;
  border-radius: 10px;
}
</style>
