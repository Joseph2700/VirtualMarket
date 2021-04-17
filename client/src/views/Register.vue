<template>
  <div class="container">
    <h1>Register to VirtualMarket</h1>
    <br />
    <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-6">
        <form>
          <div class="mb-3">
            <label for="Inputname" class="form-label">Name</label>
            <input
              type="name"
              class="form-control"
              id="name"
              v-model="name"
              placeholder="Enter name"
            />
          </div>
          <div class="mb-3">
            <label for="InputLastName" class="form-label">Last Name</label>
            <input
              type="lastname"
              class="form-control"
              id="lastname"
              v-model="lastname"
              placeholder="Enter last name"
            />
          </div>
          <div class="mb-3">
            <label for="InputUsername" class="form-label">Username</label>
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
          <br />
          <router-link class="btn btn-outline-primary" to="/login">Register</router-link>
        </form>
      </div>
      <div class="col-md-3"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "register",
  data() {
    return {
      name: "",
      lastname: "",
      username: "",
      password: "",
    };
  },
  methods: {
    register: function () {
      console.log("name: " + this.name);
      console.log("lastname: " + this.lastname);
      console.log("username: " + this.username);
      console.log("password: " + this.password);
    },
  },
};
</script>

<style scoped>
</style>