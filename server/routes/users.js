var express = require('express');
var router = express.Router();
var user = require('./../models/user');
var cookie = require('cookie-parser');
var crypto = require('crypto');
//var md5 = crypto.createHash('md5');
/* GET users listing. */



router.get('/getHistory', (req, res, next) => {
  let userId = req.cookies.userId;
  user.findOne({
    userId: userId
  }, (err, data) => {
    if (err) {
      res.json({
        status: 1,
        msg: err.message
      })
    } else {
      res.json({
        status: 0,
        msg: 'success!',
        result: data.orderList
      })
    }
  })



})


router.get('/getCartCount', (req, res, next) => {
  let userId = req.cookies.userId;
  user.findOne({
    userId: userId
  }, (err, data) => {
    if (err) {
      res.json({
        status: 1,
        msg: err.message
      })
    } else {
      res.json({
        status: 0,
        result: data.cartList.length
      })
    }
  })
})

router.post('/setDefaultAddress', (req, res, next) => {
  let index = req.body.index;
  let userId = req.cookies.userId;
  user.findOne({
    userId: userId
  }, (err, data) => {
    if (err) {
      res.json({
        status: 1,
        msg: err.message
      })
    } else {
      data.addressList.forEach((element, i) => {
        if (index == i) {
          element.isDefault = true;
        } else {
          element.isDefault = false;
        }
      });
      data.save((err, data) => {
        if (err) {
          res.json({
            status: 1,
            msg: err.message
          })
        } else {
          res.json({
            status: 0,
            msg: 'success!'
          })
        }
      })
    }
  })
})

router.post('/delAddress', (req, res, next) => {
  let userId = req.cookies.userId;
  let _id = req.body._id;
  user.update({
    userId: userId
  }, {
    $pull: {
      'addressList': {
        '_id': _id
      }
    }
  }, (err, data) => {
    if (err) {
      res.json({
        status: 1,
        msg: err.message
      })
    } else {
      res.json({
        status: 0,
        msg: 'success!'
      })
    }
  })
})

router.post('/addAddress', (req, res, next) => {
  let streetName = req.body.streetName;
  let userName = req.body.userName;
  let tel = req.body.tel;
  let postNum = req.body.postNum;
  let userId = req.cookies.userId;
  let isDefault = req.body.isDefault;
  let _id=req.body._id;
  user.findOne({
    userId: userId
  }, (err, data) => {
    if (err) {
      res.json({
        status: 1,
        msg: err.message
      })
    } else {
      if(_id){
        data.addressList.forEach(item => {
    if(item._id==_id){
      item.streetName=streetName;
      item.userName=userName;
      item.tel=tel;
      item.postNum=postNum;
  }
});
}else{
      data.addressList.push({
        streetName: streetName,
        userName: userName,
        tel: tel,
        postNum: postNum,
        isDefault: isDefault
      })
    }
      data.save((err, data) => {
        if (err) {
          res.json({
            status: 1,
            msg: err.message
          })
        } else {
          res.json({
            status: 0,
            msg: 'success'
          })
        }
      })
    }
  })

})
router.post('/getAddressList', (req, res, next) => {
  let userId = req.cookies.userId;
  user.findOne({
    'userId': userId
  }, (err, data) => {
    if (err) {
      res.json({
        'status': 1,
        'msg': err.message
      })
    } else {
      res.json({
        'status': 0,
        'result': data.addressList,
        'msg': "success!"
      })
    }
  })
})


router.post('/accountant', (req, res, next) => {
  let userId = req.cookies.userId;
  let accountantProduct = req.body.accountantProduct;
  let totalPrice = req.body.totalPrice;
  let myTotalPrice = 0;
  user.findOne({
    "userId": userId
  }, (err, data) => {
    if (err) {
      res.json({
        status: 1,
        msg: err.message
      })
    } else {
      data.cartList.forEach((item, index) => {
        accountantProduct.forEach((item1, index1) => {
          if (data.cartList[index].productId == accountantProduct[index1].productId) {
            var itemData={
              productId:data.cartList[index].productId,
              productName:data.cartList[index].productName,
              salePrice:data.cartList[index].salePrice,
              productImage:data.cartList[index].productImage,
              productNum:accountantProduct[index1].count,
              timeOfBuy:Date.now()
            }
            data.orderList.push(itemData);
            myTotalPrice = myTotalPrice + data.cartList[index].salePrice * accountantProduct[index1].count;
            data.cartList.splice(index, 1);
          }
        });
      });
      //前端传递过来的结算数据与数据库进行对比无错后再进行付款，避免金额数量被修改
      if (myTotalPrice === totalPrice) {
        //可在此处调用支付宝支付借口，完成支付后根据状态值前端再次选择渲染页面
        data.save((err, data) => {
          if (err) {
            console.log(err.message);
            res.json({
              status: 1,
              msg: err.message
            })
          } else {
            console.log('用户信息更新成功！！！');
          }
        });
        res.json({
          status: 0,
          msg: 'success'
        })
      } else {
        res.json({
          status: 1,
          msg: '账面结算异常，请不要自行修改post的数据'
        })
      }
    }
  })

})
router.post('/delectgood', (req, res, next) => {
  let userId = req.cookies.userId;
  let _id = req.body._id;
  user.update({
    userId: userId
  }, {
    $pull: {
      'cartList': {
        _id: _id
      }
    }
  }, (err, data) => {
    if (err) {
      res.json({
        status: 1,
        msg: err.message
      })
    } else {
      res.json({
        status: 0,
        msg: 'success'
      })
    }
  })
})
router.post('/checklogin', (req, res, next) => {
  let userId = req.cookies.userId;
  var publicKey = req.cookies.publicKey;
  if (publicKey == '' || userId == '') {
    return;
  };
  var d = require('crypto').createHash('md5').update(userId).digest('cj');
  // md5.update(userId);
  // var d = md5.digest('cj');
  if (d == publicKey) {
    res.json({
      status: 0,
      msg: 'success'
    })
  } else {
    res.cookie('userId', '', {
      path: '/',
      maxAge: -1
    });
    res.cookie('publicKey', '', {
      path: '/',
      maxAge: -1
    });
    res.json({
      status: 1,
      msg: '用户信息检测失败'
    })

  }
});
router.post('/cart', (req, res, next) => {
  let userId = req.cookies.userId;
  user.findOne({
    'userId': userId
  }, (err, data) => {
    if (err) {
      res.json({
        status: 1,
        msg: err.message
      })
    } else {
      res.json({
        status: 0,
        result: data.cartList,
        msg: 'Success!'
      })
    }
  })
});
router.post('/login', (req, res, next) => {
  let userName = req.body.userName;
  let userPwd = req.body.userPwd;
  user.findOne({
    userName: userName,
    userPwd: userPwd
  }, (err, userdata) => {
    if (err) {
      res.json({
        status: 1,
        msg: err.message
      })
    } else {
      if (userdata) {
        res.cookie('userId', userdata.userId, {
          path: '/',
          maxAge: 1000 * 60 * 60 * 6
        });
        var d = require('crypto').createHash('md5').update(userdata.userId).digest('cj');
        // md5.update(userdata.userId);
        // var d = md5.digest('cj');
        res.cookie('publicKey', String(d), {
          path: '/',
          maxAge: 1000 * 60 * 60 * 6
        });
        res.json({
          status: 0,
          msg: '登录成功',
          nickName: userdata.nickName,
          cartCount: userdata.cartList.length
        })
      } else {
        res.json({
          status: 1,
          msg: '密码或用户名输入错误，请重试！'
        })
      }
    }
  })
});

router.post('/logout', (req, res, next) => {
  res.cookie('userId', '', {
    path: '/',
    maxAge: -1
  });
  res.cookie('publicKey', '', {
    path: '/',
    maxAge: -1
  });
  res.json({
    status: 0,
    msg: '退出成功！！！'
  })
})
module.exports = router
