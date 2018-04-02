<template>
<div>
 <div>
    <model>
        <div slot="message">
                <div  class="msg_pop">是否从购物车删除该商品</div>
                <div id="darkbannerwrap"></div>
       </div>
              <div slot="btnGroup" @keyup.enter="">
               <input value="确定" class="login_submit" @click="sureDelect()" style="width:100%;" type="button"  >
         <input type="button" class="login_submit" @click="cancel()" style="width:100%;" value="取消" />
              </div>
      </model>
 </div>
  <nav-header></nav-header>
  
  <div class="nav-breadcrumb-wrap">
  <div class="container">
    <nav class="nav-breadcrumb">
      <a href="/">Home</a>
      <span>Cart</span>
    </nav>
  </div>
</div>
<svg style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1"
     xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>

    <symbol id="icon-del" viewBox="0 0 32 32">
      <title>delete</title>
      <path class="path1"
            d="M11.355 4.129v-2.065h9.29v2.065h-9.29zM6.194 29.935v-23.742h19.613v23.742h-19.613zM30.968 4.129h-8.258v-3.097c0-0.569-0.463-1.032-1.032-1.032h-11.355c-0.569 0-1.032 0.463-1.032 1.032v3.097h-8.258c-0.569 0-1.032 0.463-1.032 1.032s0.463 1.032 1.032 1.032h3.097v24.774c0 0.569 0.463 1.032 1.032 1.032h21.677c0.569 0 1.032-0.463 1.032-1.032v-24.774h3.097c0.569 0 1.032-0.463 1.032-1.032s-0.463-1.032-1.032-1.032v0z"></path>
      <path class="path2"
            d="M10.323 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z"></path>
      <path class="path3"
            d="M16 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z"></path>
      <path class="path4"
            d="M21.677 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z"></path>
    </symbol>
    <symbol id="icon-clock" viewBox="0 0 32 32">
      <title>clock</title>
      <path class="path1" fill="#605f5f"
            d="M16 29c-7.168 0-13-5.831-13-13s5.832-13 13-13c7.168 0 13 5.832 13 13s-5.832 13-13 13zM16 0c-8.822 0-16 7.178-16 16s7.178 16 16 16c8.822 0 16-7.178 16-16s-7.178-16-16-16z"></path>
      <path class="path2" fill="#605f5f"
            d="M23.958 21.837l-6.958-6.489v-6.282c0-0.827-0.673-1.5-1.5-1.5s-1.5 0.673-1.5 1.5v6.934c0 0.414 0.174 0.814 0.477 1.098l7.435 6.934c0.279 0.259 0.642 0.402 1.023 0.402 0.415 0 0.814-0.174 1.096-0.477 0.564-0.605 0.532-1.555-0.073-2.12z"></path>
    </symbol>
  </defs>
</svg>
<div class="container">
  <div class="cart">
    <div class="page-title-normal">
      <h2 class="page-title-h2"><span></span></h2>
    </div>
    <div class="item-list-wrap">
      <div class="cart-item">
        <div class="cart-item-head">
          <ul>
            <li>商品</li>
            <li>总计</li>
            <li>数量</li>
            <li>单价</li>
            <li>编辑</li>
          </ul>
        </div>
        <ul class="cart-item-list">
          <li v-for="(item,index) in cartList" v-bind:key="item.index">
            <div class="cart-tab-1">
              <div class="cart-item-check">
                <a href="javascipt:;" class="checkbox-btn item-check-btn" v-bind:class="{'check':singleTotal[index]}"  @click="singleTotal[index]=!singleTotal[index];countTotal(index)">
                  <svg class="icon icon-ok">
                    <use xlink:href="#icon-ok"></use>
                  </svg>
                </a>
              </div>
              <div class="cart-item-pic">
                <img v-lazy="'/static/img/'+item.productImage"  alt="">
              </div>
              <div class="cart-item-title">
                <div class="item-name">{{item.productName}}</div>
              </div>
            </div>
            <div class="cart-tab-2">
              <div class="item-price">{{subTotal[index]}}</div>
            </div>
            <div class="cart-tab-3">
              <div class="item-quantity">
                <div class="select-self select-self-open">
                  <div class="select-self-area">
                       <a class="input-sub" @click="item.productNum--;addAndMinus(index)">-</a>
                    <span class="select-ipt">{{item.productNum}}</span>
                    <a class="input-add" @click="item.productNum++;addAndMinus(index)">+</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="cart-tab-4">
              <div class="item-price-total">{{item.salePrice}}</div>
            </div>
            <div class="cart-tab-5">
              <div class="cart-item-opration" @click="delectgood(item._id)">
                <a href="javascript:;" class="item-edit-btn">
                  <svg class="icon icon-del">
                    <use xlink:href="#icon-del" ></use>
                  </svg>
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="cart-foot-wrap">
      <div class="cart-foot-inner">
        <div class="cart-foot-l">
          <div class="item-all-check">
                  <span v-bind:class="{'check':isAllChoose==true}" class="checkbox-btn item-check-btn" @click="allChoose()">
                      <svg class="icon icon-ok"><use xlink:href="#icon-ok"/></svg>
                  </span>
              <span>全选</span>
          </div>
        </div>
        <div class="cart-foot-r">
          <div class="item-total">
           总计:<span class="total-price">{{totalPrice}}</span>
          </div>
          <div class="btn-wrap">
            <a class="btn btn--red" v-bind:class="{'btn--dis':check==false}" @click="accountant()">结算({{accountantProduct.length}})</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<nav-footer></nav-footer>
</div>
</template>
<script>
import NavFooter from '@/components/Footer'
import NavHeader from '@/components/Header'
import axios from 'axios'
import Model from '@/components/Model'
export default {
  
  data(){ 
return{
  subTotal:[],
  singleTotal:[],
  totalPrice:0,
  cartList:[],
    isAllChoose:false,
   accountantProduct:[],
   check:false,
   goodId:''
}
},
methods:{
  cancel(){
      document.getElementById('model_adymic').style.display='none';
  },
  sureDelect(){
     axios.post('users/delectgood',{
  '_id':this.goodId
}).then((res)=>{
if(res.data.status==1){
  console.log(res.data.msg);
}else{
 this.getCartList();
  document.getElementById('model_adymic').style.display='none';
}
})
  },
            accountant(){
             let a=[];
              if(!this.check){
                  return;
                  }else{
                    
                    this.singleTotal.forEach((element,index) => {
                      if(element==true){
a.push(this.cartList[index]);
                      }
                    });
                    this.$store.commit('updateTotalPrice',this.totalPrice)
                    this.$store.commit('updateCheckList',a);
                    this.$store.commit('updateToBackendCheckList',this.accountantProduct)
                    window.location="/#/address";
                  }
// axios.post('users/accountant',{
// accountantProduct:this.accountantProduct,
// totalPrice:this.totalPrice
// }).then((res)=>{
//   console.log(res);
// if(res.data.status==0){
//      this.message="结算成功！是否立即查看订单？";
//      this.singleTotal=[];
//      this.totalPrice=0;
//      this.getCartList();
//     document.getElementById("model-wrap").style.display="inline";
//     document.getElementById('sureDel').onclick=()=>{
//  window.location='/#/orderList';

//     }
// }else{
//    this.getCartList();
//    this.message=res.data.msg;
//     document.getElementById("model-wrap").style.display="inline";
//     document.getElementById('sureDel').onclick=()=>{
//   document.getElementById("model-wrap").style.display="none";
//     }
// }
// })

   },
  delectgood(goodId){
    this.goodId=goodId;
      document.getElementById('model_adymic').style.display='inline';

  },
getCartList(){
  axios.post('users/cart').then((res)=>{
    if(res.data.status==1){
      console.log(res.data.msg);
    }else{
this.cartList=res.data.result;
    }
  })
},
addAndMinus(index){
if(this.singleTotal){
  this.countTotal(index);
}
}, 

countTotal(index){
  this.accountantProduct=[];
   this.totalPrice=0;
  this.cartList.forEach((item,i) => {
          if(this.cartList[i].productNum<=1){
        this.cartList[i].productNum=1;
      };
    if(this.singleTotal[i]){
var singleData={
  count:this.cartList[i].productNum,
  productId:this.cartList[i].productId
}
this.accountantProduct.push(singleData);
  this.subTotal[i]=this.cartList[i].productNum*this.cartList[i].salePrice;
  this.totalPrice=this.totalPrice+this.cartList[i].productNum*this.cartList[i].salePrice;
 
   }else{
      this.singleTotal[i]=false;
    }
});
if( this.totalPrice==0){
  this.check=false;
}else{
  this.check=true;
}
},
allChoose(){
   this.check=false;
    this.totalPrice=0;
  this.isAllChoose=!this.isAllChoose;
    this.accountantProduct=[];
  if(this.isAllChoose){
this.cartList.forEach((item,i) => {
  var singleData={
  count:this.cartList[i].productNum,
  productId:this.cartList[i].productId,
}
this.accountantProduct.push(singleData);
  this.singleTotal[i]=this.isAllChoose;
  this.subTotal[i]=this.cartList[i].productNum*this.cartList[i].salePrice;
  this.totalPrice=this.totalPrice+this.cartList[i].productNum*this.cartList[i].salePrice;
});
}else{
  this.singleTotal.forEach((index,i)=>{
    this.singleTotal[i]=this.isAllChoose;
  })
  this.totalPrice=0;
}
  if( this.totalPrice==0){
  this.check=false;
}else{
  this.check=true;
}
}
},
mounted(){
  this.getCartList();
},
computed: {
  toBackEndCheckList(){
    return this.$store.state.toBackEndCheckList;
  }
},
  components: {
    Model:Model,
    NavFooter:NavFooter,
NavHeader:NavHeader
  }
}
</script>

  <style>

    .input-sub,.input-add{
      min-width: 40px;
      height: 100%;
      border: 0;
      color: #605F5F;
      text-align: center;
      font-size: 16px;
      overflow: hidden;
      display: inline-block;
      background: #f0f0f0;
    }
    
    .item-quantity .select-self-area{
      background:none;
      border: 1px solid #f0f0f0;
    }
    .item-quantity .select-self-area .select-ipt{
      display: inline-block;
      padding:0 3px;
      width: 30px;
      min-width: 30px;
      text-align: center;
    }

  </style>