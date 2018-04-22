var express = require('express');
var router = express.Router();
var salers=require('./../models/saler');
var cookie=require("cookie-parser");

router.get('/salerinfo',(req,res,next)=>{
let _id=req.param('_id');
console.log(_id);
salers.findById(_id,(err,data)=>{
if(err){
    res.json({
        status:1,
        msg:err.message
    })
}else{
    res.json({
        status:0,
        result:data
    })
}
})
});
router.get('/salerinfo/productop',(req,res,next)=>{
    let productSaler_id=req.param('productSaler_id');
    let skip=req.param('skip');
 let sortMethod=req.param('sortMethod');

let  Goods =require ('./../models/goods');
let goodsModel = Goods.find({
    productSaler_id:productSaler_id
}).skip(Number(skip)).limit(10);

if(sortMethod=='salePrice'){
    goodsModel.sort({
        salePrice: -1
      });
}else{
    goodsModel.sort({
        productSalerNum: -1
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
      result:data
    })
  }
})
    
})



module.exports = router;