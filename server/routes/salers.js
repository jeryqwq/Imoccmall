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
})



module.exports = router;