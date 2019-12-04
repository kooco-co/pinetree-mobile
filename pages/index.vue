<template>
  <el-main>
    <headerMenu :items="menuItem"></headerMenu>
    <el-container>
      <el-row>
        <el-col :xs="24">
          <a class="block" href="javascript:"><img src="img/157146010187.png"></a>
        </el-col>
        <el-col :xs="24">
          <span class="marquee">
            請注意:[電子競技] 由于官方宣佈該賽事"Grayhound Gaming -vs- Athletico" [反恐精英:全球攻勢 - ESL Pro League Asia - 21/5]
          </span>
        </el-col>
        <el-col :xs="24">
          <nuxt-link v-if="isloggedin" class="block" to="live"><img src="img/157146013877.png"></nuxt-link>
          <a v-else class="block" @click="function(){ $refs.login.open()}"><img src="img/157146013877.png"></a>
        </el-col>
        <el-col :xs="24">
          <nuxt-link v-if="isloggedin"  class="block" to="casino"><img src="img/157146016496.png"></nuxt-link>
          <a v-else class="block" @click="function(){ $refs.login.open()}"><img src="img/157146016496.png"></a>
        </el-col>
        <el-col :xs="24">
          <nuxt-link v-if="isloggedin"  class="block" to="casino"><img src="img/157146020736.png"></nuxt-link>
          <a v-else class="block" @click="function(){ $refs.login.open()}"><img src="img/157146020736.png"></a>
        </el-col>
        <el-col :xs="24">
          <a class="block" href="javascript:"><img src="img/footer-image.png"></a>
        </el-col>
        <el-col :xs="24">
          <a href="javascript:"><img src="img/524C85x.png"></a>
        </el-col>
        <el-col :xs="24">
          <!-- 庫拉索 logo -->
          <div class="logo" id="apg-9c6a14f9-57f6-4463-a828-4f083c8395a1" data-apg-seal-id="9c6a14f9-57f6-4463-a828-4f083c8395a1" data-apg-image-size="128" data-apg-image-type="basic-small"></div>
          <!-- ./庫拉索 logo -->
        </el-col>
      </el-row>
    </el-container>


    <hr>
    <!-- <cfooter :login="$refs.login.open" :mcenter="$refs.mcenter.open" ></cfooter> -->
    <!-- <hr> -->
    <cfooter :login="$refs.login" :mcenter="$refs.mcenter" ></cfooter>



    <memberCenter ref="mcenter" drawer="false"></memberCenter>
    <login ref="login" drawer="false" :reg="this.$refs.reg" :forget="this.$refs.forget"></login>
    <reg ref="reg" drawer="false"></reg>
    <forget ref="forget" drawer="false"></forget>
    <!-- 庫拉索 logo -->
    <script type="text/javascript" src="https://9c6a14f9-57f6-4463-a828-4f083c8395a1.snippet.antillephone.com/apg-seal.js"></script>
    <!-- ./庫拉索 logo -->
    <!-- Start of LiveChat (www.livechatinc.com) code --><script type="text/javascript">window.__lc = window.__lc || {};window.__lc.license = 9014215;(function() {    var lc = document.createElement('script'); lc.type = 'text/javascript'; lc.async = true;    lc.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'cdn.livechatinc.com/tracking.js';    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(lc, s);})();</script><noscript><a href="https://www.livechatinc.com/chat-with/9014215/" rel="nofollow">Chat with us</a>,powered by <a href="https://www.livechatinc.com/?welcome" rel="noopener nofollow" target="_blank">LiveChat</a></noscript><!-- End of LiveChat code -->
    <!-- よくある質問(須有jQuery) -->
    <script src="//theme.zdassets.com/theme_assets/9266419/becbac08eab933217dbf84afc44e158fa7ff4172.js" async></script>
    <!-- ./よくある質問 -->
  </el-main>
</template>

<script>
import headerMenu from '../components/nav'
import cfooter from '../components/footer'
import login from '../components/mcenter/login'
import reg from '../components/mcenter/reg'
import forget from '../components/mcenter/forget'
import memberCenter from '../components/mcenter/index'
import logoutButton from '../components/mcenter/logoutButton'
import Vue from 'vue'
import { mapState, mapGetters, mapActions } from "vuex"
import JQuery from 'jquery'
window.$ = window.JQuery = JQuery;
var logout = Vue.extend(logoutButton)


export default {
  data: () => {
    return {
      direction: 'rtl',
      menuItem: {},
    }
  },
  components: {
    headerMenu,
    cfooter,
    login,
    memberCenter,
    reg,
    forget
  },
  computed: {
    ...mapState("main", [
      "isloggedin",
    ])
  
  },
  mounted() {
    // console.log(this.isloggedin);
    this.menuItem = {
      mcenter: this.$refs.mcenter,
      login: this.$refs.login,
    };
    for(var idx in this.$refs){
      var comp = this.$refs[idx];
      var requiredLogin = !!comp.$data['requiredLogin'];
      if(requiredLogin){
        // console.log(comp)
        var instance = new logout({propsData: { label: this.$t('logout') }})
        instance.$mount() ;
        var $this = this;
        instance.$el.addEventListener('click', function(){ $this.setlogin(false) });
        // console.log(instance);
        instance.$on('click', function(){
          console.log(this);
        })
        comp.$refs.drawerContainer.$refs.drawer.querySelector('header').prepend(instance.$el);
        // console.log(comp.$refs.drawerContainer.$refs.drawer.querySelector('header .logout'));

        var $this = this;
        comp.$refs.drawerContainer.$refs.drawer.querySelector('header .logout').addEventListener('click', function(){
          
            $this.$confirm($this.$t('leave member center'))
            .then(_ => {
              $this.setlogin(false);
              $this.$refs.mcenter.isDrawerOpened = false;
            })
            .catch(_ => {});
        });
      }
    }
  },
  methods:{
    ...mapActions("main", [
      "setlogin",
    ])
  }
}
</script>
<style lang="scss">
  @import '../assets/scss/style';
</style>


