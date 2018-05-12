<template>
  <div class="card-image">
  	<h4 class="lead text-center"> Locations </h4>
  	<ul class="list-group list-group-flush">
  	 <li class="list-group-item" v-for="zone in zones">
        <span> {{zone.negeri}} </span>
        <ul>
          <li v-for="location in zone.lokasi">
            <a class="nav-link active" href="#"  v-on:click="setZone(location.kod)">
              <span>{{location.kod}} {{location.zon.join(', ')}} </span>
             </a>
          </li>
        </ul>
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
        var url = this.endpoint + '/negeri.json'
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