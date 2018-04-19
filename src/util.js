import axios from "axios";


   let utils={
     addCart:(_id,userId)=>{
      axios.post('/goods/addCart',{
        "_id":_id,
'userId':userId,
}).then((res)=>{
if(res.data.status==1){
alert(res.data.msg);
}else{
  this.$store.commit('updateCartCount',res.data.cartCount);
}
})
     },
     getCookie:(cname)=>{
      var name = cname + "=";
      var ca = document.cookie.split(';');
      for(var i=0; i<ca.length; i++) {
       var c = ca[i];
       while (c.charAt(0)==' ') c = c.substring(1);
       if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
      }
      return "";
     },
     countBestMethod(totalPrice,ticket){//自动选择最佳优惠卷的搭配，直接返回结果，后端再进行重新计算
       var arr=[];
ticket.forEach((item,index) => {
  if(item.ticketFull>=totalPrice){
    if(item.ticketType=='discount'){//折扣卷
      arr.push(totalPrice*item.ticketValue)
    };
    if(item.ticketType=='full'){//满减券
      arr.push(totalPrice-ticketValue);
    }
      }
      return Math.min.apply(null,arr);
});
     }
   }

    
export default utils;
   