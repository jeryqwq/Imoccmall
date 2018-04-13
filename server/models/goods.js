var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var productSchema = new Schema({
  "productId": String,
  "productName": String,
  "salePrice": Number,
  "productImage": String,
  'productRemainNum': Number,
  'productDesc': String,
  'productReview': [{
    "reviewName": String,
    "reviewText": String,
    "reviewTime": Date
  }],
  'productSize': [],
  'prodcutColor': [],
  'productSaler_id': String,
  'isSupportTicker': Boolean,

});
module.exports = mongoose.model("Good", productSchema)
