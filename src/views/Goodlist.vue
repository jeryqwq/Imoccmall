<template>
  <div>


    <nav-header></nav-header>
    <loc-solt location="商品列表"></loc-solt>
    <div class="accessory-result-page accessory-page">
      <div class="container">
        <div class="filter-nav">
          <span class="sortby">排序:</span>
          <a href="javascript:void(0)" class="default" v-bind:class="{'cur':isDeafault==0}" @click="isDeafault=0;getGoodsList()">
            <a style="color:#000000;" class="addr-more-btn up-down-btn " :class="{'open':isup}" href="javascript:;">
              默认
              <i class="i-up-down" v-show="isDeafault==0">
                <i class="i-up-down-l"></i>
                <i class="i-up-down-r"></i>
              </i>
            </a>
          </a>
          <a href="javascript:void(0)" class="price" v-bind:class="{'cur':isDeafault==1}" @click="sortGoods(1);isup=!isup">
            <a style="color:#000000;" class="addr-more-btn up-down-btn " :class="{'open':isup}" href="javascript:;">
              价格
              <i class="i-up-down" v-show="isDeafault==1">
                <i class="i-up-down-l"></i>
                <i class="i-up-down-r"></i>
              </i>
            </a>
          </a>
          <a href="javascript:void(0)" class="price" v-bind:class="{'cur':isDeafault==2}" @click="sortGoods(2);isup=!isup">
            <a style="color:#000000;" class="addr-more-btn up-down-btn " :class="{'open':isup}" href="javascript:;">
              销售量
              <i class="i-up-down" v-show="isDeafault==2">
                <i class="i-up-down-l"></i>
                <i class="i-up-down-r"></i>
              </i>
            </a>
          </a>
          <a href="javascript:void(0)" class="price" v-bind:class="{'cur':isDeafault==3}" @click="sortGoods(3);isup=!isup">
            <a style="color:#000000;" class="addr-more-btn up-down-btn " :class="{'open':isup}" href="javascript:;">
              类型
              <i class="i-up-down" v-show="isDeafault==3">
                <i class="i-up-down-l"></i>
                <i class="i-up-down-r"></i>
              </i>
            </a>
          </a>
          <a href="javascript:void(0)" class="filterby stopPop" @click="showFilterPop">过滤</a>
        </div>
        <div class="accessory-result">
          <!-- filter -->

          <div class="filter stopPop" id="filter" v-bind:class="{'filterby-show':filterBy}" @keyup.enter="page=1;getGoodsList()">
            <dl class="filter-price">
              <input class="txt_form" v-model="serchText" type="text" placeholder="Input Product Name Here" @keydown.enter="" />
              <input value="搜索" class="btn btn--red " @click="serch()" style="width:100%;margin-bottom:20px" type="button" />
              <dt>Price:</dt>
              <dd>
                <a href="javascript:void(0)" v-bind:class="{'cur':priceChecked=='all'}" @click="setPriceFilter('all');busy=false">All</a>
              </dd>
              <dd v-for="(item,index) in priceFliter" v-bind:key="item.index">
                <a href="javascript:void(0)" @click="setPriceFilter(index)" v-bind:class="{'cur':priceChecked==index}">{{priceFliter[index].startPrice}} - {{priceFliter[index].endPrice}}</a>
              </dd>

            </dl>
          </div>
          <!-- search result accessories list -->
          <div class="accessory-list-wrap">
            <div class="accessory-list col-4">
              <ul>
                <li v-for="item in goodsList" v-bind:key="item.index">
                  <div class="pic">
                    <a :href="'/#/productdesc?_id='+item._id">
                      <img v-lazy="'/static/img/'+item.productImage" alt="">
                    </a>
                  </div>
                  <div class="main">
                    <div class="name">{{item.productName}}</div>
                    <div class="price">{{item.salePrice}}</div>
                    <div style="float:right;font-size:10px">已售({{item.productSalerNum}})件</div>
                    <div class="btn-area">
                      <a href="javascript:;" class="btn btn--m" @click="addCart(item._id)">加入购物车</a>
                    </div>
                  </div>
                </li>
              </ul>
              <div class="load-more" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="30">
                <img src="./../assets/loading-spinning-bubbles.svg" v-show="isLoadding" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="md-overlay" v-show="overLayFlag" @click="closePop"></div>
    <nav-footer></nav-footer>
  </div>

</template>
<style>
  .load-more {
    background: rgba(0, 0, 0, 0.1)
  }

</style>

<script>
  import LocSolt from '@/components/LocSolt';
  import "./../assets/css/base.css";
  import "./../assets/css/product.css";
  import "./../assets/css/checkout.css";
  import NavHeader from "@/components/Header.vue";
  import NavFooter from "@/components/Footer.vue";
  import axios from "axios";
  import Model from './../components/Model'
  import utils from './../util'
  export default {
    data() {
      return {
        isup: false,
        serchText: '',
        isDeafault: 0,
        isLoadding: 0,
        busy: true,
        page: 1,
        pageSize: 8,
        sortgoods: true,
        goodsList: [],
        priceFliter: [{
            startPrice: 0,
            endPrice: 500
          },
          {
            startPrice: 500,
            endPrice: 1000
          },
          {
            startPrice: 1000,
            endPrice: 2000
          },
          {
            startPrice: 2000,
            endPrice: 3000
          },
          {
            startPrice: 3000,
            endPrice: 5000
          },
          {
            startPrice: 5000,
            endPrice: 8000
          },
          {
            startPrice: 8000,
            endPrice: 10000
          }, {
            startPrice: 10000,
            endPrice: "以上"
          }
        ],
        priceChecked: "all",
        filterBy: false,
        overLayFlag: false,
        isModel: false
      };
    },
    components: {
      NavHeader: NavHeader,
      NavFooter: NavFooter,
      Model: Model,
      LocSolt: LocSolt
    },
    mounted: function () {
      this.getGoodsList();
      document.title = "请选择购买商品";
    },
    methods: {
      serch() {
        if (!this.serchText) {
          return;
        }
        this.priceLevel = 'all';
        this.page = 1;
        this.getGoodsList()
      },
      addCart(_id) {
        axios.post('/goods/addCart', {
          "_id": _id,
          'userId': this.$store.state.userId
        }).then((res) => {
          if (res.data.status == 1) {
            alert(res.data.msg);
          } else {
            this.$store.commit('updateCartCount', res.data.cartCount);
          }
        })
      },

      loadMore() {
        this.busy = true;
        setTimeout(() => {
          this.page++;
          this.getGoodsList(true);
        }, 1000);
      },
      getGoodsList(falg) {
        this.isLoadding = true;
        var params = {
          "page": this.page,
          "pageSize": this.pageSize,
          "sort": this.sortgoods ? 1 : -1,
          "priceLevel": this.priceChecked,
          "isDeafault": this.isDeafault,
          'serchText': this.serchText,
        }
        axios.get("goods/list", {
          params: params
        }).then(result => {
          if (falg) {
            this.goodsList = this.goodsList.concat(result.data.result.list);
            if (result.data.result.count < 8) {
              this.busy = true;
              this.isLoadding = false;
            } else {
              this.busy = false;
            }
          } else {
            this.goodsList = result.data.result.list;
            this.busy = false;
          }
        });

      },
      sortGoods(index) {
        this.isDeafault = index;
        this.page = 1;
        this.sortgoods = !this.sortgoods;
        this.getGoodsList();
        this.busy = true;
      },
      showFilterPop() {
        this.filterBy = true;
        this.overLayFlag = true;
      },
      closePop() {
        this.overLayFlag = false;
        this.filterBy = false;
      },
      setPriceFilter(index) {
        this.page = 1;
        this.priceChecked = index;
        this.closePop();
        this.getGoodsList();

      }
    }
  };

</script>
