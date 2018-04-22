<template>
  <div>
    <nav-header></nav-header>
    <saler-info></saler-info>
    <loc-solt location='商品详情'></loc-solt>
    <div class="context" @mouseover="isBigImg=false">
      <div class="img-left" width="100%">
        <div style="position:absoult;">
          <div id='smalldiv' v-show="isCanvas" @mousemove="moveCanvas($event)">
          </div>
        </div>
        <img id="modelimg" v-lazy="url+imgUrl" width="100%" />
        <ul class="imgul" style="display:inline-block;margin-top:30px;">
          <li   @mouseover="reViewState=50;changImgUrl(mainImgUrl,true)">
            <a>
              <img  :class="{'cur':reViewState==50}"  v-lazy="'/static/img/'+mainImgUrl" width="20%" />
            </a>
          </li>
          <li  @mouseover="reViewState=index;changImgUrl(item.productImg,false)" v-for="(item,index) in productData.prodcutColor" v-bind:key="index">
            <a>
              <img :class="{'cur':reViewState==index}"  v-lazy="'/static/salerimg/'+item.productImg" width="20%" />
            </a>
          </li>
        </ul>
      </div>
      <!--居中部分 -->
      <div class="container-center">
        <div class="bigimg" v-show="isBigImg">
          <img id="bigimg" width="150%" v-lazy="url+imgUrl" />
        </div>
        <h2>
          <b>{{productData.productName}}</b>
        </h2>
        <h5 style="color:#808080;line-height:15px">{{productData.productDesc}}</h5>
        <div class="container-productInfo">
          <div style="float:left">
            <span style="font-size:10px;color:#808080">
              <img src="./../../static/logo/5acf3beae1168a16f73594fa.png" width="80px" height='15px' />海量新品，尽在潮搭,玩趣互动</span>
          </div>
          <div>
            <table style="color:#6C6C6C;margin: 0 auto; text-align:center;">
              <tr>
                <td >{{productReview}}</td>
                <td>{{productData.productSalerNum}}</td>
              </tr>
              <tr>
                <td>累计评论&nbsp;</td>
                <td>销售数量</td>
              </tr>
            </table>
          </div>
          <p>价格：
            <span style="font-size:36px;color:#F40">${{productData.productSize[sizeState].price}}</span>
          </p>
        </div>
        <hr/>

        <ul v-if="productData.productSize" class="sizeLi" style="display:inline-block;">
          <p style="float:left;margin-top:5px">尺码/套餐：&nbsp;&nbsp;&nbsp;</p>
          <li  v-for="(item,index) in productData.productSize" @click="sizeState=index" :class="{'cur':sizeState==index}">
            <a>{{item.value}}</a>
          </li>
        </ul>


        <br/>
        <ul class="imgul" style="display:inline-block;">
          <p style="float:left;margin-top:10px">颜色/款式:&nbsp;&nbsp;</p>
          <li @click="colorState=index;changImgUrl(item.productImg,false)" v-for="(item,index) in productData.prodcutColor">
            <a>
              <img :class="{'cur':colorState==index}" v-lazy="'/static/salerimg/'+item.productImg" width="10%" style="margin-left:5px" />
            </a>
          </li>
        </ul>
        <br/>
        <br/>
        <ul class="numli" style="display:inline-block;">
          <p style="float:left;">数量：&nbsp;&nbsp;&nbsp;</p>
          <li @click="changNum(0);">
            <a>-</a>
          </li>
          <li style="width:25%;">
            <input id='numText' type="text" v-model="productNumBuy" />
          </li>
          <li @click="changNum(1);">
            <a>+</a>
          </li>
          <p style="font-size:15px;color: #525252;">件(库存{{productNum}}件)</p>
        </ul>
        <div class="errTotas" v-show="productNum<productNumBuy">{{errmsg}}</div>
        <br/>
        <br/>
        <ul style="display:inline-block;width:100%">
          <a class="btn btn--m btn--m " :class="{'btn--dis':productNum<productNumBuy}" style="float: left;" @click="toCheckList()">现在购买</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a class="btn btn--m btn--red" :class="{'btn--dis':productNum<productNumBuy}" @click="toaddCart()">加入购物车</a>
        </ul>
        <br/>
        <br/>
        <ul class="commitment" style="display:inline-block;">
          <p style="float:left">承诺:&nbsp;&nbsp;</p>
          <li>永不发货</li>
          <li>0运费险</li>
        </ul>
        <br/>
        <ul class="paymethod" style="display:inline-block;">
          <p style="float:left">支付:&nbsp;&nbsp;</p>
          <li>蚂蚁花呗</li>
          <li>信用卡</li>
          <li>比特币</li>
        </ul>
      </div>
      <!-- 右部店铺-->
      <div class="container-right">
        <div class="salerlevel">
          <h3>
            <b>金牌卖家</b>
          </h3>
          <h5 style="float:left">我的金牌，您的信赖</h5>
        </div>
        <div class="salerinfo" style="display:inline-block;padding-bottom:20px">
          <h4>
            <b>{{salerInfo.shopName}}</b>
          </h4>
          <ul style="display:inline-block">
            <li>
              <span>掌柜:&nbsp;&nbsp;</span>
              <span>{{salerInfo.shopNickName}}</span>
            </li>
            <br/>
            <li>
              <span>信誉:&nbsp;&nbsp;</span>
              <img v-for=" item in salerInfo.shopLevel" src="./../assets/xinyu.gif" />
            </li>
            <br/>
            <li>
              <span>联系方式:&nbsp;&nbsp;</span>
              <span>{{salerInfo.shopContect}}</span>
            </li>
            <br/>
            <li>
              <span>店铺类型:&nbsp;&nbsp;</span>
              <span>{{salerInfo.shopDesc}}</span>
            </li>
               <br/>
            <li>
              <span>被收藏数:&nbsp;&nbsp;</span>
              <span>{{salerInfo.shopCollected}}</span>
            </li>
          </ul>
          <br/>

          <ul class="addshop">
            <li style="float:left">
              <a>收藏店铺</a>
            </li>
            <li style="float:right">
              <a>进入店铺</a>
            </li>
          </ul>
        </div>
        <!-- 一张优惠券-->
        <!-- <div class="salerticker">
<img width="200px" src="./../../static/img/detail.jpg"/>
<h3>卖家很小气</h3>
</div> -->

        <div v-for="item in tickets" class="salerticker">
          <div>
            <h3>
              <b v-if="item.ticketType=='full'">优惠券</b>
              <b v-if="item.ticketType=='discount'">折扣券</b>
              <p>
                <b>{{item.ticketValue}}</b>
              </p>
            </h3>
          </div>
          <a>
            <h3 class="ticketinfo">
              <b>领券购买</b>
            </h3>
            <h6>
              <b>满{{item.ticketFull}}可用</b>
            </h6>
          </a>
        </div>
      <div class="shipping-addr-more">
          <a class="addr-more-btn up-down-btn " :class="{'open':ticketlimit==3}" href="javascript:;" @click="expend()">
            more
            <i class="i-up-down">
              <i class="i-up-down-l"></i>
              <i class="i-up-down-r"></i>
            </i>
          </a>
        </div>


      </div>
    </div>
    <sub-product-desc :data="productData" :length="productReview"></sub-product-desc>
    <nav-footer></nav-footer>
  </div>
</template>
<script>
import './../assets/css/desc.css'
  import SalerInfo from '@/components/SalerInfo'
  import NavHeader from '@/components/Header'
  import NavFooter from '@/components/Footer'
  import LocSolt from '@/components/LocSolt'
  import axios from "axios"
  import SubProductDesc from '@/components/SubProductDesc'
  import utils from './../util'
  export default {
    data() {
      return {
        productData:{},
        isBigImg: false,
        errmsg: '您填写的宝贝数量超过仓库拉！',
        isCanvas: true,
        sizeState: 0,
        colorState: 0,
        reViewState: 50,
        productNumBuy: 1,
        imgUrl:'',
        productNum: 0,
 mainImgUrl:'',
 url:'/static/img/',
 salerInfo:[],
 id:'',
 ticketlimit:3,
 saler_id:''
      }
    },

    mounted() {
      this.getProductDesc();
         this.id=this.$route.query._id;
        
    }
    ,
   computed: {
     productReview(){
       return this.productData.productReview.length;
     },
tickets(){
 return this.salerInfo.shopTickets.slice(0,this.ticketlimit);
}
   },
    methods: {
    
    expend(){
if(this.ticketlimit==3){
  this.ticketlimit=6;
}else{
  this.ticketlimit=3;
}
    },
      toCheckList(){
        if(this.productNum<this.productNumBuy){
            return;
        }
        var toBackEndCheckList={
          _id:this.$store.state._id,
          userId:this.$store.state.userId,
          productNum:this.productNumBuy,
          productPrice:productData.productSize[this.sizeState].price,
        }
this.$store.state.commit('updateToBackendCheckList',toBackEndCheckList);
      },
      toaddCart(){
          if(this.productNum<this.productNumBuy){
            return;
        }
      axios.post('/goods/addCart',{
        "_id":this.id,
'userId':this.$store.state.userId
}).then((res)=>{
if(res.data.status==1){
alert(res.data.msg);
}else{
  this.$store.commit('updateCartCount',res.data.cartCount);
}
})
     
      },
      getSalerInfo(_id){
axios.get('/salers/salerinfo?_id='+_id).then((res)=>{
if(res.data.status==1){
  console.log(res.data.status)
}else{
this.salerInfo=res.data.result;
}
})
      },
      getProductDesc() {
        axios.get('/goods/productdesc?_id='+this.$route.query._id).then((res) => {
      if(res.data.status==0){
           this.productData=res.data.result;
        this.imgUrl=  this.mainImgUrl=this.productData.productImage;
          document.title =this.productData.productName;
         this.productNum=this.productData.productRemainNum;
         this.getSalerInfo(this.productData.productSaler_id);
      }
        })
      },
      moveCanvas(event) {
        this.isBigImg = true;
        var sclTop = document.body.scrollTop;
        // document.body.scrollTop = document.documentElement.scrollTop = 0;
        var smalldiv = document.getElementById('smalldiv');
        var modelimg = document.getElementById('modelimg');
        var bigimg = document.getElementById("bigimg");
        var maxwidth = modelimg.clientWidth;
        var maxheight = modelimg.clientHeight;
        var l = modelimg.offsetLeft;
        var t = modelimg.offsetTop;
        smalldiv.style.width = maxwidth / 2 + 'px';
        smalldiv.style.height = maxheight / 2 + 'px';
        smalldiv.style.left = event.clientX - maxwidth / 4 + 'px';
        smalldiv.style.top = event.clientY - maxheight / 4 + sclTop + 'px';
        bigimg.style.left = -Number(smalldiv.style.left.replace(/\s+|px/gi, "")) + l + "px";
        bigimg.style.top = -Number(smalldiv.style.top.replace(/\s+|px/gi, "")) + t + 'px';
        if (Number(smalldiv.style.left.replace(/\s+|px/gi, "")) < l) {
          smalldiv.style.left = l + "px";
          bigimg.style.left = 0 + "px"
        }
        if (Number(smalldiv.style.top.replace(/\s+|px/gi, "")) < t) {
          smalldiv.style.top = t + "px";
          bigimg.style.top = 0 + "px";
        }
        if (Number(smalldiv.style.left.replace(/\s+|px/gi, "")) > l + maxwidth - maxheight / 2) {
          smalldiv.style.left = l + maxwidth - maxheight / 2 + 'px';
        }
        if (Number(smalldiv.style.top.replace(/\s+|px/gi, "")) > t + maxheight - maxwidth / 2) {
          smalldiv.style.top = t + maxheight - maxwidth / 2 + "px";
        }

      },
      changNum(index) {
        if (index == 1) {
          this.productNumBuy++;
        } else {
          this.productNumBuy--;
        }
        if (this.productNumBuy <= 1) {
          this.productNumBuy = 1;
        } else if (this.productNumBuy >= this.productNum) {
          this.productNumBuy = 1;
        }

      },
      changImgUrl(url,isfist) {
        if(isfist==true){
            this.url="/static/img/";
          this.imgUrl = url;
        }else{
          this.url="/static/salerimg/";
         this.imgUrl = url;
        }
        
      }
    },
    components: {
      NavFooter: NavFooter,
      NavHeader: NavHeader,
      SalerInfo: SalerInfo,
      LocSolt: LocSolt,
      SubProductDesc: SubProductDesc
    }
  }

</script>

