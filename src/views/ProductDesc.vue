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
          <li @mouseover="reViewState=50;changImgUrl(mainImgUrl,true)">
            <a>
              <img :class="{'cur':reViewState==50}"  v-lazy="'/static/img/'+mainImgUrl" width="20%" />
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
        <h5 style="color:#808080;">{{productData.productDesc}}</h5>
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
              <img :class="{'cur':colorState==index}" v-lazy="'/static/salerimg/'+item.productImg" width="10%" />
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
          <li style="width:15%;">
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
          <a class="btn btn--m btn--m " style="float: left;">现在购买</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a class="btn btn--m btn--red">加入购物车</a>
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

        <div v-for="item in salerInfo.shopTickets" class="salerticker">
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



      </div>
    </div>
    <sub-product-desc :data="productData" :length="productReview"></sub-product-desc>
    <nav-footer></nav-footer>
  </div>
</template>
<script>
  import SalerInfo from '@/components/SalerInfo'
  import NavHeader from '@/components/Header'
  import NavFooter from '@/components/Footer'
  import LocSolt from '@/components/LocSolt'
  import axios from "axios"
  import SubProductDesc from '@/components/SubProductDesc'
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
      }
    },
    mounted() {
      this.getProductDesc();
    },
   computed: {
     productReview(){
       return this.productData.productReview.length;
     }
   },
    methods: {
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
<style>
  .bigimg {
    width: 400px;
    height: 400px;
    overflow: hidden;
    position: absolute;
  }

  .bigimg img {
    position: absolute;
    left: 0px;
    top: 0px;
  }

  .salerticker h6 {
    color: white;
  }

  .ticketinfo {
    color: white;
    padding-top: 4px
  }

  .salerticker div:nth-child(1) {
    float: left;
    background: #f2ebcf;
    width: 40%;
    height: 100%;
    color: #ff0080;
    border-right: dotted 2px black
  }

  .salerticker {
    margin: 10px auto;
    width: 90%;
    height: 40px;
    background: #ed145b
  }

  .addshop {
    margin: 10px;
  }

  .addshop li {
    border: solid 1px rgba(0, 0, 0, 0);
    padding: 0 4px;
  }

  .addshop li:hover {
    border: solid 1px #c0c0c0;

  }

  .errTotas {
    border: solid 2px #ff0000;
    line-height: 25px;
    width: fit-content;
    padding-left: 10px;
    color: #808080;
    font-size: 10px
  }

  .salerinfo ul li {
    float: left;
    font-size: 12px;
    line-height: 30px;
  }

  .salerlevel {
    width: 100%;
    display: inline-block;
    height: 70px;
    background-clip: padding-box;
    background: linear-gradient(to bottom, yellow, white);
    font-weight: bold;
    padding-top: 6px;
    color: tomato
  }

  .container-right {
    border: solid 2px rgb(253, 253, 175);
    margin-left: 1%;
  }

  .paymethod :nth-child(2) {
    background-image: url('./../assets/zhifubao.png');
  }

  .paymethod :nth-child(3) {
    background-image: url('./../assets/xinyongka.png');
  }

  .paymethod :nth-child(4) {
    background-image: url('./../assets/bit.jpg');
    background-size: 20px 20px
  }

  .paymethod li {
    float: left;
    margin-right: 10px;
    padding-left: 25px;
    background-repeat: no-repeat;
    background-position: left;
  }

  .commitment li {
    float: left;
    margin-right: 10px;
    padding-left: 25px;
    background-repeat: no-repeat;
    background-position: left;
  }

  .commitment :nth-child(2) {
    background-image: url('./../assets/fahuo.jpg');
  }

  .commitment :nth-child(3) {
    background-image: url('./../assets/yunfeixian.png');
  }

  #smalldiv {
    position: absolute;
    background: rgba(0, 0, 0, 0.5);
    width: 200px;
    height: 200px;
  }

  #numText {
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

  .numli {
    width: 80%;
  }

  .imgul li img {
    float: left;
    margin-left: 5px
  }

  .imgul li img:hover {
    border-color:solid 2px #ff4400;
  }

  .imgul .cur {
    border: solid 2px #ff4400;
  }

  .sizeLi li {
    float: left;
padding-right: 5px;
    margin: 5px;
    padding-left: 5px;
    border: solid 1px #d3cece
  }


  .sizeLi li:hover {
    border-color: #ff4400;
  }

  .sizeLi .cur {
    border: solid 2px #ff4400;

  }

  .context {
    margin: 0 auto;
    padding-top: 30px;
    width: 95%;
    display: inline-block
  }

  .img-left {
    float: left;
    width: 37%;
  }

  .container-center {
    float: left;
    width: 40%;
    text-align: left;
    line-height: 30px;
    margin-left: 3%
  }

  .container-right {
    float: right;
    width: 19%;
    padding-bottom: 50px;
  }

  .container-productInfo {
    width: 95%;
    background: #fff2e8;
    font-weight: bold;
    line-height: 40px;
  }

</style>
