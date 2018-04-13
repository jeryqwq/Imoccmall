<template>
    <footer class="footer">
  <div class="footer__wrap">
    <div class="footer__secondary">
      <div class="footer__inner">
        <div class="footer__region">
          <span>Region</span>
          <select class="footer__region__select">
             <option value="zh-CN">China</option>
            <option value="en-US">USA</option>
            <option value="in">India</option>
          </select>
        </div>
        <div class="footer__secondary__nav">
          <span>Copyright © 2018 CJ All Rights Reserved.</span>
          <a href="http://chenjieweb.top/about">
            About Me
          </a>
          <a href="">
            Terms &amp; Conditions
          </a>
          <a href="">
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  </div>
</footer>
</template>
<script>
    export default{
        data(){
            return{
                msg:"footer"
            }
        }
    }
</script>