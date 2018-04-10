<template>
  <header class="header">
        <symbol id="icon-cart" viewBox="0 0 38 32">
          <path class="path1" d="M37.759 0h-4.133c-0.733 0.004-1.337 0.549-1.434 1.255l-0.546 4.342c-0.081 0.484-0.496 0.849-0.997 0.849-0.005 0-0.009-0-0.014-0h-27.604c-0.003 0-0.007-0-0.011-0-1.674 0-3.031 1.357-3.031 3.031 0 0.34 0.056 0.666 0.159 0.971l2.52 8.062c0.385 1.194 1.486 2.043 2.785 2.043 0.126 0 0.25-0.008 0.372-0.023l22.983 0.002c0.515 0.131 0.626 0.768 0.626 1.283 0.005 0.044 0.009 0.095 0.009 0.146 0 0.501-0.294 0.933-0.718 1.134l-22.439 0.003c-0.354 0-0.642 0.287-0.642 0.642s0.287 0.642 0.642 0.642h22.745l0.131-0.071c0.919-0.392 1.551-1.287 1.551-2.33 0-0.058-0.002-0.116-0.006-0.173 0.021-0.108 0.033-0.24 0.033-0.376 0-1.072-0.732-1.973-1.724-2.23l-23.357-0.004c-0.063 0.008-0.135 0.013-0.209 0.013-0.719 0-1.332-0.455-1.566-1.093l-2.53-8.095c-0.048-0.154-0.076-0.332-0.076-0.515 0-0.973 0.782-1.764 1.752-1.778h27.657c1.159-0.004 2.112-0.883 2.232-2.011l0.547-4.345c0.010-0.083 0.078-0.147 0.161-0.152l4.133-0c0.354 0 0.642-0.287 0.642-0.642s-0.287-0.642-0.642-0.642z"></path>
          <path class="path2" d="M31.323 9.69c-0.022-0.003-0.048-0.004-0.074-0.004-0.328 0-0.598 0.248-0.633 0.567l-0.809 7.268c-0.003 0.022-0.004 0.048-0.004 0.074 0 0.328 0.248 0.598 0.567 0.633l0.074 0c0.001 0 0.003 0 0.004 0 0.327 0 0.596-0.246 0.632-0.563l0.809-7.268c0.003-0.022 0.004-0.048 0.004-0.074 0-0.328-0.248-0.598-0.567-0.633z"></path>
          <path class="path3" d="M27.514 25.594c-1.769 0-3.203 1.434-3.203 3.203s1.434 3.203 3.203 3.203c1.769 0 3.203-1.434 3.203-3.203s-1.434-3.203-3.203-3.203zM27.514 30.717c-1.060 0-1.92-0.86-1.92-1.92s0.86-1.92 1.92-1.92c1.060 0 1.92 0.86 1.92 1.92s-0.86 1.92-1.92 1.92z"></path>
          <path class="path4" d="M9.599 25.594c-1.769 0-3.203 1.434-3.203 3.203s1.434 3.203 3.203 3.203c1.769 0 3.203-1.434 3.203-3.203s-1.434-3.203-3.203-3.203zM9.599 30.717c-1.060 0-1.92-0.86-1.92-1.92s0.86-1.92 1.92-1.92c1.060 0 1.92 0.86 1.92 1.92s-0.86 1.92-1.92 1.92z"></path>
        </symbol>
        <div class="navbar">
          <div class="navbar-left-container">
            <a href="http://chenjieweb.top/enter">
              <img class="navbar-brand-logo" src="static/img/logo1.png" width="400px" height="150px" ></a>
          </div>
          <div class="navbar-right-container" style="display: flex;">
            <div class="navbar-menu-container">
              <div v-show="isLogin" class="father">
              <a href="/#/user" class="navbar-link">我的账户</a>
              <ul id='setting'>
                <li><a>个人资料</a></li>
                <li><a>购物记录</a></li>
                <li><a>我的卡券包</a></li>
                <li><a>设置</a></li>
              </ul> 
              </div>
              <span class="navbar-link" v-show="isLogin"  v-text="nickName"></span>
              <a href="javascript:void(0)" class="navbar-link"  @click="showModel()" v-show="!isLogin">登录</a>
              <a href="javascript:void(0)" class="navbar-link" v-show="isLogin" @click="logout">退出</a>
              <div class="navbar-cart-container" v-show="isLogin" >
                <span class="navbar-cart-count" v-text="cartCount"></span>
                <a class="navbar-link navbar-cart-link" href="/#/cart">
                  <svg class="navbar-cart-logo">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-cart"></use>
                  </svg>
                </a> 
              </div>
              <a href="/#/saler" class="navbar-link" >我是商家</a>
            </div>
          </div>
        </div>
    <div>
    </div>
  </header>
</template>
<script>
      import "./../assets/css/login.css";
      import axios from 'axios'
      import Model from './../components/Model'
    export default{
        data(){
            return{
              mdShow:false,
              isSetting:false
            }
        },
        components:{
Model:Model
        },
      computed:{
        nickName(){
          return this.$store.state.nickName;
        },
        isLogin(){
return this.$store.state.isLogin;
        },
        cartCount(){
          return this.$store.state.cartCount;
        }
      },
        mounted(){
this.checkLogin();
this.getCartCount();
//  document.getElementById('model_adymic').style.display='none';
        },
        methods:{
          getCartCount(){
axios.get('users/getCartCount').then((res)=>{
if(res.data.status==0){
  this.$store.commit('updateCartCount',res.data.result);
}
})
          },
          showModel(){
  document.getElementById('model_adymic').style.display='inline';
          },
checkLogin(){
axios.post('/users/checklogin').then((res)=>{
 if(res.data.status==1){
   alert(res.data.msg+'解锁更多功能！！');
 }else{
   this.$store.commit('updateIsLogin',true);
 }
})
},

          logout(){
axios.post('/users/logout').then((res)=>{
 if(res.data.status==0){  
   this.$store.commit('updateIsLogin',false);
   alert(res.data.msg)
   window.location.href='/#/';
   };
})
          },

        }
    }
</script>
<style>
.father:hover #setting{
  z-index: 12;
visibility: visible;
}
#setting{
 position: absolute;
 visibility: hidden;
 height: 185px;
 width: 100px;
 background:rgba(248, 245, 245,0.5);
 border-radius:  8px;
}
#setting li{
  padding: 14px 0;

}
#setting li:hover{
  color: peru;
  border-left:solid 2px orangered;
  font-weight: bold
}
</style>
