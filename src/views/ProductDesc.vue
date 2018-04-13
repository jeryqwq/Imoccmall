<template>
  <div>
<nav-header></nav-header>
<saler-info></saler-info>
<loc-solt location='商品详情'></loc-solt>
<div class="context">
  <div class="img-left" >
    <canvas id='smallcanvas'  v-show="isCanvas" >

    </canvas>
<img  v-lazy="'/static/img/'+imgUrl" width="100%" @mouseover="moveCanvas($event)"   @mouseenter="isCanvas=true"  @mouseout="isCanvas=false"/>
<ul class="imgul" style="display:inline-block;">
  <li @mouseover="reViewState=1;changImgUrl('22.jpg')" ><a><img :class="{'cur':reViewState==1}" src="./../../static/img/22.jpg" width="20%"/></a></li>
  <li  @mouseover="reViewState=2;changImgUrl('11.jpg')" ><a><img :class="{'cur':reViewState==2}" src="./../../static/img/11.jpg" width="20%"/></a></li>
  <li  @mouseover="reViewState=3;changImgUrl('12.jpg')" ><a><img :class="{'cur':reViewState==3}" src="./../../static/img/12.jpg" width="20%"/></a></li>
  <li @mouseover="reViewState=4;changImgUrl('13.jpg')" ><a><img :class="{'cur':reViewState==4}" src="./../../static/img/13.jpg" width="20%"/></a></li>
</ul>
</div>
<div class="container-center">
<h2><b>韩国东大门ulzzang早春新品 剪破毛边宽松纯棉印花长袖T恤tee男女</b></h2>
<h5 style="color:#808080">春夏兰花甜美帅气 外套不贵，见长辈，学习，敲代码首选</h5>
<div class="container-productInfo">
  <div style="float:left">
  <span style="font-size:10px;color:#808080">  <img src="./../../static/logo/5acf3beae1168a16f73594fa.png" width="80px" height='15px'/>海量新品，尽在潮搭,玩趣互动</span>
  </div>
<div>
  <table style="color:#6C6C6C;margin: 0 auto; text-align:center;">
    <tr>
      <td>1</td>
      <td>2</td>
    </tr>
       <tr>
      <td>累计评论&nbsp;</td>
      <td>销售数量</td>
    </tr>
  </table>
</div>
<p >价格：<span style="font-size:36px;color:#F40">$156.00</span></p>
</div>
<hr/>

<ul class="sizeLi" style="display:inline-block;">
  <p style="float:left;margin-top:5px">尺码：&nbsp;&nbsp;&nbsp;</p>
  <li @click="sizeState=1" :class="{'cur':sizeState==1}"><a>S</a></li>
  <li  @click="sizeState=2":class="{'cur':sizeState==2}"><a>M</a></li>
  <li @click="sizeState=3" :class="{'cur':sizeState==3}"><a>L</a></li>
</ul>
<br/>
<ul class="imgul" style="display:inline-block;">
   <p style="float:left;margin-top:10px">颜色:&nbsp;&nbsp;&nbsp;&nbsp;</p>
  <li  @click="colorState=1;changImgUrl('22.jpg')" ><a><img :class="{'cur':colorState==1}" src="./../../static/img/22.jpg" width="15%"/></a></li>
  <li @click="colorState=2;changImgUrl('22.jpg')" ><a ><img :class="{'cur':colorState==2}" src="./../../static/img/22.jpg" width="15%"/></a></li>
  <li  @click="colorState=3;changImgUrl('22.jpg')" ><a><img :class="{'cur':colorState==3}" src="./../../static/img/22.jpg" width="15%"/></a></li>
</ul>
<br/>
<br/>
<ul class="numli" style="display:inline-block;">
  <p style="float:left;">数量：&nbsp;&nbsp;&nbsp;</p>
  <li  @click="changNum(0);"><a>-</a></li>
  <li style="width:15%;"><input id='numText' type="text" v-model="productNumBuy" /></li>
    <li @click="changNum(1);"><a>+</a></li>
     <p style="font-size:15px;color: #525252;">件(库存{{productNum}}件)</p>
</ul>
<div class="errTotas" v-show="productNum<productNumBuy">{{errmsg}}</div>
<br/>
<br/>
<ul  style="display:inline-block;width:100%">
 <div class="next-btn-wrap">
   <a class="btn btn--m btn--m " style="float: left;">现在购买</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <a class="btn btn--m btn--red">加入购物车</a>
   </div>
</ul>
<br/>
<br/>
<ul class="commitment" style="display:inline-block;">
 <p style="float:left" >承诺:&nbsp;&nbsp;</p>
  <li >永不发货</li>
    <li>0运费险</li>
</ul>
<br/>
<ul class="paymethod" style="display:inline-block;">
 <p style="float:left" >支付:&nbsp;&nbsp;</p>
  <li>蚂蚁花呗</li>
    <li>信用卡</li>
    <li>比特币</li>
</ul>
</div>
<!-- 右部店铺-->
<div class="container-right">
<div class="salerlevel">
<h3><b>金牌卖家</b></h3>
<h5 style="float:left">我的金牌，您的信赖</h5>
</div>
<div class="salerinfo" style="display:inline-block;padding-bottom:20px">
  <h4><b>小辣椒服装专营店</b></h4>
<ul style="display:inline-block">
  <li><span>掌柜:&nbsp;&nbsp;</span><span>老王</span></li><br/>
 <li><span>信誉:&nbsp;&nbsp;</span><img src="./../assets/xinyu.gif"/><img src="./../assets/xinyu.gif"/><img src="./../assets/xinyu.gif"/><img src="./../assets/xinyu.gif"/></li><br/>
    <li><span>联系方式:&nbsp;&nbsp;</span><span>137945456788</span></li><br/>
 <li><span>资质:&nbsp;&nbsp;</span><span>$2000</span></li>
</ul>
<br/>

<ul  class="addshop">
  <li  style="float:left"><a>收藏店铺</a></li>
 <li style="float:right"><a>进入店铺</a></li>
</ul>
</div>
<!-- 一张优惠券-->
<!-- <div class="salerticker">
<img width="200px" src="./../../static/img/detail.jpg"/>
<h3>卖家很小气</h3>
</div> -->

<div class="salerticker">
<div>
<h3><b>优惠券</b><p><b>$80</b></p></h3>
</div>
<a>
<h3 class="ticketinfo"><b >领券购买</b></h3>
<h6><b>满800可用</b></h6>
</a>
</div>
<div class="salerticker">
<div>
<h3><b>优惠券</b><p><b>$20</b></p></h3>
</div>
<a>
<h3 class="ticketinfo"><b >领券购买</b></h3>
<h6><b>满200可用</b></h6>
</a>
</div>
<div class="salerticker">
<div>
<h3><b>折扣券</b><p><b>六折</b></p></h3>
</div>
<a>
<h3 class="ticketinfo"><b >领券购买</b></h3>
<h6><b>任意金额可用</b></h6>
</a>
</div>


</div>
</div>
<sub-product-desc></sub-product-desc>
<nav-footer></nav-footer>
  </div>
</template>
<script>
import SalerInfo from '@/components/SalerInfo'
import NavHeader from '@/components/Header'
import NavFooter from '@/components/Footer'
import LocSolt from '@/components/LocSolt'
import SubProductDesc from '@/components/SubProductDesc'
export default {
  data () {
      return {
        errmsg:'您填写的宝贝数量超过仓库拉！',
        isCanvas:false,
           sizeState:1,
           colorState:1,
           reViewState:1,
           productNumBuy:1,
           imgUrl:'21.jpg',
           productNum:300,
           title:"韩国东大门ulzzang早春新品 剪破毛边宽松纯棉印花长袖T恤tee男女"
      }
  },
  mounted () {
this.drawCanvas(); 
document.title=this.title;
  },
  methods: {
    drawCanvas(){
 
} , 
    moveCanvas(event){
var smallcanvas= document.getElementById('smallcanvas');
  smallcanvas.style.left=event.clientX-100+'px';
smallcanvas.style.top=event.clientY-100+'px';
    },
    changNum(index){
         if(index==1){
       this. productNumBuy++;
      }else{
       this. productNumBuy--;
      }
      if(this.productNumBuy<=1){
        this.productNumBuy=1;
      }else if(this.productNumBuy>=this.productNum){
        this.productNumBuy=1;
      }
   
    },
    changImgUrl(url){
      this.imgUrl=url;
    }
  },
  components:{
    NavFooter:NavFooter,
    NavHeader:NavHeader,
    SalerInfo:SalerInfo,
    LocSolt:LocSolt,
    SubProductDesc:SubProductDesc
  }
}
</script>
<style>
.salerticker h6{
color: white;
}
.ticketinfo{
  color:white;
  padding-top:4px
}
 .salerticker div:nth-child(1){
  float:left;
  background:#f2ebcf;
  width:40%;
  height: 100%;
  color: #ff0080;
  border-right:dotted 2px black
}
.salerticker{
  margin:10px auto;
  width:90%;
  height: 40px;
  background: #ed145b
}
.addshop{
  margin: 10px;
}
.addshop li{
  border: solid 1px rgba(0, 0, 0, 0);
padding:0 4px;
}
.addshop li:hover{
border: solid 1px #c0c0c0;

}
.errTotas{
border: solid 2px #ff0000;
line-height: 25px;
width: fit-content;
padding-left: 10px;
color: #808080;
font-size: 10px
}
.salerinfo ul li{
  float: left;
  font-size: 12px;
  line-height: 30px;
}
.salerlevel{
  width: 100%;
  display: inline-block;
  height: 70px;
    background-clip: padding-box;
  background: linear-gradient(to bottom, yellow, white);
font-weight: bold;
padding-top:6px; 
color: tomato
}
.container-right{
border: solid 2px rgb(253, 253, 175);
margin-left: 1%;
}
.paymethod :nth-child(2){
    background-image:url('./../assets/zhifubao.png');
}
.paymethod :nth-child(3){
    background-image:url('./../assets/xinyongka.png');
}
.paymethod :nth-child(4){
    background-image:url('./../assets/bit.jpg');
    background-size: 20px 20px
}
.paymethod li{
  float: left;
  margin-right: 10px;
  padding-left: 25px;
background-repeat: no-repeat;
background-position: left;
}
.commitment li{
  float: left;
  margin-right: 10px;
  padding-left: 25px;
background-repeat: no-repeat;
background-position: left;
}
.commitment :nth-child(2){
  background-image:url('./../assets/fahuo.jpg');
}
.commitment :nth-child(3){
  background-image:url('./../assets/yunfeixian.png');
}
#smallcanvas{
  width:200px;
  height:200px;
  position: fixed;
  background: rgba(0,0,0,0.5);
  z-index: inherit;
}
#numText{
  width: 100%;
height: 100%;
padding-bottom: 7px;
}
.numli li { 
float: left;
  width: 8%;
height: 25px;
border: solid 1px #d3cece;
text-align: center;
font-weight: bold;
background: #c0c0c0;
}
.numli{
  width: 80%;
}

.imgul li img{
  float: left;

}
.imgul li img:hover{
   border-color: #ff4400;
}
 .imgul .cur{
  border:solid 2px #ff4400;

}
.sizeLi li {
float: left;
width: 25px;
height: 25px;
margin: 5px ;
padding-left: 5px;
border: solid 1px #d3cece
}


.sizeLi li:hover{
   border-color: #ff4400;
}
.sizeLi .cur{
  border:solid 2px #ff4400;

}
.context{
  margin: 0 auto;
  padding-top: 30px;
  width: 95%;
 display: inline-block
}
.img-left{
float: left;
width: 37%;
}
.container-center{
  float: left;
  width: 40%;
  text-align: left;
  line-height: 25px;
  margin-left: 3%
}
.container-right{
  float: right;
  width: 19%;
  padding-bottom: 50px;
}
.container-productInfo{
  width: 95%;
  background: #fff2e8;
  font-weight: bold;
}
</style>

