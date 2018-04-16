<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">MySolat</a>
      <button aria-controls="navdrawerRight" aria-expanded="false" aria-label="Toggle Navdrawer" class="navbar-toggler ml-auto" data-target="#navdrawerRight" data-toggle="navdrawer">
        <span class="navbar-toggler-icon"></span>
      </button>

    </nav>

    <aside aria-hidden="true" class="navdrawer navdrawer-right navdrawer-default" id="navdrawerRight" tabindex="-1">
      <div class="navdrawer-content">
        <div class="navdrawer-header">
          <a class="navbar-brand px-0" href="#">Navdrawer header</a>
        </div>
        <nav class="navdrawer-nav">
          <a class="nav-item nav-link active" href="#">Active</a>
          <a class="nav-item nav-link disabled" href="#">Disabled</a>
          <a class="nav-item nav-link" href="#">Link</a>
        </nav>
        <div class="navdrawer-divider"></div>
        <p class="navdrawer-subheader">Navdrawer subheader</p>
        <ul class="navdrawer-nav">

          <li class="nav-item" v-for="zone in zones">
            <a class="nav-link active" href="#"  v-on:click="setZone(zone.zone)">
              <i class="material-icons mr-3">alarm_on</i>
              {{zone.locations[0]}}
            </a>
          </li>
        
        </ul>
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
    mounted () {
      this.init()
    },
    methods: {
      init: function () {
        this.$parent.setCookie('zone', this.zone)
        this.fetchZones()
        // daily.fetchData('', '', '', this.zone)
        // monthly.fetchData(this.year, this.month, this.zone)
      },

      fetchZones: function () {
        var url = this.endpoint + '/zones.json'
        this.$http.get(url).then(function (response) { this.zones = response.data })
      },

      setZone: function (kod) {
        this.zone = kod
        this.search = ''
        this.init()
      },

      openSetting: function () {
      }
    }
  }
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/icon?family=Material+Icons');
  @import "~daemonite-material/assets/scss/material.scss";
</style>
