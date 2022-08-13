<template>
  <div class="com-container">
    <div class="com-chart" ref="echarts1_ref"></div>
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
      this.chartInstance = this.$echarts.init(this.$refs.echarts1_ref)
    },
    updataChart () {
    const option = {
      backgroundColor: '#F5F5F5',
      title: {
        text: '中国历届参赛人数变化图',
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
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'line'
        }
      }, // 改
      grid: {
        left: '2%',
        right: '2%',
        bottom: '2%',
        top: '10%',
        containLabel: true
      },
      xAxis: [{
        axisLabel: {
          fontSize: 15
        },
        type: 'category',
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        data: ['第8届', '第9届', '第10届', '第11届', '第12届', '第13届'
					]
      }],

      yAxis: [{
        axisLabel: {
          fontSize: 15
        },
        type: 'value',
        axisLine: {
          show: false
        },
        min: 0,
        splitNumber: 6
      }],
      series: [{
        name: '参赛人数',
        type: 'line',
        symbolSize: 10,
        symbol: 'circle',
        itemStyle: {
          color: '#6f7de3'
        },
        markPoint: {
          label: {
            normal: {
              textStyle: {
                color: '#fff'
              }
            }
          },
          data: [{
            type: 'max',
            name: '最大值'
          }, {
            type: 'min',
            name: '最小值'
          }]
        },
        data: [
          4, 7, 7, 10, 26, 96
        ]
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
