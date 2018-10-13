<template>
  <div class="profile">
      <div class="personal-info">
        <img class="face" src="../assets/face.jpg" alt="">
          <div class="data">
            <h4 class="name">Harvey Specter <p v-bind:class="[isLiked ? 'red-heart' : 'black-heart', 'heart']" v-on:click='likeClickHandler'></p></h4>
            <p class="address">New York, USA</p>
        </div>
      </div>
      <div class="status">
        <div>
          <span class="amount">{{likes}}</span>
          <span class="title">Likes</span>
        </div>
        <div>
          <span class="amount">{{followings}}</span>
          <span class="title">Following</span>
        </div>
        <div>
          <span class="amount">{{followers}}</span>
          <span class="title">Followers</span>
        </div>
        <div class="button-follow" v-on:click="followClickHandler">{{followLabel}}</div>
      </div>
      <div>

      </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
  data: function() {
    return {
      followLabel: "FOLLOW"
    };
  },
  computed: {
    likes() {
      return this.$store.state.likes;
    },
    followings() {
      return this.$store.state.followings;
    },
    followers() {
      return this.$store.state.followers;
    },
    isLiked() {
      return this.$store.state.liked;
    }
  },
  methods: {
    likeClickHandler() {
      return this.$store.commit("addLike");
    },
    followClickHandler() {
      this.followLabel = this.$store.state.followed ? "FOLLOW" : "UNFOLLOW";
      return this.$store.commit("addFollower");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.profile {
  display: flex;
  flex-direction: column;
  height: 220px;
  width: 80%;
  margin-top: -40px;
  background: #fff;
  border-radius: 10px;
  -webkit-box-shadow: 1px 1px 10px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 1px 1px 10px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 1px 1px 10px 0px rgba(0, 0, 0, 0.75);
}
.face {
  height: 70px;
  width: 70px;
  border-radius: 50%;
}

.data {
  margin-left: 20px;
}

.name {
  margin-bottom: 0px;
  color: #002c71;
  font-size: 16px;
}
.address {
  margin-top: 3px;
  color: #9bacc7;
  font-size: 12px;
}
.personal-info {
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  margin-left: 20px;
}
.heart {
  height: 16px;
  width: 16px;
  display: inline-block;
  margin: 0;
  cursor: pointer;
}

.red-heart {
  background-image: url("../assets/heart-red.svg");
}

.black-heart {
  background-image: url("../assets/heart-black.svg");
}

.status {
  display: flex;
  margin-top: 30px;
  flex-direction: row;
  justify-content: space-evenly;
}

.status div {
  padding: 0 15px;
}

.status div:first-child,
.status div:nth-child(2) {
  border-right: 1px solid #eee;
}

.amount,
.title {
  display: block;
}

.amount {
  font-size: 22px;
  font-weight: 600;
  color: #ffa640;
}
.title {
  font-size: 10px;
  color: #9bacc7;
}

.button-follow {
  width: 80px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  margin-top: 5px;
  padding: 30px 0;
  background: #ffa640;
  border-radius: 20px;
  color: #fff;
  cursor: pointer;
}
@media screen and (max-width: 475px) {
  .personal-info {
    flex-direction: column;
    align-items: center;
    margin: -20px 0 0 0;
  }
}
</style>
