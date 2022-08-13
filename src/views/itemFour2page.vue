<template>
  <div class="item-all">
    <div class="item-head">
      <div class="item-head-middle">北京-张家口冬奥会</div>
    </div>
    <div class="item-name">
      <div class="item-name-div">雪橇</div>
      <div class="video-right-echarts-t">
        <div class="viedo-right-echarts-tt">数据分析</div>
      </div>
    </div>
    <div class="video">
      <div class="video-top">
        <div class="video-bottom-left">
          <video width="100%" height="100%" autoplay="" controls="" muted>
            <source src="../../public/static/video/44v.mp4">
          </video>
        </div>
        <div id="video-right-echarts" :class="[fullScreenStatus.projecT23? 'fullscreen' : '']">
          <projecT23 ref="projecT23"></projecT23>
          <div class="resize">
            <span  :class="['iconfont', fullScreenStatus.projecT23 ? 'icon-quanpingsuoxiao' : 'icon-fullScreen']" @click="changSize('projecT23')"></span>
          </div>
        </div>
      </div>
      <div class="video-amazing">
        <div class="video-amazing-t">精彩瞬间</div>
      </div>
      <div class="video-bottom">
        <div class="video-left-bottom-left">
          <a href="https://www.beijing2022.cn/a/20170524/038683.htm" target="_blank">
            <div style="width: 100%; height: 50px; position: absolute; top: 75%; left: 20px;">
              <img id="imgg" :src= "bg"  style=" position: relative;">
              <p style="width: 100px; height: 50px; position: absolute; top: 5px; left: 50px; width: 100%; height: 100%; color: white;font-size: 10px;" @mouseover="changbg1()" @mouseleave="changbgg1()">起航2022 雪橇选拔在延庆举行</p>
            </div>
            <img src="../../public/static/img/v-4-4-1.jpg"  id="imgv"  @mousemove="blowup()" @mouseleave="reduce()">
          </a>
        </div>
        <div class="video-left-bottom-right">
          <a href="https://www.beijing2022.cn/a/20170522/030161.htm" target="_blank">
            <div style="width: 100%; height: 50px; position: absolute; top: 75%; left: 20px;">
              <img  id="imgg1" :src= "bg1"  style=" position: relative;">
              <p style="width: 100px; height: 50px; position: absolute; top: 5px; left: 50px; width: 100%; height: 100%; color: white;font-size: 10px;" @mouseover="changbg2()" @mouseleave="changbgg2()">雪橇和雪车 享受冰雪的速度与快感</p>
            </div>
            <img src="../../public/static/img/v-4-4-2.jpg" id="imgv1"  @mousemove="blowup1()" @mouseleave="reduce1()">
          </a>
        </div>
        <div class="video-right-bottom-d">
          <a href="https://www.beijing2022.cn/a/20170522/033273.htm" target="_blank">
          <div style="width: 100%; height: 50px; position: absolute; top: 75%; left: 20px;">
            <img  id="imgg2" :src= "bg2"  style=" position: relative;">
            <p style="width: 100px; height: 50px; position: absolute; top: 5px; left: 50px; width: 100%; height: 100%; color: white;font-size: 10px;" @mouseover="changbg3()" @mouseleave="changbgg3()">冰雪大课堂：无舵雪橇的装备和赛道</p>
          </div>
            <img src="../../public/static/img/v-4-4-3.jpg" id="imgv2"  @mousemove="blowup2()" @mouseleave="reduce2()">
          </a>
        </div>
      </div>
    </div>
    <div class="place">
      <div class="place-text">
        <div class="place-text-t">比赛场地</div>
      </div>
      <div class="place-img">
        <img src="../../public/static/img/44h.jpg" style="width: 100%;height: 100%;">
      </div>
    </div>
  </div>
</template>

<script>
import project23 from '@/components/project23'
import imga from '../../public/static/img/p1.png'
import imgb from '../../public/static/img/p.png'
export default {
  components: {
    projecT23: project23
  },
  data () {
    return {
      fullScreenStatus: {
        projecT23: false
      },
      bg: imga,
      bg1: imga,
      bg2: imga
    }
  },
  mounted () {
    this.changbg1()
    this.changbgg1()
    this.changbg2()
    this.changbgg2()
    this.changbg3()
    this.changbgg3()
    this.blowup()
    this.reduce()
    this.blowup1()
    this.reduce1()
    this.blowup2()
    this.reduce2()
  },
  methods: {
    changSize (chartName) {
      this.fullScreenStatus[chartName] = !this.fullScreenStatus[chartName]
      this.$nextTick(() => {
        this.$refs[chartName].updataChart()
      })
    },
    changbg1 () {
    var v = document.getElementById('imgg')
    this.bg = imga
    v.src = this.bg
    // this.bg = '../../public/static/img/p.png'
    // console.log(v.src)
  },
  changbgg1 () {
    var v = document.getElementById('imgg')
    this.bg = imgb
    v.src = this.bg
     // this.bg = '../../public/static/img/p1.png'
    // console.log(this.bg)
  },
  changbg2 () {
    var v = document.getElementById('imgg1')
    this.bg1 = imga
    v.src = this.bg1
    // this.bg = '../../public/static/img/p.png'
    // console.log(v.src)
  },
  changbgg2 () {
    var v = document.getElementById('imgg1')
    this.bg1 = imgb
    v.src = this.bg1
     // this.bg = '../../public/static/img/p1.png'
    // console.log(this.bg)
  },
  changbg3 () {
    var v = document.getElementById('imgg2')
    this.bg2 = imga
    v.src = this.bg2
    // this.bg = '../../public/static/img/p.png'
    // console.log(v.src)
  },
  changbgg3 () {
    var v = document.getElementById('imgg2')
    this.bg2 = imgb
    v.src = this.bg2
     // this.bg = '../../public/static/img/p1.png'
    // console.log(this.bg)
  },
  blowup () {
    var immg = document.getElementById('imgv')
    immg.style.width = 101 + '%'
    immg.style.height = 101 + '%'
    //  console.log(immg.style.width)
  },
  reduce () {
    var immg = document.getElementById('imgv')
    immg.style.width = 100 + '%'
    immg.style.height = 100 + '%'
    //  console.log(immg.style.width)
  },
  blowup1 () {
    var immg = document.getElementById('imgv1')
    immg.style.width = 101 + '%'
    immg.style.height = 101 + '%'
    //  console.log(immg.style.width)
  },
  reduce1 () {
    var immg = document.getElementById('imgv1')
    immg.style.width = 100 + '%'
    immg.style.height = 100 + '%'
    //  console.log(immg.style.width)
  },
  blowup2 () {
    var immg = document.getElementById('imgv2')
    immg.style.width = 101 + '%'
    immg.style.height = 101 + '%'
    //  console.log(immg.style.width)
  },
  reduce2 () {
    var immg = document.getElementById('imgv2')
    immg.style.width = 100 + '%'
    immg.style.height = 100 + '%'
    //  //  console.log(immg.style.width)
  }
  }
}
</script>

<style>
.item-head{
  width: 100%;
  height: 100px;
  margin-bottom: 20px;
  position: relative;
}
.video{
  width: 100%;
  height: 800px;
  margin-bottom: 20px;
}
.item-name{
  width: 100%;
  height: 60px;
  margin-top: 10px;
  margin-bottom: 10px;
  position: relative;
}
.item-name-div{
  height: 100%;
  width: 500px;
  position: absolute;
  left: 90px;
  font-size: 40px;
  color: royalblue;
}
.place{
  width: 100%;
  height: 600px;
  position: relative;
}
.place-text{
  width: 100%;
  height: 100px;
  position: relative;
}
.place-text-t{
  width: 300px;
  height: 90px;
  position: absolute;
  left: 90px;
  top: 10px;
  font-size: 40px;
  color: royalblue;
}
.place-img{
  width: 1000px;
  height: 450px;
  position: absolute;
  top: 100px;
  left: 270px;
  right: 100px;
}
.item-head-middle{
  position: absolute;
  top: 30px;
  left: 100px;
  width: 1300px;
  height: 100%;
  font-size: 50px;
  text-align: center;
  color: #000000;
}
.video-top{
  width: 100%;
  height: 53%;
  position: relative;
}
.video-bottom{
  width: 100%;
  height: 40%;
  position: relative;
  right: 50px;
}
.video-amazing{
  width: 100%;
  height: 50px;
  position: absolute;
  position: relative;
}
.video-amazing-t{
  position: absolute;
  top: 10px;
  left: 90px;
  width: 300px;
  height: 100%;
  font-size: 40px;
  color: royalblue;
}
.video-bottom-left{
  width: 730px;
  height: 410px;
  position: absolute;
  left: 85px;
}
.video-right-bottom-d{
  width: 435px;
  height: 250px;
  float: left;
  margin-bottom: 10px;
  position: relative;
  position: absolute;
  top: 55px;
  right: 0.1px;
}
.video-left-bottom{
  width: 100%;
  height: 35%;
  position: absolute;
  position: relative;
  top: 440px;
}
.video-left-bottom-left{
  width: 435px;
  height: 250px;
  float: left;
  margin-bottom: 10px;
  position: relative;
  position: absolute;
  top: 55px;
  left: 134px;
}
.video-left-bottom-right{
  width: 435px;
  height: 250;
  float: left;
  margin-bottom: 10px;
  position: relative;
  position: absolute;
  top: 55px;
  left: 610px;
}
#video-right-echarts{
  position: absolute;
  top: 0px;
  right: 50px;
  width: 620px;
  height: 412px;
  background: url(../../public/static/img/bc-p1.jpg);
}
.video-right-echarts-t{
  width: 100%;
  height: 70px;
  position: relative;
}
.viedo-right-echarts-tt{
  height: 100%;
  width: 200px;
  position: absolute;
  right: 445px;
  font-size: 40px;
  color: royalblue;
}
</style>
