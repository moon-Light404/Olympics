<template>
  <div class="com-container">
    <div class="com-chart" ref="echarts12_ref"></div>
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
      this.chartInstance = this.$echarts.init(this.$refs.echarts12_ref)
    },
    updataChart () {
      // const textfontsize = this.$refs.echarts7_ref.offsetWidth / 100 * 36
      const option = {
        title: {
          text: '各比赛日中国代表团奖牌分布',
          subtext: '数据来源：维基百科',
          itemGap: 5,
          x: 'center',
          y: '1%',
          textStyle: {
            fontFamily: 'sans-serif',
            fontSize: 15,
            fontWeight: 'normal'
          },
          subtextStyle: {
            color: '#646464',
            fontFamily: 'sans-serif',
            fontSize: 13,
            fontWeight: 'normal'
          }
        },
        angleAxis: {
          type: 'category',
          data: ['第1天', '第2天', '第3天', '第4天', '第5天', '第6天', '第7天', '第8天', '第9天']
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        radiusAxis: {},
        polar: {},
        backgroundColor: '#F3F1F1',
        series: [
          {
            type: 'bar',
            data: [2, 4, 1, 1, 2, 0, 4, 4, 0],
            coordinateSystem: 'polar',
            name: '金牌',
            stack: 'a',
            emphasis: {
              focus: 'series'
            },
            color: '#F9F923'
          },
          {
            type: 'bar',
            data: [3, 1, 4, 0, 1, 0, 5, 4, 2],
            coordinateSystem: 'polar',
            name: '银牌',
            stack: 'a',
            emphasis: {
              focus: 'series'
            },
            color: '#DCDDDE'
          },
          {
            type: 'bar',
            data: [3, 3, 3, 1, 1, 1, 6, 4, 0],
            coordinateSystem: 'polar',
            name: '铜牌',
            stack: 'a',
            emphasis: {
              focus: 'series'
            },
            color: '#D7B34C'
          }
        ],
        legend: {
          show: true,
          data: ['金牌', '银牌', '铜牌'],
          x: '5%',
          y: '93%'
        }
      }
      window.onresize = function () {
        this.chartInstance.resize()
      }
      this.chartInstance.setOption(option)
      this.chartInstance.resize()
    }
  }
}
</script>

<style>
</style>
