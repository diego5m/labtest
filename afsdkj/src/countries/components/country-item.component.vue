<script>
import { Spanish } from "../model/spanish.entity.js";

export default {
  name: "country-item",
  props: {
    spanish: { type: Spanish, required: true }
  }
};
</script>

<template>
  <pv-card style="margin: 20px" aria-label="Country card">
    <template #title>{{ spanish.name.common }}</template>
    <template #subtitle>{{ spanish.officialName }}</template>
    <template #content>
      <p>{{ $t('card.capital') }}: {{ spanish.capital }}</p>
      <p>{{ $t('card.region') }}: {{ spanish.region }}</p>
      <p>{{ $t('card.subregion') }}: {{ spanish.subregion }}</p>
      <p>{{ $t('card.languages') }}: {{ spanish.languages }}</p>
      <p>{{ $t('card.area') }}: {{ spanish.area }}</p>
      <p>{{ $t('card.population') }}: {{ spanish.population }}</p>
      <p>{{ $t('card.currency.name') }}: {{ spanish.currency.name }}</p>
      <p>{{ $t('card.currency.symbol') }}: {{ spanish.currency.symbol }}</p>
      <img :src="spanish.flag.png" alt="Flag" style="max-width: 300px"/>
      <img :src="spanish.coatOfArms.png" alt="Coat of Arms" style="max-width: 300px"/>
    </template>
  </pv-card>
</template>

<style scoped>
</style>