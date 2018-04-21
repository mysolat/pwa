<template>
   <div>
       <router-link class="nav-item nav-link active" to="/">Kembali</router-link>

       <table class="table responsive table-hover">
          <thead>
            <tr>
              <th width="200px">Tarikh Masihi</th>
              <th width="10%">Hari</th>
              <th width="10%" class="text-center">Subuh</th>
              <th width="10%" class="text-center">Syuruk</th>
              <th width="10%" class="text-center">Zohor</th>
              <th width="10%" class="text-center">Asar</th>
              <th width="10%" class="text-center">Maghrib</th>
              <th width="10%" class="text-center">Isyak</th>
              <th width="200px" class="text-right">Tarikh Hijrah</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="day in monthly.timetables">
              <td>{{day.tarikh}}</td>
              <td>{{day.hari}}</td>
              <td class="text-center" >{{day.subuh}}</td>
              <td class="text-center" >{{day.syuruk}}</td>
              <td class="text-center" >{{day.zohor}}</td>
              <td class="text-center" >{{day.asar}}</td>
              <td class="text-center" >{{day.maghrib}}</td>
              <td class="text-center" >{{day.isyak}}</td>
              <td class="text-right">{{day.tarikh_hijrah}}</td>
            </tr>
          </tbody>
        </table>
    </div>
</template>
<script>
  export default {
    data () {
      return global.data
    },
    mounted () {
      this.fetchData(this.year, this.month)
      console.log(this.zone)
    },
    methods: {
      fetchData: function (yy, mm) {
        this.month = mm
        var url = this.endpoint + `/year/${this.year}/month/${this.month}/zones/${this.zone}.json`
        this.$http.get(url).then(function (response) {
          this.monthly = response.data
        })
      },
      getThisMonth: function (mm) {
        self.fetchData(this.year, mm)
      }
    }
  }
</script>
<style scoped>
  .waiting {
    padding: 10px;
    color: #555;
  }
</style>