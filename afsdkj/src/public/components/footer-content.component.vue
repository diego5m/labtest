<script>
export default {
  name: "footer-content"
}
</script>

<template>
  <div class="footer" aria-label="footer">
    <div class="grid bg-primary mt-4 p-4 align-content-start">
      <div class="col-12 ml-3 align-items-center justify-content-center">
        <p>{{ $t('footer.rights') }}</p>
      </div>
      <div class="col-12 ml-3 mt-3 align-items-center justify-content-center">
        <p>{{ $t('footer.author') }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.footer {
  background: darkcyan;
  border-radius: 10px;
}
</style>