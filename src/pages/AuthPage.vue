<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import apiClient from "@/stores/api.client";

const router = useRouter();
const pageItem = ref({
  email: "",
  password: "",
});
const mainEndpoint = "/api-auth/login";
function signIn() {
  apiClient.create(mainEndpoint, pageItem.value).then((data) => {
    localStorage.setItem("authToken", data.auth_token);
    localStorage.setItem("username", pageItem.value.email);
    router.push("/");
  });
}
</script>

<template>
  <form
    style="max-width: 20rem"
    class="text-center w-100 pb-5 m-auto"
    @submit.prevent="signIn"
  >
    <h1 class="h3 fw-normal mb-3">Please sign in</h1>
    <div class="form-floating mb-3">
      <input
        id="floatingInput"
        v-model="pageItem.email"
        type="email"
        class="form-control"
        placeholder="Email"
      />
      <label for="floatingInput">Email</label>
    </div>
    <div class="form-floating mb-3">
      <input
        id="floatingPassword"
        v-model="pageItem.password"
        type="password"
        class="form-control"
        placeholder="Password"
      />
      <label for="floatingPassword">Password</label>
    </div>
    <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
  </form>
</template>
