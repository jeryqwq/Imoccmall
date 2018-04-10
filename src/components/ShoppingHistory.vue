<template>
<div>
    <div class="rightpage">
    <div  class="msg_pop"><b>我的购物记录</b></div>
   <div id="darkbannerwrap"></div>
  <div class="page-title-normal checkout-title">
      </div>
      <div class="item-list-wrap confirm-item-list-wrap">
        <div class="cart-item order-item">
          <div class="cart-item-head">
            <ul>
              <li>商品信息</li>
              <li>价格</li>
              <li>数量</li>
              <li>总价</li>
            </ul>
          </div>
          <ul class="cart-item-list" style="height:600px;overflow-x: hidden;
overflow-y: scroll;">
            <li v-for="(item,index) in cartList">
              <div class="cart-tab-1">
                <div class="cart-item-pic">
                  <img v-lazy="'/static/img/'+item.productImage" alt="">
                </div>
                <div class="cart-item-title">
                  <div class="item-name">{{item.productName}}</div>

                </div>
              </div>
              <div class="cart-tab-2">
                <div class="item-price">{{item.salePrice}}</div>
              </div>
              <div class="cart-tab-3">
                <div class="item-quantity">
                  <div class="select-self">
                    <div class="select-self-area">
                      <span class="select-ipt">x{{item.productNum}}</span>
                    </div>
                  </div>
                  <div class="item-stock item-stock-no">Time</div>
                </div>
              </div>
              <div class="cart-tab-4">
                <div class="item-price-total">${{item.productNum*item.salePrice}}</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
 


    </div>
    </div>    
</template>
<script>
import axios from "axios"
export default {
  data(){
      return{
cartList:[]
      }
  },
  mounted(){
this.getCartList();
  },
  methods: {
      getCartList(){
          axios.get('/users/getHistory').then((res)=>{
              this.cartList=res.data.result;
          })
      }
  }
}
</script>
