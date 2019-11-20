<template>
  <el-drawer class="member-bankcards"
    title="会员中心"
    name="bank"
    :visible.sync="isDrawerOpened"
    :direction="direction"
    :before-close="handleClose">
    <el-row>
      <el-col :xs="12">
        <el-button>电子钱包</el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col :xs="24">
        &nbsp;
      </el-col>
      <el-col :xs="12">
        <span class="underline">常用帐号(1')</span>
      </el-col>
      <el-col :xs="12">
        <el-button type="success" round><i class="el-icon-plus"></i>新增帐号</el-button>
      </el-col>
      <el-col :xs="24">
        <table cellspacing="0" cellspadding="0">
          <thead><tr><th align="left" colspan="2">新增帐号</th></tr></thead>
          <tbody>
            <tr>
              <td width="50%"></td>
              <td>
                <el-select :value="0">
                  <el-option :value="0" label="取款錢包">取款錢包</el-option>
                </el-select>
              </td>
            </tr>
            <tr>
              <td width="50%">取款钱包位址</td>
              <td>
                <el-input placeholder="取款钱包位址"></el-input>
              </td>
            </tr>
            <tr>
              <td width="50%">功能</td>
              <td>
                <el-button type="primary">确认</el-button><br>
                <el-button type="info">取消</el-button>
              </td>
            </tr>
          </tbody>
        </table>
      </el-col>
      <el-col :xs="24">
        <table cellspacing="0" cellspadding="0">
          <thead>
            <tr><th align="left">序</th><th align="left" colspan="2">1</th></tr>
          </thead>
          <tbody>
            <tr>
              <td width="50%">取款钱包</td>
              <td>Bitcoin</td>
            </tr>
            <tr>
              <td width="50%">取款钱包位址</td>
              <td>211253432543</td>
            </tr>
            <tr>
              <td width="50%">功能</td>
              <td>
                <el-button type="success" plain>移至历史帐号</el-button>
              </td>
            </tr>
          </tbody>
        </table>
      </el-col>
      <el-col :xs="12">
        <span class="underline">历史帐号(0')</span>
      </el-col>
    </el-row>
  </el-drawer>
</template>

<script>

export default {
  name: 'bank',
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
    // var $this = this;
    // setInterval(function(){
    //   $this.EST = $this.timertick();
    // },999);
    var elem = document.querySelector('.member-bankcards .el-drawer__header');
    if(elem){
      var a = document.createElement('a');
      elem.prepend(a);
      a.href = 'javascript:logout()';
      a.innerHTML = '登出';
    }
  },
  methods:{
    close: function(){
      this.isDrawerOpened = false;
    },
    open: function(){
      this.isDrawerOpened = true;
    },
    handleClose(done) {
      this.$confirm('leave member center')
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },

  }
}
</script>
<style lang="scss">

</style>


