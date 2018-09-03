<template>
  <header>
    <nav>
      <nuxt-link to="/" title="Главная" class="logo">
        <Logo/>
      </nuxt-link>
      <div class="menu">
        <span>Меню</span>
        <ul>
          <li v-for="(item, i) in items" :key="i">
            <nuxt-link :to="item.link" :title="item.title">
              {{item.title}}
            </nuxt-link>
          </li>
        </ul>

      </div>
      <div class="bar">
        <nuxt-link to="/search/" title="Поиск">
          <search />
        </nuxt-link>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
  import {
    Component,
    Vue
  } from "nuxt-property-decorator";

  import Search from '~/assets/svg/search.svg';
  import Logo from '~/assets/svg/logo.svg';

  @Component({
    components: {
      Search,
      Logo
    },
  })
  export default class Header extends Vue {

    items: object[] = [{
        title: "Курсы",
        link: "/ru/courses/"
      },
      {
        title: "Агенство",
        link: "/ru/agency/"
      },
      {
        title: "Приложение",
        link: "/ru/application/"
      },
      {
        title: "О нас",
        link: "/ru/about/"
      }
    ];
  }
</script>

<style lang="less" scoped>
  @import "~assets/themes/index.less";
  header {
    width: 100%;
    color: @c-font;
    background-color: fade(@c-dark, 80%);
    position: fixed;
    left: 0;
    top: 0;
    user-select: none;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    nav {
      height: @h-header;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 10px;
      .logo {
        width: 150px;
        min-width: 150px;
        height: @h-header;
        svg {
          height: @h-header;
        }
      }
      .menu {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        span {
          display: none;
          // display: flex;
          align-items: center;
          cursor: pointer;
          height: calc(~ '@{h-header} - 20px');
          &:hover {
            height: calc(~ '@{h-header} - 22px');
            border-bottom: 2px @c-accent solid;
          }
        }
        ul {
          display: flex;
          // display: none;
          li {
            margin: 10px;
            a {
              display: flex;
              align-items: center;
              color: @c-font;
              text-decoration: none;
              text-transform: uppercase;
              height: calc(~ '@{h-header} - 20px');
              transition: none;
              &:hover:not(.nuxt-link-active) {
                border-bottom: 2px @c-font solid;
                height: calc(~ '@{h-header} - 22px');
              }
              &.nuxt-link-active {
                border-bottom: 2px @c-accent solid;
                height: calc(~ '@{h-header} - 22px');
              }
            }
          }
        }
      }
      .bar {
        width: 150px;
        display: flex;
        justify-content: flex-end;
        svg {
          height: 30px;
          width: 30px;
          fill: @c-font;
          &:hover {
            fill: @c-accent;
          }
        }
      }
    }
  }
</style>
