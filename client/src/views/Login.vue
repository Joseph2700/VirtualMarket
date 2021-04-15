<template>
  <div class="container">
    <h1>Login to VirtualMarket</h1>
    <br />
    <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-6">      
          <div class="mb-3">
            <label for="Inputusername" class="form-label">Username</label>
            <input
              type="username"
              class="form-control"
              id="username"
              v-model="username"
              placeholder="Enter username"
            />
          </div>
          <div class="mb-3">
            <label for="InputPassword" class="form-label">Password</label>
            <input
              type="password"
              class="form-control"
              id="password"
              v-model="password"
              placeholder="Enter password"
            />
          </div>
          <button @click="login" class="btn btn-primary">Login</button>    
      </div>
      <div class="col-md-3"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login: function () {
      console.log("Username: " + this.username);
      console.log("Password: " + this.password);
    },
  },
};
</script>

<style scoped>
</style>