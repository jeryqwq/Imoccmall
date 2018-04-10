<template>

  <div>
      <nav-header></nav-header>
      <loc-solt location="我的账户"></loc-solt>
        <user-info :message='states' v-show="states==1"></user-info>
<shopping-history v-show="states==2"></shopping-history>
<user-ticker v-show="states==3"></user-ticker>
<setting v-show="states==4"></setting>
   <div class="filter stopPop pageleft"  ><!--  v-bind:class="{'filterby-show':filterBy}" -->
        <dl class="filter-price">
            <br/>
          <dt>我的账户:</dt>
          <dd>
            <a href="javascript:void(0)" :class="{'cur':states==1}" @click="states=1">个人资料</a>
          </dd>
            <dd>
            <a href="javascript:void(0)" :class="{'cur':states==2}" @click="states=2">购物记录</a>
          </dd>
            <dd>
            <a href="javascript:void(0)" :class="{'cur':states==3}" @click="states=3">我的卡券包</a>
          </dd>
            <dd>
            <a href="javascript:void(0)" :class="{'cur':states==4}" @click="states=4">基础设置</a>
          </dd>
        </dl>

      </div>
        <nav-footer></nav-footer>
  </div>

</template>
<script>
import UserTicker from '@/components/UserTicker'
import UserInfo from '@/components/UserInfo'
import NavFooter from '@/components/Footer'
import NavHeader from '@/components/Header'
import ShoppingHistory from "@/components/ShoppingHistory"
import Setting from '@/components/Setting'
import LocSolt from '@/components/LocSolt'
export default {
  data(){
      return{
states:1
      }
  },
  methods: {
      
  },
  components:{
      NavFooter:NavFooter,
      NavHeader:NavHeader,
      UserInfo:UserInfo,
      ShoppingHistory:ShoppingHistory,
      UserTicker:UserTicker,
      Setting:Setting,
      LocSolt:LocSolt
  }
}
</script>

<style>
.pageleft{
width:25%;
height: 600px;
position: fixed;
top: 250px;

}
</style>
