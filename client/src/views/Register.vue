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
              id="Inputname"
              placeholder="Enter name"
            />
          </div>
          <div class="mb-3">
            <label for="InputLastName" class="form-label">Last Name</label>
            <input
              type="lastname"
              class="form-control"
              id="InputLastName"
              placeholder="Enter last name"
            />
          </div>
          <div class="mb-3">
            <label for="InputUsername" class="form-label">Username</label>
            <input
              type="username"
              class="form-control"
              id="InputUsername"
              placeholder="Enter username"
            />
          </div>
          <div class="mb-3">
            <label for="InputPassword" class="form-label">Password</label>
            <input
              type="password"
              class="form-control"
              id="InputPassword"
              placeholder="Enter password"
            />
          </div>
          <br />
          <button type="submit" class="btn btn-primary">Register</button>
        </form>
      </div>
      <div class="col-md-3"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>