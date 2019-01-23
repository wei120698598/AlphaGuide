<template>
  <div style="width: 100%">
    <div style="display: flow"
         v-if="isWeChat">
      <img v-bind:src="guide"
           style="width: 100%;height: -webkit-fill-available">
    </div>
    <div id="index"
         v-else>
      <img id="title"
           src="../assets/top_bg_mobile_ratio.png">
      <div class="logo_bg">
        <img class="app_icon"
             :src="appIcon">
      </div>
      <div>
        <div class="app_name">Alpha-{{clientUA}}</div>
      </div>

      <div class="qr_code">
        <vue-qr class="img_qr_code"
                :logoSrc="appIcon"
                :text="downloadUrl"
                :size="160"
                :margin="1"></vue-qr>
      </div>
      <div class="install">
        <a v-bind:href="downloadUrl">点击安装</a>
      </div>
    </div>
  </div>
</template>
<script>
import BtnGuide from '../component/BtnGuide'
import VueQr from 'vue-qr'
import { ANDROID_BUILD_ID, IOS_BUILD_ID, IOS_RELEASE_ID } from '../utils/config.js'

export default {
  name: 'Index',
  data () {
    return {
      appIcon: 'https://appicon.pgyer.com/image/view/app_icons/af2a856cf6e48aaa8775a83b12ab9c6b/120',
      downloadUrl: '',
      clientUA: 'Android',
      isIOS: false,
      isWeChat: false
    }
  },
  components: { BtnGuide, VueQr },
  component: {
    btn_guide: BtnGuide
  },
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
        getIosFirToken()
        this.clientUA = 'IOS'
        this.isIOS = true
        this.guide = require('../assets/guideIos.png')
        window.location.href = 'https://fir.im/iosinner'
      } else if (/(Android)/i.test(navigator.userAgent)) {
        //  Android终端
        this.downloadUrl = 'https://www.pgyer.com/apiv2/app/install?_api_key=845b1e8faab9233cd759c6d3c9fe69ce&buildKey=' + ANDROID_BUILD_ID
        this.guide = require('../assets/guideAndroid.png')
        window.location.href = 'https://www.pgyer.com/AlphaAndroidInner'
      }
      function isWeixinBrowser () {
        return /micromessenger/.test(ua)
      }
      const that = this
      function getIosFirToken () {
        const axios = require('axios')
        axios.get('https://api.fir.im/apps/' + IOS_BUILD_ID + '/download_token?api_token=419938a01f349fdec56eb15614d5de95').then(response => {
          console.log(response)
          that.downloadUrl = 'itms-services://?action=download-manifest&url=' + encodeURIComponent('https://download.fir.im/apps/' + IOS_BUILD_ID + '/install?download_token=' + response.data.download_token + '&release_id=' + IOS_RELEASE_ID)
        })
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
