import Vue from 'vue'
import Router from 'vue-router';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/dashboard'
    },
    {
      path: '/',
      component: () => import('../components/Home.vue'),
      meta:{title:'自述文件'},
      children:[
        {
          path: '/dashboard',
          component: () => import(/* webpackChunkName: "dashboard" */ '../view/Dashboard.vue'),
          meta: { title: '系统首页' }
      },
      ]
    }
  ]
})
