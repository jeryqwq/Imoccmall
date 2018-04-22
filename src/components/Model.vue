<template>
<div >
    <div  class="md-modal modal-msg md-modal-transition md-show"><!-- v-bind:class="{'md-show':mdShow} -->
        <div class="md-modal-inner">
          <div class="md-top">
            <button class="md-close"  @click="closeModal()"  v-show="msg"></button>
          </div>
          <div>
            <div class="confirm-tips">
              <slot name="message">

              </slot>
            </div>
            <div class="btn-wrap">
              <slot name="btnGroup">
  
              </slot>
            </div>
          </div>
        </div>
      </div>
      <div class="md-overlay" @click="closeModal()" ></div>
</div>
</template>

<script>
        import "./../assets/css/base.css";
      import "./../assets/css/login.css";
export default {
props:{
'msg':Boolean
},
  data(){
      return{

      }
  },

  methods:{
      closeModal(){
      this.$store.commit('updateMdShow',false);
          }
  }
}
</script>


