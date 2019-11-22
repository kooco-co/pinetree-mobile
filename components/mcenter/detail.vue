<template>
  <el-drawer class="member-detail"
    title="Member detail"
    name="Member"
    :visible.sync="isDrawerOpened"
    :direction="direction"
    ref="drawerContainer">
    <span class="welcome">Welcome, honorable Mr./Ms.<br>
    Currency: USD<br>
    US East Time: <span>{{EST}}</span><br><br>

    You have 0 unread message<br>
    Last Login IP: 60.250.147.219<br>
    Last Login: 2019-09- 11 03:27:42<br>
    </span>
    <hr>
    <form class="memberdetail-form">
      <h3>Real-name authentication</h3>
      <aside class="input-group">
        <el-input placeholder="your name">
          <template slot="append">
            set
          </template>
        </el-input>
        <a class="button-setting disabled" href="javascript:"><img src="img/edit2.png"></a>
      </aside>
      <aside class="input-group">
        <el-input placeholder="your Email">
          <template slot="append">
            set
          </template>
        </el-input>
        <a class="button-setting disabled" href="javascript:"><img src="img/edit2.png"></a>
      </aside>
      <aside class="input-group">
        <el-input placeholder="phone number">
          <template slot="append">
            set
          </template>
        </el-input>
        <a class="button-setting disabled" href="javascript:"><img src="img/edit2.png"></a>
      </aside>
      <aside class="input-group">
        <el-input placeholder="password" type="password">
          <template slot="append">
            set
          </template>
        </el-input>
        <a class="button-setting " href="javascript:"><img src="img/edit2.png"></a>
      </aside>
      
      <hr class="dashed">

      <h3>Personal Info <small>you need to contact online services to make change on your information</small></h3>

      <aside class="input-group">
        <el-input v-model="birthday" :class="{notset:true}" placeholder="birthday" type="date">
          <template slot="append">
            not set
          </template>
        </el-input>
        <a class="button-setting " href="javascript:"><img src="img/edit2.png"></a>
      </aside>
      <aside class="input-group">
        <el-select placeholder="Gender" v-model="gender">
          <template slot="append">
            set
          </template>
          <el-option :key="index" v-for="(item,index) in genderOptions" :value="item.value" :label="item.label">{{item.label}}</el-option>
        </el-select>
        <a class="button-setting " href="javascript:"><img src="img/edit2.png"></a>
      </aside>
      <aside class="input-group">
        <el-input :class="{notset:true}" placeholder="Line" type="text">
          <template slot="append">
            not set
          </template>
        </el-input>
        <a class="button-setting " href="javascript:"><img src="img/edit2.png"></a>
      </aside>

      <hr class="dashed">
      <h3>Devices<small>no devices binded yet</small></h3>
      
    </form>
  </el-drawer>
</template>

<script>
import moment from 'moment'
import tz from 'moment-timezone'

export default {
  name: 'member-detail',
  data: () => {
    return {
      gender: null,
      direction: 'rtl',
      birthday: '',
      genderOptions: [{label:'male',value:1,name:'male'},{label:'female',value:2,name:'female'}],
      EST: moment.tz('America/Santo_Domingo').format('YYYY-MM-DD HH:mm:ss'),
      isDrawerOpened: false,
      requiredLogin: true
    }
  },
  // props:["drawer"],
  computed: {
  },
  components: {
  },
  mounted() {
    var $this = this;
    setInterval(function(){
      $this.EST = $this.timertick();
    },999);
  },
  methods:{
    close: function(){
      this.isDrawerOpened = false;
    },
    open: function(){
      this.isDrawerOpened = true;
    },
    timertick: function(){
      return moment.tz('America/Santo_Domingo').format('YYYY-MM-DD HH:mm:ss');
    }

  }
}
</script>
<style lang="scss">

</style>


