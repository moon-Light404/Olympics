<template>
<div class="screen-container">
  <div class="screen-head">
    <div class="head-left">
      <div style="height: 100%;width: 100%; position: absolute; top: 10px; left: 10px;" class="log-bg">
        <img src="../../public/static/img/logo1.png" style="width: 100%; height: 100%;">
      </div>
    </div>
    <div class="head-middle">
      <div class="title">
       <div class="title_">
         <span class="iconfont" style="font-size: 25px;">&#xe63b;</span>
         冬残奥会可视化系统
         <span class="iconfont" style="font-size: 25px;">&#xe646;</span>
       </div>
      </div>
      <div class="tag_a">
        <div class="tabbar"><div class="tabbar_">
        <span class="iconfont" style="font-size: 25px;">&#xe63a;</span>
        <a href="http://127.0.0.1:8080" class="tag_aa">世界冬残奥史</a></div></div>
        <div class="tabbar"><div class="tabbar_">
        <span class="iconfont" style="font-size: 25px;">&#xe640;</span>
        <a href="http://127.0.0.1:8080/screen1" class="tag_aa">中国冬残奥史</a></div></div>
        <div class="tabbar"><div class="tabbar_">
        <span class="iconfont" style="font-size: 25px;">&#xe64a;</span>
        <a href="http://127.0.0.1:8080/screen2" class="tag_aa">北京冬残奥会</a></div></div>
      </div>
    </div>
    <div class="head-right">
      <img src="../../public/static/img/logo2.png" style="width: 100%; height: 100%;">
    </div>
  </div>
  <div class="screen-body">
    <div class="body-left">
      <div id="left-top" :class="[fullScreenStatus.echarts5? 'fullscreen' : '']">
        <div class="boreder-lt"></div>
        <div class="boreder-lb"></div>
        <div class="boreder-rt"></div>
        <div class="boreder-rb"></div>
        <echarts5 ref="echarts5"></echarts5>
        <div class="resize">
          <span  :class="['iconfont', fullScreenStatus.echarts5 ? 'icon-quanpingsuoxiao' : 'icon-fullScreen']" @click="changSize('echarts5')"></span>
        </div>
      </div>
      <div id="left-bottom">
        <div class="boreder-lt"></div>
        <div class="boreder-lb"></div>
        <div class="boreder-rt"></div>
        <div class="boreder-rb"></div>
        <div>
          <iframe src='/static/time.html' style="width:100%;height:500px;"></iframe>
        </div>
      </div>
    </div>
    <div class="body-middle">
      <div id="middle-top" :class="[fullScreenStatus.echarts4? 'fullscreen' : '']">
        <div class="boreder-lt"></div>
        <div class="boreder-lb"></div>
        <div class="boreder-rt"></div>
        <div class="boreder-rb"></div>
        <echarts4 ref="echarts4"></echarts4>
        <div class="resize">
          <span  :class="['iconfont', fullScreenStatus.echarts4 ? 'icon-quanpingsuoxiao' : 'icon-fullScreen']" @click="changSize('echarts4')"></span>
        </div>
      </div>
      <div id="middle-bottom" :class="[fullScreenStatus.echarts3? 'fullscreen' : '']">
        <div class="boreder-lt"></div>
        <div class="boreder-lb"></div>
        <div class="boreder-rt"></div>
        <div class="boreder-rb"></div>
        <echarts3 ref="echarts3"></echarts3>
        <div class="resize">
          <span  :class="['iconfont', fullScreenStatus.echarts3 ? 'icon-quanpingsuoxiao' : 'icon-fullScreen']" @click="changSize('echarts3')"></span>
        </div>
      </div>
    </div>
    <div class="body-right">
      <div id="right-top" :class="[fullScreenStatus.echarts1? 'fullscreen' : '']">
        <div class="boreder-lt"></div>
        <div class="boreder-lb"></div>
        <div class="boreder-rt"></div>
        <div class="boreder-rb"></div>
        <echarts1 ref="echarts1"></echarts1>
        <div class="resize">
          <span  :class="['iconfont', fullScreenStatus.echarts1 ? 'icon-quanpingsuoxiao' : 'icon-fullScreen']" @click="changSize('echarts1')"></span>
        </div>
      </div>
      <div id="right-bottom" :class="[fullScreenStatus.echarts2? 'fullscreen' : '']">
        <div class="boreder-lt"></div>
        <div class="boreder-lb"></div>
        <div class="boreder-rt"></div>
        <div class="boreder-rb"></div>
        <echarts2 ref="echarts2"></echarts2>
        <div class="resize">
          <span  :class="['iconfont', fullScreenStatus.echarts2 ? 'icon-quanpingsuoxiao' : 'icon-fullScreen']" @click="changSize('echarts2')"></span>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import echartS1 from '@/components/echarts1'
import echartS2 from '@/components/echarts2'
import echartS3 from '@/components/echarts3'
import echartS4 from '@/components/echarts4'
import echartS5 from '@/components/echarts5'
export default {
  components: {
    echarts1: echartS1,
    echarts2: echartS2,
    echarts3: echartS3,
    echarts4: echartS4,
    echarts5: echartS5
  },
  data () {
    return {
      d: '',
      h: '',
      m: '',
      s: '',
      sum_h: '',
      fullScreenStatus: {
      echarts1: false,
      echarts2: false,
      echarts3: false,
      echarts4: false,
      echarts5: false
      }
    }
  },
  mounted () {
    this.countTime()
  },
  methods: {
    changSize (chartName) {
      this.fullScreenStatus[chartName] = !this.fullScreenStatus[chartName]
      this.$nextTick(() => {
        this.$refs[chartName].updataChart()
      })
    }
  }
}
</script>

<style>
@font-face {
  font-family: electronicFont;
  src: url(../assets/font/DS-DIGIT.TTF);
}
body {
  margin: 0;
  padding: 0;
}
html {
  height: 1100px;
  width: 100%;
}
#app {
  height: 1100px;
  width: 100%;
}
.screen-container {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
.screen-head {
  width: 100%;
  height: 130px;
  margin-bottom: 10px;
  position: relative;
  background: url(../../public/static/img/head-bg.png);
  background-repeat: no-repeat;
  background-size: auto;
}
.screen-body{
  margin-top: 15px;
  width: 100%;
  height: 650px;
  background: url(../../public/static/img/bc-p1.jpg);
  background-repeat: no-repeat;
}
.body-left{
  width: 30%;
  height: 890px;
  float: left;
  margin-left: 5px;
}
.body-middle{
  width: 45%;
  height: 650px;
  float: left;
  margin-left: 5px;
  margin-right: 5px;
}
.body-right{
  width: 23.5%;
  height: 825px;
  float: left;
  margin-right: 5px;
}
#left-top{
  width: 100%;
  height: 480px;
  margin-bottom: 10px;
  position: relative;
  background: url(../../public/static/img/bc-p1.jpg);
}
#left-bottom{
  width: 100%;
  height: 440px;
  position: relative;
  background: url(../../public/static/img/bc-p1.jpg);
}
#right-top{
  width: 100%;
  height: 480px;
  position: relative;
  background: url(../../public/static/img/bc-p1.jpg);
}
#right-bottom{
  width: 100%;
  height: 440px;
  margin-top: 10px;
  position: relative;
  background: url(../../public/static/img/bc-p1.jpg);
}
#middle-top{
  width: 100%;
  height: 450px;
  margin-bottom: 10px;
  position: relative;
  background: url(../../public/static/img/bc-p1.jpg);
}
#middle-bottom{
  width: 100%;
  height: 450px;
  display: flex;
  position: relative;
  background: url(../../public/static/img/bc-p1.jpg);
}
/* 设置边角  开始*/
/* .boreder-lt{
  width: 15px;
  height: 15px;
  position: absolute;
  top: 0;
  left: 0;
  border-top: 2px solid #0086B3;
  border-left: 2px solid #0086B3;
}
.boreder-lb{
  width: 15px;
  height: 15px;
  position: absolute;
  bottom: 0;
  left: 0;
  border-bottom: 2px solid #0086B3;
  border-left: 2px solid #0086B3;
}
.boreder-rt{
  width: 15px;
  height: 15px;
  position: absolute;
  top: 0;
  right: 0;
  border-top: 2px solid #0086B3;
  border-right: 2px solid #0086B3;
}
.boreder-rb{
  width: 15px;
  height: 15px;
  position: absolute;
  right: 0;
  bottom: 0;
  border-bottom: 2px solid #0086B3;
  border-right: 2px solid #0086B3;
} */
/* 设置边角 结束*/
.head-left{
  height: 100%;
  width: 25%;
  float: left;
/*  margin-left: 10px; */
  position: relative;
}
.head-middle{
  height: 100%;
  width: 50%;
  float: left;
  position: relative;
}
.head-right{
  height: 100%;
  width: 25%;
  float: left;
  position: relative;
  top: 10px;
}
.head-right-top{
  width: 100%;
  height: 30%;
  font-size: 20px;
  text-align: center;
}
.head-right-middle{
  width: 100%;
  height: 70%;
}
.day{
  width: 38%;
  height: 100%;
  float: left;
}
.time{
  width: 19%;
  height: 100%;
  float: left;
}
.time1{
  width: 19%;
  height: 100%;
  float: left;
}
.time-top{
  height: 25%;
  width: 100%;
  text-align: center;
  font-size: 20px;
}
.time-bottom{
  height: 75%;
  width: 100%;
  text-align: center;
  font-size: 35px;
  margin-top: 10px;
}
.title{
  width: 100%;
  height: 45%;
}
.title_{
  width: 100%;
  height: 100%;
  margin-top: 15px;
  font-size: 30px;
  text-align: center;
  color: #4169E1;
}
.tag_a{
  width: 100%;
  height: 50%;
  position: relative;
  color: #4169E1;
}
.tag_aa{
  color: black;
  font-size: 25px;
  text-decoration:none;
  color: #4169E1;
}
.tag_aa:hover{
  color: hotpink;
  text-decoration:none;
}
.tabbar{
  width: 30%;
  height: 80%;
  float: left;
  margin-left: 10px;
}
.tabbar_{
  width: 100%;
  height: 100%;
  margin-top: 15px;
  text-align: center;
}
</style>
