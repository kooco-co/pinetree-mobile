<template>
  <el-drawer class="member-login"
    :title="$t('login')"
    name="login"
    :visible.sync="isDrawerOpened"
    :direction="direction">
    <el-row>
      <el-col :xs="24">
        <el-input :placeholder="$t('your account')"></el-input>
      </el-col>
      <el-col :xs="24">
        <el-input :placeholder="$t('your password')" type="password"></el-input>
      </el-col>
      <el-col :xs="18">
        <el-input :placeholder="$t('captcha')"></el-input>
      </el-col>
      <el-col :xs="6">
        <img src="">
      </el-col>
      <el-col :xs="24">
        <p class="text-right">
            <a href="javascript:" @click="forgetpassword">{{$t('forget password')}}</a> ‧
            <a href="javascript:" @click="join">{{$t('join')}}</a></p>
      </el-col>
      <el-col :xs="24">
        <el-button @click="login" type="login">{{$t('login')}}</el-button>
      </el-col>
    </el-row>
  </el-drawer>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: 'login',
  data: () => {
    return {
      direction: 'rtl',
      isDrawerOpened: false
    }
  },
  props:["drawer","reg","forget"],
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
    close: function(){
      this.isDrawerOpened = false;
    },
    open: function(){
      this.isDrawerOpened = true;
    },
    login: function(){
      this.setlogin(true);
      // console.log('islogin', this.isloggedin);
      this.isDrawerOpened = false
    },
    join: function(){
     this.reg.isDrawerOpened = true
     this.isDrawerOpened = false
    },
    forgetpassword: function(){
     this.forget.isDrawerOpened = true
     this.isDrawerOpened = false
    },
    ...mapActions("main", [
      "setlogin",
    ])
  }
}
</script>
<style lang="scss">

</style>


