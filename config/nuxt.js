"use strict";
const resolve = require('path').resolve;
const settings = require("../resources/settings");
const nodeExternals = require('webpack-node-externals')


module.exports = {
  mode: 'universal',
  dev: (process.env.NODE_ENV !== 'production'),
  cache: true,
  router: {
    middleware: 'i18n'
  },
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
    // lang: "ru",
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
      // {
      //   hid: "og:locale",
      //   property: "og:locale",
      //   content: "ru_RU"
      // },
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
  css: [
    'vuetify/src/stylus/main.styl',
    "~assets/clear.min.css",
    "~assets/MaterialIcons/material-icons.css"
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
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
   ** Plugins to load before mounting the App
   */
  plugins: [
    "~/plugins/i18n",
    {
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
    {
      src: "~/plugins/localStorage.js",
      ssr: false
    },
    {
      src: '~/plugins/vue-editor',
      ssr: false
    },
    "~/plugins/vue-social-sharing",
    '~/plugins/vuetify',
    {
      src: '~/plugins/image-compressor',
      ssr: false
    },
    '~/components/'
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    baseURL: `http://${process.env.HOST || 'localhost'}:${process.env.PORT || 3000}/api`,
    browserBaseURL: '/api',
    proxy: true,
    debug: true
    // See https://github.com/nuxt-community/axios-module#options
  },
  proxy: {
    // Simple proxy
    '/api/': {
      target: `http://${process.env.HOST || 'localhost'}:${process.env.PORT || 3000}`,
      pathRewrite: {
        '^/api/': '/api/v1/'
      }
    },
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
    vendor: ["vue-notifications", "vue-carousel", 'image-compressor.js', 'vue2-editor'],
    extend(config, ctx) {
      const urlLoader = config.module.rules.find(
        rule => rule.loader === "url-loader"
      );
      if (ctx.isServer) {
        config.externals = [
          nodeExternals({
            whitelist: [/^vuetify/]
          })
        ]
      }
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
