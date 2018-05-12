<template>
  <main class="wrapper">

    <header class="navbar">
      <nav class="navbar-section">
        <a href="#" class="btn btn-link">Docs</a>
        <a href="#" class="btn btn-link">Examples</a>
      </nav>
      <nav class="navbar-center">
        <!--<img class="logo" src="./assets/images/logo.svg" alt=""> -->
        <h3> MySolat </h3>
      </nav>
      <nav class="navbar-section">
        <a href="#" class="btn btn-link">Twitter</a>
        <router-link class="navigation-link" to="/locations" >Locations</router-link>
      </nav>
    </header>

    <section class="container grid-lg">
      <div class="page-content">
        <router-view></router-view>
      </div>
    </section>

    <footer class="footer">
      <section class="container">
        <p>Designed with ♥ by <a target="_blank" href="http://khairi.me" title="Mohd khairi">mkhairi</a></p>
      </section>
    </footer>

  </main>
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
        // global.jQuery('#navdrawer-right').navdrawer('hide')
      }

    }
  }
</script>

<style lang="scss">
  @import "~spectre.css/dist/spectre";
  @import "assets/stylesheets/main";
</style>
