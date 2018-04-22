<template>
  <div>
    
    <h3>{{zone}} {{location}}</h3>
    <h4>{{month}} / {{year}}</h4>


    <div class="container">
      <br>
      <div id='daily' style="padding-top: 55px;">

        <div class="text-center">
          <h1 class="text-thin">{{location}}</h1>
        </div>
        <br>
        <div class="row">
          <div class="col-3">
            <h3 class="text-thin text-left">{{daily.timetables[0].tarikh}}</h3>
          </div> 
          <div class="col-6">
            <h1 class="clock text-center">{{time_now}}</h1>
          </div>
          <div class="col-3">
            <h3 class="text-thin text-right">{{daily.timetables[0].tarikh_hijrah}}</h3>
          </div>
        </div>
        <br>
        <br>
        <div class="row text-center lead">
          <div class="col">
            <i class="material-icons icon-lg">burst_mode</i>
            <h3>Imsak</h3>
            <h4 class="text-thin">{{daily.timetables[0].imsak}}</h4>
          </div>
          <div class="col">
            <i class="material-icons icon-lg">compare</i>
            <h3>Subuh</h3>
            <h4 class="text-thin">{{daily.timetables[0].subuh}}</h4>
          </div>
          <div class="col">
            <i class="material-icons icon-lg">filter_hdr</i>
            <h3>Syuruk</h3>
            <h4 class="text-thin">{{daily.timetables[0].syuruk}}</h4>
          </div>
          <div class="col">
            <i class="material-icons icon-lg">wb_sunny</i>
            <h3>Zohor</h3>
            <h4 class="text-thin">{{daily.timetables[0].zohor}}</h4>
          </div>
          <div class="col">
            <i class="material-icons icon-lg">wb_cloudy</i>
            <h3>Asar</h3>
            <h4 class="text-thin">{{daily.timetables[0].asar}}</h4>
          </div>
          <div class="col">
            <i class="material-icons icon-lg">brightness_3</i>
            <h3>Maghrib</h3>
            <h4 class="text-thin">{{daily.timetables[0].maghrib}}</h4>
          </div>
          <div class="col">
            <i class="material-icons icon-lg">brightness_4</i>
            <h3>Isyak</h3>
            <h4 class="text-thin">{{daily.timetables[0].isyak}}</h4>
          </div>
        </div>
      </div>
    </div>

    <router-link class="nav-item nav-link active text-center " to="/timetables/">Lihat Takwim</router-link>

  </div>

</template>
<script>
  export default {
    data () {
      return global.data
    },
    mounted () {
      this.fetchData(this.zone)
      console.log(this.zone)
    },
    methods: {
      fetchData: function (zone) {
        var url = this.endpoint + `/zones/${zone}.json`
        console.log(url)
        this.$http.get(url, {zone: zone}).then(function (response) {
          // console.log(response.data)
          this.daily = response.data
          this.location = this.daily.locations.join(', ')
        })
      }
    }
  }
</script>
<style scoped>
  .list {
    width: 100%;
    padding: 0;
  }
</style>