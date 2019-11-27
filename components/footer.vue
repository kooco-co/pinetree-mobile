<template>
    <el-footer>
      <nav>
        <a href="javascript:"><img src="img/0_icon_n.png"><br>{{$t('_footer_promotions')}}</a>
        <a v-if="isloggedin" @click="mcenterOpen"><img src="img/black-male-user-symbol.png"><br>{{$t('_footer_member_center')}}</a>
        <a v-else @click="loginOpen"><img src="img/black-male-user-symbol.png"><br>{{$t('_footer_member_center')}}</a>
        <a href="javascript:"><img src="img/gem-solid.png"><br>{{$t('_footer_vip')}}</a>
      </nav>
    </el-footer>

</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: 'cfooter',
  data: () => {
    return {
      direction: 'rtl',
      isDrawerOpened: false
    }
  },
  props:["login","mcenter"],
  components: {
  },
  mounted() {
  },
  computed: {
    ...mapState("main", [
      "isloggedin",
    ])
  
  },
  methods:{

    loginOpen:function(){
      this.login.open();
    },
    mcenterOpen:function(){
      this.mcenter.open();
    }
  }
}
</script>
<style lang="scss">

</style>


