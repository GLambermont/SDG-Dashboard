module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import '~include-media/dist/_include-media';
          @import '@/scss/_sdg-ui_vars.scss';
          @import '@/scss/_vars.scss';
          @import '@/scss/_mixins.scss';
          @import '@/scss/_extends.scss';
          @import '@/scss/_functions.scss';
        `
      }
    }
  },

  lintOnSave: undefined
}
