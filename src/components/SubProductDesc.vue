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
            <li :class="{'cur':subCurStatus==1}" @click="changsubCurStatus(1);getSalerproductop('productSalerNum')">
              <a>销售量
                <span v-show="subCurStatus==1" style="color:#ff8040">↑</span>
              </a>
            </li>
            <li :class="{'cur':subCurStatus==2}" @click="changsubCurStatus(2);getSalerproductop('salePrice')">
              <a>价格
                <span v-show="subCurStatus==2" style="color:#ff8040">↑</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="ranking">

          <ul>
            <li v-for="(item,index) in productTop10">
              <a :href="'/#/productdesc?_id='+item._id" target="_blank">
                <img v-lazy="'/static/img/'+item.productImage" />
                <p>{{item.productName}}</p>
                <p style="color:#ff8000;font-weight:bold">${{item.salePrice}}
                  <span style="float:right;color:#808080;font-size:7px" v-show="subCurStatus==1">销量:{{item.productSalerNum}}</span>
                </p>
              </a>
            </li>
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
            <li :class="{'cur':curStatus==3}" @click="changCurStatus(3);">
              <a>专享服务</a>
            </li>
          </ul>
        </div>
        <div style="display: inline-block;" class="prodctudesc" v-show="curStatus==1">
          <ul>
            <li v-for="(item,index) in data.productDetail" v-bind:key="index">
              <h5>
                <span>{{item}}</span>
              </h5>
            </li>

          </ul>
          <img v-lazy="'/static/img/'+data.productImage" />
          <img v-lazy="'/static/salerimg/'+item.productImg" v-for="item in data.prodcutColor" />
        </div>
        <!-- 评论区 -->
        <div class="productReview" v-show="curStatus==2">
          <ul>
            <li v-for="item in data.productReview">
              <div>
                <h5 class="reviewname">用户名:
                  <span>{{item.reviewName}}</span>
                </h5>
                <h5 style="float:right;width:70%;">{{item.reviewText}} </h5>
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

        <div style="display: inline-block;" v-show="curStatus==3">
          专项服务
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
  import axios from 'axios'
  export default {
    props: ['data'],
    data() {
      return {
        curStatus: 1,
        subCurStatus: 1,
        productTop10: [],
      }
    },
    methods: {
      changsubCurStatus(index) {
        this.subCurStatus = index
      },
      changCurStatus(index) {
        this.curStatus = index;
      },
      getSalerproductop(salerNumOrReView) {
        //productSalerNum   or    productReview
        var params = {
          productSaler_id: this.data.productSaler_id,
          sortMethod: salerNumOrReView,
          skip: 0
        }
        axios.get('/salers/salerinfo/productop', {
          params: params
        }).then((res) => {
          if (res.data.status == 0) {
            this.productTop10 = res.data.result;
          }
        });
      },
    },
    mounted() {
      this.getSalerproductop('productSalerNum');
    },
    computed: {
      reviews() {
        return this.data.productReview.length;
      }
    }
  }

</script>
