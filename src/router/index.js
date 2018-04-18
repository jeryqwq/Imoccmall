import Vue from 'vue'
import Router from 'vue-router'
import Goodlist from '@/views/Goodlist'
import Cart from './../views/cart.vue'
import Address from './../views/Address.vue'
import User from "./../views/User.vue"
import Desc from './../views/ProductDesc.vue'
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
      path:'/User',
      name:'User',
      component:User
    },
    {
      path:'/productdesc',
      name:'Productdesc',
      component:Desc
    }
  ]
})
