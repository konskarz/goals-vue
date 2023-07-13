<template>
  <q-page>
    <div class="q-mt-md container">
      <q-toolbar class="q-pl-lg">
        <slot name="toolbar" />
      </q-toolbar>
      <slot />
    </div>
  </q-page>
</template>
<style scoped>
.container {
  max-width: 600px;
}
@media (max-width: 1023.98px) {
  .container {
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
