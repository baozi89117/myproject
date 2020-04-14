// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// eslint-disable-next-line no-unused-vars
import filters from './util/filter'
// eslint-disable-next-line no-unused-vars
import filter from './filters'

Vue.config.productionTip = false

Object.keys(filter).forEach(k => Vue.filter(k, filter[k]))

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
