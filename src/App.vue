<template>
  <header class="navbar navbar-expand navbar-light bg-light" role="navigation">
    <div class="container-fluid">
      <nav class="navbar-nav mr-auto overflow-auto">
        <router-link to="/" class="nav-link">Progress</router-link>
        <router-link to="/times" class="nav-link">Times</router-link>
        <router-link to="/goals" class="nav-link">Goals</router-link>
      </nav>
    </div>
  </header>
  <main class="container mb-5" style="max-width: 45rem">
    <router-view :key="$route.path"></router-view>
  </main>
</template>
