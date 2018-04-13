<template>
  <div>
<div class="context" style="display:inline-block">
<!--part left-->
<div class="subproductdesc-left">


</div>
<!--part center-->
<div class="subproductdesc-center">
<ul>
<li :class="{'cur':curStatus==1}" @click="changCurStatus(1)"><a>宝贝详情</a></li>
<li :class="{'cur':curStatus==2}" @click="changCurStatus(2)"><a>累计评论<span style="color:#ff8000;"><b>913</b></span></a></li>
<li :class="{'cur':curStatus==3}" @click="changCurStatus(3)"><a>专享服务</a></li>
</ul>

</div>
<!--part right-->
<div class="subproductdesc-right"></div>

</div>


</div>

  </div>
</template>
<script>
export default {
  data () {
      return {
          curStatus:1
      }
  },
  methods: {
      changCurStatus(index){
this.curStatus=index;
      },
  },
  mounted () {
      
  }
}
</script>

<style>
.subproductdesc-center ul{
  width: 100%;
border-top: solid 1px #c0c0c0;
display: inline-block;
  line-height: 40px;
}
.subproductdesc-center ul li{
  border-right: solid 1px #c0c0c0;
    border-bottom: solid 1px #c0c0c0;
    background: #e3e3e3;
  width: 20%;
float: left;
}
.subproductdesc-center .cur{
background: white;
border-bottom: none;
}
.subproductdesc-left{
  float: left;
    width: 20%;
    height: 500px;
    background: tomato;
}
.subproductdesc-center{
  float: left;
  width: 60%;
    border-left: solid 1px #c0c0c0;
     border-right: solid 1px #c0c0c0;
}
.subproductdesc-right{
  float: right;
  width: 20%;
  background: black;
  height: 500px;
}
</style>
