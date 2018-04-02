var mongoose=require('mongoose');
var userSchema=new mongoose.Schema({
    'userId':String,
'userName':String,
'userPwd':String,
'nickName':String,
'orderList':[{
    "productId":String,
    "productName":String,
    "salePrice":Number,
    "productImage":String,
    'productNum':Number,
    'timeOfBuy':Date
}],
'cartList':[{
    "productId":String,
    "productName":String,
    "salePrice":Number,
    "productImage":String,
    'productNum':Number,
  //  'checked':Boolean
}],
'addressList':[{
    addressId:Number,
    userName:String,
    streetName:String,
    postNum:String,
    tel:String,
    isDefault:Boolean,
}],
});
module.exports=mongoose.model('User',userSchema,'users');