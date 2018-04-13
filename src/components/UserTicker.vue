<template>
<div>
    <div class="rightpage">
 <div  class="msg_pop"><b>我的卡卷包</b></div>


    <div class="item-list-wrap confirm-item-list-wrap" >
        <div class="cart-item order-item">
          <div class="cart-item-head">
            <ul>
              <li>卡卷类型</li>
              <li>折扣</li>
              <li>数量</li>
              <li>使用条件</li>
            </ul>
          </div>
          <ul class="cart-item-list  scoll" style="height:600px;overflow-x: hidden;
overflow-y: scroll;">
 <!-- <li v-for="(item,index) in tickerList"> -->
            <li >
              <div class="cart-tab-1">
                <div class="cart-item-pic">
                  <img v-lazy="'/static/img/ticker.jpg'" alt="">
                </div>
                <div class="cart-item-title">
                  <div class="item-name">200元家电折扣卷</div>

                </div>
              </div>
              <div class="cart-tab-2">
                <div class="item-price">￥200 </div>
              </div>
              <div class="cart-tab-3">
                <div class="item-quantity">
                  <div class="select-self">
                    <div class="select-self-area">
                      <span class="select-ipt">x2</span>
                    </div>
                  </div>
                  <div class="item-stock item-stock-no">抵用卷</div>
                </div>
              </div>
              <div class="cart-tab-4">
                <div class="item-price-total">满9800使用，仅限网页在线使用</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
   <img src="./../../static/img/detail.jpg" width="250px"/>
    <h3><b>您的卡卷包空空如也，去活动专区领取更多购物券吧！</b></h3>
    </div>  
</div>

</template>
<script>
export default {
  data () {
      return {
         tickerList:[] 
      }
  },
  methods: {
      
  }
}
</script>

