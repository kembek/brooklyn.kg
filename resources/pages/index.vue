<template>

</template>

<script>
export default {
  fetch({
    store,
    redirect
  }) {
    redirect(303, '/' + store.state.locale + '/')
  }
}
</script>
