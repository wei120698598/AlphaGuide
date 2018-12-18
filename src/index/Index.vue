<template>
  <div style="width: 100%">

    <!-- <div style="display: flow"
         v-if="isWeChat">
      <img v-bind:src="guide"
           style="width: 100%;height: -webkit-fill-available">
    </div> -->
    <div id="index">
      <img id="title"
           src="../assets/top_bg_mobile_ratio.png">
      <div class="logo_bg">
        <img class="app_icon"
             src="https://appicon.pgyer.com/image/view/app_icons/af2a856cf6e48aaa8775a83b12ab9c6b/120">
      </div>
      <div>
        <div class="app_name">Alpha-{{clientUA}}</div>
      </div>

      <div class="qr_code">
        <img class="img_qr_code"
             v-bind:src="qrCode">
        <vue-q-art :config="config"
                   v-show="true"></vue-q-art>
      </div>

      <!-- <btn-guide v-if="isIOS" /> -->

      <div class="install"
           v-if="!isIOS">
        <a v-bind:href="downloadUrl">点击安装</a>
      </div>
    </div>
  </div>
</template>
<script>
import BtnGuide from '../component/BtnGuide'
import VueQArt from 'vue-qart'

export default {
  name: 'Index',
  data () {
    return {
      qrCode: '',
      downloadUrl:
        'https://www.pgyer.com/apiv2/app/install?_api_key=845b1e8faab9233cd759c6d3c9fe69ce&buildKey=e14ce87c41739e0e32af75711c8a53e8',
      clientUA: 'Android',
      isIOS: false,
      isWeChat: false,
      guide: '',
      config: {
        value: 'https://www.baidu.com',
        imagePath: '../assets/0.png',
        filter: 'color',
        size: 500
      },
      downloadButton: false
    }
  },
  components: { BtnGuide, VueQArt },
  mounted () {
    this.checkUA()
  },
  methods: {
    checkUA () {
      let ua = navigator.userAgent.toLowerCase()
      if (isWeixinBrowser()) {
        this.isWeChat = true
      }
      if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
        // Ios
        this.downloadUrl = 'https://fir.im/alphaPreEnv?release_id=5c157430959d69622ade172b'
        this.qrCode = require('../assets/ios.png')
        this.clientUA = 'IOS'
        this.isIOS = true
        this.guide = require('../assets/guide.png')
      } else if (/(Android)/i.test(navigator.userAgent)) {
        //  Android终端
        this.qrCode = require('../assets/android.png')
        this.guide = require('../assets/guideAndroid.png')
      } else {
        this.qrCode = require('../assets/android.png')
      }

      function isWeixinBrowser () {
        return /micromessenger/.test(ua)
      }
    }
  },
  component: {
    btn_guide: BtnGuide
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
  vertical-align: bottom;
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
