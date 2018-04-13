<template>

  <div>

      <nav-header></nav-header>
      <loc-solt location="我的账户"></loc-solt>
        <user-info  v-show="userStates==1"></user-info>
<shopping-history v-show="userStates==2"></shopping-history>
<user-ticker v-show="userStates==3"></user-ticker>
<address-manger v-show="userStates==4"></address-manger>

   <div class="filter stopPop pageleft"  ><!--  v-bind:class="{'filterby-show':filterBy}" -->
        <dl class="filter-price">
            <br/>
          <dt>我的账户:</dt>
          <dd>
            <a href="javascript:void(0)" :class="{'cur':userStates==1}" @click=" changeUerStates(1)">个人资料</a>
          </dd>
            <dd>
            <a href="javascript:void(0)" :class="{'cur':userStates==2}" @click=" changeUerStates(2)">购物记录</a>
          </dd>
            <dd>
            <a href="javascript:void(0)" :class="{'cur':userStates==3}" @click=" changeUerStates(3)">我的卡券包</a>
          </dd>
            <dd>
            <a href="javascript:void(0)" :class="{'cur':userStates==4}" @click=" changeUerStates(4)">地址管理</a>
          </dd>
            <dd>
            <a href="javascript:void(0)" :class="{'cur':userStates==5}" @click=" changeUerStates(5)">设置</a>
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
import AddressManger from '@/components/AddressManger'
import LocSolt from '@/components/LocSolt'
export default {

  data(){
      return{
      }
  },
  computed:{
userStates(){
  return this.$store.state.userStates;
}
},
  methods: {
      changeUerStates(index){
        this.$store.commit('updateUserStates',index);
      }
  },
  components:{
      NavFooter:NavFooter,
      NavHeader:NavHeader,
      UserInfo:UserInfo,
      ShoppingHistory:ShoppingHistory,
      UserTicker:UserTicker,
      AddressManger:AddressManger,
      LocSolt:LocSolt,
  }
}
</script>

