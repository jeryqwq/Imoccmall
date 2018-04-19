<template>
<div>
    <div class="rightpage">
    <div  class="msg_pop"><b>我的购物记录</b></div>
  <div class="page-title-normal checkout-title">
      </div>
      <div class="item-list-wrap confirm-item-list-wrap scoll" style="height:600px;overflow-x: hidden;
overflow-y: scroll;">
        <div class="cart-item order-item " >
          <div class="cart-item-head">
            <ul>
              <li>商品信息</li>
              <li>价格</li>
              <li>数量</li>
              <li>总价</li>
            </ul>
          </div>
          <ul class="cart-item-list " >
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
                  <div class="item-stock item-stock-no">{{item.timeOfBuy}}</div>
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
    dateFormat(date, format){
   date = new Date(date);  
            var o = {  
                'M+' : date.getMonth() + 1, //month  
                'd+' : date.getDate(), //day  
                'm+' : date.getMinutes(), //minute  
                'H+' : date.getHours(),//hour
                's+' : date.getSeconds(), //second  
                'q+' : Math.floor((date.getMonth() + 3) / 3), //quarter  
                'S' : date.getMilliseconds() //millisecond  
            };  
            if (/(y+)/.test(format))  
                format = format.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));  
   
            for (var k in o)  
                if (new RegExp('(' + k + ')').test(format))  
                    format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));  
   
            return format;  
    },
      getCartList(){
          axios.get('/users/getHistory').then((res)=>{
              if(res.data.status==0){
                for (const item of res.data.result) {
                 item.timeOfBuy=this.dateFormat(item.timeOfBuy,'yyyy-MM-dd HH:mm:ss');
                }
                this.cartList=res.data.result;
              }else{
                alert(res.data.status.msg);
              }
          })
      }
  }
}
</script>
