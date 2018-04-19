<template>
  <div>
    <div class="nav-breadcrumb-wrap" style="background:#e3e6ea">
  <div class="container">
    <nav class="nav-breadcrumb">
      <a href="/">首页</a>
      <span v-text="location"></span>
    </nav>
  </div>
</div>

  </div>

</template>
<script>
export default {
    props:['location'],
  data () {
      return {
          
      }
  },
  methods: {
      
  }
}
</script>
