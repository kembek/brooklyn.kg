<template>
  <div class="container">
    <section class="main">
      <Logo />
      <h1>{{$t('description')}}</h1>
      <p v-scroll-to="'.develop'" class="scroll">
        {{$t('scroll')}}
        <span><i class="fa fa-angle-down"/></span>
      </p>
    </section>
    <section class="develop">
      <h2>Сайт находится на стадии разработки...</h2>
    </section>
  </div>
</template>

<script lang="ts">
  import {
    Component,
    Vue
  } from "nuxt-property-decorator";

  import Logo from "~/assets/svg/logo.svg";

  @Component({
    components: {
      Logo
    }
  })
  export default class MainPage extends Vue {}
</script>

<style lang="less">
  @import "~assets/themes/index.less";
  .page {
    &.container {
      height: 100vh;
      section.main {
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        p {}
        .scroll {
          color: @c-font;
          font-size: 20px;
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          position: absolute;
          bottom: 0;
          span {
            font-size: 50px;
            overflow: hidden;
            i {
              animation: to-down 2s infinite ease-in-out;
            }
          }
          &:hover {
            transform: scale(1.1)
          }
        }
        svg {
          width: 50vw;
        }
        h1 {
          font-size: 200%;
          text-align: center;
          color: @c-font;
        }
      }
    }
  }

  @keyframes to-down {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(10px);
    }
    100% {
      transform: translateY(0);
    }
  }
</style>
