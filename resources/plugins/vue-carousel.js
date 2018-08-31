import Vue from 'vue'

if (process.BROWSER_BUILD) {
  const VueCarousel = require('vue-carousel')
  Vue.use(VueCarousel)
}
