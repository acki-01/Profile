<template>
  <div class="modal">
      <p>{{address}}</p>
  </div>
</template>

<script>
export default {
  name: "Modal",
  computed: {
    address() {
      return window.location.href;
    }
  }
};
</script>

<style>
.modal {
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  height: 40px;
  width: 300px;
  background: #fff;
  border-radius: 10px;
  -webkit-box-shadow: 1px 1px 10px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 1px 1px 10px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 1px 1px 10px 0px rgba(0, 0, 0, 0.75);
}
</style>
