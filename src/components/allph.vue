<template>
  <div class="com-container">
    <div class="com-chart" ref="all_ref"></div>
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
      this.chartInstance = this.$echarts.init(this.$refs.all_ref)
    },
    updataChart () {
      const textfontsize = this.$refs.all_ref.offsetWidth / 380
      var colorList = ['#F97150', '#7fec9d', '#2868E2', '#8E84AA', '#d291bc', '#aacfcf', '#28E27B',
				'#f5b971', '#eea2a4', '#C4E228'
      ]
      const option = {
        backgroundColor: '#F5F5F5',
        title: {
          text: '冬残奥会金牌总数排行榜',
          subtext: '数据来源：维基百科',
          itemGap: textfontsize + 4,
          x: 'center',
          y: '8 + textfontsizepx',
          textStyle: {
            fontFamily: 'sans-serif',
            fontSize: textfontsize + 20,
            fontWeight: 'normal'
          },
          subtextStyle: {
            color: '#646464',
            fontFamily: 'sans-serif',
            fontSize: 14 + textfontsize,
            fontWeight: 'normal'
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          x: '15%',
          y: '14%',
          width: '80%',
          height: '80%'
        },
        xAxis: {
          type: 'value',
          axisLabel: {
            fontSize: textfontsize + 14,
            show: true
          }
        },
        yAxis: {
          type: 'category',
          inverse: true,
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          data: ['德国', '挪威', '美国', '奥地利', '俄罗斯', '芬兰', '法国', '加拿大', '瑞士', '乌克兰'],
          axisLabel: {
            fontSize: 14 + textfontsize,
            show: true
          }
        },
        series: [{
          barWidth: 24 + textfontsize,
          name: '金牌总数',
          type: 'bar',
          data: [141, 140, 115, 109, 84, 79, 66, 59, 53, 38].map((item, i) => {
            var itemStyle
            itemStyle = {
              color: i > 40 ? colorList[10] : colorList[i]
            }
            return {
              value: item,
              itemStyle: itemStyle
            }
          }),
          label: {
            normal: {
              show: true,
              position: 'inside',
              formatter: '{c}'
            },
            fontSize: 14 + textfontsize
          },
          itemStyle: {
            barBorderRadius: [0, 20, 20, 0] // 圆角（左上、右上、右下、左下）
          }
          }
        ]
      }
      // window.onresize = function () {
      //   this.chartInstance.resize()
      // }
      this.chartInstance.setOption(option)
      this.chartInstance.resize()
    }
  }
}
</script>

<style>
</style>
