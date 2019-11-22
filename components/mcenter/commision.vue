<template>
  <el-drawer class="member-commision"
    :title="$t('Member Center')"
    name="commision"
    :visible.sync="isDrawerOpened"
    :direction="direction"
    ref="drawerContainer">
    <h3>佣金明细</h3>
    <aside class="commision-content" v-for="(item,index) in pagedData">
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
            <el-col class="th" :xs="8">净佣金</el-col>
            <el-col :xs="16"><span>{{item.commision}}</span></el-col>
        </el-row>
        <el-row>
            <el-col class="th" :xs="8">佣金状态</el-col>
            <el-col :xs="16"><span>{{item.status}}</span></el-col>
        </el-row>
        
    </aside>
    <el-pagination v-if="listData.length > pageSize"
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
  name: 'commision',
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
        for(var i=0;i<1;i++){
            var rand = Math.floor(Math.random()*new Date()%10);
            // console.log(rand);
            ret.push({
                SN: i+1,
                cycle: '0418',
                duration1: '2019-04-17 11:00:00',
                duration2: '2019-04-18 10:59:59',
                commision: '426.00',
                status: '已派發'
            });
        }
        this.listData = ret;
    }
  }
}
</script>
<style lang="scss">

</style>


