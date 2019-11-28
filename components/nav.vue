<template>
    <el-header>
        <nuxt-link class="logo" to="/"><img src="img/BBOS_logo_XL.png"></nuxt-link>
        <a @click="menuClick" :class="['menu',{'on': menuOn}]" href="javascript:">
            <img src="img/bur.png"></a>
        <i class="overlay" @click="menuClick"></i>
        <nav>
            <figure></figure>
            <nuxt-link to="/">{{$t('home')}}</nuxt-link>
            <!---->
            <nuxt-link v-if="isloggedin" to="/live">{{$t('live casino')}}</nuxt-link>
            <nuxt-link v-if="isloggedin" to="/casino">{{$t('casino')}}</nuxt-link>
            <!---->
            <a class="disabled">{{$t('vip')}}</a>
            <a class="disabled">{{$t('promotion')}}</a>
            <a class="disabled">{{$t('affiliate')}}</a>
            <a class="disabled">{{$t('deposit withdraw')}}</a>
            <a class="disabled">{{$t('terms')}}</a>
            <a v-if="isloggedin" href="javascript:" @click="open('mcenter')" >{{$t('mcenter')}}</a>
            <locales></locales>
            <nuxt-link to="/">{{$t('desktop')}}</nuxt-link>
            <a v-if="isloggedin" @click="logout">{{$t('logout')}}</a>
            
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
      this.$router.replace('/')
    },
    ...mapActions("main", [
      "setlogin",
    ])
  }
}
</script>
<style lang="scss">

</style>


