var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var salerSchema=new Schema({
'shopName':String,
'shopSucSaled':Number,
'shopLevel':Number,
'shopDesc':String,
'shopNickName':String,
'shopProduct':[{
    'product_id':String,
    'productNum':Number,
}],
'shopHeadImg':String,
'shopContect':String,
"shopTickets" : [ 
    {
        "ticketType" : String,
        "ticketValue" : Number,
        "ticketFull" : Number,
        "ticketNum" : Number
    },
]
});
module.exports=mongoose.model("Saler",salerSchema,"salers")
