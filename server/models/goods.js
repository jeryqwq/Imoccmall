var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var productSchema = new Schema({
  "productId": String,
  "productName": String,
  "salePrice": Number,
  "productImage": String,
  'productRemainNum': Number,
  "productSalerNum" : Number,
  'productDesc': String,
  'productReview': [{
    "productColor" : String,
    "productSize" : String,
    "reviewName": String,
    "reviewText": String,
    "reviewTime": Date
  }],
  'productSize': [
    {
    "value":String,
    "price":String
    }
  ],
  'prodcutColor': [
    {
      "colorName" : String,
      "productImg" : String,
  }
  ],
  "productDetail" : {
    "productSize" : String,
    "productWeight" :String,
    "productBrand" : String,
    "productTypoNum" :String,
    "productPackingList" :String,
    "productPlace" : String,
    "productInfo-1":String
},
  'productSaler_id': String,
  'isSupportTicker': Boolean,
});
module.exports = mongoose.model("Good", productSchema)
