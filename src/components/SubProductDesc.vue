<template>
  <div>
    <div class="context" style="display:inline-block">
      <!--part left-->
      <div class="subproductdesc-left">
        <div class="salerheader">
          <h4>
            <b>宝贝排行榜</b>
          </h4>
        </div>
        <div class="productshow">
          <ul>
            <li :class="{'cur':subCurStatus==1}" @mouseover="changsubCurStatus(1)">
              <a>销售量</a>
            </li>
            <li :class="{'cur':subCurStatus==2}" @mouseover="changsubCurStatus(2)">
              <a>收藏数</a>
            </li>
          </ul>
        </div>
  <div class="ranking">

<ul v-show="true">
<li><a><img  src="./../../static/img/22.jpg"/><p>夏可外穿春秋甜美韩版长袖休闲宽松</p><p style="color:#ff8000;font-weight:bold">$326.00</p></a></li>
<li><a><img  src="./../../static/img/22.jpg"/><p>夏可外穿春秋甜美韩版长袖休闲宽松</p><p style="color:#ff8000;font-weight:bold">$326.00</p></a></li>
<li><a><img  src="./../../static/img/22.jpg"/><p>夏可外穿春秋甜美韩版长袖休闲宽松</p><p style="color:#ff8000;font-weight:bold">$326.00</p></a></li>
</ul>
</div>
      </div>
      <!--part center-->
      <div class="subproductdesc-center">
        <div class="one">
          <ul>
            <li :class="{'cur':curStatus==1}" @click="changCurStatus(1)">
              <a>宝贝详情</a>
            </li>
            <li :class="{'cur':curStatus==2}" @click="changCurStatus(2)">
              <a>累计评论
                <span style="color:#ff8000;">
                  <b>{{reviews}}</b>
                </span>
              </a>
            </li>
            <li :class="{'cur':curStatus==3}" @click="changCurStatus(3)">
              <a>专享服务</a>
            </li>
          </ul>
        </div>
        <div class="prodctudesc" v-show="curStatus==1">
          <ul>
            <li v-for="(item,index) in data.productDetail" v-bind:key="index">
              <h5>
                <span>{{item}}</span>
              </h5>
            </li>
           
          </ul>
          <img v-lazy="'/static/img/'+data.productImage" />
          <img  v-lazy="'/static/salerimg/'+item.productImg" v-for="item in data.prodcutColor" />
        </div>

        <div class="productReview" v-show="curStatus==2">
          <ul>
            <li v-for="item in data.productReview">
              <div>
                     <h5 class="reviewname">用户名:
                      <span>{{item.reviewName}}</span>
                    </h5>
                <h5 style="float:right;width:70%;">{{item.reviewText}}  </h5>
                  <br/>
                  <br/>
                  <h6 class="timeinfo">
               
                    <span style="float:right; color: #808080;">{{data.reviewTime}} &nbsp;&nbsp;&nbsp;颜色/款式:
                      <span>{{item.productColor}}&nbsp;&nbsp;</span>尺码/套餐:
                      <span>{{item.productSize}}</span>
                    </span>
                  </h6>
              
              </div>
            </li>
     
          </ul>
        </div>

      </div>
      <!--part right-->
      <div class="subproductdesc-right">
        <h1 style="width:20%">此广告位常年招租</h1>
      </div>
    </div>


  </div>

  </div>
</template>
<script>
  export default {
    props:['data'],
    data() {
      return {
        curStatus: 1,
        subCurStatus: 1
      }
    },
    methods: {
      changsubCurStatus(index) {
        this.subCurStatus = index
      },
      changCurStatus(index) {
        this.curStatus = index;
      },
    },
    mounted() {
      
    },
    computed: {
      reviews(){
return this.data.productReview.length;
      }
    }
  }

</script>

<style>
.ranking ul{
display: block;
}
.ranking ul li{
margin: 30px 10px;
text-align: left;
}
.ranking ul li img{
float: left;
width: 40px;
}
.ranking ul li img:hover{
width: 60px;
height: 60px;
}
.ranking ul li p{
  margin: 0 5px;
  font-size: 10px;
  line-height: 15px;
}
.reviewname{
  margin-top: 50px;
}
  .timeinfo {
    float: left;
    width: 97%;
  }

  .productReview ul {
    width: 90%;
    display: inline-block;
  }

  .productReview ul li h5 {
    float: left;
  }
  .productReview ul li{
    border-top: solid 1px #c0c0c0;
    padding-bottom: 20px;
    width: 100%;
    display: inline-block;
  }
  .productReview ul li div {
    width: 100%;
    height: 50px;
    background-image: url(./../assets/buyer.png);
    background-size: 50px 50px;
    margin: 15px 0;
    background-repeat: no-repeat;
    text-align: left
  }

  .productshow ul {
    width: 100%;
    margin:15px 0px 0 0;
    display: inline-block;
  }

  .productshow ul li {
    width: 25%;
    float: left;
    padding: 10px 0;
    border: solid 1px #ffffff;
  }

  .productshow ul .cur {
    border: solid 1px #c0c0c0;
    background: white;
    border-bottom: none;
  }

  .salerheader {
    width: 100%;
    color: white;
    background: #808080;
    padding: 10px 0;
  }

  .subproductdesc-center img {
    width: 95%;
    margin-top: 30px;
  }

  .prodctudesc ul {
    width: 100%;
  }

  .prodctudesc ul li {
    margin-top: 8px;
    width: 30%;
    float: left;
  }

  .subproductdesc-center .one ul {
    width: 100%;
    border-top: solid 1px #c0c0c0;
    display: inline-block;
    line-height: 40px;
  }

  .subproductdesc-center .one ul li {
    border-right: solid 1px #c0c0c0;
    border-bottom: solid 1px #c0c0c0;
    background: #e3e3e3;
    width: 20%;
    float: left;
  }

  .subproductdesc-center .one .cur {
    background: white;
    border-bottom: none;
    border-top: solid 2px #ff8000;
    color: tomato;
  }

  .subproductdesc-left {
    float: left;
    width: 20%;
  }

  .subproductdesc-center {
    float: left;
    width: 60%;
    border-left: solid 1px #c0c0c0;
    border-right: solid 1px #c0c0c0;
    background: white
  }

  .subproductdesc-right {
    float: right;
    width: 20%;

  }

</style>
