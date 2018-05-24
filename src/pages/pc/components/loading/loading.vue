<template>
  <div class="mf-loading-container">
    <img src="./loading.gif">
  </div>
</template>
<script>
  const COMPONENT_NAME = 'loading'

  export default {
    name: COMPONENT_NAME
  }
</script>
<style lang="scss">
  .mf-loading-container{
    // position: absolute;
    // bottom: 10px;
    // left: 0;
    // right: 0;
    margin: 0 auto;
    width: 40px;
    height: 40px;
    img{
      width: 40px;
      height: 40px;
      margin: 0 auto;
    }
  }
</style>
