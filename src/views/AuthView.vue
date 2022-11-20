<script>
import { apiService } from '@/api.service.js'
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signIn() {
      apiService('/token/login/', 'POST', this.$data)
        .then(data => {
          localStorage.setItem('authToken', data.auth_token)
          localStorage.setItem('username', this.username)
          this.$router.push('/')
        })
    }
  }
}
</script>
<template>
  <div class="w-100 vh-100 d-flex">
    <form @submit.prevent="signIn"
      style="max-width: 20rem;"
      class="text-center w-100 pb-5 m-auto">
      <h1 class="h3 fw-normal mb-3">Please sign in</h1>
      <div class="form-floating mb-3">
        <input v-model="email"
          type="email"
          class="form-control"
          id="floatingInput"
          placeholder="name@example.com">
        <label for="floatingInput">Email address</label>
      </div>
      <div class="form-floating mb-3">
        <input v-model="password"
          type="password"
          class="form-control"
          id="floatingPassword"
          placeholder="Password">
        <label for="floatingPassword">Password</label>
      </div>
      <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
    </form>
  </div>
</template>