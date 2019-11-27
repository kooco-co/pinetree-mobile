<template>
  <el-drawer class="member-funds"
    :title="$t('mcenter')"
    name="funds"
    :visible.sync="isDrawerOpened"
    :direction="direction"
    ref="drawerContainer">
    <aside class="funds-container">
        <h3>资金明细</h3>
        <el-row>
            <el-col :xs="24">
                <el-select value="0">
                    <el-option value="0" label="全部">全部</el-option>
                </el-select>
            </el-col>
            <el-col :xs="11">
                <el-date-picker
                v-model="dateRangeBegin"
                placeholder="开始日期"></el-date-picker>
            </el-col>
            <el-col :xs="2" class="text-center lh2">
                -
            </el-col>
            <el-col :xs="11">
                <el-date-picker
                v-model="dateRangeEnd"
                placeholder="结束日期"></el-date-picker>
            </el-col>
            <el-col :xs="24">
                &nbsp;
            </el-col>
            <el-col :xs="24">
                <el-button type="message">
                   查询
                </el-button>
            </el-col>
            <el-col :xs="24">
                <aside class="sort-button-container">
                    <a @click="sort('asc')" :class="['sort-button', {'active': listSorting=='asc'}]"><img src="img/asc.png"></a>
                    <a @click="sort('desc')" :class="['sort-button', {'active': listSorting=='desc'}]"><img src="img/desc.png"></a>
                </aside>
            </el-col>
        </el-row>
        <aside class="transaction-detail">
            <el-row v-for="(item,index) in pagedData" :key="index">
                <el-col class="th" :xs="8">交易时间</el-col>
                <el-col class="th" :xs="16">{{item.transactionTime}}</el-col>
                <el-col :xs="8">类别</el-col>
                <el-col :xs="16">{{item.type}}</el-col>
                <el-col :xs="8">交易额度</el-col>
                <el-col :class="{'red': item.transactionAmount<0}" :xs="16">{{item.transactionAmount.toFixed(2)}}</el-col>
                <el-col :xs="8">主帐户小计</el-col>
                <el-col :xs="16">{{item.totalAmount.toFixed(2)}}</el-col>
                <el-col :xs="8">单号</el-col>
                <el-col :xs="16">{{item.serial}}</el-col>
                <el-col :xs="8">备注</el-col>
                <el-col :xs="16">{{item.remark}}</el-col>
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
    </aside>
  </el-drawer>
</template>

<script>

import logoutButton from './logoutButton'
import Vue from 'vue'
var logout = Vue.extend(logoutButton)

export default {
    name: 'bank',
    data: () => {
        return {
            pageSize: 5,
            currentPage: 1,
            direction: 'rtl',
            isDrawerOpened: false,
            requiredLogin: true,
            dateRangeBegin: {},
            dateRangeEnd: {},
            listSorting: 'desc',
            listData:[{
                transactionTime: '2019-11-04 04:07:41',
                type: '由MG额度转入',
                transactionAmount: 405.00,
                totalAmount: 405.20,
                serial: '--',
                remark: '--'
            },{
                transactionTime: '2019-11-03 22:29:04',
                type: '转出至MG额度',
                transactionAmount: -405.00,
                totalAmount: 0.20,
                serial: '--',
                remark: '--'
            },{
                transactionTime: '2019-11-03 22:29:04',
                type: '由RT额度转入',
                transactionAmount: 405.00,
                totalAmount: 405.20,
                serial: '--',
                remark: '--'
            },{
                transactionTime: '2019-11-03 22:28:15',
                type: '转出至RT额度',
                transactionAmount: -405.00,
                totalAmount: 0.20,
                serial: '--',
                remark: '--'
            }]
        }
    },
    props:["drawer"],
    components: {
    },
    computed:{
        pagedData: function(){
            var currentPage=this.currentPage,pageSize=this.pageSize;
            var ret = this.listData.slice((currentPage-1)*pageSize,currentPage*pageSize);
            return ret;
        }
    },
    mounted() {
        this.listData = this.listData.concat(this.listData).concat(this.listData).concat(this.listData).concat(this.listData);
    },
    methods:{
        close: function(){
        this.isDrawerOpened = false;
        },
        open: function(){
        this.isDrawerOpened = true;
        },
        setCurrentPage: function(i){
            this.currentPage = i;
        },
        sort: function(sorting){
            this.listSorting = sorting;
        }
    }
}
</script>
<style lang="scss">

</style>


