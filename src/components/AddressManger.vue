<template>
  <div>
<div  class="rightpage">
 <div  class="msg_pop"><b>地址管理</b></div>
      <div class="addr-list-wrap">
        
        <div class="addr-list">
          <ul>
            <li v-for="(item,index) in addressList"  v-bind:class="{'check':item.isDefault}" >
              <dl>
                <dt>{{item.userName}}</dt>
                <dd class="address">{{item.streetName}}</dd>
                <dd class="tel">{{item.tel}}</dd>
              </dl>
              <div class="addr-opration addr-del" @click="delAddress(item._id)">
                <a href="javascript:;" class="addr-del-btn">
                  <svg class="icon icon-del"><use xlink:href="#icon-del"></use></svg>
                </a>
              </div>
              <!-- <div class="addr-opration addr-set-default">
                <a href="javascript:;" class="addr-set-default-btn"><i>设为默认</i></a>
              </div> -->
              <div class="addr-opration addr-default" v-show="isDefault[index]">[默认地址]</div>
               <div class="addr-opration " v-show="!isDefault[index]" @click="setDefaultAddress(index)">设为默认</div>
            </li>
            <li class="addr-new" >
              <div class="add-new-inner">
                <i class="icon-add">
                  <svg class="icon icon-add"><use xlink:href="#icon-add"></use></svg>
                </i>
                <p>添加新地址</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

    
</div>


  </div>
</template>
<script>
 import  axios from 'axios';
export default {
  data () {
      return {
          addressList:[],
          limit:3,
          isDefault:[]
      }
  },
  mounted () {
    this.getAddress();
  },
  methods: {
        getAddress(){
axios.post('/users/getAddressList').then((res)=>{
  if(res.data.status==0){
this.addressList=res.data.result;
res.data.result.forEach((element,index) => {
  this.isDefault[index]=element.isDefault;//wrong!!
});
  }
})
  },
  }
}
</script>
