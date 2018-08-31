<template>
  <div class="broklyn">
    <my-header />
    <nuxt class="page" />
  </div>
</template>

<script lang="ts">
  import {
    Component,
    Vue
  } from "nuxt-property-decorator"

  import MyHeader from "~/components/Header.vue";

  @Component({
    components: {
      MyHeader
    }
  })

  export default class Default extends Vue {

  }
</script>

<style lang="less">
  @import '~assets/themes/index.less';
  * {
    transition: all .3s;
  }

  svg {
    transition: none;
  }

  body {
    background-color: @c-bg;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  .page {
    section.develop {
      height: 25vh;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      h2 {
        color: @c-accent;
        font-size: 200%;
      }
    }
  }
</style>
