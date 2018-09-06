<template>
  <nuxt-child />
</template>
<!--
  Template admin pages
-->
<script>
  export default {
    middleware: 'authenticated',
    layout: 'none',
    data() {
      return {

      }
    },
    computed: {
      user() {
        return this.$store.getters['User/Get']
      }
    }
  }
</script>
