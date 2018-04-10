<template>
  <div>
      <div class="rightpage">
  <div  class="msg_pop"><b>用户信息</b></div>
   <table width="100%">
     <tr>
         <td>
             <b>用户名:</b><input  disabled="disabled" class="text_info" type="text"/>
         </td>
           <td>
              <b>昵称:</b><input class="text_info" type="text"/>
         </td>
     </tr>
        <tr>
         <td>
             <b>生日:</b><input   class="text_info" type="date"/>
         </td>
           <td>
              <b>手机:</b><input class="text_info" type="text"/>
         </td>
     </tr>
     </table>
</div>
</div>
</template>
<script>
export default {
  data () {
      return {
          
      }
  },
  methods: {
      
  }


}
</script>
<style>
.text_info{
    background: rgab(0,0,0,0) !important;
   border-color: rgba(0,0,0,0)!important;
   border-bottom: solid 2px #e0dddd !important;
}
.rightpage{
width: 80%;
/* position: absolute; */
margin-left: 17%;
height: 600px
}
 @media only screen and (min-width: 0px) and (max-width: 760px){
.rightpage{
width: 100%;
position:relative;
display: block;
margin-left: 0;
}


 }
</style>

