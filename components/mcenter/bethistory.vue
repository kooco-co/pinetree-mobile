<template>
  <el-drawer class="member-bethistory"
    :title="$t('mcenter')"
    name="bethistory"
    :visible.sync="isDrawerOpened"
    :direction="direction" ref="drawerContainer">
    <aside class="summary-container">
        <h3>投注总额</h3>
        <aside :class="['summary',{'blue':summary.today.effectiveStake == 0}]">
            <el-row>
                <el-col :sm="12" :xs="12">今日</el-col>
                <el-col class="text-right light" :sm="12" :xs="12">{{summary.today.duration}}</el-col>
                <el-col :sm="12" :xs="12">有效投注额</el-col>
                <el-col class="text-right hl" :sm="12" :xs="12">{{summary.today.effectiveStake}}</el-col>
            </el-row>
        </aside>
        <aside :class="['summary',{'blue':summary.yesterday.effectiveStake == 0}]">
            <el-row>
                <el-col :sm="12" :xs="12">昨日</el-col>
                <el-col class="text-right light" :sm="12" :xs="12">{{summary.yesterday.duration}}</el-col>
                <el-col :sm="12" :xs="12">有效投注额</el-col>
                <el-col class="text-right hl" :sm="12" :xs="12">{{summary.yesterday.effectiveStake}}</el-col>
            </el-row>
        </aside>
        <aside :class="['summary',{'blue':summary.thisWeek.effectiveStake == 0}]">
            <el-row>
                <el-col :sm="12" :xs="12">本周</el-col>
                <el-col class="text-right light" :sm="12" :xs="12">{{summary.thisWeek.duration}}</el-col>
                <el-col :sm="12" :xs="12">有效投注额</el-col>
                <el-col class="text-right hl" :sm="12" :xs="12">{{summary.thisWeek.effectiveStake}}</el-col>
            </el-row>
        </aside>
        <aside :class="['summary',{'blue':summary.lastWeek.effectiveStake == 0}]">
            <el-row>
                <el-col :sm="12" :xs="12">上周</el-col>
                <el-col class="text-right light" :sm="12" :xs="12">{{summary.lastWeek.duration}}</el-col>
                <el-col :sm="12" :xs="12">有效投注额</el-col>
                <el-col class="text-right hl" :sm="12" :xs="12">{{summary.lastWeek.effectiveStake}}</el-col>
            </el-row>
        </aside>
        <aside :class="['summary',{'blue':summary.thisMonth.effectiveStake == 0}]">
            <el-row>
                <el-col :sm="12" :xs="12">本月</el-col>
                <el-col class="text-right light" :sm="12" :xs="12">{{summary.thisMonth.duration}}</el-col>
                <el-col :sm="12" :xs="12">有效投注额</el-col>
                <el-col class="text-right hl" :sm="12" :xs="12">{{summary.thisMonth.effectiveStake}}</el-col>
            </el-row>
        </aside>
        <aside :class="['summary',{'blue':summary.lastMonth.effectiveStake == 0}]">
            <el-row>
                <el-col :sm="12" :xs="12">上月</el-col>
                <el-col class="text-right light" :sm="12" :xs="12">{{summary.lastMonth.duration}}</el-col>
                <el-col :sm="12" :xs="12">有效投注额</el-col>
                <el-col class="text-right hl" :sm="12" :xs="12">{{summary.lastMonth.effectiveStake.toFixed(2)}}</el-col>
            </el-row>
        </aside>
    </aside>
    <aside class="detail-container">
        <h3>投注总额</h3>
        <el-row>
            <el-col :xs="24">
                <el-select value="0">
                    <el-option value="0" label="全部">全部</el-option>
                </el-select>
            </el-col>
            <el-col :xs="5">
                <span class="label-center">投注時間</span>
            </el-col>
            <el-col :xs="19">
                
                <el-date-picker
                v-model="dateRange"
                type="daterange"
                range-separator="-"
                start-placeholder="开始日期"
                end-placeholder="结束日期"></el-date-picker>
            </el-col>
            <el-col :xs="24">
                <el-button type="message">
                   查询
                </el-button>
            </el-col>
        </el-row>
    </aside>
    
    <!-- <el-pagination v-if="listData.length > pageSize"
        small
        :page-size="pageSize"
        :current-page="currentPage"
        layout="prev, pager, next"
        @current-change="setCurrentPage"
        :total="listData.length">
    </el-pagination> -->
  </el-drawer>
</template>

<script>
import moment from 'moment'
import tz from 'moment-timezone'
export default {
  name: 'bethistory',
  data: () => {
        var now = new moment();
        var date = now.date();
        var weekday = now.day();
        return {
            direction: 'rtl',
            isDrawerOpened: false,
            pageSize: 10,
            currentPage: 1,
            weekday: weekday,
            date: date,
            listData:[],
            requiredLogin: true,
            dateRange: [],
            pickerOptions: {
                onPick: ({ maxDate, minDate }) => {
                    this.pickerMinDate = minDate.getTime()
                    if (maxDate) {
                        this.pickerMinDate = ''
                    }
                },
                disabledDate: (time) => {
                    if (this.pickerMinDate !== '') {
                        const day30 = (30 - 1) * 24 * 3600 * 1000
                        let maxTime = this.pickerMinDate + day30
                        if (maxTime > new Date()) {
                        maxTime = new Date()
                        }
                        return time.getTime() > maxTime
                    }
                    return time.getTime() > Date.now()
                }
            }
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
        },
        summary: function(){

            var now = new moment();
            var date = now.date();
            var weekday = now.day();
            var yesterday = new moment().add(-1,'days');
            var thisWeek = new moment().add(-weekday,'days');
            var lastWeek = new moment().add(-weekday,'days').add(-1,'weeks');
            var thisMonth = new moment().add(-date,'days').add(1,'day');
            var thisMonthEnd = new moment().add(-date,'days').add(1,'day').add(1,'month').add(-1,'days');
            var lastMonth = new moment().add(-date,'days').add(-1,'month').add(1,'day');
            var lastMonthEnd =  new moment().add(-date,'days').add(-1,'month').add(1,'month');
            // console.log( now,date,weekday)
            var summary= {
                today:{
                    duration: now.format('MM/DD') + '-' + now.format('MM/DD'),
                    effectiveStake: 0
                },
                yesterday:{
                    duration: yesterday.format('MM/DD') + '-' + yesterday.format('MM/DD'),
                    effectiveStake: 0
                },
                thisWeek:{
                    duration: thisWeek.format('MM/DD') + '-' + thisWeek.add(7,'days').format('MM/DD'),
                    effectiveStake: 0
                },
                lastWeek:{
                    duration: lastWeek.format('MM/DD') + '-' + lastWeek.add(7, 'days').format('MM/DD'),
                    effectiveStake: 0
                },
                thisMonth:{
                    duration: thisMonth.format('MM/DD') + '-' + thisMonthEnd.format('MM/DD'),
                    effectiveStake: 0
                },
                lastMonth:{
                    duration: lastMonth.format('MM/DD') + '-' + lastMonthEnd.format('MM/DD'),
                    effectiveStake: 186
                }
            };
            return summary;
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
            for(var i=0;i<11;i++){
                var rand = Math.floor(Math.random()*new Date()%10);
                // console.log(rand);
                ret.push({
                    SN: i+1,
                    cycle: '0418',
                    duration1: '2019-04-17 11:00:00',
                    duration2: '2019-04-18 10:59:59',
                    bethistory: '426.00',
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


