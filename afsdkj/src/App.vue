<script>
import ToolbarContent from "./public/components/toolbar-content.component.vue";
import FooterContent from "./public/components/footer-content.component.vue";
import CountryList from "./countries/components/country-list.component.vue";
import { Spanish } from "./countries/model/spanish.entity.js";
import { CountryApiService } from "./countries/services/countries-api.services.js";

export default {
  name: "App",
  components: { FooterContent, ToolbarContent, CountryList },
  data() {
    return {
      drawerVisible: false,
      countries: [],
      errors: [],
      countryApi: new CountryApiService()
    };
  },
  methods: {
    getCountries() {
      // Fetch country data and populate the countries array
      this.countryApi.getCountry().then((response) => {
        this.countries = response.data.map(country => new Spanish(
            country.name,
            country.officialName,
            country.currency,
            country.capital,
            country.region,
            country.subregion,
            country.languages,
            country.area,
            country.population,
            country.flag,
            country.coatOfArms
        ));
      }).catch(error => {
        this.errors.push(error);
      });
    }
  },
  created() {
    this.getCountries();
  }
};
</script>

<template>
  <div>
    <toolbar-content></toolbar-content>
    <div>
      <country-list :countries="countries"></country-list>
    </div>
    <footer-content></footer-content>
  </div>
</template>

<style scoped>
</style>