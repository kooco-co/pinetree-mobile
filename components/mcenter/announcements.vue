<template>
  <el-drawer class="member-announcements"
    title="会员中心"
    name="announcements"
    :visible.sync="isDrawerOpened"
    :direction="direction">
    <h3>公告</h3>
    <h4>1</h4>
    <el-row class="sub">
        <el-col :xs="8">类别</el-col>
        <el-col :xs="16">未分类</el-col>
        <el-col :xs="8">标题</el-col>
        <el-col :xs="16"><a href="javascript:">ワンダーカジノが誇る圧倒的な魅力をご紹介 !!</a> </el-col>
        <el-col :xs="8">发送时间</el-col>
        <el-col :xs="16">2019-11-08 07:13:56</el-col>
    </el-row>
    <el-row>
        <el-col :xs="24">
            <article>
                <h5> 1. 業界No.1 ! 出金スピード !!</h5>
                <p>最速30秒で出金処理完了、出金上限1億円 ! これまでにあなたが体感した事のない圧倒的なハイスピード出金を実現しました !  更に今なら６０分以内の出金をお約束する出金タイムチャレンジを実施中 ! </p>
                <a href="https://wonder-official-blog.com/beginner/60minutes/" target="_blank">https://wonder-official-blog.com/beginner/60minutes/</a>
                <h5> 2. 業界最大 ! リベートプログラム !!</h5>
                <p>常時プロモーションとして業界最大の1.55％リベートボーナスをご用意しております ! プレイすればする程、他のカジノ様を上回る大還元をあなたに !</p>
                <a href="https://wonder-official-blog.com/beginner/rebatebonus/" target="_blank">https://wonder-official-blog.com/beginner/rebatebonus/</a>
                <h5> 3. 業界最多 ! ゲームラインナップ !!</h5>
                <p>人気のEvolutionやPlaytech、Microgamingを始めとした2,000種類以上のゲームをご用意 ! もうあなたを退屈させる事はありません !</p>
                <a href="https://wonder-official-blog.com/gaming-introduction/all-gaming/" target="_blank">https://wonder-official-blog.com/gaming-introduction/all-gaming/</a>
                <h5> 4. 業界最高 ! カスタマーサポート !!</h5>
                <p>いつでも安心・快適にご利用いただけるよう24時間365日、ライブチャット・LINE・E-mailでの日本語サポートをご用意 !</p>
                <br>
                <br>
                <p>すべてはあなたの為に。</p>
            </article>
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
    var elem = document.querySelector('.member-announcements .el-drawer__header');
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
    }

  }
}
</script>
<style lang="scss">

</style>


