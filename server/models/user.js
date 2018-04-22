var mongoose=require('mongoose');
var userSchema=new mongoose.Schema({
'userId':String,
'userName':String,
'userPwd':String,
'nickName':String,
'bornDate':Date,
'orderList':[{
    "productId":String,
    "productName":String,
    "salePrice":Number,
    "productImage":String,
    'productNum':Number,
    'timeOfBuy':Date,
    'ListId':String
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
    'addressId':Number,
    'userName':String,
    'streetName':String,
    'postNum':String,
    'tel':String,
    'isDefault':Boolean,
}],
'tickets':[{
    'saler_id':'saler',
    "ticketType" : String,
    "ticketValue" : Number,
    "ticketFull" : Number,
    "ticketNum" : Number
}]
});
module.exports=mongoose.model('User',userSchema,'users');