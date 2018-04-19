// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import lazyload from 'vue-lazyload'
import infiniteScroll from 'vue-infinite-scroll';
import store from './../vuex/vuex'
Vue.config.productionTip = false;
Vue.use(infiniteScroll);
 Vue.use(lazyload, {
  loading: "/static/loading/loading-bubbles.svg"
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
