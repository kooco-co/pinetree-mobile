<template>
  <el-drawer class="member-forget"
    title="Forget Password"
    name="forget"
    :visible.sync="isDrawerOpened"
    :direction="direction">
    <el-row>
      <el-col :xs="24">
        <el-input :placeholder="$t('your account')"></el-input>
      </el-col>
      <el-col :xs="24">
        <el-input type="email" :placeholder="$t('your email')"></el-input>
      </el-col>
      <el-col :xs="24">
        <el-button @click="submit" type="login">{{$t('submit')}}</el-button>
      </el-col>
      <el-col :xs="24">
        <span class="hint">{{$t('forget password hint')}}</span>
      </el-col>
    </el-row>
  </el-drawer>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: 'forget',
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


