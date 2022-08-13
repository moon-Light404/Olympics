<template>
  <div class="com-container">
    <div class="com-chart" ref="echarts7_ref"></div>
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
      this.chartInstance = this.$echarts.init(this.$refs.echarts7_ref)
    },
    updataChart () {
      // const textfontsize = this.$refs.echarts7_ref.offsetWidth / 100 * 36
      const option = {
        title: {
          text: '各项目中国代表团奖牌分布',
          subtext: '数据来源：维基百科',
          itemGap: 5,
          x: 'center',
          y: '1%',
          textStyle: {
            fontFamily: 'sans-serif',
            fontSize: 21,
            fontWeight: 'normal'
          },
          subtextStyle: {
            color: '#646464',
            fontFamily: 'sans-serif',
            fontSize: 15,
            fontWeight: 'normal'
          }
        },
        angleAxis: {
          max: 20
        },
        backgroundColor: '#F5F5F5',
        radiusAxis: {
          type: 'category',
          data: [{
            value: '高山滑雪',
            // 突出周一
            textStyle: {
              fontSize: 0,
              color: '#F5F5F5'
            }
          },
            {
            value: '越野滑雪',
            // 突出周一
            textStyle: {
              fontSize: 10,
              color: '#F5F5F5'
            }
          },
            {
            value: '冬季两项',
            // 突出周一
            textStyle: {
              fontSize: 10,
              color: '#F5F5F5'
            }
          },
            {
            value: '单板滑雪',
            // 突出周一
            textStyle: {
              fontSize: 10,
              color: '#F5F5F5'
            }
          },
            {
            value: '轮椅冰壶',
            // 突出周一
            textStyle: {
              fontSize: 10,
              color: '#F5F5F5'
            }
          },
            {
            value: '雪橇曲棍球',
            // 突出周一
            textStyle: {
              fontSize: 10,
              color: '#F5F5F5'
            }
          }],
          z: -1,
          nameLocation: 'end'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        polar: {},
        series: [
          {
            type: 'bar',
            data: [3, 6, 4, 3, 1, 0],
            coordinateSystem: 'polar',
            name: '金牌',
            stack: 'a',
            emphasis: {
              focus: 'series'
            },
            color: '#F9F923',
            label: {
              show: true,
              formatter: '{b}: {@score}'
            }
          },
          {
            type: 'bar',
            data: [9, 6, 2, 3, 0, 0],
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
            data: [7, 5, 6, 4, 0, 1],
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
          x: 'center',
          y: '93%',
          show: true,
          data: ['金牌', '银牌', '铜牌']
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
