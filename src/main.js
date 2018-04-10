// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import lazyload from 'vue-lazyload'
import infiniteScroll from 'vue-infinite-scroll';
import Vuex from 'vuex'
Vue.config.productionTip = false;
Vue.use(Vuex);
Vue.use(infiniteScroll);
 Vue.use(lazyload, {
  loading: "/static/loading/loading-bubbles.svg"
});
const store = new Vuex.Store({
  state: {
    userStates:1,
    cartCount: 0,
    nickName:'',
    checkList:[],
    toBackEndCheckList:[],
    totalPrice:0,
    isLogin:false
  },
  mutations: {
    updateUserStates:(state,userStates)=>{state.userStates=userStates},
    updateIsLogin:(state,isLogin)=>{state.isLogin=isLogin},
    updateTotalPrice:(state,totalPrice)=>{state.totalPrice=totalPrice},
    updateToBackendCheckList:(state,toBackEndCheckList)=>{state.toBackEndCheckList=toBackEndCheckList},
    updateCheckList:(state,checkList)=>{state.checkList=checkList},
  	updateUserInfo: (state,nickName) => {state.nickName=nickName},
    updateCartCount: (state,cartCount) => {state.cartCount=cartCount},
  }
});
/* eslint-disable no-new */
new Vue({
    el: '#app',
  router,
  store:store,
  components: { App },
  template: '<App/>'
  // render: function (h) {
  //   return h(App);
  // }
 });//.$mount('#app');
