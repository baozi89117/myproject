import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import HelloBaby from '@/components/HelloBaby'
import Temp from '@/components/Temple'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Temp',
      component: Temp
    }
  ]
})
