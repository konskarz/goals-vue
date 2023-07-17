<script setup />
<template>
  <q-page>
    <div class="page" :class="$q.platform.is.desktop ? 'q-mt-md' : 'q-pt-md'">
      <q-toolbar class="q-pl-lg">
        <slot name="toolbar" />
      </q-toolbar>
      <slot />
    </div>
  </q-page>
</template>
<style scoped>
.page {
  max-width: 583px;
}
@media (max-width: 1023.98px) {
  .page {
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
