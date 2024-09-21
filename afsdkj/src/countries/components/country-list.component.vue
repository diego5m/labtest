<script>
import CountryItem from "./country-item.component.vue";

export default {
  name: "country-list",
  components: { CountryItem },
  props: {
    countries: { type: Array, required: true }
  }
};
</script>

<template>
  <div class="card-container" aria-label="country list">
    <country-item v-for="country in countries" :key="country.name.common" :spanish="country"></country-item>
  </div>
</template>

<style scoped>
.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.country-item {
  flex: 1 1 200px;
  max-width: 200px;
}
</style>