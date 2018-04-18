<template>
<div>
   <model id="model_adymic">
        <div slot="message" >
                <div  class="msg_pop">开启购物之旅</div>
                <div id="darkbannerwrap"></div>
                <p class="tip" v-text="errTip" style="color:red" ></p>
  </div>
                          <div slot="btnGroup" @keyup.enter="login()">
    <input class="txt_form" placeholder="请输入用户名:" v-model="userName" type="text">
               <input class="txt_form" placeholder="请输入密码:" v-model="userPwd"  type="password">
               <input value="登录" class="login_submit" @click="login()" style="width:100%;" type="button"  >
              </div>
      </model>
<nav-header></nav-header>
<loc-solt location="商品列表"></loc-solt>
<div class="accessory-result-page accessory-page">
  <div class="container">
    <div class="filter-nav"> 
      <span class="sortby">Sort by:</span>
      <a href="javascript:void(0)" class="default" v-bind:class="{'cur':isDeafault==0}" @click="isDeafault=0;getGoodsList()" >Default</a>
      <a href="javascript:void(0)" class="price" v-bind:class="{'cur':isDeafault==1}" @click="sortGoods">Price↑<svg class="icon icon-arrow-short"><use xlink:href="#icon-arrow-short"></use></svg></a>
      <a href="javascript:void(0)" class="filterby stopPop" @click="showFilterPop" >Filter by</a>
    </div>
    <div class="accessory-result">
      <!-- filter -->
           
      <div class="filter stopPop" id="filter" v-bind:class="{'filterby-show':filterBy}">
        <dl class="filter-price">
             <input class="txt_form" v-model="serchText"  type="text" placeholder="Input Product Name Here" @keydown.enter=""  />
          <input value="搜索" class="btn btn--red " @click="getGoodsList()" style="width:100%;margin-bottom:20px" type="button"    />
          <dt>Price:</dt>
          <dd><a href="javascript:void(0)" v-bind:class="{'cur':priceChecked=='all'}" @click="setPriceFilter('all');busy=false">All</a></dd>
          <dd v-for="(item,index) in priceFliter" v-bind:key="item.index" >
            <a href="javascript:void(0)" @click="setPriceFilter(index)" v-bind:class="{'cur':priceChecked==index}">{{priceFliter[index].startPrice}} - {{priceFliter[index].endPrice}}</a>
          </dd>
  
        </dl>
      </div>
      <!-- search result accessories list -->
      <div class="accessory-list-wrap">
        <div class="accessory-list col-4">
          <ul>
             <li v-for="item in goodsList" v-bind:key="item.index">
              <div class="pic">
                <a :href="'/#/productdesc?_id='+item._id"><img v-lazy="'/static/img/'+item.productImage" alt=""></a>
              </div>
              <div class="main">
                <div class="name">{{item.productName}}</div>
                <div class="price">{{item.salePrice}}</div>
                <div class="btn-area">
                  <a href="javascript:;" class="btn btn--m" @click="addCart(item.productId)">加入购物车</a>
                </div> 
              </div>
            </li>
          </ul>
         <div class="load-more" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="30">
        <img src="./../assets/loading-spinning-bubbles.svg" v-show="isLoadding"/>
</div>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="md-overlay" v-show="overLayFlag" @click="closePop" ></div>
<nav-footer></nav-footer>
</div>

</template>
<style>
.load-more{
background: rgba(0, 0,0, 0.1)
}
</style>

<script>
import LocSolt from '@/components/LocSolt';
import "./../assets/css/base.css";
import "./../assets/css/product.css";
import "./../assets/css/checkout.css";
import NavHeader from "@/components/Header.vue";
import NavFooter from "@/components/Footer.vue";
import axios from "axios";
import Model from './../components/Model'
export default {
  data() {
    return {
      serchText:'',
           userPwd:'',
              userName:'',
              errTip:'',
      isDeafault:0,
      isLoadding:0,
      busy:true,
      page:1,
      pageSize:8,
      sortgoods:true,
      goodsList: [],
      priceFliter: [
        {
          startPrice: 0,
          endPrice: 500
        },
        {
          startPrice: 500,
          endPrice: 1000
        },
        {
          startPrice: 1000,
          endPrice: 2000
        },
        {
          startPrice: 2000,
          endPrice: 3000
        },
        {
          startPrice: 3000,
          endPrice: 5000
        },
        {
          startPrice: 5000,
          endPrice: 8000
        },
        {
          startPrice: 8000,
          endPrice: 10000
        },{
          startPrice: 10000,
          endPrice:"以上"
        }
      ],
      priceChecked: "all",
      filterBy: false,
      overLayFlag: false
    };
  },
  components: {
    NavHeader: NavHeader,
    NavFooter: NavFooter,
    Model:Model,
    LocSolt:LocSolt
  },
  mounted: function() {
      document.getElementById('model_adymic').style.display='none';
    this.getGoodsList();
    document.title="请选择购买商品";
  },
  methods: {
    addCart(productId){
axios.post('/goods/addCart',{
        "productId":productId,
'userId':"1000007",
}).then((res)=>{
if(res.data.status==1){
alert(res.data.msg);
}else{
  this.$store.commit('updateCartCount',res.data.cartCount);
}
})
    },
     login(){
            if(this.userPwd==''||this.userName==''){this.errTip='请输入用户名或密码！！！';return};
            axios.post('/users/login',{
userName:this.userName,
userPwd:this.userPwd
            }).then((res)=>{
if(res.data.status==0){
  this.errTip=res.data.msg;
  
     this.$store.commit('updateUserInfo',res.data.nickName);
     this.$store.commit('updateIsLogin',true);
     this.$store.commit('updateCartCount',res.data.cartCount);
setTimeout(()=>{
  document.getElementById('model_adymic').style.display='none';
},800);
}else{
  this.errTip=res.data.msg;
  this.userPwd='';this.userName='';
}
            })
          },
    loadMore(){
 this.busy = true;
      setTimeout(() => {
     this.page++;
      this.getGoodsList(true);
      }, 1000);
    },
    getGoodsList(falg) {
      this.isLoadding=true;
      var params={
"page":this.page,
"pageSize":this.pageSize,
"sort":this.sortgoods?1:-1,
"priceLevel":this.priceChecked,
"isDeafault":this.isDeafault,
'serchText':this.serchText,
      }
      axios.get("goods/list",{
params:params
      }).then(result => {
        if(falg){
 this.goodsList =this.goodsList.concat(result.data.result.list);
 if(result.data.result.count<8){
   this.busy=true;
       this.isLoadding=false;
 }else{
      this.busy=false;
 }
        }else{
          this.goodsList = result.data.result.list;
         this.busy=false;
        }
      });
  
    },
    sortGoods(){
      this.isDeafault=1;
      this.page=1;
this.sortgoods=!this.sortgoods;
 this.getGoodsList();
       this.busy=true;
    },
    showFilterPop() {
      this.filterBy = true;
      this.overLayFlag = true;
    },
    closePop() {
      this.overLayFlag = false;
      this.filterBy = false;
    },
    setPriceFilter(index) {
      this.page=1;
      this.priceChecked = index;
      this.closePop();
      this.getGoodsList();

    }
  }
};
</script>