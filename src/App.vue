<template>
  <main class="wrapper">
    <nav class="navigation">
      <section class="container"> 
        <router-link class="navigation-title" to="/" >MySolat</router-link>
        <ul class="navigation-list float-right">
          <li class="navigation-item">
            <router-link class="navigation-link" to="/locations" >Locations</router-link>
          </li>
        </ul>
      </section>
    </nav>

    <section class="container is-fluid">
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
  @import "~milligram/dist/milligram";
  @import "assets/stylesheets/main";
</style>
