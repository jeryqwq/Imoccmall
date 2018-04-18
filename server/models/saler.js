var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var salerSchema=new Schema({
'shopName':String,
'shopSucBuyed':Number,
'shopLevel':Number,
'shopDesc':String,
'shopProduct':[{
    'product_id':String,
    'productNum':Number,
}],
'shopHeadImg':String,
'shopContect':String,
});
module.exports=mongoose.model("Saler",salerSchema,"salers")
