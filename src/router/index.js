import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '@/components/views/home'
import LocationView from '@/components/views/locations'
import TimetableView from '@/components/views/timetables'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/locations',
      name: 'locations',
      component: LocationView
    },
    {
      path: '/timetables',
      name: 'timetables',
      component: TimetableView
    }
  ]
})
