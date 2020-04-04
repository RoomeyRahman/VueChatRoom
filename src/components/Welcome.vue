<template>
  <div class="welcome container">
    <div class="card">
      <div class="card-content center-align">
        <h2 class="teal-text">Welcome</h2>
        <form @submit.prevent="enterChat">
          <label for="userName">Your Name: </label>
          <input type="text" name="userName" v-model="userName">
          <p class="red-text" v-if="feedback">{{ feedback }}</p>
          <button class="btn teal">Enter ChatRoom</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "Welcome",
    data () {
        return {
            userName: null,
            feedback: null
        }
    },
    methods: {
        enterChat: function () {
            if (this.userName) {
                this.$router.push({ name: "Chat", params: { name: this.userName } });
            } else {
                this.feedback = "Please enter your name to join chatroom";
            }
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .welcome{
    max-width: 500px;
    margin-top: 30px;
  }
  .welcome h2{
    font-size: 3em;
    font-family: "Comic Sans MS";
  }
  .welcome button{
    margin: 30px auto;
  }

</style>
