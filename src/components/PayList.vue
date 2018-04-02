<template>
<div>
   <div class="page-title-normal checkout-title">
        <h2><span>Order content</span></h2>
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
          <ul class="cart-item-list">
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
                  <div class="item-stock item-stock-no">货物充足</div>
                </div>
              </div>
              <div class="cart-tab-4">
                <div class="item-price-total">${{item.productNum*item.salePrice}}</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
 
      <!-- Price count -->
      <div class="price-count-wrap">
        <div class="price-count">
          <ul>
            <li>
              <span>原价:</span>
              <span>{{totalPrice}}</span>
            </li>
            <li>
              <span>抵用券:</span>
              <span>$0</span>
            </li>
            <li>
              <span>折扣:</span>
              <span>$0</span>
            </li>
            <li>
              <span>运费:</span>
              <span>$0</span>
            </li>
            <li class="order-total-price">
              <span>订单合计:</span>
              <span>${{totalPrice}}</span>
            </li>
          </ul>
        </div>
      </div>
      </div>
</template>

<script>

export default {
data(){
return{
}

},
mounted(){
},
computed:{
    cartList(){
        return this.$store.state.checkList;
    },
    totalPrice(){
       return this.$store.state.totalPrice
    }
}
}
</script>
