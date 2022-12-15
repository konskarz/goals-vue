<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import apiClient from "stores/api.client";

const router = useRouter();
const user = ref({
  email: "",
  password: "",
});
function signIn() {
  apiClient.create("/api-auth/login", user.value).then((data) => {
    localStorage.setItem("authToken", data.auth_token);
    localStorage.setItem("username", user.value.email);
    router.push("/");
  });
}
</script>

<template>
  <q-page class="flex flex-center" padding>
    <q-card style="width: 20rem">
      <q-card-section>
        <h1 class="text-h6">Please sign in</h1>
        <q-form @submit.prevent="signIn">
          <q-input v-model="user.email" type="email" label="Email">
            <template #prepend>
              <q-icon name="mail_outline" />
            </template>
          </q-input>
          <q-input v-model="user.password" type="password" label="Password">
            <template #prepend>
              <q-icon name="lock_outline" />
            </template>
          </q-input>
        </q-form>
      </q-card-section>
      <q-card-actions class="q-pa-md">
        <q-btn no-caps class="full-width" label="Sign In" />
      </q-card-actions>
    </q-card>
  </q-page>
</template>
