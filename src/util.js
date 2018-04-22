import axios from "axios";


let utils = {
  dateFormat: (date, format) => {
    date = new Date(date);
    var o = {
      'M+': date.getMonth() + 1, //month  
      'd+': date.getDate(), //day  
      'm+': date.getMinutes(), //minute  
      'H+': date.getHours(), //hour
      's+': date.getSeconds(), //second  
      'q+': Math.floor((date.getMonth() + 3) / 3), //quarter  
      'S': date.getMilliseconds() //millisecond  
    };
    if (/(y+)/.test(format))
      format = format.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));

    for (var k in o)
      if (new RegExp('(' + k + ')').test(format))
        format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));

    return format;
  },
  getCookie: (cname) => {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1);
      if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
    }
    return "";
  },
  countBestMethod(totalPrice, ticket) { //自动选择最佳优惠卷的搭配，直接返回结果，后端再进行重新计算
    var arr = [];
    var arr_id = [];
    ticket.forEach((item, index) => {
      if (item.ticketFull <= totalPrice) {
        if (item.ticketType == 'discount') { //折扣卷
          arr.push(totalPrice * item.ticketValue / 10);
          arr_id.push(ticket._id);
        };
        if (item.ticketType == 'full') { //满减券
          arr.push(totalPrice - ticketValue);
          arr_id.push(ticket._id);
        }
      }
      return result = {
        price: Math.min.apply(null, arr),
        _id: arr_id.indexOf(Math.min.apply(null, arr))
      };
    });
  }
}


export default utils;
