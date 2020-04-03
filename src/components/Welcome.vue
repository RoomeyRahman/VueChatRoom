<template>
  <div class="welcome container">
    <div class="card">
      <div class="card-content center-align">
        <h2 class="teal-text">Welcome</h2>
        <form @submit.prevent="enterChat">
          <label for="name">Your Name: </label>
          <input type="text" name="name" v-model="name">
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
            name: ""
        };
    },
    method: {
        enterChat: async function () {
            console.log(this.name);
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .welcome{
    max-width: 500px;
    margin-top: 100px;
  }
  .welcome h2{
    font-size: 3em;
    font-family: "Comic Sans MS";
  }
  .welcome button{
    margin: 30px auto;
  }

</style>
