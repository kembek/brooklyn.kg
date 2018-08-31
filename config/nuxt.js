"use strict";
const resolve = require('path').resolve;
const settings = require("../resources/settings");


module.exports = {
  mode: 'universal',

  srcDir: resolve(__dirname, '..', 'resources'),

  /*
   ** Headers of the page
   */
  manifest: {
    name: settings.name,
    short_name: settings.name,
    description: settings.description,
    theme_color: "#242323",
    background_color: "#242323",
    display: "standalone",
    orientation: "portrait",
    lang: "ru",
    start_url: "/"
  },
  head: {
    title: settings.main_title,
    titleTemplate: "%s | " + settings.name,
    htmlAttrs: {
      lang: "ru"
    },
    meta: [{
        charset: "utf-8"
      },
      {
        hid: "keywords",
        name: "keywords",
        content: settings.keywords
      },
      {
        hid: "description",
        name: "description",
        content: settings.description
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1, user-scalable=no"
      },
      {
        hid: "og:title",
        property: "og:title",
        content: settings.main_title
      },
      {
        hid: "og:description",
        property: "og:description",
        content: settings.description
      },
      {
        hid: "og:site_name",
        property: "og:site_name",
        content: settings.name
      },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://terminator.kg"
      },
      {
        hid: "og:locale",
        property: "og:locale",
        content: "ru_RU"
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "https://terminator.kg/og.png"
      },
      {
        hid: "og:image:width",
        property: "og:image:width",
        content: "968"
      },
      {
        hid: "og:image:height",
        property: "og:image:height",
        content: "504"
      }
    ],
    link: [{
      rel: 'shortcut icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#06A7FF'
  },

  /*
   ** Global CSS
   */
  css: ["~assets/clear.min.css"],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{
      src: "~/plugins/vue-carousel",
      ssr: false
    },
    {
      src: "~/plugins/vue-scroll-to",
      ssr: false
    },
    {
      src: "~/plugins/vue-notifications",
      ssr: false
    },
    {
      src: "~/plugins/vue-slider-component",
      ssr: false
    },
    // {
    //   src: "~/plugins/localStorage.js",
    //   ssr: false
    // },
    "~/plugins/vue-social-sharing"
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    "~/modules/typescript.js",
    "@nuxtjs/sitemap",
    "@nuxtjs/pwa",
    "@nuxtjs/font-awesome",
    // [
    //   "@nuxtjs/google-analytics",
    //   {
    //     id: "UA-"
    //   }
    // ],
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },
  workbox: {
    runtimeCaching: [{
      urlPattern: "https://brooklyn.kg/*",
      strategyOptions: {
        cacheName: "brooklyn.kg",
        cacheableResponse: {
          statuses: [0, 200]
        },
        cacheExpiration: {
          maxEntries: 20,
          maxAgeSeconds: 300
        }
      }
    }]
  },
  /*
   ** Build configuration
   */
  build: {
    // analyze: true,
    vendor: ["vue-notifications", "vue-carousel"],
    extend(config) {
      const urlLoader = config.module.rules.find(
        rule => rule.loader === "url-loader"
      );
      urlLoader.test = /\.(png|jpe?g|gif)$/;
      config.module.rules.push({
        test: /\.svg$/,
        loader: "vue-svg-loader",
        options: {
          svgo: {
            plugins: [{
                removeDoctype: true
              },
              {
                removeComments: true
              }
            ]
          }
        }
      });
    }
  }
}
