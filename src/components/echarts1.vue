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
      const textfontsize = this.$refs.echarts1_ref.offsetWidth / 100 * 36
      var colorList = ['#CD6155', '#7FB3D5', '#A569BD', '#73C6B6', '#F4D03F', '#E59866', '#BFC9CA',
				'#85929E', '#eea2a4', '#efbbcf'
      ]
      var data = [13456, 8759, 6158, 5123, 3156, 2649, 2013, 1632]
      var names = ['乌克兰', '美国', '法国', '日本', '英国', '加拿大', '奥地利', '斯洛伐克']
      const option = {
        backgroundColor: '#F5F5F5',
        title: {
          text: '最受关注的外国代表队排行榜',
          subtext: '数据来源：搜狗百科',
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
            type: 'shadow'
          },
          formatter: function (e) {
            return `${e[0].name}<br>${e[0].marker}搜索次数 :${e[0].value}万次`
          }
        },
        grid: {
          x: '20%',
          y: '14%', // 改
          width: '70%',
          height: '80%'
        },
        xAxis: {
          type: 'value',
          axisLabel: {
            fontSize: 15
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
          data: names,
          axisLabel: {
            fontSize: 15
          }
        },
        series: [{
            barWidth: 30,
            name: '热度',
            type: 'bar',
            data: data.map((item, i) => {
              const itemStyle = {
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
              fontSize: textfontsize / 12
            },
            itemStyle: {
              barBorderRadius: [0, 20, 20, 0]
            }
          }
        ]
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
