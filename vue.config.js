// https://cli.vuejs.org/guide/css.html#passing-options-to-pre-processor-loaders
module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `
          @import "@/styles/_variables.scss";
          @import "@/styles/_mediaqueries.scss";
          @import "@/styles/_fonts.scss";
          @import "@/styles/_mixins";
        `
      }
    }
  },

  devServer: {
    watchOptions: {
      clientLogLevel: 'warning'
    }
  }
};
