import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/index/Index'
import Guide from '@/guide/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Alpha',
      component: Index
    },
    {
      path: '/guide',
      name: 'IOS安装指引',
      component: Guide
    }
  ]
})
