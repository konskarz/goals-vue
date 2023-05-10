<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useUserStore } from '../stores/UserStore'

const router = useRouter()
const route = useRoute()
const store = useUserStore()
if (store.loggedIn) router.push(route.query.next ? route.query.next : '/')

const user = ref({
  username: '',
  password: ''
})
const disabled = ref(false)
function login() {
  if (!user.value.username || !user.value.password) return
  disabled.value = true
  store.login(user.value).then((data) => {
    if (data && data.token) {
      store.setToken(data.token)
      router.push(route.query.next)
    } else {
      disabled.value = false
    }
  })
}
function required(val) {
  return !!val || 'Field is required'
}
/* function isEmail(val) {
  const emailPattern =
    /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
  return emailPattern.test(val) || "Please enter a valid email";
} */
</script>

<template>
  <div class="fullscreen bg-blue flex flex-center">
    <q-spinner v-if="disabled" color="primary" size="3em" />
    <q-card v-else style="width: 20rem">
      <q-toolbar class="bg-primary text-white">
        <q-avatar size="xs" square>
          <img src="icons/favicon.ico" />
        </q-avatar>
        <q-toolbar-title>LifeTrackerBuddy</q-toolbar-title>
      </q-toolbar>
      <q-form @submit.prevent="login">
        <q-card-section>
          <q-input v-model="user.username" label="Username" :rules="[required]">
            <template #prepend>
              <q-icon name="person_outline" />
            </template>
          </q-input>
          <q-input v-model="user.password" type="password" label="Password" :rules="[required]">
            <template #prepend>
              <q-icon name="lock_outline" />
            </template>
          </q-input>
        </q-card-section>
        <q-card-section class="q-pt-none">
          <div class="text-caption text-grey text-center">demo/demofirst daily data refresh</div>
        </q-card-section>
        <q-card-actions class="q-pa-md">
          <q-btn type="submit" class="bg-primary text-white full-width" label="Login" />
        </q-card-actions>
      </q-form>
    </q-card>
  </div>
</template>
