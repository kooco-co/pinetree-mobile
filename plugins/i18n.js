import Vue from 'vue'
import VueI18n from 'vue-i18n'
import VueI18nFilter from 'vue-i18n-filter'

Vue.use(VueI18n)
Vue.use(VueI18nFilter)

export default ({ app, store }) => {
    app.i18n = new VueI18n({
        locale: 'zh',
        messages: {
            'en': require('~/locales/en.json'),
            'zh': require('~/locales/zh.json'),
            'ja': require('~/locales/ja.json'),
        }
    })
}