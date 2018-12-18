<template>
  <div class="btnBox"
       v-on:click="goGuide">
    <span class="btn">查看安装指引</span>
  </div>
</template>

<script>
export default {
  name: 'BtnGuide',
  methods: {
    goGuide () {
      this.$router.push({ path: '/guide' })
    }
  }
}
</script>

<style scoped>
.btnBox {
  margin-top: 15px;
  text-align: center;
  background: #ffffff;
}

.btnBox .btn {
  text-align: center;
  font-size: 0.8rem;
  color: dodgerblue;
  margin: 0px auto;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
div {
  display: block;
}
</style>
