<template>
    <el-header>
        <a class="logo" href="javascript:"><img src="/img/BBOS_logo_XL.png"></a>
        <a @click="menuClick" :class="['menu',{'on': menuOn}]" href="javascript:">
            <img src="/img/bur.png"></a>
        <i class="overlay" @click="menuClick"></i>
        <nav>
            <img src="/img/BBOS_logo_XL.png">
            <a href="/">{{$t('home')}}</a>
            <!---->
            <a href="/casino">{{$t('live casino')}}</a>
            <a href="/casino">{{$t('casino')}}</a>
            <!---->
            <a class="disabled">{{$t('vip')}}</a>
            <a class="disabled">{{$t('promotion')}}</a>
            <a class="disabled">{{$t('affiliate')}}</a>
            <a class="disabled">{{$t('deposit withdraw')}}</a>
            <a class="disabled">{{$t('terms')}}</a>
            <a v-if="isloggedin" href="javascript:" @click="open('mcenter')" >{{$t('mcenter')}}</a>
            <locales></locales>
            <a href="/">{{$t('desktop')}}</a>
            
        </nav>
        
        <a v-if="!isloggedin" class="login" @click="open('login')">
            {{$t('login')}}
        </a>
        <a v-else class="login" @click="logout">
            {{$t('logout')}}
        </a>
    </el-header>
    
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import locales from '../components/localeSelect';

export default {
  name: 'headerMenu',
  data: () => {
    return {
      menuOn: false,
      isMcenterOpened: false
    }
  },
  computed: {
    ...mapState("main", [
      "isloggedin",
    ])
  
  },
  props:["items"],
  components: {
    locales
  },
  mounted() {
  },
  methods:{
    // close: function(){
    //   this.isDrawerOpened = false;
    // },
    open: function(target){
      this.menuOn= false;
      this.items[target].open();
    },
    menuClick: function(){
      this.menuOn = !this.menuOn;
    },
    mcenterOpen: function(){
      this.isMcenterOpened = !this.isMcenterOpened;
    },
    logout: function(){
      this.setlogin(false);
    },
    ...mapActions("main", [
      "setlogin",
    ])
  }
}
</script>
<style lang="scss">

</style>


