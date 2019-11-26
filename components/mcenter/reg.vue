<template>
  <el-drawer class="member-reg"
    :title="$t('join')"
    name="Join"
    :visible.sync="isDrawerOpened"
    :direction="direction">
    <el-row>
      <el-col :xs="24">
        <span>{{$t('account')}}</span><span class="red">*</span>
        <el-input placeholder=""></el-input>
      </el-col>
      <el-col :xs="24">
        <span>{{$t('password')}}</span><span class="red">*</span>
        <el-input type="password"></el-input>
      </el-col>
      <el-col :xs="24">
        <span>{{$t('comfirm password')}}</span><span class="red">*</span>
        <el-input type="password"></el-input>
      </el-col>
      <el-col :xs="24">
        <span>{{$t('currency')}}</span>
        <el-select value="usd">
            <el-option value="usd" label="USD">USD</el-option>
        </el-select>
      </el-col>
      <el-col :xs="24">
        <span>{{$t('inviter')}}</span>
        <el-input></el-input>
      </el-col>
      <el-col :xs="24">
        <span>{{$t('realname')}}</span><span class="red">*</span>
        <el-input></el-input>
      </el-col>
      <el-col :xs="24">
        <span>{{$t('gender')}}</span><span class="red">*</span>
        <el-select value="male">
            <el-option value="male" label="Male">{{$t('Male')}}</el-option>
            <el-option value="female" label="Male">{{$t('Female')}}</el-option>
        </el-select>
      </el-col>
      <el-col :xs="24">
        <span>{{$t('line')}}</span>
        <el-input></el-input>
      </el-col>
      <el-col :xs="24">
        <span>{{$t('captcha')}}</span><span class="red">*</span>
        <el-input placeholder=""></el-input>
      </el-col>
      <el-col :xs="24">
        <el-button @click="submit" type="login">{{$t('submit')}}</el-button>
      </el-col>
    </el-row>
  </el-drawer>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: 'reg',
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


