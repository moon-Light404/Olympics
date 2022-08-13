<template>
  <div class="com-container">
    <div class="com-chart" ref="echarts3_ref"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      chartInstance: null
    }
  },
  destroyed () {
    window.removeEventListener('resize', this.updataChart)
  },
  mounted () {
    this.initChart()
    this.updataChart()
    window.addEventListener('resize', this.updataChart)
    this.updataChart()
  },
  methods: {
    initChart () {
      this.chartInstance = this.$echarts.init(this.$refs.echarts3_ref)
    },
    updataChart () {
      var mapData = [{
          name: '新疆',
          value: 0
        },
        {
          name: '宁夏',
          value: 0
        },
        {
          name: '青海',
          value: 0
        },
        {
          name: '甘肃',
          value: 0
        },
        {
          name: '陕西',
          value: 2
        },
        {
          name: '西藏',
          value: 0
        },
        {
          name: '云南',
          value: 7
        },
        {
          name: '贵州',
          value: 2
        },
        {
          name: '四川',
          value: 1
        },
        {
          name: '重庆',
          value: 0
        },
        {
          name: '海南',
          value: 0
        },
        {
          name: '广西',
          value: 0
        },
        {
          name: '广东',
          value: 0
        },
        {
          name: '湖南',
          value: 0
        },
        {
          name: '湖北',
          value: 0
        },
        {
          name: '河南',
          value: 0
        },
        {
          name: '山东',
          value: 14
        },
        {
          name: '江西',
          value: 1
        },
        {
          name: '福建',
          value: 0
        },
        {
          name: '安徽',
          value: 0
        },
        {
          name: '浙江',
          value: 3
        },
        {
          name: '江苏',
          value: 0
        },
        {
          name: '上海',
          value: 0
        },
        {
          name: '黑龙江',
          value: 6
        },
        {
          name: '吉林',
          value: 0
        },
        {
          name: '辽宁',
          value: 15
        },
        {
          name: '内蒙古',
          value: 1
        },
        {
          name: '山西',
          value: 0
        },
        {
          name: '河北',
          value: 34
        },
        {
          name: '天津',
          value: 0
        },
        {
          name: '台湾',
          value: 0
        },
        {
          name: '香港',
          value: 0
        },
        {
          name: '澳门',
          value: 0
        },
        {
          name: '北京',
          value: 12
        }
      ]
      const option = {
        backgroundColor: '#F5F5F5',
        title: {
          text: '北京冬残奥会各省份代表团人数',
          subtext: '数据来源:澎湃新闻',
          x: 'center',
          y: '3%',
          textStyle: {
            fontFamily: 'sans-serif',
            fontSize: 22,
            fontWeight: 'normal'
          },
          subtextStyle: {
            color: '#646464',
            fontFamily: 'sans-serif',
            fontSize: 16,
            fontWeight: 'normal'
          }
        },
        tooltip: {
          trigger: 'item',
          formatter: function (e) {
            var value = e.value
            return `${e.name}<br>${e.marker}人数 :${value}`
          }
        },
        visualMap: {
          min: 0,
          max: 35,
          left: 16,
          bottom: 30,
          showLabel: !0,
          text: ['人数'],
          pieces: [{
            gt: 30,
            color: '#F32117'
          }, {
            gte: 15,
            lte: 30,
            color: '#F35617'
          }, {
            gte: 7,
            lt: 15,
            color: '#F17D2F'
          }, {
            gt: 3,
            lt: 7,
            color: '#F49E64'
          }, {
            gt: 1,
            lt: 3,
            color: '#fddea5'
          }, {
            // gt: 0,
            lt: 1,
            color: '#EBEDB6'
          }]
          // show: !0
        },
        geo: {
          map: 'china',
          zoom: 1.23,
          label: {
            normal: {
              formatter: function (obj) {
                return obj.data.value[2]
              },
              show: true,
              color: '#000000'
            }
          },
          roam: true,
          itemStyle: {
            normal: {
              areaColor: '#fbfbfb',
              borderColor: '#3399FF'
            },
            emphasis: {
              areaColor: '#17F398'
            }
          }
        },
        series: [{
          type: 'map',
          mapType: 'china',
          geoIndex: 0,
          data: mapData
        }]
      }
      this.chartInstance.setOption(option)
      this.chartInstance.resize()
    }
  }
}
</script>

<style>
</style>
