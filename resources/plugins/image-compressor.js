import Vue from "vue";
import ImageCompressor from 'image-compressor.js'

const imageCompressor = {
  install(Vue) {
    Vue.prototype.$ImageCompressor = new ImageCompressor()
  }
};

Vue.use(imageCompressor);

export default ({ app }) => {
  app.ImageCompressor = imageCompressor
}
