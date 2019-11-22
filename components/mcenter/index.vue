<template>
    <aside>
        <el-drawer class="member-center"
            :title="$t('Member Center')"
            name="Member"
            :visible.sync="isDrawerOpened"
            :direction="direction"
            :before-close="handleClose"
            ref="drawerContainer">
            <aside class="member-center-container">
                <span class="welcome">
                    <el-row>
                        <el-col :xs="12">
                            <nuxt-link class="logo" to="/"> <img src="img/BBOS_logo_XL.png"></nuxt-link>
                        </el-col>
                        <el-col :xs="12">
                            <aside class="user-info">
                                <span>koocotest1121</span><br>
                                <span>{{(''*1).toFixed(2)}}</span><span>USD</span><i class="icon-plus-squared"></i>
                            </aside>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :xs="8">
                            <a href="javascript:" class="icon-link"><img src="img/icon_deposit_n.png"><img class="hover" src="img/icon_deposit_h.png">
                            <span>{{$t('deposit')}}</span>
                            </a>
                        </el-col>
                        <el-col :xs="8">
                            <a href="javascript:" @click="openNext('transfer')" class="icon-link"><img src="img/icon_exchange_n.png"><img class="hover" src="img/icon_exchange_h.png">
                            <span>{{$t('transfer')}}</span>
                            </a>
                        </el-col>
                        <el-col :xs="8">
                            <a href="javascript:" class="icon-link"><img src="img/icon_withdrawals_n.png"><img class="hover" src="img/icon_withdrawals_h.png">
                            <span>{{$t('withdraw')}}</span>
                            </a>
                        </el-col>
                    </el-row>
                </span>
                <nav>
                    <a href="javascript:" @click="openNext(index)" :key="index" v-for="(item, index) in menuItem">{{$t(index)}}<i class="el-icon-arrow-right"></i></a>
                    
                </nav>
            </aside>
        </el-drawer>
        <bankcards ref="bank" drawer="false"></bankcards>
        <announcements ref="announcements" drawer="false"></announcements>
        <message ref="message" drawer="false"></message>
        <transfer ref="transfer" drawer="false"></transfer>
        <rebate ref="rebate" drawer="false"></rebate>
        <commision ref="commision" drawer="false"></commision>
        <bethistory ref="bethistory" drawer="false"></bethistory>
        <funds ref="funds" drawer="false"></funds>
        <detail ref="accountdetail" drawer="false"></detail>
    </aside>
</template>

<script>
import moment from 'moment'
import tz from 'moment-timezone'
import detail from './detail'
import bankcards from './bankcards'
import announcements from './announcements'
import message from './message'
import transfer from './transfer'
import rebate from './rebate'
import commision from './commision'
import bethistory from './bethistory'
import funds from './funds'
import logoutButton from './logoutButton'
import Vue from 'vue'
var logout = Vue.extend(logoutButton)

export default {
    name: 'member-center',
    data: () => {
        return {
            gender: null,
            direction: 'rtl',
            birthday: '',
            genderOptions: [{label:'male',value:1,name:'male'},{label:'female',value:2,name:'female'}],
            EST: moment.tz('America/Santo_Domingo').format('YYYY-MM-DD HH:mm:ss'),
            isDrawerOpened: false,
            requiredLogin: true,
            menuItem: {},
        }
    },
    props:["drawer"],
    computed: {
    },
    components: {
        bankcards,
        announcements,
        message,
        transfer,
        rebate,
        commision,
        bethistory,
        funds,
        detail
    },
    mounted() {
        var $this = this;
        setInterval(function(){
        $this.EST = $this.timertick();
        },999);
        this.menuItem = {
            rebate: this.$refs.rebate,
            funds: this.$refs.funds,
            bethistory: this.$refs.bethistory,
            accountdetail: this.$refs.accountdetail,
            bank: this.$refs.bank,
            message: this.$refs.message,
            announcements: this.$refs.announcements,
            transfer: this.$refs.transfer
        };
        for(var idx in this.$refs){
            var comp = this.$refs[idx];
            var requiredLogin = !!comp.$data['requiredLogin'];
            if(requiredLogin){
                // console.log(comp)
                var instance = new logout({propsData: { label: this.$t('logout') }})
                instance.$mount() ;
                comp.$refs.drawerContainer.$refs.drawer.querySelector('header').prepend(instance.$el);
            }
        }
    },
    methods:{
        close: function(){
            this.isDrawerOpened = false;
        },
        open: function(){
            this.isDrawerOpened = true;
        },
        openNext: function(target){
            if(this.$refs[target].open)
                this.$refs[target].open();
        },
        handleClose(done) {
            this.$confirm(this.$t('leave member center'))
            .then(_ => {
                done();
            })
            .catch(_ => {});
        },
        timertick: function(){
            return moment.tz('America/Santo_Domingo').format('YYYY-MM-DD HH:mm:ss');
        }

    }
}
</script>
<style lang="scss">

</style>


