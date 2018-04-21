<template>
  <div>
    <nav class="navbar navbar-light bg-light">
      <a class="navbar-brand" href="#">MySolat</a>
      <button aria-controls="navdrawerRight" aria-expanded="false" aria-label="Toggle Navdrawer" class="navbar-toggler ml-auto" data-target="#navdrawer-right" data-toggle="navdrawer">
        <span class="navbar-toggler-icon"></span>
      </button>

    </nav>

    <aside aria-hidden="true" class="navdrawer navdrawer-right navdrawer-default" id="navdrawer-right" tabindex="-1">
      <div class="navdrawer-content">
        <div class="navdrawer-header">
          <a class="navbar-brand px-0" href="#">Settings</a>
        </div>
        <nav class="navdrawer-nav">
          <router-link class="nav-item nav-link active" to="/" @click.native="hideMenu">Home</router-link>
          <router-link class="nav-item nav-link active" to="/locations" @click.native="hideMenu">Locations</router-link>
        </nav>
        <div class="navdrawer-divider"></div>
        <p class="navdrawer-subheader">Other Settings</p>
      </div>
    </aside>

    <main class="container-fluid">
      <div class="page-content">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return global.data
    },
    mounted () {
      this.init()
    },
    methods: {
      init: function () {
        this.$parent.setCookie('zone', this.zone)
        // daily.fetchData('', '', '', this.zone)
        // monthly.fetchData(this.year, this.month, this.zone)
      },

      highlightCurrent: function (time1, time2) {
        var result = false
        var first = global.moment(time1, 'HH:mm:ss A')
        var second = global.moment(time2, 'HH:mm:ss A')
        var timeNow = global.moment(this.time_now, 'HH:mm:ss A')
        if (second == null) {
          result = timeNow.isBefore(first)
        } else {
          result = timeNow.isBetween(first, second)
        }
        return result
      },

      updateCurrentTime: function () {
        this.time_now = global.moment().format('LTS')
      },

      hideMenu: function () {
        global.jQuery('#navdrawer-right').navdrawer('hide')
      }

    }
  }
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/icon?family=Material+Icons');
  @import "~daemonite-material/assets/scss/material.scss";
</style>
