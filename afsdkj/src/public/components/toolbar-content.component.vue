<script>

import LanguageSwitcher from "./language-switcher.component.vue";

export default {
  name: "toolbar-content",
  components: {LanguageSwitcher},
}
</script>

<template>
  <pv-toolbar aria-label="toolbar">
    <template #start>
      <span>{{ $t('toolbar.title') }}</span>
    </template>
    <template #end>
      <language-switcher></language-switcher>
    </template>
  </pv-toolbar>
</template>

<style scoped>

</style>