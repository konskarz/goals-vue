<template>
  <q-layout view="hHh LpR fff">
    <q-page-container>
      <router-view :key="$route.path" />
    </q-page-container>
  </q-layout>
</template>
