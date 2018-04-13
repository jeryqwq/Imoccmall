# imoccmall

> A Vue.js project



高仿慕课全栈商城，node+Mongo+vue+vuex前后端分离,新增用户板块，商品详情（防淘宝网商品页面），购物券

## FrontEnd Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8989
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
## BackEnd Build Setup
``` bash
# install dependencies
npm install
# serve listen witn 3000 port
node server/bin/www
```
## 数据库
``` bash
# goods 商品（价格，日期，ID，图片地址。。。）
# users 用户信息（地址，购物车，购物记录。。。）
# saler （卖家优惠，购物券。。。）
```

## 组件
``` bash
子组件：Model（全局模态框）  NavHeader（顶部） NavFooter（底部）
Success（结算成功） ShoppingHistory（购物历史） LocSolt（浏览位置插槽）
UserTicker（用户优惠券） 
Views（父组件）：
（address）地址选择   cart（购物车） Goodlist（商品列表）  user（用户信息） desc(商品描述页面)
```

后续更新卖家版和个人设置等组件
# [click to my Blog](http://chenjieweb.top/enter)
For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
