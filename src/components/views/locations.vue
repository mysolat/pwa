<template>
  <div class="card-image">
  	<h4 class="lead text-center"> Locations </h4>
  	<ul class="list-group list-group-flush">
  	 <li class="list-group-item" v-for="zone in zones">
        <a class="nav-link active" href="#"  v-on:click="setZone(zone.zone)">
          <span> {{zone.locations.join(', ')}} </span>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    data () {
      return global.data
    },
    mounted () {
      this.fetchZones()
    },
    methods: {
      fetchZones: function () {
        var url = this.endpoint + '/zones.json'
        this.$http.get(url).then(function (response) { this.zones = response.data })
      },

      setZone: function (kod) {
        this.zone = kod
        this.search = ''
        this.$router.push('/')
      }
    }
  }
</script>
<style scoped>
</style>