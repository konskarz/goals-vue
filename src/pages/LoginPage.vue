<script setup>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import apiClient from "stores/api.client";

const router = useRouter();
const route = useRoute();
const user = ref({
  username: "",
  password: "",
});
const disabled = ref(false);
function login() {
  disabled.value = true;
  if (!user.value.username || !user.value.password) return;
  apiClient.create("/api-token-auth/", user.value).then((data) => {
    apiClient.setAuthToken(data.token);
    router.push(route.query.next);
  });
}
</script>

<template>
  <div class="fullscreen bg-blue flex flex-center">
    <q-spinner v-if="disabled" color="primary" size="3em" />
    <q-card v-else style="width: 20rem">
      <q-toolbar class="bg-primary text-white">
        <q-avatar size="xs" square>
          <img src="/assets/favicon.ico" />
        </q-avatar>
        <q-toolbar-title>LifeTrackerBuddy</q-toolbar-title>
      </q-toolbar>
      <q-form @submit.prevent="login">
        <q-card-section>
          <q-input v-model="user.username" type="email" label="Email">
            <template #prepend>
              <q-icon name="mail_outline" />
            </template>
          </q-input>
          <q-input v-model="user.password" type="password" label="Password">
            <template #prepend>
              <q-icon name="lock_outline" />
            </template>
          </q-input>
        </q-card-section>
        <q-card-actions class="q-pa-md">
          <q-btn
            type="submit"
            class="bg-primary text-white full-width"
            label="Login"
          />
        </q-card-actions>
      </q-form>
    </q-card>
  </div>
</template>
