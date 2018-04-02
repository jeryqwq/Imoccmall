<template>
  <div>
      <div class="order-create" >
      <div class="order-create-pic"><img src="./../../static/img/ok-2.png" alt=""></div>
      <div class="order-create-main">
        <h3>恭喜您! <br>下单成功!</h3>
        <p>
         订单号：<span>100000001</span>
         总价: <span v-text="totalPrice"></span>
        </p>
        <div class="order-create-btn-wrap">
          <div class="btn-l-wrap">
            <a href="/#/cart" class="btn btn--m">查看购物车</a>
          </div>
          <div class="btn-r-wrap">
            <a href="/#/" class="btn btn--m">返回商品列表</a>
          </div>
        </div>
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
  computed: {
      totalPrice(){
          return this.$store.state.totalPrice;
      }
  }
}
</script>

