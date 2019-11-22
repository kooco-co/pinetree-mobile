<template>
  <el-drawer class="member-rebate"
    :title="$t('Member Center')"
    name="rebate"
    :visible.sync="isDrawerOpened"
    :direction="direction"
    ref="drawerContainer">
    <h3>返水明细</h3>
    <aside class="rebate-content" :key="index" v-for="(item,index) in pagedData">
        <el-row>
            <el-col class="th" :xs="8">SN</el-col>
            <el-col :xs="16"><span>{{item.SN}}</span></el-col>
        </el-row>
        <el-row>
            <el-col class="th" :xs="8">周期</el-col>
            <el-col :xs="16"><span>{{item.cycle}}</span></el-col>
        </el-row>
        <el-row>
            <el-col class="th" :xs="8">时间区间</el-col>
            <el-col :xs="16"><span>{{item.duration1}}~<br>{{item.duration2}}</span></el-col>
        </el-row>
        <el-row>
            <el-col class="th" :xs="8">目前有效投注</el-col>
            <el-col :xs="16">
                <span v-if="!isNaN(item.effectiveStake*1)">{{item.effectiveStake}}</span>
                <a v-else>实时计算</a>
            </el-col>
        </el-row>
        <el-row>
            <el-col class="th" :xs="8">目前返水金额</el-col>
            <el-col :xs="16"><span>{{item.rebate}}</span></el-col>
        </el-row>
        <el-row>
            <el-col class="th" :xs="8">状态</el-col>
            <el-col :xs="16"><span>{{item.status}}</span></el-col>
        </el-row>
        
    </aside>
    <el-pagination
        small
        :page-size="pageSize"
        :current-page="currentPage"
        layout="prev, pager, next"
        @current-change="setCurrentPage"
        :total="listData.length">
    </el-pagination>
  </el-drawer>
</template>

<script>

export default {
  name: 'rebate',
  data: () => {
    return {
      direction: 'rtl',
      isDrawerOpened: false,
      pageSize: 10,
      currentPage: 1,
      listData:[],
      requiredLogin: true
    }
  },
  props:["drawer"],
  components: {
  },
  mounted() {
    this.fakeData();
  },
  computed: {
      pagedData: function(){
        var currentPage=this.currentPage,pageSize=this.pageSize;
        var ret = this.listData.slice((currentPage-1)*pageSize,currentPage*pageSize);
        return ret;
      }
  },
  methods:{
    close: function(){
      this.isDrawerOpened = false;
    },
    open: function(){
      this.isDrawerOpened = true;
    },
    setCurrentPage(i){
        this.currentPage = i;
    },
    fakeData: function(){
        var ret = [];
        for(var i=0;i<113;i++){
            var rand = Math.floor(Math.random()*new Date()%10);
            // console.log(rand);
            ret.push({
                SN: i+100,
                cycle: '2019-09-29周返',
                duration1: '2019-09-29 00:00:00',
                duration2: '2019-10-05 23:59:59',
                effectiveStake:  ( rand > 5 ) ? '65.00' : '--',
                rebate: ( rand > 5 ) ? '0.65' : '--',
                status: '已领取'
            });
        }
        this.listData = ret;
    }
  }
}
</script>
<style lang="scss">

</style>


