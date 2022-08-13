<template>
  <div class="com-container">
    <div class="com-chart" ref="per_ref"></div>
  </div>
</template>

<script type='module'>
export default {
  data () {
    return {
      chartInstance: null,
      startvalue: 0,
      endvalue: 30,
      timeid: null
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
      this.chartInstance = this.$echarts.init(this.$refs.per_ref)
    },
    updataChart () {
      // const textfontsize = this.$refs.per_ref.offsetWidth / 100 * 3.6
			const option = {
        backgroundColor: '#F5F5F5',
        title: {
            text: '冬残奥会项目设置',
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
        color: ['#a6dcef', '#7fec9d', '#fedd8b', '#ffa5b0', '#d291bc', '#aacfcf', '#649d66'], // 颜色列表
        tooltip: {
            formatter: function (e) {
                var value = e.value
                return `${e.name}<br>${e.marker}金牌数目 :${value}块`
            }
        },
        legend: {
            x: 'center',
            bottom: '1%',
            itemWidth: 20,
            itemHeight: 15,
            data: ['高山滑雪', '冬季两项', '雪橇曲棍球', '越野滑雪', '单板滑雪', '轮椅冰壶']
        },
        series: {
            name: '项目',
            type: 'funnel',
            left: '10%',
            width: '70%',
            label: {},
            labelLine: {
                normal: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    opacity: 0.7
                }
            },
            data: [
                {
                    name: '高山滑雪',
                    value: 30
                },
                {
                    name: '冬季两项',
                    value: 18
                },
                {
                    name: '雪橇曲棍球',
                    value: 1
                },
                {
                    name: '越野滑雪',
                    value: 20
                },
                {
                    name: '单板滑雪',
                    value: 8
                },
                {
                    name: '轮椅冰壶',
                    value: 1
                }
            ]
        }
    }
    this.chartInstance.setOption(option)
    this.chartInstance.resize()
    }
  }
}
</script>

<style>

</style>
