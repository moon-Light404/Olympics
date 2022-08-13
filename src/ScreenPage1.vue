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
         <div class="title_">
           <span class="iconfont" style="font-size: 25px;">&#xe63b;</span>
           冬残奥会可视化系统
           <span class="iconfont" style="font-size: 25px;">&#xe646;</span>
         </div>
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
      <div id="left-top" :class="[fullScreenStatus.all? 'fullscreen' : '']">
        <div class="boreder-lt"></div>
        <div class="boreder-lb"></div>
        <div class="boreder-rt"></div>
        <div class="boreder-rb"></div>
        <all ref="all"></all>
        <div class="resize">
          <span :class="['iconfont', fullScreenStatus.all ? 'icon-quanpingsuoxiao' : 'icon-fullScreen']" @click="changSize1('all')"></span>
        </div>
      </div>
      <div id="left-bottom" :class="[fullScreenStatus.mn? 'fullscreen' : '']">
        <div class="boreder-lt"></div>
        <div class="boreder-lb"></div>
        <div class="boreder-rt"></div>
        <div class="boreder-rb"></div>
        <mn ref="mn"></mn>
        <div class="resize">
          <span  :class="['iconfont', fullScreenStatus.mn ? 'icon-quanpingsuoxiao' : 'icon-fullScreen']" @click="changSize2('mn')"></span>
        </div>
      </div>
    </div>
    <div class="body-middle">
      <div id="middle-top" :class="[fullScreenStatus.map1? 'fullscreen' : '']">
        <div class="boreder-lt"></div>
        <div class="boreder-lb"></div>
        <div class="boreder-rt"></div>
        <div class="boreder-rb"></div>
        <map1 ref="map1"></map1>
        <div class="resize">
          <span  :class="['iconfont', fullScreenStatus.map1 ? 'icon-quanpingsuoxiao' : 'icon-fullScreen']" @click="changSize3('map1')"></span>
        </div>
      </div>
      <div id="middle-bottom" :class="[fullScreenStatus.jpph? 'fullscreen' : '']">
        <div class="boreder-lt"></div>
        <div class="boreder-lb"></div>
        <div class="boreder-rt"></div>
        <div class="boreder-rb"></div>
        <jpph ref="jpph"></jpph>
        <div class="resize">
          <span  :class="['iconfont', fullScreenStatus.jpph ? 'icon-quanpingsuoxiao' : 'icon-fullScreen']" @click="changSize4('jpph')"></span>
        </div>
      </div>
    </div>
    <div class="body-right">
      <div id="right-top" :class="[fullScreenStatus.pe? 'fullscreen' : '']">
        <div class="boreder-lt"></div>
        <div class="boreder-lb"></div>
        <div class="boreder-rt"></div>
        <div class="boreder-rb"></div>
        <pe ref="pe"></pe>
        <div class="resize">
          <span  :class="['iconfont', fullScreenStatus.pe ? 'icon-quanpingsuoxiao' : 'icon-fullScreen']" @click="changSize5('pe')"></span>
        </div>
      </div>
      <div id="right-bottom" :class="[fullScreenStatus.bili? 'fullscreen' : '']">
        <div class="boreder-lt"></div>
        <div class="boreder-lb"></div>
        <div class="boreder-rt"></div>
        <div class="boreder-rb"></div>
        <bili ref="bili"></bili>
        <div class="resize">
          <span  :class="['iconfont', fullScreenStatus.bili ? 'icon-quanpingsuoxiao' : 'icon-fullScreen']" @click="changSize6('bili')"></span>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import JPPH from '@/components/JPPH'
import Person from '@/components/personNum'
import man from '@/components/man'
import biLi from '@/components/bili'
import allph from '@/components/allph'
import Map from '@/components/map'
export default {
  components: {
    jpph: JPPH,
    pe: Person,
    mn: man,
    bili: biLi,
    all: allph,
    map1: Map
  },
  data () {
    return {
      fullScreenStatus: {
        jpph: false,
        pe: false,
        mn: false,
        bili: false,
        all: false,
        map1: false
      },
      d: '',
      h: '',
      m: '',
      s: '',
      sum_h: '',
      hiddle: 0
    }
  },
  methods: {
     changSize1 (chartName) {
          this.fullScreenStatus[chartName] = !this.fullScreenStatus[chartName]
          this.$nextTick(() => {
            this.$refs[chartName].updataChart()
          })
          var div = document.getElementById('middle-top')
          if (this.hidden < 0) {
            this.hidden = 0
          } else {
            this.hidden = -10
          }
          div.style.zIndex = this.hidden
          // console.log(this.hidden)
        },
        changSize2 (chartName) {
          this.fullScreenStatus[chartName] = !this.fullScreenStatus[chartName]
          this.$nextTick(() => {
            this.$refs[chartName].updataChart()
          })
          var div = document.getElementById('middle-top')
          if (this.hidden < 0) {
            this.hidden = 0
          } else {
            this.hidden = -10
          }
          div.style.zIndex = this.hidden
          // console.log(this.hidden)
        },
        changSize3 (chartName) {
          this.fullScreenStatus[chartName] = !this.fullScreenStatus[chartName]
          this.$nextTick(() => {
            this.$refs[chartName].updataChart()
          })
          var div = document.getElementById('middle-top')
          // if (this.hidden < 0) {
          //   this.hidden = 0
          // } else {
          //   this.hidden = -10
          // }
          div.style.zIndex = 2
          // // console.log(this.hidden)
        },
        changSize4 (chartName) {
          this.fullScreenStatus[chartName] = !this.fullScreenStatus[chartName]
          this.$nextTick(() => {
            this.$refs[chartName].updataChart()
          })
          var div = document.getElementById('middle-top')
          if (this.hidden < 0) {
            this.hidden = 0
          } else {
            this.hidden = -10
          }
          div.style.zIndex = this.hidden
          // console.log(this.hidden)
        },
        changSize5 (chartName) {
          this.fullScreenStatus[chartName] = !this.fullScreenStatus[chartName]
          this.$nextTick(() => {
            this.$refs[chartName].updataChart()
          })
          var div = document.getElementById('middle-top')
          if (this.hidden < 0) {
            this.hidden = 0
          } else {
            this.hidden = -10
          }
          div.style.zIndex = this.hidden
          // console.log(this.hidden)
        },
        changSize6 (chartName) {
          this.fullScreenStatus[chartName] = !this.fullScreenStatus[chartName]
          this.$nextTick(() => {
            this.$refs[chartName].updataChart()
          })
          var div = document.getElementById('middle-top')
          if (this.hidden < 0) {
            this.hidden = 0
          } else {
            this.hidden = -10
          }
          div.style.zIndex = this.hidden
          // console.log(this.hidden)
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
  background: url(../../public/static/img/head-bg.png) no-repeat;
  background-size: auto;
}
.screen-body{
  width: 100%;
  height: 650px;
  background: url(../../public/static/img/bc-p1.jpg);
  background-repeat: no-repeat;
}
.body-left{
  width: 25%;
  height: 890px;
  float: left;
  margin-left: 10px;
}
.body-middle{
  width: 45%;
  height: 650px;
  float: left;
  margin-left: 10px;
  margin-right: 10px;
}
.body-right{
  width: 27%;
  height: 825px;
  float: left;
  margin-right: 10px;
}
#left-top{
  width: 100%;
  height: 480px;
  margin-bottom: 25px;
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
  margin-top: 25px;
  position: relative;
  background: url(../../public/static/img/bc-p1.jpg);
}
#middle-top{
  width: 100%;
  height: 605px;
  margin-bottom: 15px;
  position: relative;
  background: url(../../public/static/img/bc-p1.jpg);
}
#middle-bottom{
  width: 100%;
  height: 325px;
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
.log-bg{
   background: url(../../public/static/img/350.jpg);
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
  background: url(../../public/static/img/350.jpg);
  background-repeat: no-repeat;
}
.head-right-top{
  width: 100%;
  height: 30%;
  font-size: 20px;
  text-align: center;
  color: powderblue;
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
  color: #4169E1;
}
.time-bottom{
  height: 75%;
  width: 100%;
  text-align: center;
  font-size: 35px;
  margin-top: 10px;
  color: #4169E1;
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
  font-family: electronicFont;
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
  position: relative;
}
/* 自适应 */
.fullscreen {
  position: fixed!important;
  top: 0 !important;
  left: 0 !important;
  width: 100% !important;
  height: 100% !important;
  margin: 0 !important;
  z-index: 100;
}
.resize {
  position: absolute;
  top: 5px;
  right: 10px;
  cursor: pointer;
}
</style>
