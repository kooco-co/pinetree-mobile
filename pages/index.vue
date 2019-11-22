<template>
  <el-main>
    <headerMenu :items="menuItem"></headerMenu>
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
        <a href="javascript:"><img src="img/online_deposit_icon_n.png"><br>{{$t('_footer_promotions')}}</a>
        <a @click="function(){ $refs.memberCenter.open() }"><img src="img/0_icon_n.png"><br>{{$t('_footer_member_center')}}</a>
        <a href="javascript:"><img src="img/more_icon_n.png"><br>{{$t('_footer_vip')}}</a>
      </nav>
    </el-footer>

    <a class="float-1"><img src="img/float1.png"></a>
    <a class="float-2" @click="function(){ $refs.message.open()}"><img src="img/float2.png"></a>


    <memberCenter ref="mcenter" drawer="false"></memberCenter>
    <login ref="login" drawer="false"></login>
  </el-main>
</template>

<script>
import headerMenu from '../components/nav'
import login from '../components/mcenter/login'
import memberCenter from '../components/mcenter/index'
import logoutButton from '../components/mcenter/logoutButton'
import Vue from 'vue'
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
    login,
    memberCenter,
  },
  mounted() {
    this.menuItem = {
      mcenter: this.$refs.mcenter,
      login: this.$refs.login,
    };
    for(var idx in this.$refs){
      var comp = this.$refs[idx];
      var requiredLogin = !!comp.$data['requiredLogin'];
      if(requiredLogin){
        // console.log(comp)
        var instance = new logout({propsData: { label: '登出' }})
        instance.$mount() ;
        comp.$refs.drawerContainer.$refs.drawer.querySelector('header').prepend(instance.$el);
      }
    }
  },
  methods:{
  }
}
</script>
<style lang="scss">
  @import '../assets/scss/style';
</style>


