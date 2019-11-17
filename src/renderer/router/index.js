import Vue from 'vue'
import Router from 'vue-router'
import MaterialsLayout from '@/components/layout/Materials.vue'

import MaterialsSetup from '@/components/materials/Setup.vue'
import MaterialsCreate from '@/components/materials/Create.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Auth',
      component: require('@/components/Auth/Auth').default
    },
    {
      path: '/materials',
      component: MaterialsLayout,
      children: [
        {
          name: 'setup',
          path: 'setup',
          component: MaterialsSetup
        },
        {
          name: 'create',
          path: 'create',
          component: MaterialsCreate
        }
      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
