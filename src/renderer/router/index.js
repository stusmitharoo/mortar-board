import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Auth',
      component: require('@/components/Auth/Auth').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
