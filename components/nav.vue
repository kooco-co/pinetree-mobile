<template>
    <el-header>
        <a class="logo" href="javascript:"><img src="img/BBOS_logo_XL.png"></a>
        <a @click="menuClick" :class="['menu',{'on': menuOn}]" href="javascript:">
            <img src="img/bur.png"></a>
        <i class="overlay" @click="menuClick"></i>
        <nav>
            <a href="/">{{$t('home')}}</a>
            <!---->
            <a class="disabled">{{$t('live casino')}}</a>
            <a class="disabled">{{$t('casino')}}</a>
            <!---->
            <a class="disabled">{{$t('vip')}}</a>
            <a class="disabled">{{$t('promotion')}}</a>
            <a class="disabled">{{$t('affiliate')}}</a>
            <a class="disabled">{{$t('deposit withdraw')}}</a>
            <a class="disabled">{{$t('terms')}}</a>
            <a href="javascript:" @click="open(index)" :key="index" v-for="(item, index) in items">{{$t(index)}}</a>
            <locales></locales>
            <a href="/">{{$t('desktop')}}</a>
            <a href="/">{{$t('logout')}}</a>
            
        </nav>
        
        <a class="login" @click="open('login')">
            {{$t('login')}}
        </a>
    </el-header>
    
</template>

<script>

import locales from '../components/localeSelect';

export default {
  name: 'headerMenu',
  data: () => {
    return {
      menuOn: false,
      isMcenterOpened: false
    }
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
    }
  }
}
</script>
<style lang="scss">

</style>


