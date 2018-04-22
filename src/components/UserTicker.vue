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
            <li v-for=" (item,index) in ticketList" :key="index">
              <div class="cart-tab-1">
                <div class="cart-item-pic">
                  <img v-lazy="'/static/img/ticker.jpg'" alt="">
                </div>
                <div class="cart-item-title">
                  <div v-if="item.ticketType=='discount'" class="item-name">{{item.ticketValue}}折扣券</div>
                  <div v-if="item.ticketType=='full'" class="item-name">{{item.ticketValue}}满减券</div>

                </div>
              </div>
              <div class="cart-tab-2">
                               <div v-if="item.ticketType=='full'" class="item-price">满{{item.ticketFull}}减{{item.ticketValue}}</div>
                <div v-if="item.ticketType=='discount'" class="item-price">满{{item.ticketFull}}打{{item.ticketValue}}折</div>
              </div>
              <div class="cart-tab-3">
                <div class="item-quantity">
                  <div class="select-self">
                    <div class="select-self-area">
                      <span class="select-ipt">X{{item.ticketNum}}</span>
                    </div>
                  </div>
                  <div class="item-stock item-stock-no">抵用卷</div>
                </div>
              </div>
              <div class="cart-tab-4">
                <div class="item-price-total">满{{item.ticketFull}}使用，仅限网页在线使用</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div v-if="ticketList.length==0">
   <img src="./../../static/img/detail.jpg" width="250px"/>
    <h3><b>您的卡卷包空空如也，去活动专区领取更多购物券吧！</b></h3></div>
    </div>  
</div>

</template>
<script>
import axios from 'axios';
export default {
  data () {
      return {
         ticketList:[] 
      }
  },
  methods: {
      getTickets(){
        axios.get('/users/gettickets').then((res)=>{
          this.ticketList=res.data.result
        })
      }
  },
  mounted () {
    this. getTickets();
  }
}
</script>

