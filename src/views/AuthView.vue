<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { apiService } from "@/common/api.service.js";

const router = useRouter();
const endpoint = "/token/login/";
const user = ref({
  email: "",
  password: "",
});
function signIn() {
  apiService(endpoint, "POST", user.value).then((data) => {
    localStorage.setItem("authToken", data.auth_token);
    localStorage.setItem("username", user.value.email);
    router.push("/");
  });
}
</script>

<template>
  <div class="w-100 vh-100 d-flex">
    <form
      style="max-width: 20rem"
      class="text-center w-100 pb-5 m-auto"
      @submit.prevent="signIn"
    >
      <h1 class="h3 fw-normal mb-3">Please sign in</h1>
      <div class="form-floating mb-3">
        <input
          id="floatingInput"
          v-model="user.email"
          type="email"
          class="form-control"
          placeholder="name@example.com"
        />
        <label for="floatingInput">Email address</label>
      </div>
      <div class="form-floating mb-3">
        <input
          id="floatingPassword"
          v-model="user.password"
          type="password"
          class="form-control"
          placeholder="Password"
        />
        <label for="floatingPassword">Password</label>
      </div>
      <button class="w-100 btn btn-lg btn-primary" type="submit">
        Sign in
      </button>
    </form>
  </div>
</template>
