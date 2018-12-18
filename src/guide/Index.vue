<template>
  <div class="wrap">
    <div class="wrap">
      <img src="../assets/0.png"
           style="display: flex">
    </div>

    <div class="wrap">
      <img src="../assets/1.png">
    </div>
    <div class="wrap">
      <img src="../assets/2.png">
    </div>
    <div class="wrap">
      <img src="../assets/3.png">
    </div>
    <div class="wrap">
      <img src="../assets/4.png">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      iconUrl: require('../assets/0.png')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrap {
  width: 100%;
  overflow: auto;
  position: relative;
}

.wrap > img {
  width: 100%;
}

img {
  border: 0;
  max-width: 100%;
  display: inline-block;
  vertical-align: top;
  -ms-interpolation-mode: bicubic;
}

.title {
  background: url("../assets/0.png");
  width: 100%;
  overflow: auto;
  position: relative;
}
</style>
