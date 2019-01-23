<template>
  <div style="width: 100%">

  </div>
</template>
<script>

export default {
  name: 'Index',
  data () {
    return {
    }
  },
  component: {
  },
  mounted () {
    this.checkUA()
  },
  methods: {
    checkUA () {
      if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
        // Ios
        window.location.href = 'https://fir.im/iosinner'
      } else if (/(Android)/i.test(navigator.userAgent)) {
        //  Android终端
        window.location.href = 'https://www.pgyer.com/AlphaAndroidInner'
      }
    }
  }
}
</script>

<style scoped>
#title {
  width: 100%;
}

.logo_bg {
  background: url("https://static.pgyer.com/static/images/template/colorful/app_bg.png")
    no-repeat scroll top center;
  width: 160px;
  height: 160px;
  background-size: 100% auto;
  margin: auto;
  text-align: center;
}

#index {
  width: 100%;
  position: relative;
}

div {
  display: block;
}

.app_name {
  font-size: 1rem;
  text-align: center;
}

.logo_bg .app_icon {
  border: none;
  width: 100px;
  height: 100px;
  margin-top: 34px;
}

.qr_code {
  margin-top: 10px;
  width: min-content;
  height: min-content;
  margin-left: auto;
  margin-right: auto;
  border: darkgray 1px solid;
}

.qr_code .img_qr_code {
  width: 160px;
  height: 160px;
  text-align: center;
}

.install {
  text-align: center;
  margin: 40px auto auto auto;
}

a {
  position: relative;
  border-radius: 30px;
  background: #1abc9c;
  text-decoration: none;
  color: white;
  padding: 10px 30px 10px 30px;
}
</style>
