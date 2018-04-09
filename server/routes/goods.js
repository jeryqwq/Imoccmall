var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Goods = require('../models/goods');
mongoose.connect('mongodb://127.0.0.1:27018/imoccmall');
mongoose.connection.on('connected', () => {
  console.log("mongo  connected")
});
mongoose.connection.on("error", () => {
  console.log('mongo failed')
});
mongoose.connection.on("disconnected", () => {
  console.log('Mongo is disconnected')
});
router.get("/list", (req, res, next) => {
  let serchText = req.param('serchText');
  let priceLevel = req.param("priceLevel");
  let pageSize = parseInt(req.param("pageSize"));
  let page = parseInt(req.param("page"));
  let sort = req.param('sort');
  let skip = (page - 1) * pageSize;
  let isDeafault = req.param('isDeafault');
  let min = 0,
    max = 0;
  let params = {
    // 'productName':serchText
  };
  if (priceLevel != "all") {
    switch (parseInt(priceLevel)) {
      case 0:
        min = 0;
        max = 500;
        break;
      case 1:
        min = 500;
        max = 1000;
        break;
      case 2:
        min = 1000;
        max = 2000;
        break;
      case 3:
        min = 2000;
        max = 3000;
        break;
      case 4:
        min = 3000;
        max = 5000;
        break;
      case 5:
        min = 5000;
        max = 8000;
        break;
      case 6:
        min = 8000;
        max = 10000;
        break;
      case 7:
        min = 10000;
        max = 9999999;
        break;
    }
    params = {
      salePrice: {
        $lt: max,
        $gte: min,
      }
    }
  };
  let goodsModel = Goods.find(params).skip(skip).limit(pageSize);

  if (isDeafault == 1) {
    goodsModel.sort({
      'salePrice': sort
    });
  }
  goodsModel.exec((err, data) => {
    if (err) {
      res.json({
        status: '1',
        msg: err.message
      })
    } else {
      res.json({
        status: '0',
        msg: 'success!',
        result: {
          count: data.length,
          list: data
        }
      })
    }
  })
});

router.post('/addCart', (req, res, next) => {

  var userId = req.body.userId;
  var productId = req.body.productId;
  var User = require('./../models/user');
  User.findOne({
    "userId": userId
  }, (err, userdata) => {
    if (err) {
      res.json({
        status: 1,
        msg: err.message,
      })
    } else {
      if (userdata) {
        Goods.findOne({
          'productId': productId
        }, (err, data2) => {
          if (err) {
            res.json({
              status: 1,
              msg: err.message,
            })
          } else {
            let number;
            if (data2) {
              if (userdata.cartList.length == 0) {
                var newdata = {
                  productId: data2.productId,
                  productName: data2.productName,
                  salePrice: data2.salePrice,
                  productImage: data2.productImage,
                  productNum: 1,
                }
              } else if (userdata.cartList.length !== 0) {
                userdata.cartList.forEach((element, index) => {
                  if (element.productId == data2.productId) {
                    number = element.productNum + 1;
                    userdata.cartList.splice(index, 1);
                  } else {
                    number = 1;
                  }
                });
                var newdata = {
                  productId: data2.productId,
                  productName: data2.productName,
                  salePrice: data2.salePrice,
                  productImage: data2.productImage,
                  productNum: number,
                }
              }
              userdata.cartList.push(newdata);
              userdata.save((err, data) => {
                if (err) {
                  res.json({
                    status: 1,
                    msg: err.message,
                  })
                } else {
                  res.json({
                    status: 0,
                    cartCount: userdata.cartList.length,
                    msg: 'Success!'
                  })
                }
              });
            }
          }
        })
      }
      // res.json({
      //     status:0,
      //     data:userdata
      // })
    }
  })
});
module.exports = router;
