<template>
  <ul class="list">
  test
  </ul>
</template>
<script>
  export default {
    mounted () {
      this.fetchData('', '', '', this.zone)
    },
    methods: {
      fetchData: function (yy, mm, dd, zone) {
        var url = this.endpoint + '/zones{/zone}.json'
        this.$http.get(url, {zone: zone}).then(function (response) {
          self.today = response.data
          self.location = self.today.locations[0]
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