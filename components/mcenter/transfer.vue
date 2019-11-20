<template>
  <el-drawer class="member-transfer"
    title="会员中心"
    name="transfer"
    :visible.sync="isDrawerOpened"
    :direction="direction">
    
    <el-row class="sub">
        <el-col :xs="24">
            <el-radio v-model="radio" label="1">自动转换</el-radio>
            <el-radio v-model="radio" label="2">手动转换</el-radio>
        </el-col>
    </el-row>
    <el-row class="bd">
        <el-col :xs="24">
            <aside class="cap dark">
                <small>
                    <span>总余额：</span><span class="highlight">406.85</span>
                    <a href="javascript:"><i class="el-icon-refresh"></i></a>
                </small>
                <el-button v-if="radio==1" type="transfer">一键归户</el-button>
            </aside>
        </el-col>
        <el-col :xs="24">
            <aside class="cap">
                <small><span>主帐户余额：</span><span class="highlight">405.20</span>
                </small>
            </aside>
        </el-col>
        <el-col :xs="24" v-if="radio==2">
            <h5>转出</h5>
            <el-select value="0">
                <el-option value="0" label="请选择帐户">请选择帐户</el-option>
            </el-select>
            <h5>转入</h5>
            <el-select value="0">
                <el-option value="0" label="请选择帐户">请选择帐户</el-option>
            </el-select>
            <h5>金额</h5>
            <el-input placeholder="0.00"></el-input>
            <el-button type="transfer">确定转帐</el-button>
            <hr class="dashed">
        </el-col>
        <el-col :xs="24">
            <span class="amount" data-cap="BBIN">0.90</span>
            <span class="amount" data-cap="GM">0.25</span>
            <span class="amount" data-cap="ISB">0.00</span>
            <span class="amount" data-cap="HB">--</span>
            <span class="amount" data-cap="JDB电子">0.50</span>
            <span class="amount" data-cap="AG电子">0.00</span>
            <span class="amount" data-cap="大满贯">--</span>
            <span class="amount" data-cap="RT">0.00</span>
            <span class="amount" data-cap="SG">--</span>
            <span class="amount" data-cap="BNG">--</span>
            <span class="amount" data-cap="CQ9">--</span>
            <span class="amount" data-cap="LG电子">--</span>
            <span class="amount" data-cap="KA">--</span>
            <span class="amount" data-cap="LG棋牌">--</span>
        </el-col>
    </el-row>
  </el-drawer>
</template>

<script>

export default {
  name: 'transfer',
  data: () => {
    return {
      direction: 'rtl',
      isDrawerOpened: false,
      radio: '1'
    }
  },
  props:["drawer"],
  components: {
  },
  mounted() {
    // var elem = document.querySelector('.member-transfer .el-drawer__header');
    // if(elem){
    //   var a = document.createElement('a');
    //   elem.prepend(a);
    //   a.href = 'javascript:logout()';
    //   a.innerHTML = '登出';
    // }
  },
  methods:{
    close: function(){
      this.isDrawerOpened = false;
    },
    open: function(){
      this.isDrawerOpened = true;
    }

  }
}
</script>
<style lang="scss">

</style>


