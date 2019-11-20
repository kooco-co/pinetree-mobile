<template>
  <el-main>
    <el-header>
      <a class="logo" href="javascript:"><img src="img/BBOS_logo_XL.png"></a>
      <a @click="menuClick" :class="['menu',{'on': menuOn}]" href="javascript:">
        <img src="img/bur.png"></a>
      <i class="overlay" @click="menuClick"></i>
      <nav>
        <a href="javascript:" @click="function(){ menuClick(); $refs.bank.open() }">bank</a>
        <a href="javascript:" @click="function(){ menuClick(); $refs.mcenter.open() }">member center</a>
        <a href="javascript:" @click="function(){ menuClick(); $refs.announcements.open()}">announcements</a>
        <a href="javascript:" @click="function(){ menuClick(); $refs.message.open()}">messages</a>
        <a href="javascript:" @click="function(){ menuClick(); $refs.transfer.open()}">transfer</a>
        <a href="javascript:" @click="function(){ menuClick(); $refs.rebate.open()}">rebate</a>
      </nav>
      
      <a class="login" @click="$refs.login.open()">
        login
      </a>
    </el-header>

    <el-container>
      <el-row>
        <el-col :xs="24">
          <a class="block" href="javascript:"><img class="" src="img/157146010187.png"></a>
        </el-col>
        <el-col :xs="24">
          <span class="marquee">
            請注意:[電子競技] 由于官方宣佈該賽事"Grayhound Gaming -vs- Athletico" [反恐精英:全球攻勢 - ESL Pro League Asia - 21/5]
          </span>
        </el-col>
        <el-col :xs="24">
          <a class="block" href="javascript:"><img class="" src="img/157146013877.png"></a>
        </el-col>
        <el-col :xs="24">
          <a class="block" href="javascript:"><img class="" src="img/157146016496.png"></a>
        </el-col>
        <el-col :xs="24">
          <a class="block" href="javascript:"><img class="" src="img/157146020736.png"></a>
        </el-col>
        <el-col :xs="24">
          <a class="block" href="javascript:"><img class="" src="img/footer-image.png"></a>
        </el-col>
        <el-col :xs="24">
          <a href="javascript:"><img class="" src="img/524C85x.png"></a>
        </el-col>
        <el-col :xs="24">
          <a href="javascript:"><img class="" src="img/footer-logo.png"></a>
        </el-col>
      </el-row>
    </el-container>


    <hr>
    <el-footer>
      <nav>
        <a href="javascript:"><img src="img/online_deposit_icon_n.png"><br>deposit</a>
        <a href="javascript:"><img src="img/0_icon_n.png"><br>special</a>
        <a href="javascript:"><img src="img/more_icon_n.png"><br>more</a>
      </nav>
    </el-footer>

    <a class="float-1"><img src="img/float1.png"></a>
    <a class="float-2" @click="function(){ $refs.message.open()}"><img src="img/float2.png"></a>


    <memberCenter ref="mcenter" drawer="false"></memberCenter>
    <bankcards ref="bank" drawer="false"></bankcards>
    <login ref="login" drawer="false"></login>
    <announcements ref="announcements" drawer="false"></announcements>
    <message ref="message" drawer="false"></message>
    <transfer ref="transfer" drawer="false"></transfer>
    <rebate ref="rebate" drawer="false"></rebate>
  </el-main>
</template>

<script>
import memberCenter from '../components/mcenter/detail'
import bankcards from '../components/mcenter/bankcards'
import login from '../components/mcenter/login'
import announcements from '../components/mcenter/announcements'
import message from '../components/mcenter/message'
import transfer from '../components/mcenter/transfer'
import rebate from '../components/mcenter/rebate'

export default {
  data: () => {
    return {
      direction: 'rtl',
      menuOn: false
    }
  },
  components: {
    memberCenter,
    bankcards,
    announcements,
    login,
    message,
    transfer,
    rebate
  },
  mounted() {
  },
  methods:{
    menuClick: function(){
      this.menuOn = !this.menuOn;
    }

  }
}
</script>
<style lang="scss">
  @import '../assets/scss/style';
</style>


