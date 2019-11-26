<template>
  <el-drawer class="member-reset"
    title="Reset Password"
    name="reset"
    :visible.sync="isDrawerOpened"
    :direction="direction">
    <el-row>
      <el-col :xs="24">
        <span>{{$t('account')}}</span><span class="red">*</span>
        <el-input placeholder=""></el-input>
      </el-col>
      <el-col :xs="24">
        <span>{{$t('email')}}</span><span class="red">*</span>
        <el-input type="email" placeholder=""></el-input>
      </el-col>
      <el-col :xs="24">
        <span>{{$t('new password')}}</span><span class="red">*</span>
        <el-input type="password" placeholder=""></el-input>
      </el-col>
      <el-col :xs="24">
        <span>{{$t('confirm password')}}</span><span class="red">*</span>
        <el-input type="password" placeholder=""></el-input>
      </el-col>
      <el-col :xs="24">
        <hr>
      </el-col>
      <el-col :xs="24">
        <el-button @click="submit" type="login">submit</el-button>
      </el-col>
    </el-row>
  </el-drawer>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: 'reset',
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
    submit: function(){
      this.isDrawerOpened = false
    }
  }
}
</script>
<style lang="scss">

</style>


