<template>

  <div>
      <nav-header></nav-header>
   <div class="filter stopPop" id="filter" ><!--  v-bind:class="{'filterby-show':filterBy}" -->
        <dl class="filter-price">
            <br/>
          <dt>我的账户:</dt>
          <dd>
            <a href="javascript:void(0)" class="cur">个人资料</a>
          </dd>
            <dd>
            <a href="javascript:void(0)">购物记录</a>
          </dd>
            <dd>
            <a href="javascript:void(0)">我的卡券包</a>
          </dd>
            <dd>
            <a href="javascript:void(0)">基础设置</a>
          </dd>
        </dl>
      </div>
        <nav-footer></nav-footer>
  </div>

</template>
<script>

import NavFooter from '@/components/Footer'
import NavHeader from '@/components/Header'
export default {
  data(){
      return{



      }
  },
  methods: {
      
  },
  components:{
      NavFooter:NavFooter,
      NavHeader:NavHeader
  }
}
</script>

