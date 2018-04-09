import Vue from 'vue'
import Router from 'vue-router'
import Goodlist from '@/views/Goodlist'
import Cart from './../views/cart.vue'
import Address from './../views/Address.vue'
import Custer from "./../views/Custer.vue"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Goodlist',
      component: Goodlist
    }
    ,
    {
      path:'/cart',
      name:"Cart",
      component:Cart,
    },{
      path:'/address',
      name:'Address',
      component:Address,
    },
    {
      path:'/custer',
      name:'Custer',
      component:Custer
    }
  ]
})
