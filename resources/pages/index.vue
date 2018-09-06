<template>

</template>

<script>
export default {
  fetch({ store, redirect }) {
    redirect(303, `/${ store.getters['Lang/lang'].locale || "ru"}/`);
  }
};
</script>
