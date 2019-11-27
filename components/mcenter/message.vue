<template>
  <el-drawer class="member-messages"
    :title="$t('mcenter')"
    name="messages"
    :visible.sync="isDrawerOpened"
    :direction="direction"
    ref="drawerContainer">
    <h3>站內信</h3>
    <el-row class="sub">
        <el-col :xs="16">
            <el-select value="0">
                <el-option value="0" label="全部">全部</el-option>
            </el-select>
        </el-col>
        <el-col :xs="8">
            <el-button type="message">查詢</el-button>
        </el-col>
    </el-row>
    <aside class="single-message">
        <h4>1</h4>
        <el-row class="sub">
            <el-col :xs="8">
                类别
            </el-col>
            <el-col :xs="16">
                一般通知
            </el-col>
            <el-col :xs="8">
                标题
            </el-col>
            <el-col :xs="16">
                <a href="javascript:">你好</a>
            </el-col>
            <el-col :xs="8">
                发送时间
            </el-col>
            <el-col :xs="16">
                2019-05-07 12:14:45
            </el-col>
            <el-col :xs="8">
                <span class="unread">状态</span>
            </el-col>
            <el-col :xs="16">
                <span class="unread">未读</span>
            </el-col>
            <el-col :xs="8">
                功能
            </el-col>
            <el-col :xs="16">
                <a class="del" href="javascript:"><i class="el-icon-delete"></i></a>
            </el-col>
        </el-row>
    </aside>
    <aside class="single-message">
        <h4>2</h4>
        <el-row class="sub">
            <el-col :xs="8">
                类别
            </el-col>
            <el-col :xs="16">
                一般通知
            </el-col>
            <el-col :xs="8">
                标题
            </el-col>
            <el-col :xs="16">
                <a href="javascript:">早安</a>
            </el-col>
            <el-col :xs="8">
                发送时间
            </el-col>
            <el-col :xs="16">
                2019-05-07 12:14:45
            </el-col>
            <el-col :xs="8">
                <span class="read">状态</span>
            </el-col>
            <el-col :xs="16">
                <span class="read">已读</span>
            </el-col>
            <el-col :xs="8">
                功能
            </el-col>
            <el-col :xs="16">
                <a class="del" href="javascript:"><i class="el-icon-delete"></i></a>
            </el-col>
            <el-col :xs="24">
                <aside class="message-content">
                    早安！
                </aside>
            </el-col>
        </el-row>
    </aside>
    <aside class="single-message">
        <h4>3</h4>
        <el-row class="sub">
            <el-col :xs="8">
                类别
            </el-col>
            <el-col :xs="16">
                一般通知
            </el-col>
            <el-col :xs="8">
                标题
            </el-col>
            <el-col :xs="16">
                <a href="javascript:">龜波~~~</a>
            </el-col>
            <el-col :xs="8">
                发送时间
            </el-col>
            <el-col :xs="16">
                2019-05-07 12:14:45
            </el-col>
            <el-col :xs="8">
                <span class="read">状态</span>
            </el-col>
            <el-col :xs="16">
                <span class="read">已读</span>
            </el-col>
            <el-col :xs="8">
                功能
            </el-col>
            <el-col :xs="16">
                <a class="del" href="javascript:"><i class="el-icon-delete"></i></a>
            </el-col>
            <el-col :xs="24">
                <aside class="message-content">
                    早安！
                </aside>
            </el-col>
        </el-row>
    </aside>
    <aside class="single-message">
        <h4>4</h4>
        <el-row class="sub">
            <el-col :xs="8">
                类别
            </el-col>
            <el-col :xs="16">
                一般通知
            </el-col>
            <el-col :xs="8">
                标题
            </el-col>
            <el-col :xs="16">
                <a href="javascript:">こんにちは！</a>
            </el-col>
            <el-col :xs="8">
                发送时间
            </el-col>
            <el-col :xs="16">
                2019-05-07 12:14:45
            </el-col>
            <el-col :xs="8">
                <span class="read">状态</span>
            </el-col>
            <el-col :xs="16">
                <span class="read">已读</span>
            </el-col>
            <el-col :xs="8">
                功能
            </el-col>
            <el-col :xs="16">
                <a class="del" href="javascript:"><i class="el-icon-delete"></i></a>
            </el-col>
            <el-col :xs="24">
                <aside class="message-content">
                    早安！
                </aside>
            </el-col>
        </el-row>
    </aside>
    <el-pagination 
        small
        layout="prev, pager, jumper, next"
        :total="5">
    </el-pagination>
  </el-drawer>
</template>

<script>

export default {
  name: 'messages',
  data: () => {
    return {
      direction: 'rtl',
      isDrawerOpened: false,
      requiredLogin: true
    }
  },
  props:["drawer"],
  components: {
  },
  mounted() {
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


