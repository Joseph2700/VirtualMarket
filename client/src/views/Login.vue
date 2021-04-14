<template>
  <div class="container">
    <h1>Login to VirtualMarket</h1>
    <br />
    <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-6">
        <form>
          <div class="mb-3">
            <label for="Inputusername" class="form-label">Username</label>
            <input
              type="username"
              class="form-control"
              id="exampleInputEmail1"
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
          <button type="submit" class="btn btn-primary">Login</button>
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