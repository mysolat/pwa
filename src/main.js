// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'

require('jquery')
require('popper.js')
require('bootstrap')
require('daemonite-material')

Vue.config.productionTip = false
Vue.use(VueResource)

var date = new Date()

Vue.mixin({
  data: function () {
    return {
      endpoint: 'https://api.solat.my',
      zones: [],
      zone: 'SGR03',
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      days: [],
      today: [],
      locations: [],
      location: '',
      time_now: '',
      search: ''
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  methods: {
    setCookie: function (cname, cvalue) {
      document.cookie = cname + '=' + cvalue + ';'
    },

    getCookie: function (cname) {
      var name = cname + '='
      var decodedCookie = decodeURIComponent(document.cookie)
      var ca = decodedCookie.split(';')
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i]
        while (c.charAt(0) === ' ') {
          c = c.substring(1)
        }
        if (c.indexOf(name) === 0) {
          return c.substring(name.length, c.length)
        }
      }
      return ''
    },

    detectLocation: function () {
      var cookie = 'SGR03'
      if (this.getCookie('zone') === '') {
        this.setCookie('zone', cookie)
      } else {
        cookie = this.getCookie('zone')
      }
      return cookie
    }
  }
})
