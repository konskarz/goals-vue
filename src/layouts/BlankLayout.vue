<template>
  <main class="w-100 vh-100 d-flex">
    <router-view :key="$route.path"></router-view>
  </main>
</template>
