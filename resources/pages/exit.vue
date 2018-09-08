<template>
  <v-layout>
  </v-layout>
</template>


<script>
  export default {
    layout: "none",
    fetch({
      app,
      store,
      redirect
    }) {
      return app.$axios
        .$delete("/auth/")
        .then(({status}) => {
          console.log(status)
          if (status === 200)
            return redirect(`/${store.getters["Lang/lang"].locale || "ru"}/login/`);
          else
            return redirect(`/${store.getters["Lang/lang"].locale || "ru"}/admin/`);
        })
        .catch(error => {
          console.log(error)
          return redirect(`/${store.getters["Lang/lang"].locale || "ru"}/login/`);
        });
    }
  };
</script>
