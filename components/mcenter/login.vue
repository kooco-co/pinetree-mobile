<template>
  <el-drawer class="member-login"
    title="Login"
    name="bank"
    :visible.sync="isDrawerOpened"
    :direction="direction">
    <el-row>
      <el-col :xs="24">
        <el-input placeholder="your account"></el-input>
      </el-col>
      <el-col :xs="24">
        <el-input placeholder="your password"></el-input>
      </el-col>
      <el-col :xs="18">
        <el-input placeholder="captcha"></el-input>
      </el-col>
      <el-col :xs="6">
        <img src="">
      </el-col>
      <el-col :xs="24">
        <p class="text-right">
            <a href="javascript:">forget password</a> ‧
            <a href="javascript:">signup</a></p>
      </el-col>
      <el-col :xs="24">
        <el-button type="login">login</el-button>
      </el-col>
    </el-row>
  </el-drawer>
</template>

<script>

export default {
  name: 'login',
  data: () => {
    return {
      direction: 'rtl',
      isDrawerOpened: false
    }
  },
  props:["drawer"],
  components: {
  },
  mounted() {
  },
  methods:{
    close: function(){
      this.isDrawerOpened = false;
    },
    open: function(){
      this.isDrawerOpened = true;
    },
  }
}
</script>
<style lang="scss">

</style>


