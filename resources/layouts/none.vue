<template>
<v-app dark>
    <nuxt />
</v-app>
</template>

<style lang="less">
/* Change Autocomplete styles in Chrome*/
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
  -webkit-text-fill-color: white;
  transition: background-color 5000s ease-in-out 0s;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    margin-bottom: 5px;
}
</style>
